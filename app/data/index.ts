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
            { label: "CGPA", value: "7.9" },
            { label: "Projects", value: "5+" }
        ]
    },
    socials: [
        { name: "Email", icon: Mail, href: "mailto:sunnytyagi2004@gmail.com" },
        { name: "GitHub", icon: Github, href: "https://github.com/sunnylpu" },
        { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/sunny-tyagiiii2004/" },
        { name: "Resume", icon: FileText, href: "https://drive.google.com/file/d/1ggYwMVmUOb9jy4UYyreF6ngWFH1S5hoU/view?usp=sharing" }
    ],
    image: "/profile.jpg" // Add your profile picture to the public folder
};

export const SKILLS = {
    technical: [
        { name: "C++", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
        { name: "JavaScript", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "React.js", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Node.js / Express", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        { name: "MongoDB", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
        { name: "HTML/CSS", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        { name: "Python", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" }
    ],
    professional: [
        { name: "Resilient", level: 90, image: "/trait_resilient.png" },
        { name: "Methodical", level: 85, image: "/trait_methodical.png" },
        { name: "Efficiency-driven", level: 90, image: "/trait_efficiency.png" },
        { name: "Amiable", level: 85, image: "/trait_amiable.png" }
    ],
    tools: [
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" }
    ]
};

export const PROJECTS = [
    {
        title: "Language Learning Platform",
        description: "A MERN stack platform with real-time speech recognition (Web Speech API) and Text-to-Speech integration for pronunciation practice.",
        tags: ["MongoDB", "Express", "React", "Node.js", "Web Speech API"],
        link: "https://llp-psi.vercel.app/",
        github: "https://github.com/sunnylpu/LLP",
        featured: true,
        image: "/project-lang.png"
    },
    {
        title: "CipherSchools Note App",
        description: "Robust Full-Stack Note Application implementing full CRUD functionality, JWT authentication, and third-party API integration.",
        tags: ["MERN Stack", "JWT", "Debugging", "Optimization"],
        link: "https://note-app-chi-dusky.vercel.app/login",
        github: "https://github.com/sunnylpu/Note-App",
        featured: true,
        image: "/project-cipher.png"
    },
    {
        title: "Event Calendar",
        description: "Dynamic Event Calendar and scheduling web application with interactive views and streamlined event management.",
        tags: ["Next.js", "React", "Tailwind CSS", "Scheduling"],
        link: "https://event-calendar-bjkx.vercel.app/",
        github: "https://github.com/sunnylpu/travel-journal-assistant",
        featured: false,
        image: "/project-event-calendar.png"
    }
];

export const SUMMER_TRAINING = [
    {
        institution: "CipherSchools (Ed-tech Company)",
        degree: "Summer Training",
        period: "Jun 2025 - Jul 2025",
        desc: "Developed a robust Full-Stack Note Application using MERN. Gained hands-on experience in debugging, code optimization, and integrating third-party APIs.",
        tags: ["MERN Stack", "Industrial Training", "Full Stack"],
        certificateLink: "https://drive.google.com/open?id=1fJAOUFLtoQdq896shTt5HZ8bxuaDsmpP"
    }
];

export const EDUCATION = [
    {
        institution: "Lovely Professional University",
        degree: "B.Tech in Computer Science",
        period: "Aug 2023 - Present",
        desc: "Current CGPA: 7.9. Focusing on Data Structures, Algorithms, and Web Development.",
        grade: "7.9 CGPA",
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
        desc: "Completed with 85.6% percentage.",
        grade: "85.6%"
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
        desc: "Coding Score 125. Institute Rank 9866. Consistent C++ Problem Solver.",
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
    { name: "Summer Training Project", link: "https://drive.google.com/open?id=1fJAOUFLtoQdq896shTt5HZ8bxuaDsmpP", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800" },
    { name: "Computer Programming", link: "https://drive.google.com/open?id=17HQPkL_WqIJs4-74fiVBbGerN50KZ4Nj", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" },
    { name: "Object Oriented Programming (NeoColab)", link: "https://drive.google.com/open?id=1zMpxbK_nG8nSHr6BjSepFom5tI3XxfMK", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800" },
    { name: "Data Structures and Algorithms (NeoColab)", link: "https://drive.google.com/open?id=1ET8Bad6j_zhkip4xeCr_lmSCvHucmdue", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" },
    { name: "Java Programming (NeoColab)", link: "https://drive.google.com/open?id=1_5qIdKCiH6R6fcJ2PkoBU_I2bfN4XQIM", image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=800" },
    { name: "The Bits and Bytes of Computer Networking", link: "https://drive.google.com/open?id=1k96SIPmDt0lSdy7zMC5hq3Mn2oymcK2q", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800" },
    { name: "TCP/IP and Advanced Topics", link: "https://drive.google.com/open?id=1-CsxUcxlSTHFJDVveJ-JCqz1TEzmlZfc", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" },
    { name: "Introduction to Hardware and Operating Systems", link: "https://drive.google.com/open?id=1FxWJPYm-U1fzzFJ3dOdVfzN3KdkU1CpW", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800" },
    { name: "Peer-to-Peer Protocols and Local Area Networks", link: "https://drive.google.com/open?id=117Nd2SDHAa3tn0TJnMoeQYZOYmDz6y73", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" },
    { name: "ChatGPT 4 and Prompt Engineering", link: "https://drive.google.com/open?id=1YFScEMI3VOupdhB5bfdLgiw4-qm2y6NT", image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=800" },
    { name: "Fundamentals of Network Communication", link: "https://drive.google.com/open?id=1lLavpJTYGgZaGjWkp9WriMxD_14r0yUD", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800" },
    { name: "Packet Switching Networks and Algorithms", link: "https://drive.google.com/open?id=1siWRvLJV1SUhQkt7eJp5LcgJ8ARU27D1", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" },
    { name: "Build Generative AI Apps", link: "https://drive.google.com/open?id=1fPuJTAQc7NcwqvTvaCpJfunnn5GzMCmz", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800" },
    { name: "Master Generative and Generative AI Tools", link: "https://drive.google.com/open?id=1-oyqPSg6YZXc7fICjuPvR_GUaBnzlRa6", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" },
    { name: "Computational Theory", link: "https://drive.google.com/open?id=1jrGA3olLdERGcF_PLxzib7snDx3G9fQq", image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=800" },
    { name: "Digital Systems: From Logic Gates to Processors", link: "https://drive.google.com/open?id=1OzGJBocbAO-VXCkZF6JZcIIaAAMqc_vH", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800" }
];

