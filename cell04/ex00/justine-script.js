const resumeData = {
    name: "Justine Font",
    title: "HEDAC ",
    education: [
        {
            school: "HEDAC",
            degree: "Eleve avocate IP/IT/Data",
            period: "2024 - Present",
            description: ""
        },
        {
            school: "Paris 1 Pantheon Sorbonne",
            degree: "Master 2 Droit de la Creation et du Numerique",
            period: "2023-2024",
            description: ""
        },
        {
            school: "CY Cergy Paris Universite",
            degree: "Master 2 DJCE",
            period: "2022-2023",
            description: ""
        }
    ],
    skills: ["Droit des affaires, droit de la propriete intellectuelle, RGPD, IA, initiation a la programmation"],
    projects: [
        {
            name: "Echowaves",
            description: "Ecoutons les plantes",
            technologies: ["IA", "deeptech"]
        },

    ],
    email: "justine.font92@gmail.com",
   
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