/**
 * BAKR photoset — local imagery, mapped by section.
 * Files in /public/photos/.
 */
export type Photo = {
  id: string;
  src: string;
  alt: string;
  ratio: number;
};

const p = (file: string) => `/photos/${file}`;

export const photos = {
  hero: {
    id: "hero",
    src: p("bakr-01-hallway.jpg"),
    alt: "Corridoio interno BAKR con ascensore in acciaio nero",
    ratio: 2 / 3,
  },
  intro: {
    id: "intro",
    src: p("bakr-06-art-vignette.jpg"),
    alt: "Mensola con opere d'arte e luci verticali in legno",
    ratio: 2 / 3,
  },
  gallery: [
    {
      id: "g1",
      src: p("bakr-03-concrete-block.jpg"),
      alt: "Blocco di cemento armato grezzo, dettaglio scultoreo",
      ratio: 2 / 3,
    },
    {
      id: "g2",
      src: p("bakr-05-bathtub.jpg"),
      alt: "Vasca bianca minimale contro parete in cemento scuro",
      ratio: 2 / 3,
    },
    {
      id: "g3",
      src: p("bakr-07-steps-lamp.jpg"),
      alt: "Gradini in legno e cemento con lampada calda",
      ratio: 2 / 3,
    },
    {
      id: "g4",
      src: p("bakr-04-marble-shower.jpg"),
      alt: "Doccia in marmo nero, transizione con cemento grezzo",
      ratio: 2 / 3,
    },
    {
      id: "g5",
      src: p("bakr-10-stone-sink.jpg"),
      alt: "Lavabo monolitico in pietra, bagno minimale",
      ratio: 2 / 3,
    },
    {
      id: "g6",
      src: p("bakr-08-mirror-circle.jpg"),
      alt: "Specchio circolare incorniciato, natura morta",
      ratio: 2 / 3,
    },
  ],
  // S.04 — Materia (3 materials)
  materia: [
    {
      id: "cemento",
      src: p("bakr-09-rebar-macro.jpg"),
      alt: "Macro di tondino in ferro che esce dal cemento — Cemento",
      ratio: 2 / 3,
    },
    {
      id: "acciaio",
      src: p("bakr-02-steel-shaft.jpg"),
      alt: "Vano scala in acciaio nero — Acciaio",
      ratio: 2 / 3,
    },
    {
      id: "vetro",
      src: p("bakr-08-mirror-circle.jpg"),
      alt: "Specchio circolare con cornice metallica — Vetro",
      ratio: 2 / 3,
    },
  ],
  // legacy slots kept for backwards-compat (not used by current page)
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
