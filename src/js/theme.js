const toggleBtn = () => {
  const html = document.documentElement;
  const toggle = document.getElementById("theme-toggle");

  if (!toggle) return;

  toggle.addEventListener("click", () => {
    html.classList.toggle("dark");

    if (html.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      toggle.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      toggle.textContent = "🌙";
    }
  });
};

const loadTheme = () => {
  const theme = localStorage.getItem("theme");
  const html = document.documentElement;

  if (theme === "dark") {
    html.classList.add("dark");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  loadTheme();
  toggleBtn();
});
