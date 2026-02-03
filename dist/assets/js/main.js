import "./theme.js";
function loadComponent(id, file) {
  fetch(file)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    });
}

// Load Layouts
loadComponent("navbar", "./src/layouts/navbar.html");
loadComponent("footer", "./src/layouts/footer.html");

// Load Sections
loadComponent("home", "./src/sections/hero.html");
loadComponent("about", "./src/sections/about.html");
loadComponent("education", "./src/sections/education.html");
loadComponent("skills", "./src/sections/skills.html");
loadComponent("projects", "./src/sections/projects.html");
loadComponent("certificates", "./src/sections/certificates.html");
