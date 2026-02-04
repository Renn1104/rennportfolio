// helper untuk load file HTML ke element
async function loadHTML(selector, file) {
  const el = document.querySelector(selector);
  if (!el) return;

  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error(`Failed to load ${file}`);
    el.innerHTML = await res.text();
  } catch (err) {
    console.error(err);
  }
}
async function loadComponent(id, file) {
  const res = await fetch(file)
  const html = await res.text()
  document.getElementById(id).innerHTML = html
}

loadComponent("navbar", "./src/components/navbar.html")
loadComponent("hero", "./src/components/hero.html")

// LOAD LAYOUT
loadHTML("#navbar", "./src/layouts/navbar.html");
loadHTML("#footer", "./src/layouts/footer.html");

// LOAD SECTIONS
loadHTML("#hero", "./src/sections/hero.html");
loadHTML("#about", "./src/sections/about.html");
loadHTML("#education", "./src/sections/education.html");
loadHTML("#skills", "./src/sections/skills.html");
loadHTML("#projects", "./src/sections/projects.html");
loadHTML("#certificates", "./src/sections/certificates.html");
