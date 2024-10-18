
const resumeData = {
    name: "John Doe",
    jobTitle: "Web Developer",
    introduction: "Experienced web developer with a passion for creating responsive and user-friendly websites.",
    experience: [
        "Senior Web Developer at TechCorp (2018-present)",
        "Junior Web Developer at WebSolutions (2015-2018)",
        "Freelance Web Designer (2013-2015)"
    ],
    skills: [
        "HTML5, CSS3, JavaScript",
        "React, Vue.js",
        "Node.js, Express",
        "MongoDB, SQL",
        "Git, Agile methodologies"
    ],
    email: "john.doe@example.com",
    linkedin: "https://www.linkedin.com/in/johndoe",
    github: "https://github.com/johndoe"
};

function populateResume() {
    document.title = `${resumeData.name} - Resume`;
    document.querySelector('.navbar-brand').textContent = resumeData.name;
    document.querySelector('h1').textContent = resumeData.name;
    document.querySelector('h3').textContent = resumeData.jobTitle;
    document.querySelector('#about p').textContent = resumeData.introduction;

    const experienceList = document.getElementById('experience-list');
    resumeData.experience.forEach(exp => {
        const li = document.createElement('li');
        li.textContent = exp;
        experienceList.appendChild(li);
    });

    const skillsList = document.getElementById('skills-list');
    resumeData.skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    document.getElementById('email').textContent = resumeData.email;
    const linkedin = document.getElementById('linkedin');
    linkedin.href = resumeData.linkedin;
    linkedin.textContent = resumeData.linkedin;
    const github = document.getElementById('github');
    github.href = resumeData.github;
    github.textContent = resumeData.github;
}

document.addEventListener('DOMContentLoaded', populateResume);