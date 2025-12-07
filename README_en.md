# 💻 meltymon.org - Static Terminal Homepage

[🇩🇪 Zur deutschen Version (README.md)](README.md)

---

## ℹ️ Project Description

This is the static business card and information hub for Christian Faßbender (`meltymon`).

The page is designed as a modern, **responsive terminal emulation** in the **CachyOS/Linux style**. It deliberately uses pure **HTML and CSS** (Vanilla approach) and avoids JavaScript for content rendering, tracking, or cookies to ensure maximum speed and privacy.

## ✨ Core Features

* **Two-File Principle (DE/EN):** Simple, click-based language switching (no JavaScript-based i18n).
* **Minimalist & Fast:** HTML and CSS only.
* **Terminal Aesthetic:** Uses monospace fonts, blinking effects, and a neo-green color palette.
* **Detailed Hardware Specs:** Includes the full specification of the **Lenovo Thinkstation P700** workstation (Dual-Xeon, 768GB ECC-RAM, Intel Arc A750).
* **GDPR Compliant:** The page is purely static and requires no consent.

---

## 🚀 Deployment

The project can be run on any static hosting service (e.g., GitHub Pages, Netlify, Cloudflare Pages).

### Required Files

The following files must be present in the root directory of the repository:

* `index.html` (German main page)
* `index_en.html` (English translation)
* `style.css` (The design stylesheet)
* `README.md` (German README)
* `README_en.md` (This file)

### Language Switching

Switching between German and English occurs via the hyperlinks in the header of the respective `index` file.

```html
<a href="index.html" class="lang-btn">DE</a>
<a href="index_en.html" class="lang-btn active">EN</a>
