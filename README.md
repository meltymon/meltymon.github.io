# 💻 meltymon.org - Statische Terminal-Homepage

[🇬🇧 Switch to English (README_en.md)](README_en.md)

---

## ℹ️ Projektbeschreibung

Dies ist die statische Visitenkarte und Informationszentrale von Christian Faßbender (`meltymon`).

Die Seite ist als moderne, **responsive Terminal-Emulation** im **CachyOS/Linux-Stil** konzipiert. Sie verwendet reines **HTML und CSS** (Vanilla-Ansatz) und verzichtet bewusst auf JavaScript für die Content-Darstellung, Tracking oder Cookies, um maximale Geschwindigkeit und Privatsphäre zu gewährleisten.

## ✨ Kern-Features

* **Zwei-Dateien-Prinzip (DE/EN):** Einfacher, klickbasierter Sprachwechsel (kein JavaScript-basiertes i18n).
* **Minimalistisch & Schnell:** Nur HTML und CSS.
* **Terminal-Ästhetik:** Verwendet Monospace-Schriften, Blinking-Effekte und eine Neo-Grün-Farbpalette.
* **Detaillierte Hardware-Specs:** Enthält die vollständige Spezifikation der **Lenovo Thinkstation P700** Workstation (Dual-Xeon, 768GB ECC-RAM, Intel Arc A750).
* **DSGVO-Konform:** Die Seite ist rein statisch und benötigt keine Zustimmung.

---

## 🚀 Deployment

Das Projekt kann auf jedem statischen Hosting-Service (z.B. GitHub Pages, Netlify, Cloudflare Pages) betrieben werden.

### Erforderliche Dateien

Im Hauptverzeichnis des Repositories müssen folgende Dateien vorhanden sein:

* `index.html` (Deutsche Hauptseite)
* `index_en.html` (Englische Übersetzung)
* `style.css` (Das Design-Stylesheet)
* `README.md` (Diese Datei)
* `README_en.md` (Englische README)

### Sprachwechsel

Der Wechsel zwischen Deutsch und Englisch erfolgt über die Hyperlinks im Header der jeweiligen `index` Datei.

```html
<a href="index.html" class="lang-btn active">DE</a>
<a href="index_en.html" class="lang-btn">EN</a>
