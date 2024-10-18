const resumeData = {
    name: "Thomas Viejo",
    title: "42 Student | C, C++, HTML Developer",
    introduction: "Passionate programmer and student at 42, dedicated to mastering C, C++, and web development. Experienced in tackling complex algorithmic challenges and developing efficient software solutions through the 42 common core curriculum.",
    education: [
        {
            school: "42 School",
            degree: "Computer Programming",
            period: "2022 - Present",
            description: "Intensive peer-to-peer learning program focusing on practical programming skills and problem-solving through project-based learning."
        }
    ],
    skills: ["C", "C++", "HTML", "Shell Scripting", "Git", "Unix", "Problem Solving", "Algorithms", "Data Structures", "Computer Graphics", "Network Programming", "System Administration"],
    projects: [
        {
            name: "Libft",
            description: "Created a personal C library with reimplementations of various standard C library functions.",
            technologies: ["C", "Memory Management", "String Manipulation", "Linked Lists"]
        },
        {
            name: "ft_printf",
            description: "Recreated the printf function in C, handling various format specifiers and flags.",
            technologies: ["C", "Variadic Functions", "String Manipulation"]
        },
        {
            name: "get_next_line",
            description: "Developed a function that reads a line from a file descriptor, with the ability to manage multiple file descriptors.",
            technologies: ["C", "File I/O", "Static Variables", "Memory Management"]
        },
        {
            name: "Born2beroot",
            description: "Set up a virtual machine with a debian-based operating system, implementing strict security policies.",
            technologies: ["Virtual Machines", "System Administration", "Bash Scripting", "Network Security"]
        },
        {
            name: "FdF (Fil de Fer)",
            description: "Developed a 3D wireframe renderer using the school's graphics library.",
            technologies: ["C", "Computer Graphics", "Linear Algebra", "3D Projection"]
        },
        {
            name: "minitalk",
            description: "Created a small data exchange program using UNIX signals.",
            technologies: ["C", "UNIX Signals", "Bit Manipulation", "Inter-Process Communication"]
        },
        {
            name: "push_swap",
            description: "Implemented a sorting algorithm for a stack with a limited set of operations.",
            technologies: ["C", "Algorithm Optimization", "Data Structures", "Sorting Algorithms"]
        },
        {
            name: "Philosophers",
            description: "Solved the dining philosophers problem using threads and mutexes.",
            technologies: ["C", "Multi-threading", "Mutex", "Resource Sharing", "Deadlock Prevention"]
        },
        {
            name: "minishell",
            description: "Built a simple shell, similar to bash, implementing various shell functionalities.",
            technologies: ["C", "Process Creation", "File Descriptors", "Signal Handling", "Parsing"]
        },
        {
            name: "NetPractice",
            description: "Solved networking problems to configure small-scale networks.",
            technologies: ["Networking", "IP Addressing", "Subnetting", "Routing"]
        },
        {
            name: "cub3d",
            description: "Created a 3D game engine using raycasting, similar to Wolfenstein 3D.",
            technologies: ["C", "Raycasting", "Computer Graphics", "Game Development"]
        },
        {
            name: "CPP Modules (00-04)",
            description: "Completed a series of C++ projects covering object-oriented programming concepts.",
            technologies: ["C++", "Object-Oriented Programming", "Inheritance", "Polymorphism", "Templates"]
        },
        {
            name: "Inception",
            description: "Set up a small infrastructure composed of different services using Docker.",
            technologies: ["Docker", "Docker-Compose", "System Administration", "Network Configuration"]
        },
        {
            name: "ft_irc",
            description: "Developed an Internet Relay Chat (IRC) server in C++98.",
            technologies: ["C++", "Network Programming", "IRC Protocol", "Socket Programming"]
        },
        {
            name: "ft_transcendence",
            description: "Created a web application for the game Pong with real-time multiplayer functionality.",
            technologies: ["TypeScript", "NestJS", "PostgreSQL", "WebSockets", "OAuth"]
        }
    ],
    email: "thomas.viejo@student.42.fr",
    github: "https://github.com/thomasviejo"
};

function populateResume() {
    document.getElementById('introduction').textContent = resumeData.introduction;

    const educationList = document.getElementById('education-list');
    resumeData.education.forEach(edu => {
        educationList.innerHTML += `
            <div class="mb-4">
                <h4>${edu.school}</h4>
                <h5>${edu.degree}</h5>
                <p>${edu.period}</p>
                <p>${edu.description}</p>
            </div>
        `;
    });

    const skillsList = document.getElementById('skills-list');
    resumeData.skills.forEach(skill => {
        const li = document.createElement('li');
        li.className = 'list-inline-item';
        li.innerHTML = `<span class="skill-tag">${skill}</span>`;
        skillsList.appendChild(li);
    });

    const projectsList = document.getElementById('projects-list');
    resumeData.projects.forEach(project => {
        projectsList.innerHTML += `
            <div class="project-card">
                <h4>${project.name}</h4>
                <p>${project.description}</p>
                <p><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
            </div>
        `;
    });

    document.getElementById('email').textContent = resumeData.email;
    const github = document.getElementById('github');
    github.href = resumeData.github;
    github.textContent = resumeData.github;
}

document.addEventListener('DOMContentLoaded', populateResume);