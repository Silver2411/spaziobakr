/**
 * Curated Unsplash photo IDs — Berlin-techno mood: brutalist concrete,
 * steel, glass, industrial light. Replace with the BAKR photoset on delivery.
 */
export type Photo = {
  id: string;
  src: string;
  alt: string;
  ratio: number;
  credit?: string;
};

const u = (id: string, w = 2400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`;

export const photos = {
  hero: {
    id: "hero",
    src: u("1758866555610-c44c609ae88b", 2800),
    alt: "Concrete hallway, steel railings, raking light",
    ratio: 16 / 9,
  },
  intro: {
    id: "intro",
    src: u("1769284010524-177ced162fc4", 2200),
    alt: "Brutalist geometric volume, raw concrete",
    ratio: 4 / 5,
  },
  gallery: [
    {
      id: "g1",
      src: u("1774021803974-ba9c7fa1b89a", 2200),
      alt: "Textured concrete wall, vertical streaks",
      ratio: 4 / 5,
    },
    {
      id: "g2",
      src: u("1774021803269-b1d0f92aaa07", 2200),
      alt: "Vast hall, concrete floor, overhead skylights",
      ratio: 3 / 4,
    },
    {
      id: "g3",
      src: u("1557226217-bf0da2478e6c", 2400),
      alt: "Brutalist corridor, vanishing point",
      ratio: 16 / 9,
    },
    {
      id: "g4",
      src: u("1774021803483-7b1aed1c93e5", 2000),
      alt: "Concrete staircase, steel railing",
      ratio: 4 / 5,
    },
    {
      id: "g5",
      src: u("1774021793109-761d6f39f889", 2200),
      alt: "Empty industrial space, full-height glass",
      ratio: 3 / 2,
    },
    {
      id: "g6",
      src: u("1774021793376-6dc8fb472358", 2000),
      alt: "Steel staircase against concrete",
      ratio: 4 / 5,
    },
  ],
  specs: {
    id: "specs",
    src: u("1774021803269-b1d0f92aaa07", 2200),
    alt: "Vast concrete hall with overhead skylights",
    ratio: 16 / 10,
  },
  cta: {
    id: "cta",
    src: u("1774021793109-761d6f39f889", 2400),
    alt: "Empty industrial volume with full-height glass",
    ratio: 21 / 9,
  },
} as const;

export type Photos = typeof photos;
