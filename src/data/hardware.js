export const hardware = {
  p700: {
    name: "Lenovo ThinkStation P700",
    role: "Linux workstation",
    status: "current",
    summary:
      "Daily Linux workstation for development, system administration, gaming, and local workloads.",
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
      "Eight-node high-availability cluster built from dual-socket Lenovo ThinkStation P900 systems.",
    compute: "8× Lenovo ThinkStation P900 · 2× Intel Xeon E5-2699 v3 per node",
    platform: "Proxmox VE with Ceph-based storage and high-availability design",
    storage: [
      "Mirrored Samsung 990-series NVMe storage",
      "WD Red Plus 24 TB HDD storage pool in RAID 10",
    ],
    acceleration: "NVIDIA H100 80 GB and NVIDIA A5000 GPU acceleration",
    network: "10 GbE connectivity",
    cooling:
      "Custom liquid-cooling setup with a separate cooling circuit and temperature monitoring.",
    details:
      "The exact per-node distribution of RAM, drives, and accelerator cards is intentionally not published until it has been checked against the final topology.",
  },
};
