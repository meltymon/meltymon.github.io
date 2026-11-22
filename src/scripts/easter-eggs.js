const root = document.documentElement;
const isEnglish = root.lang === "en";
const form = document.querySelector("[data-easter-form]");
const input = document.querySelector("[data-easter-input]");
const status = document.querySelector("[data-easter-status]");
const steps = [...document.querySelectorAll("[data-easter-step]")];

if (form && input && status) {
  const konami = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
  let sequence = [];
  let stage = 0;
  const messages = {
    start: isEnglish ? "Stage 1/3: enter KONAMI or use the classic key sequence." : "Stufe 1/3: KONAMI eingeben oder klassische Tastenkombination nutzen.",
    key: isEnglish ? "Stage 1/3 complete. Find KEY_FRITZ in the stylesheet and enter its value." : "Stufe 1/3 abgeschlossen. Finde KEY_FRITZ im Stylesheet und gib den Wert ein.",
    xcom: isEnglish ? "Stage 2/3 complete. Final command: XCOM." : "Stufe 2/3 abgeschlossen. Letzter Befehl: XCOM.",
    wrong: isEnglish ? "Unknown command. Check the current stage and try again." : "Unbekannter Befehl. Prüfe die aktuelle Stufe und versuche es erneut.",
    done: isEnglish ? "ACCESS GRANTED // X-COM MODE ONLINE. The world is counting on you, Commander." : "ZUGRIFF ERLAUBT // X-COM-MODUS AKTIV. Die Welt zählt auf dich, Commander."
  };
  function renderProgress() {
    steps.forEach((step, index) => {
      if (index < stage) {
        step.dataset.complete = "true";
        step.removeAttribute("aria-current");
      } else {
        delete step.dataset.complete;
        if (index === stage) step.setAttribute("aria-current", "step");
        else step.removeAttribute("aria-current");
      }
    });
    input.placeholder = stage === 0 ? "KONAMI" : stage === 1 ? "6860_4690" : "XCOM";
    input.disabled = stage === 3;
    form.querySelector("button").disabled = stage === 3;
  }
  function advance() {
    stage += 1;
    renderProgress();
    status.textContent = stage === 1 ? messages.key : stage === 2 ? messages.xcom : messages.done;
    if (stage === 3) root.dataset.easterEgg = "xcom";
    input.focus();
  }
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const command = input.value.trim().toUpperCase();
    input.value = "";
    if ((stage === 0 && command === "KONAMI") ||
        (stage === 1 && command === "6860_4690") ||
        (stage === 2 && command === "XCOM")) advance();
    else status.textContent = messages.wrong;
  });
  document.addEventListener("keydown", (event) => {
    if (event.ctrlKey || event.altKey || event.metaKey || stage !== 0) return;
    if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
      if (event.key.length === 1) return;
    }
    sequence.push(event.key);
    sequence = sequence.slice(-konami.length);
    if (sequence.join("|") === konami.join("|")) {
      sequence = [];
      advance();
    }
  });
  renderProgress();
  status.textContent = messages.start;
}
