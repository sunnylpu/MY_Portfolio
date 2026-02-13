import { NextResponse } from "next/server";

export async function GET() {
    // Simulate random server latency between 50ms and 200ms
    const latency = Math.floor(Math.random() * 150) + 50;
    await new Promise((resolve) => setTimeout(resolve, latency));

    const regions = ["Mumbai (ap-south-1)", "Frankfurt (eu-central-1)", "N. Virginia (us-east-1)"];
    const region = regions[Math.floor(Math.random() * regions.length)];

    return NextResponse.json({
        status: "healthy",
        latency,
        region,
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
    });
}
