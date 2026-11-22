export const projects = [
  {
    slug: "meltymon-ai-os",
    title: "MELTYMON AI OS",
    url: "https://github.com/meltymon/meltymon-ai-os",
    category: {
      de: "Lokale KI-Infrastruktur",
      en: "Local AI infrastructure",
    },
    description: {
      de: "Eine modulare, local-first KI-Orchestrierungsplattform für Linux. Der aktuelle Entwicklungsstand umfasst unter anderem Ollama-Anbindung, Hardware-Monitoring, Diagnostik sowie erste Agent-Runtime- und Orchestrierungsfunktionen.",
      en: "A modular, local-first AI orchestration platform for Linux. The current development includes Ollama integration, hardware monitoring, diagnostics, and initial agent runtime and orchestration capabilities.",
    },
    status: {
      de: "In Entwicklung",
      en: "In development",
    },
    technologies: ["Python", "Ollama", "Linux", "AsyncIO", "pytest"],
  },
  {
    slug: "restic-universal-backup-manager",
    title: "Restic Universal Backup Manager",
    url: "https://github.com/meltymon/Restic-Universal-Backup-Manager",
    category: {
      de: "Backup & Recovery",
      en: "Backup & recovery",
    },
    description: {
      de: "Eine modulare Bash-Lösung, die Restic in einen interaktiven Backup-Manager integriert – mit Setup, automatisierter Sicherung, Synchronisierung und Wiederherstellungsfunktionen.",
      en: "A modular Bash solution that wraps Restic in an interactive backup manager, with setup, automated backups, synchronization, and recovery workflows.",
    },
    technologies: ["Bash", "Restic", "rsync", "Linux"],
  },
  {
    slug: "network-bond-manager",
    title: "Universal Network Bond Manager",
    url: "https://github.com/meltymon/Network_Bond_Manager",
    category: {
      de: "Netzwerk-Automatisierung",
      en: "Network automation",
    },
    description: {
      de: "Ein interaktives Linux-Tool zur Verwaltung von Network Bonding im Active-Backup-Modus. Es sichert NetworkManager-Profile, konfiguriert Bond- und Slave-Interfaces und bietet Diagnose- sowie Recovery-Funktionen.",
      en: "An interactive Linux tool for managing Active-Backup network bonding. It backs up NetworkManager profiles, configures bond and slave interfaces, and provides diagnostics and recovery functions.",
    },
    technologies: ["Bash", "NetworkManager", "nmcli", "Linux"],
  },
  {
    slug: "nextcloud-talk-stack",
    title: "Nextcloud Talk High Performance Stack",
    url: "https://github.com/meltymon/-Nextcloud-High-Performance-HP-Docker-Stack",
    category: {
      de: "Self-hosting & Container",
      en: "Self-hosting & containers",
    },
    description: {
      de: "Eine Docker-Compose-Konfiguration für eine leistungsorientierte Nextcloud-Talk-Umgebung mit High Performance Backend, Coturn, Redis und optionalem Recording-Backend.",
      en: "A Docker Compose configuration for a performance-oriented Nextcloud Talk environment with a High Performance Backend, Coturn, Redis, and an optional recording backend.",
    },
    technologies: ["Docker Compose", "Nextcloud Talk", "Coturn", "Redis"],
  },
  {
    slug: "melty-nexus",
    title: "MELTY NEXUS",
    url: "https://github.com/meltymon/melty-nexus",
    category: {
      de: "Linux-Systemwerkzeuge",
      en: "Linux system tooling",
    },
    description: {
      de: "Ein lokales Terminal-Control-Center für CachyOS und Arch Linux mit Live-Systemmonitoring, Update-Abläufen, Backups und bewusst abgesicherten Wartungsaktionen.",
      en: "A user-local terminal operations center for CachyOS and Arch Linux, combining live system monitoring, update workflows, backups, and deliberately guarded maintenance actions.",
    },
    technologies: ["Python", "Fish", "Textual", "Rich", "CachyOS"],
  },
];
