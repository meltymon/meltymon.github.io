const STORAGE_KEY = "meltymon-theme";
const labels = {
  de: { modern: "Modern-Modus", cyberpunk: "Cyberpunk-Modus" },
  en: { modern: "Modern mode", cyberpunk: "Cyberpunk mode" },
};

function applyTheme(theme) {
  const active = theme === "cyberpunk" ? "cyberpunk" : "modern";
  if (active === "cyberpunk") document.documentElement.dataset.theme = active;
  else delete document.documentElement.dataset.theme;

  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    const next = active === "cyberpunk" ? "modern" : "cyberpunk";
    button.setAttribute("aria-pressed", String(active === "cyberpunk"));
    const label = button.querySelector("[data-theme-label]");
    if (label) label.textContent = labels[document.documentElement.lang === "en" ? "en" : "de"][next];
  });
}

const initialTheme = document.documentElement.dataset.theme === "cyberpunk" ? "cyberpunk" : "modern";
applyTheme(initialTheme);

document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "cyberpunk" ? "modern" : "cyberpunk";
    applyTheme(next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch {}
  });
});
