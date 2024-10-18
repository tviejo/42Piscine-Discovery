const resumeData = [
    { name: "Thomas Viejo", title: "42 Student | C, C++, HTML Developer", link: "thomas-viejo-resume.html" },
    { name: "Justine Font", title: "Eleve avocate IP/IT/Data", link: "justine-resume.html" },
];

function createResumeCard(person) {
    return `
        <div class="col-md-6 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${person.name}</h5>
                    <p class="card-text">${person.title}</p>
                    <a href="${person.link}" class="btn btn-primary">View Resume</a>
                </div>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('resume-cards');
    resumeData.forEach(person => {
        container.innerHTML += createResumeCard(person);
    });
});
