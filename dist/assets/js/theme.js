const toggle = document.getElementById("theme-toggle");
const html = document.documentElement;

if (localStorage.theme === "light") {
  html.classList.remove("dark");
} else {
  html.classList.add("dark");
}

toggle?.addEventListener("click", () => {
  html.classList.toggle("dark");
  localStorage.theme = html.classList.contains("dark")
    ? "dark"
    : "light";
});
