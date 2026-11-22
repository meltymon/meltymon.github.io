export const hardware = {
  p700: {
    name: "Lenovo ThinkStation P700",
    role: "Linux workstation",
    status: "current",
    cpu: "2× Intel Xeon E5-2697 v3",
    memory: "128 GB SK Hynix DDR4 ECC, 2133 MHz",
    gpu: "Sparkle Intel Arc A750",
    storage: [
      "1 TB Western Digital Blue NVMe – system",
      "1 TB Western Digital Blue NVMe – games",
      "2 TB Intenso SATA SSD",
      "256 GB Samsung SATA SSD",
    ],
    network: "AQC113 10 GbE",
    audio: [
      "Behringer Xenyx QX1222USB",
      "Rode NT1-A",
      "Rode Procaster",
    ],
    displays: [
      "Samsung 32-inch curved display",
      "Iiyama 22-inch TFT",
    ],
    notes: [
      "The planned Xeon E5-2643 v3 upgrade is not installed and is intentionally not listed as current hardware.",
      "Only confirmed current components are included here.",
    ],
  },
  p900: {
    name: "Lenovo ThinkStation P900 cluster",
    role: "Proxmox and Ceph homelab",
    status: "project",
    summary:
      "Eight-node high-availability cluster based on dual-socket ThinkStation P900 systems.",
    details:
      "Detailed per-node hardware and topology are intentionally withheld until the exact distribution of memory, storage, and accelerators has been verified.",
  },
};
