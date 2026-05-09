/**
 * BAKR photoset — curated, max 1 bathroom across the entire page.
 * Focus: structure (cemento armato), materials, atmosphere.
 */
export type Photo = {
  id: string;
  src: string;
  alt: string;
  ratio: number;
};

const p = (file: string) => `/photos/${file}`;

export const photos = {
  // Big atmospheric architectural shot — corridor with dramatic light
  hero: {
    id: "hero",
    src: p("bakr-01-hallway.jpg"),
    alt: "Corridoio interno BAKR con ascensore in acciaio nero",
    ratio: 2 / 3,
  },
  // Curated lounge / interior atmosphere — small column for manifesto
  intro: {
    id: "intro",
    src: p("bakr-06-art-vignette.jpg"),
    alt: "Mensola con opere d'arte, luci verticali in legno e cemento grezzo",
    ratio: 2 / 3,
  },
  // Gallery — 5 unique shots: structure, material details, 1 bathroom max
  gallery: [
    {
      id: "g1",
      // Row 1, caption 01 "Volume"
      src: p("bakr-03-concrete-block.jpg"),
      alt: "Blocco di cemento armato grezzo con tondini in ferro a vista",
      ratio: 2 / 3,
    },
    {
      id: "g2",
      // Row 2, caption 02 "Atmosfera"
      src: p("bakr-07-steps-lamp.jpg"),
      alt: "Gradini in legno e cemento, lampada da tavolo, luce calda",
      ratio: 2 / 3,
    },
    {
      id: "g3",
      // Row 3, full-bleed wide — structural showcase
      src: p("bakr-02-steel-shaft.jpg"),
      alt: "Vano scala in acciaio nero, struttura industriale verticale",
      ratio: 16 / 10,
    },
    {
      id: "g4",
      // Row 4 left — material macro
      src: p("bakr-09-rebar-macro.jpg"),
      alt: "Macro di tondino in ferro che esce dal cemento",
      ratio: 2 / 3,
    },
    {
      id: "g5",
      // Row 4 middle — the 1 bathroom: premium black marble + glass partition
      src: p("bakr-04-marble-shower.jpg"),
      alt: "Doccia in marmo nero, transizione con cemento grezzo",
      ratio: 2 / 3,
    },
    {
      id: "g6",
      // Reserve / still life — used for type compat, not in current Gallery layout
      src: p("bakr-08-mirror-circle.jpg"),
      alt: "Specchio circolare incorniciato, natura morta",
      ratio: 2 / 3,
    },
  ],
  // S.04 — Materia (3 brand materials)
  materia: [
    {
      id: "cemento",
      src: p("bakr-03-concrete-block.jpg"),
      alt: "Cemento armato — blocco scultoreo grezzo",
      ratio: 2 / 3,
    },
    {
      id: "acciaio",
      src: p("bakr-02-steel-shaft.jpg"),
      alt: "Acciaio — vano scala nero industriale",
      ratio: 2 / 3,
    },
    {
      id: "vetro",
      src: p("bakr-08-mirror-circle.jpg"),
      alt: "Vetro — specchio con cornice metallica, riflesso",
      ratio: 2 / 3,
    },
  ],
  // legacy slots kept for backwards-compat
  specs: {
    id: "specs",
    src: p("bakr-02-steel-shaft.jpg"),
    alt: "Vano scala in acciaio",
    ratio: 16 / 10,
  },
  cta: {
    id: "cta",
    src: p("bakr-01-hallway.jpg"),
    alt: "Corridoio BAKR",
    ratio: 21 / 9,
  },
} as const;

export type Photos = typeof photos;
