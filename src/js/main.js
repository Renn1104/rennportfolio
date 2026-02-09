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

async function loadAll() {
  await loadHTML("#navbar", "./src/layouts/navbar.html");
  await loadHTML("#footer", "./src/layouts/footer.html");

  
  await loadHTML("#hero", "./src/sections/hero.html");
  await loadHTML("#about", "./src/sections/about.html");
  await loadHTML("#education", "./src/sections/education.html");
  await loadHTML("#skills", "./src/sections/skills.html");
  await loadHTML("#projects", "./src/sections/projects.html");
  await loadHTML("#certificates", "./src/sections/certificates.html");

  initNavbarActive();
}

function initNavbarActive() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!sections.length || !navLinks.length) return;

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 140;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

loadAll();