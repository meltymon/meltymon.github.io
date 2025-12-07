// ALLE TEXTE SIND HIER GESPEICHERT (Keine externen Dateien nötig)
const translations = {
    de: {
        lang_label: "Sprache:",
        header_welcome: "Willkommen auf meltymon.org",
        tagline_1: "IT-Veteran",
        tagline_2: "Gaming-Strategist",
        tagline_3: "CachyOS-Enthusiast",
        tagline_4: "Deployed via Cloudflare A-Record",
        nav_start_echo: "Willkommen",
        nav_status: "STATUS: System-Check OK. | Akkuzellen-Prüfung läuft...",
        nav_contact: "kontakt@meltymon.org",
        whoami_text: "<p>Ich bin **Christian Faßbender**, IT-Techniker und Linux-User aus tiefster Überzeugung. Seit über 10 Jahren ist mein System **Windows-frei**, und mein aktueller Daily Driver ist das superschnelle **CachyOS** <span style='color:var(--cachy-blue);'>🐧</span>. Ich liebe Systeme, die nicht nur funktionieren, sondern die man bis ins Detail verstehen und optimieren kann. <code>Pacman -Syu</code> ist bei mir eine tägliche Routine.</p><p>Mein technisches Know-how setze ich ein, um Menschen zu helfen. Besonders die ältere Generation unterstütze ich mit der nötigen **Geduld und Verständlichkeit**, fernab der überteuerten Preise und der Wegwerfmentalität der großen Konzerne.</p>",
        mission_quote: "Technik muss bezahlbar und verständlich sein. Ich biete faire Hilfe statt horrender Rechnungen. Ehrlichkeit und Geduld sind mir wichtiger als Profitmaximierung.",
        mission_text: "Meine Aufgabe ist es, **Komplexität zu reduzieren** und **Vertrauen** zu schaffen. Ich bin der IT-Techniker, den man gerne anruft, weil er zuhört und nicht urteilt.",
        hardware_intro: "Meine Workstation basiert auf einem kompromisslosen Server-Fundament, optimiert für Performance, Stabilität und Speicher-Redundanz.",
        hardware_base_title: "Basis-System (Lenovo Thinkstation P700)",
        hardware_base_list: "<li>**CPUs (2x):** Intel Xeon E5-2697 V3 (Maximale Multi-Core-Leistung für VMs und Kompilierung)</li><li>**RAM (768 GB):** 12x 64GB Hynix DDR4 ECC 2133 MHz (Octa-Channel-Betrieb, absolute Stabilität)</li><li>**GPU:** Sparkle Intel Arc A750 Titan (Gaming und Content-Erstellung unter Linux)</li>",
        hardware_storage_title: "Speicher & Peripherie",
        hardware_storage_list: "<li>**Mass Storage (RAID 5):** 4x 48TB Western Digital Red (Gesamtspeicherplatz und Redundanz)</li><li>**NVME (RAID 1):** 2x 2TB Samsung Evo 990+ (Blitzschneller System- und Anwendungs-Speicher)</li><li>**Optisch:** LG Blu-ray Brenner mit **LightScribe** Technik <span class='icon-warn'> (Retro-Tech, auf die ich stolz bin!)</span></li>",
        hardware_network_title: "Netzwerk & Sound",
        hardware_network_list: "<li>**WLAN/BT:** TP-Link WiFi 6 + Bluetooth-Karte</li><li>**LAN:** TP-Link PCIe 10 Gbit/s LAN-Karte (für Hochgeschwindigkeits-Netzwerk)</li><li>**Sound:** Soundblaster X4 Soundkarte, Behringer QX1812 USB Mischpult, Rode NT2-A Mikrofon</li><li>**Peripherie:** Logitech G502 Hero Maus, Logitech G219 Tastatur, Logitech G432 Headset</li><li>**Monitor:** Samsung 32\" Curved LED Monitor</li>",
        hardware_internet_title: "Internet-Infrastruktur",
        hardware_internet_list: "<li>**Primär-Router:** Fritzbox 6860 5G (1.3 Gbit/s Down, 500 Mbit/s Up)</li><li>**Kopplung/Switch:** Fritzbox 4690 (Anschaffung wegen der 2x 10 Gbit/s LAN-Ports und WiFi 7-Fähigkeit)</li>",
        comp_intro: "Mein Fokus liegt auf **Langlebigkeit, Effizienz und Sicherheit** – in der privaten wie in der geschäftlichen IT.",
        comp_area1_title: "Kompetenzfeld I: IT-Services (Privat & Geschäftlich)",
        comp_area1_list: "<li>**Netzwerk- und Infrastruktur-Wartung:** Aufbau, Konfiguration und Wartung stabiler, sicherer Netzwerke (Router, Firewalls, VPNs).</li><li>**Datensicherung und Wiederherstellung:** Entwicklung solider Backup-Strategien für Privat- und KMU-Kunden.</li><li>**Reparieren, Installieren und Warten:** Service für **alle möglichen Geräte**.</li><li>**Digitalisierungssupport:** Unterstützung bei Cloud-Lösungen und der verständlichen Einrichtung digitaler Prozesse.</li>",
        comp_area2_title: "Kompetenzfeld II: Spezialwissen Hardware & Akku-Bau",
        comp_area2_list: "<li style='color: var(--warning-color);'>**Hardware-Reparatur:** Ich hauche Geräten neues Leben ein. **Reparatur vor Austausch** ist hier das Credo.</li><li style='color: var(--warning-color);'>**Akku-Bau und Instandsetzung:** **Rekonstruktion und Instandsetzung** von Akkupacks (Löten, Balancing, BMS-Verständnis).</li>",
        blog_intro: "Hier finden Sie meine aktuellen Gedanken, Projekte und technischen Herausforderungen.",
        blog_post_1: "<p>Der Umstieg auf den **CachyOS-Kernel** war eine der besten Entscheidungen der letzten Monate. Die Performance-Steigerung, gerade bei I/O-lastigen Aufgaben, ist beeindruckend. Ich habe das Gefühl, mein System ist jetzt endlich zu 100% auf mich zugeschnitten.</p><p>Das nächste Projekt ist die Optimierung der **Motorrad-Batterie-Ladeelektronik** für die nächste Reise. Ich forsche gerade an einem BMS-Bypass für kritische Situationen. Weitere Details folgen!</p>",
        blog_post_2: "<p>Ich habe erfolgreich die alte FritzBox 7490 gegen einen AVM-Repeater mit **OpenWRT-Firmware** ersetzt. Die Stabilität ist jetzt deutlich besser, und ich habe volle Kontrolle über alle Traffic-Regeln. Ein voller Erfolg.</p>",
        tools_content: "<p>Als begeisterter Gamer und Linux-Nutzer habe ich mich auf die reibungslose Integration von Windows-Spielen unter Linux spezialisiert.</p><h3>Meine Gaming-Plattformen und Tools:</h3><p>Die moderne Gaming-Landschaft unter Linux ist dank der Arbeit von Valve, WINE und der Community hervorragend. Ich helfe Ihnen gerne bei der Einrichtung, um Windows-Titel stabil und schnell auf Linux zum Laufen zu bringen.</p><ul class='icon-list'><li>**Wine & Lutris:** Die Basis für alles, was nicht nativ läuft, optimiert mit den neuesten Kernel- und Treiber-Patches.</li><li>**Heroic Games Launcher, GOG Games, Epicgames:** Die zentralen Schnittstellen für meine Bibliotheken.</li><li>**Steam:** <span class='icon-warn'>Große Steam-Bibliotheken lassen sich dank Proton/WINE schnell migrieren und sind oft sofort lauffähig.</span></li><li>**Ubisoft-Connector:** <span class='icon-warn'>Einrichtung des Ubisoft-Connectors unter Linux für Spiele aus dieser Bibliothek.</span></li><li>**Pacman:** Das Herzstück meiner CachyOS-Umgebung, um stets die aktuellsten Gaming-spezifischen Pakete (z.B. Mesa, Vulkan) zu installieren.</li></ul>",
        ethics_content: "<p>Die Wegwerf-Mentalität großer Konzerne lehne ich ab. Ich berate meine Kunden immer dahingehend, das **Nachhaltigste** und **Kostengünstigste** zu tun.</p><p>**Das Recht auf Reparatur** ist für mich mehr als nur ein politisches Schlagwort. Ich zeige gerne, wie man kleine Probleme selbst behebt und behalte Wissen nicht für mich.</p>",
        vitals_content: "<p>Abseits von Terminals und Pacman-Updates finde ich Balance in ehrenamtlichem Engagement und Abenteuer. Diese Erfahrungen schärfen meine Fähigkeiten zur **Krisenbewältigung, Planung und Menschenführung**.</p><h3>Ehrenamt & Soziales Engagement</h3><ul class='icon-list'><li>**Jugendleiter:** Als ehrenamtlicher **Jugendleiter** helfe ich jungen Menschen.</li><li>**Sanitäter:** Mein Engagement als **Sanitäter** erfordert schnelle, präzise Entscheidungen unter Druck.</li></ul><h3>Globale Abenteuer & Logistik</h3><ul class='icon-list'><li>**Zwei Weltreisen mit dem Motorrad:** Lehre in **extremer Improvisation, Ausdauer und präziser Logistik**.</li><li>**Segeln:** Die Wichtigkeit, mit minimalistischen Mitteln maximale Ergebnisse zu erzielen.</li></ul>",
        gaming_content: "<p>Ich spiele gerne strategisch, taktisch und tiefgründig.</p><h3>Meine Klassiker und Remakes:</h3><ul class='icon-list'><li>**Taktik:** XCOM Serie (1-12) & Jagged Alliance.</li><li>**Remakes:** Return to the Roots (Siedler 2) und Settlers United (Siedler 3/4).</li></ul>",
        diablo_content: "<p>**STATUS: Aktiv & Grind-Modus**</p><p>Seit Freitag ist die **Season 37 von Diablo 3: Reaper of Souls** aktiv! Wenn du mit mir Dämonen jagen möchtest, kontaktiere mich am besten über Discord!</p>",
        contact_intro: "Du brauchst Hilfe mit deinem **PC, Mac, Linux-System, Smartphone oder Tablet**? Oder willst einfach über Retro-Games fachsimpeln? Wähle den schnellsten Weg:",
        btn_email: "E-Mail senden",
        versions_intro: "Dokumentation der wichtigsten Änderungen und Feature-Implementierungen seit der Initialisierung der Seite.",
        versions_log_content: "<span style='color: var(--cachy-blue);'>-- V 9.5 (2025-12-07) --</span>\nCLEANUP: Reduzierung auf Deutsch und Englisch. Einführung der JS-basierten i18n Struktur.\n\n<span style='color: var(--cachy-blue);'>-- V 9.3 (2025-12-07) --</span>\nFIX: Entfernung des alten Hardware-Platzhalter-Textes.\n\n<span style='color: var(--cachy-blue);'>-- V 9.2 (2025-12-07) --</span>\nUPDATE: Hardware (P700) und Netzwerk (10Gbit) aktualisiert.",
        privacy_content: "<p>**Verantwortlicher im Sinne der DSGVO:**<br>Christian Faßbender<br>[Ihre Adresse]<br>[Ihre E-Mail-Adresse]</p><h3>1. Allgemeines zur Datenverarbeitung</h3><p>Diese Website ist eine **rein statische HTML-Seite**. Sie verwendet **keine Cookies**, **kein Tracking** und **keine Datenbanken**.</p><h3>2. Hosting und Logfiles</h3><p>Der Provider erhebt automatisch Server-Log-Dateien (IP-Adresse, Browser, Uhrzeit). Diese dienen nur der technischen Funktion und Sicherheit.</p><h3>3. Externe Links</h3><p>Links zu E-Mail, Discord oder Twitch sind reine Hyperlinks. Keine Datenübermittlung ohne Klick.</p><h3>4. Ihre Rechte</h3><p>Da wir keine personenbezogenen Daten verarbeiten, entfallen Auskunfts- und Löschrechte.</p>",
        footer_visitor: "Besucher seit Deployment (Total):",
        footer_easter_egg: "<strong>System Log: [HINWEIS]</strong> - Scan nach versteckten Assets beendet.<span class='status-indicator'>[OK]</span><br>Ergebnis: 3 nicht indizierte Dateien gefunden.",
        footer_copyright: "Erstellt mit 100% Handarbeit. Keine Cookies. Kein Tracking. Nur HTML & CSS.",
        footer_xcom: "[OLD-SCHOOL MODE: X-COM START]"
    },
    en: {
        lang_label: "Language:",
        header_welcome: "Welcome to meltymon.org",
        tagline_1: "IT Veteran",
        tagline_2: "Gaming Strategist",
        tagline_3: "CachyOS Enthusiast",
        tagline_4: "Deployed via Cloudflare A-Record",
        nav_start_echo: "Welcome",
        nav_status: "STATUS: System Check OK. | Battery Cell Inspection Running...",
        nav_contact: "Contact",
        whoami_text: "<p>I am **Christian Faßbender**, an IT technician and Linux user by deepest conviction. My system has been **Windows-free** for over 10 years, and my current daily driver is the super-fast **CachyOS** <span style='color:var(--cachy-blue);'>🐧</span>. I love systems that not only work but can be understood and optimized down to the smallest detail. <code>Pacman -Syu</code> is a daily routine for me.</p><p>I use my technical expertise to help people. Especially the older generation, I support with the necessary **patience and clarity**, far away from overpriced bills and the throwaway mentality of large corporations.</p>",
        mission_quote: "Technology must be affordable and understandable. I offer fair help instead of horrendous bills. Honesty and patience are more important to me than maximizing profit.",
        mission_text: "My mission is to **reduce complexity** and build **trust**. I am the IT technician you like to call because I listen and do not judge.",
        hardware_intro: "My workstation is based on an uncompromising server foundation, optimized for performance, stability, and memory redundancy.",
        hardware_base_title: "Base System (Lenovo Thinkstation P700)",
        hardware_base_list: "<li>**CPUs (2x):** Intel Xeon E5-2697 V3 (Maximum multi-core performance for VMs and compilation)</li><li>**RAM (768 GB):** 12x 64GB Hynix DDR4 ECC 2133 MHz (Octa-channel operation, absolute stability)</li><li>**GPU:** Sparkle Intel Arc A750 Titan (Gaming and content creation on Linux)</li>",
        hardware_storage_title: "Storage & Peripherals",
        hardware_storage_list: "<li>**Mass Storage (RAID 5):** 4x 48TB Western Digital Red (Total storage space and redundancy)</li><li>**NVME (RAID 1):** 2x 2TB Samsung Evo 990+ (Lightning fast system and app storage)</li><li>**Optical:** LG Blu-ray Burner with **LightScribe** tech <span class='icon-warn'> (Retro-Tech I am proud of!)</span></li>",
        hardware_network_title: "Network & Sound",
        hardware_network_list: "<li>**WLAN/BT:** TP-Link WiFi 6 + Bluetooth Card</li><li>**LAN:** TP-Link PCIe 10 Gbit/s LAN Card (for high-speed networking)</li><li>**Sound:** Soundblaster X4 Sound Card, Behringer QX1812 USB Mixer, Rode NT2-A Microphone</li><li>**Peripherals:** Logitech G502 Hero Mouse, Logitech G219 Keyboard, Logitech G432 Headset</li><li>**Monitor:** Samsung 32\" Curved LED Monitor</li>",
        hardware_internet_title: "Internet Infrastructure",
        hardware_internet_list: "<li>**Primary Router:** Fritzbox 6860 5G (1.3 Gbit/s Down, 500 Mbit/s Up)</li><li>**Coupling/Switch:** Fritzbox 4690 (Acquired for the 2x 10 Gbit/s LAN ports and WiFi 7 capability)</li>",
        comp_intro: "My focus is on **longevity, efficiency, and security** – in both private and business IT.",
        comp_area1_title: "Competence Area I: IT Services (Private & Business)",
        comp_area1_list: "<li>**Network & Infrastructure Maintenance:** Setup, configuration, and maintenance of stable, secure networks (routers, firewalls, VPNs).</li><li>**Data Backup & Recovery:** Development of solid backup strategies for private and SME clients.</li><li>**Repair, Install, and Maintain:** Service for **all kinds of devices**.</li><li>**Digitalization Support:** Support with cloud solutions and the understandable setup of digital processes.</li>",
        comp_area2_title: "Competence Area II: Hardware & Battery Building",
        comp_area2_list: "<li style='color: var(--warning-color);'>**Hardware Repair:** I breathe new life into devices. **Repair before replace** is the motto here.</li><li style='color: var(--warning-color);'>**Battery Building & Refurbishment:** **Reconstruction and repair** of battery packs (soldering, balancing, BMS understanding).</li>",
        blog_intro: "Here you will find my current thoughts, projects, and technical challenges.",
        blog_post_1: "<p>Switching to the **CachyOS kernel** was one of the best decisions in recent months. The performance increase, especially in I/O-heavy tasks, is impressive. I feel my system is finally 100% tailored to me.</p><p>The next project is optimizing the **motorcycle battery charging electronics** for the next trip. I am currently researching a BMS bypass for critical situations. More details to follow!</p>",
        blog_post_2: "<p>I successfully replaced the old FritzBox 7490 with an AVM Repeater running **OpenWRT firmware**. Stability is now significantly better, and I have full control over all traffic rules. A complete success.</p>",
        tools_content: "<p>As an avid gamer and Linux user, I specialize in the seamless integration of Windows games on Linux.</p><h3>My Gaming Platforms and Tools:</h3><p>The modern gaming landscape on Linux is excellent thanks to the work of Valve, WINE, and the community. I am happy to help you with the setup to get Windows titles running stably and quickly on Linux.</p><ul class='icon-list'><li>**Wine & Lutris:** The basis for everything that doesn't run natively, optimized with the latest kernel and driver patches.</li><li>**Heroic Games Launcher, GOG Games, Epicgames:** The central interfaces for my libraries.</li><li>**Steam:** <span class='icon-warn'>Large Steam libraries can be quickly migrated thanks to Proton/WINE and are often immediately playable.</span></li><li>**Ubisoft-Connector:** <span class='icon-warn'>Setup of the Ubisoft Connector on Linux for games from this library.</span></li><li>**Pacman:** The heart of my CachyOS environment to always install the latest gaming-specific packages (e.g., Mesa, Vulkan).</li></ul>",
        ethics_content: "<p>I reject the throwaway mentality of large corporations. I always advise my customers to do what is **most sustainable** and **most cost-effective**.</p><p>**The Right to Repair** is more than just a political slogan for me. I am happy to show how to fix small problems yourself and do not keep knowledge to myself.</p>",
        vitals_content: "<p>Apart from terminals and pacman updates, I find balance in voluntary engagement and adventure. These experiences sharpen my skills in **crisis management, planning, and leadership**.</p><h3>Volunteering & Social Engagement</h3><ul class='icon-list'><li>**Youth Leader:** As a volunteer **youth leader**, I help young people.</li><li>**Paramedic:** My engagement as a **paramedic** requires fast, precise decisions under pressure.</li></ul><h3>Global Adventures & Logistics</h3><ul class='icon-list'><li>**Two World Trips by Motorcycle:** Lessons in **extreme improvisation, endurance, and precise logistics**.</li><li>**Sailing:** The importance of achieving maximum results with minimalistic means.</li></ul>",
        gaming_content: "<p>I like to play strategically, tactically, and deeply.</p><h3>My Classics and Remakes:</h3><ul class='icon-list'><li>**Tactics:** XCOM Series (1-12) & Jagged Alliance.</li><li>**Remakes:** Return to the Roots (Settlers 2) and Settlers United (Settlers 3/4).</li></ul>",
        diablo_content: "<p>**STATUS: Active & Grind Mode**</p><p>Since Friday, **Season 37 of Diablo 3: Reaper of Souls** is active! If you want to hunt demons with me, contact me best via Discord!</p>",
        contact_intro: "Do you need help with your **PC, Mac, Linux system, smartphone, or tablet**? Or do you just want to talk shop about retro games? Choose the fastest route:",
        btn_email: "Send E-Mail",
        versions_intro: "Documentation of the most important changes and feature implementations since site initialization.",
        versions_log_content: "<span style='color: var(--cachy-blue);'>-- V 9.5 (2025-12-07) --</span>\nCLEANUP: Reduction to German and English. Introduction of JS-based i18n structure.\n\n<span style='color: var(--cachy-blue);'>-- V 9.3 (2025-12-07) --</span>\nFIX: Removal of old hardware placeholder text.\n\n<span style='color: var(--cachy-blue);'>-- V 9.2 (2025-12-07) --</span>\nUPDATE: Hardware (P700) and Network (10Gbit) updated.",
        privacy_content: "<p>**Controller within the meaning of the GDPR:**<br>Christian Faßbender<br>[Your Address]<br>[Your E-Mail Address]</p><h3>1. General information on data processing</h3><p>This website is a **purely static HTML page**. It uses **no cookies**, **no tracking**, and **no databases**.</p><h3>2. Hosting and Logfiles</h3><p>The provider automatically collects server log files (IP address, browser, time). These serve only for technical function and security.</p><h3>3. External Links</h3><p>Links to E-Mail, Discord, or Twitch are pure hyperlinks. No data transmission without clicking.</p><h3>4. Your Rights</h3><p>Since we do not process personal data, rights to information and deletion do not apply.</p>",
        footer_visitor: "Visitors since Deployment (Total):",
        footer_easter_egg: "<strong>System Log: [NOTE]</strong> - Scan for hidden assets complete.<span class='status-indicator'>[OK]</span><br>Result: 3 unindexed files found.",
        footer_copyright: "Created with 100% manual work. No cookies. No tracking. Only HTML & CSS.",
        footer_xcom: "[OLD-SCHOOL MODE: X-COM START]"
    }
};

// Start-Konfiguration
const defaultLang = 'de';

function changeLanguage(lang) {
    if (!translations[lang]) {
        console.error(`Sprache ${lang} nicht in der Datenbank gefunden.`);
        return;
    }

    // 1. Buttons aktualisieren (Visuelles Feedback)
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`button[onclick="changeLanguage('${lang}')"]`).classList.add('active');

    // 2. Texte aus der Variable 'translations' holen
    const data = translations[lang];

    // 3. Durch alle Keys loopen und HTML ersetzen
    for (const key in data) {
        const elements = document.querySelectorAll(`[data-i18n="${key}"]`);
        elements.forEach(el => {
            // Wichtig: innerHTML verwenden, um Fettdruck (**), Links und Spans zu erhalten
            el.innerHTML = data[key];
        });
    }

    // 4. HTML Lang Attribut setzen
    document.documentElement.lang = lang;
}

// Initialisierung beim Laden der Seite
document.addEventListener('DOMContentLoaded', () => {
    changeLanguage(defaultLang);
});
