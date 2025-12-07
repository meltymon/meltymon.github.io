// Konfiguration: Nur Deutsch und Englisch
const defaultLang = 'de';
const supportedLangs = ['de', 'en'];

// Hauptfunktion zum Sprachwechsel
async function changeLanguage(lang) {
    if (!supportedLangs.includes(lang)) return;

    // 1. Buttons aktualisieren
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`button[onclick="changeLanguage('${lang}')"]`).classList.add('active');

    // 2. JSON laden
    try {
        const response = await fetch(`lang/${lang}.json`);
        if (!response.ok) throw new Error('Sprachdatei nicht gefunden');
        const translations = await response.json();
        
        // 3. Texte anwenden
        applyTranslations(translations);
        
        // Sprache im HTML Tag setzen
        document.documentElement.lang = lang;
        
    } catch (error) {
        console.error('Fehler beim Laden der Sprache:', error);
    }
}

// Hilfsfunktion: JSON-Werte ins HTML schreiben
function applyTranslations(data) {
    for (const key in data) {
        // Suche alle Elemente mit data-i18n="KEY"
        const elements = document.querySelectorAll(`[data-i18n="${key}"]`);
        elements.forEach(el => {
            // HTML erlauben (für <b> und <span>)
            el.innerHTML = data[key];
        });
    }
}

// Beim Starten: Sprache erkennen oder Default nutzen
document.addEventListener('DOMContentLoaded', () => {
    changeLanguage(defaultLang);
});
