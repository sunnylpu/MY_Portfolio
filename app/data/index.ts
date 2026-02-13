import { Github, Linkedin, Mail, FileText, Terminal, Code2, Cpu, Globe } from "lucide-react";

export const PROFILE = {
    name: "Sunny Tyagi",
    title: "Full-Stack Developer | C++ Programmer",
    email: "sunnytyagi2004@gmail.com",
    phone: "+91 8192021030",
    location: "Agra, Uttar Pradesh, India",
    bio: "Passionate Full-Stack Developer proficient in MERN stack and C++. Dedicated to building efficient, user-centric web applications.",
    about: {
        text1: "I am a B.Tech Computer Science student at Lovely Professional University with a strong foundation in software development. My expertise spans across the MERN stack (MongoDB, Express, React, Node.js) and C++ programming.",
        text2: "I actively engage in competitive programming and have developed robust web applications ranging from ed-tech platforms to travel journals. I am adaptable, organized, and committed to continuous learning.",
        stats: [
            { label: "LeetCode Rank", value: "Top 4%" },
            { label: "CGPA", value: "7.7" },
            { label: "Projects", value: "5+" }
        ]
    },
    socials: [
        { name: "Email", icon: Mail, href: "mailto:sunnytyagi2004@gmail.com" },
        { name: "GitHub", icon: Github, href: "https://github.com/sunnylpu" },
        { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/sunny-tyagiiii2004/" },
        { name: "Resume", icon: FileText, href: "https://drive.google.com/drive/folders/1YyG9XancnzQQr6d030V-9sFVuYo1OYtW?usp=sharing" }
    ]
};

export const SKILLS = {
    technical: [
        { name: "C++", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 80 },
        { name: "Node.js / Express", level: 75 },
        { name: "MongoDB", level: 75 },
        { name: "HTML/CSS", level: 90 },
        { name: "Python", level: 70 }
    ],
    professional: [
        { name: "Adaptability", level: 90 },
        { name: "Time Management", level: 85 },
        { name: "Organization", level: 90 },
        { name: "Teamwork", level: 85 }
    ],
    tools: [
        "Git", "VS Code", "Postman", "Vercel", "MySQL", "PostgreSQL", "Bootstrap"
    ]
};

export const PROJECTS = [
    {
        title: "Language Learning Platform",
        description: "A MERN stack platform with real-time speech recognition (Web Speech API) and Text-to-Speech integration for pronunciation practice.",
        tags: ["MongoDB", "Express", "React", "Node.js", "Web Speech API"],
        link: "#",
        github: "https://github.com/sunnylpu", // Placeholder based on CV
        featured: true,
        image: "/project-lang.png" // Placeholder
    },
    {
        title: "CipherSchools Note App",
        description: "Robust Full-Stack Note Application implementing full CRUD functionality, JWT authentication, and third-party API integration.",
        tags: ["MERN Stack", "JWT", "Debugging", "Optimization"],
        link: "#",
        github: "#",
        featured: true,
        image: "/project-cipher.png" // Placeholder
    },
    {
        title: "WanderLust Travel Journal",
        description: "Futuristic Travel Journal Web Application using Google Maps API to dynamically display landmarks and visualize travel locations.",
        tags: ["HTML", "CSS", "JavaScript", "Google Maps API", "Local Storage"],
        link: "#",
        github: "https://github.com/sunnylpu",
        featured: false,
        image: "/project-travel.png" // Placeholder
    }
];

export const EDUCATION = [
    {
        institution: "CipherSchools (Ed-tech Company)",
        degree: "Summer Training",
        period: "Jun 2025 - Jul 2025",
        desc: "Developed a robust Full-Stack Note Application using MERN. Gained hands-on experience in debugging, code optimization, and integrating third-party APIs.",
        tags: ["MERN Stack", "Industrial Training", "Full Stack"]
    },
    {
        institution: "Lovely Professional University",
        degree: "B.Tech in Computer Science",
        period: "Aug 2023 - Present",
        desc: "Current CGPA: 7.7. Focusing on Data Structures, Algorithms, and Web Development.",
        tags: ["Computer Science", "Engineering"]
    },
    {
        institution: "New St. Stephens Public School",
        degree: "Intermediate",
        period: "Apr 2019 - Mar 2021",
        desc: "Completed with 80.8% percentage.",
        grade: "80.8%"
    },
    {
        institution: "New St. Stephens Public School",
        degree: "Matriculation",
        period: "Apr 2017 - Mar 2019",
        desc: "Completed with 84% percentage.",
        grade: "84%"
    }
];

export const ACHIEVEMENTS = [
    {
        title: "LeetCode Specialist",
        desc: "Solved 110+ Problems. Strong in Dynamic Programming (x14) & Divide and Conquer.",
        date: "2026",
        icon: Terminal,
        link: "https://leetcode.com/u/leetcodesunnytyagi/"
    },
    {
        title: "Coding Ninjas Expert",
        desc: "7300+ EXP Points. Solved 190+ items (80 Coding + 111 MCQs). Expert in C++.",
        date: "2026",
        icon: Code2,
        link: "https://www.naukri.com/code360/profile/81c1dbe6-9bb5-4a85-b9c7-0fa8c16c2853"
    },
    {
        title: "GeeksforGeeks Active",
        desc: "Coding Score 70. Institute Rank 9866. Consistent C++ Problem Solver.",
        date: "2026",
        icon: Cpu,
        link: "https://www.geeksforgeeks.org/profile/sunnytyaa9fe/"
    },
    {
        title: "Global Certification",
        desc: "Cloud Computing (NPTEL) - Elite Silver Certification.",
        date: "2025",
        icon: Globe,
        link: "https://drive.google.com/file/d/1B6m2kF_YUD-g-Bwb_BdQjA-J0GFXgu5h/view"
    }
];

export const CERTIFICATES = [
    { name: "Cloud Computing (NPTEL)", link: "https://drive.google.com/drive/folders/1hUPa0DnlALUKtgRjB7eihtZBM-OnkAfO?usp=sharing" },
    { name: "Chat GPT Generative AI LLM (Infosys Springboard)", link: "https://drive.google.com/drive/folders/1hUPa0DnlALUKtgRjB7eihtZBM-OnkAfO?usp=sharing" },
    { name: "Build Generative AI apps (Infosys Springboard)", link: "https://drive.google.com/drive/folders/1hUPa0DnlALUKtgRjB7eihtZBM-OnkAfO?usp=sharing" },
    { name: "Object Oriented Programming (NeoColab)", link: "https://drive.google.com/drive/folders/1hUPa0DnlALUKtgRjB7eihtZBM-OnkAfO?usp=sharing" },
    { name: "Data Structure and Algorithms (NeoColab)", link: "https://drive.google.com/drive/folders/1hUPa0DnlALUKtgRjB7eihtZBM-OnkAfO?usp=sharing" }
];

