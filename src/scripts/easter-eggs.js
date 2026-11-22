const isEnglish = document.documentElement.lang === "en";
const status = document.querySelector("[data-easter-status]");
if (status) {
  const say = (text) => { status.textContent = text; };
  const konami = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
  let sequence = [];
  let stage = 0;
  let typed = "";
  document.addEventListener("keydown", (event) => {
    if (event.ctrlKey || event.altKey || event.metaKey) return;
    if (event.key.length === 1) typed = (typed + event.key.toUpperCase()).slice(-16);
    sequence.push(event.key);
    sequence = sequence.slice(-konami.length);
    if (stage === 0 && sequence.join("|") === konami.join("|")) {
      stage = 1;
      say(isEnglish ? "[LEVEL 1/3] Konami accepted. Find KEY_FRITZ in the source." : "[LEVEL 1/3] Konami akzeptiert. Suche KEY_FRITZ im Quelltext.");
      return;
    }
    if (stage === 1 && typed.includes("6860_4690")) {
      stage = 2;
      typed = "";
      say(isEnglish ? "[LEVEL 2/3] Hidden key accepted. One final command: XCOM." : "[LEVEL 2/3] Schlüssel akzeptiert. Letzter Befehl: XCOM.");
      return;
    }
    if (stage === 2 && typed.endsWith("XCOM")) {
      stage = 3;
      say(isEnglish ? "ACCESS GRANTED // X-COM MODE ONLINE. The world is counting on you, Commander." : "ZUGRIFF ERLAUBT // X-COM-MODUS AKTIV. Die Welt zählt auf dich, Commander.");
      document.documentElement.dataset.easterEgg = "xcom";
    }
  });
}
