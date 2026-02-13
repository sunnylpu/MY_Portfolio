import { NextResponse } from "next/server";

const GITHUB_USERNAME = "sunnylpu";
const LEETCODE_USERNAME = "leetcodesunnytyagi";

// 1 Hour Cache
export const revalidate = 3600;

const FALLBACK_GITHUB = {
    username: GITHUB_USERNAME,
    repos: 12,
    followers: 4,
    stars: 15, // Approximate
    lastCommit: "Initial commit for portfolio",
    lastActive: new Date().toISOString(),
    avatar: "https://github.com/sunnylpu.png",
    profileUrl: `https://github.com/${GITHUB_USERNAME}`
};

async function fetchGitHubStats() {
    try {
        const headers: HeadersInit = {
            "User-Agent": "Nextjs-Portfolio",
        };

        // Add token if available in env for higher rate limits
        if (process.env.GITHUB_TOKEN) {
            headers["Authorization"] = `token ${process.env.GITHUB_TOKEN}`;
        }

        const [userRes, reposRes, eventsRes] = await Promise.all([
            fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { headers, next: { revalidate: 3600 } }),
            fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&type=public`, { headers, next: { revalidate: 3600 } }),
            fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=10`, { headers, next: { revalidate: 300 } }) // Cache events for shorter time
        ]);

        if (!userRes.ok) {
            console.warn("GitHub API Limit/Error, using fallback");
            return FALLBACK_GITHUB;
        }

        const user = await userRes.json();
        const repos = await reposRes.json();
        const events = await eventsRes.json();

        // Calculate stars
        const stars = Array.isArray(repos) ? repos.reduce((acc: number, repo: { stargazers_count: number }) => acc + repo.stargazers_count, 0) : 0;

        // Get last commit message
        const pushEvent = Array.isArray(events) ? events.find((e: { type: string }) => e.type === "PushEvent") : null;
        const lastCommit = pushEvent ? pushEvent.payload.commits[0]?.message : "No recent public commits";
        const lastActive = pushEvent ? pushEvent.created_at : user.updated_at;

        return {
            username: GITHUB_USERNAME,
            repos: user.public_repos,
            followers: user.followers,
            stars,
            lastCommit,
            lastActive,
            avatar: user.avatar_url,
            profileUrl: user.html_url
        };
    } catch (error: any) {
        if (error?.message?.includes("self-signed certificate") || error?.cause?.code === 'SELF_SIGNED_CERT_IN_CHAIN') {
            console.warn("⚠️ GitHub API: SSL Certificate Issue (Local Proxy detected). Using Fallback Data. Build is SAFE.");
        } else {
            console.error("GitHub Fetch Error:", error);
        }
        return FALLBACK_GITHUB;
    }
}

async function fetchLeetCodeStats() {
    try {
        const query = `
      query getUserProfile($username: String!) {
        allQuestionsCount {
          difficulty
          count
        }
        matchedUser(username: $username) {
          submissionCalendar
          submitStats {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
          profile {
            ranking
            reputation
            starRating
          }
        }
      }
    `;

        const res = await fetch("https://leetcode.com/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "User-Agent": "Nextjs-Portfolio"
            },
            body: JSON.stringify({
                query,
                variables: { username: LEETCODE_USERNAME }
            }),
            next: { revalidate: 3600 }
        });

        const data = await res.json();

        if (data.errors) throw new Error("LeetCode GraphQL Error");

        const stats = data.data.matchedUser.submitStats.acSubmissionNum;
        const all = stats.find((s: { difficulty: string; count: number }) => s.difficulty === "All");
        const easy = stats.find((s: { difficulty: string; count: number }) => s.difficulty === "Easy");
        const medium = stats.find((s: { difficulty: string; count: number }) => s.difficulty === "Medium");
        const hard = stats.find((s: { difficulty: string; count: number }) => s.difficulty === "Hard");

        // Parse submission calendar
        const calendar = data.data.matchedUser.submissionCalendar ? JSON.parse(data.data.matchedUser.submissionCalendar) : {};

        return {
            username: LEETCODE_USERNAME,
            totalSolved: all?.count || 0,
            easy: easy?.count || 0,
            medium: medium?.count || 0,
            hard: hard?.count || 0,
            ranking: data.data.matchedUser.profile.ranking || 0,
            submissionCalendar: calendar,
            avatar: "https://assets.leetcode.com/users/leetcode/avatar_1568224780.png", // Fallback or fetch real
            profileUrl: `https://leetcode.com/u/${LEETCODE_USERNAME}`
        };
    } catch (error: any) {
        if (error?.message?.includes("self-signed certificate") || error?.cause?.code === 'SELF_SIGNED_CERT_IN_CHAIN') {
            console.warn("⚠️ LeetCode API: SSL Certificate Issue (Local Proxy detected). Using Fallback Data. Build is SAFE.");
        } else {
            console.error("LeetCode Fetch Error:", error);
        }
        return null; // Frontend handles null
    }
}

export async function GET() {
    const [github, leetcode] = await Promise.all([
        fetchGitHubStats(),
        fetchLeetCodeStats()
    ]);

    return NextResponse.json({
        github,
        leetcode,
        timestamp: new Date().toISOString()
    });
}
