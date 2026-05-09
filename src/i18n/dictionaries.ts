export type Locale = "it" | "en";

export const locales: Locale[] = ["it", "en"];
export const defaultLocale: Locale = "it";

type Dict = {
  nav: {
    spaces: string;
    services: string;
    info: string;
    book: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    titleAlt: string;
    sub: string;
    location: string;
    scroll: string;
  };
  manifesto: {
    eyebrow: string;
    line1: string;
    line2: string;
    line3: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    captions: { title: string; body: string }[];
  };
  useCases: {
    eyebrow: string;
    title: string;
    items: { num: string; label: string; body: string }[];
  };
  specs: {
    eyebrow: string;
    title: string;
    rows: { label: string; value: string }[];
    note: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { q: string; a: string }[];
  };
  cta: {
    eyebrow: string;
    title: string;
    button: string;
    sub: string;
  };
  footer: {
    address: string[];
    contact: string[];
    socials: { label: string; href: string }[];
    legal: string;
  };
  booking: {
    title: string;
    sub: string;
    back: string;
    form: {
      name: string;
      email: string;
      phone: string;
      company: string;
      type: string;
      typeOptions: { value: string; label: string }[];
      date: string;
      timeStart: string;
      timeEnd: string;
      crew: string;
      equipment: string;
      notes: string;
      submit: string;
      submitting: string;
      successTitle: string;
      successBody: string;
      errorTitle: string;
      errorBody: string;
      requiredHint: string;
    };
  };
  info: {
    title: string;
    sub: string;
    back: string;
    sections: { title: string; body: string[] }[];
  };
  marquee: string[];
};

export const dictionaries: Record<Locale, Dict> = {
  it: {
    nav: {
      spaces: "Spazio",
      services: "Usi",
      info: "Info",
      book: "Prenota",
    },
    hero: {
      eyebrow: "Spazio BAKR · Studio · Loft",
      title: "Cemento.",
      titleAlt: "Acciaio.",
      sub: "Volume nudo. 240 m² su un piano. Cemento armato, acciaio, vetro.",
      location: "Milano · IT · 45.4642 N",
      scroll: "Scorri",
    },
    manifesto: {
      eyebrow: "S.01 — Manifesto",
      line1: "Una stanza nuda.",
      line2: "Cemento armato, acciaio, vetro.",
      line3: "Niente decorazione — solo luce, materia, ombra.",
    },
    gallery: {
      eyebrow: "S.02 — Spazio",
      title: "Volume, atmosfera, dettaglio.",
      captions: [
        {
          title: "Volume",
          body: "240 m² su un piano. Cemento armato a vista, soffitti 4,5 m, struttura industriale.",
        },
        {
          title: "Atmosfera",
          body: "Luce calda controllata. Strutture pesanti, ombre lunghe, isolamento acustico.",
        },
        {
          title: "Dettaglio",
          body: "Finiture in marmo nero, acciaio brunito, vetro. Cura sartoriale di ogni superficie.",
        },
      ],
    },
    useCases: {
      eyebrow: "S.03 — Usi",
      title: "Uno spazio, molte possibilità.",
      items: [
        {
          num: "01",
          label: "Editoriale",
          body: "Servizi moda, ritratti, copertine.",
        },
        {
          num: "02",
          label: "Brand content",
          body: "Still life, lookbook, lanci di prodotto.",
        },
        {
          num: "03",
          label: "Video & film",
          body: "Set ampi, alimentazione 16A, silenzio acustico.",
        },
        {
          num: "04",
          label: "Eventi privati",
          body: "Cene, presentazioni, gathering intimi fino a 60 persone.",
        },
      ],
    },
    specs: {
      eyebrow: "S.04 — Materia",
      title: "Cemento. Acciaio. Vetro.",
      rows: [
        { label: "Cemento", value: "Pareti grezze, pavimento lucido. Texture viva." },
        { label: "Acciaio", value: "Strutture nere, dettagli industriali, riflessi opachi." },
        { label: "Vetro", value: "Vetrate a tutta altezza. Luce che entra e disegna." },
      ],
      note: "Lo spazio è la sua materia.",
    },
    faq: {
      eyebrow: "S.05 — Domande",
      title: "Risposte rapide.",
      items: [
        {
          q: "Come si prenota lo spazio?",
          a: "Compila il form di prenotazione: ti rispondiamo entro 24 ore con disponibilità e preventivo.",
        },
        {
          q: "Cosa è incluso nella tariffa base?",
          a: "Uso esclusivo dello spazio, energia, internet, climatizzazione, una persona di studio in supporto. Attrezzatura tecnica su richiesta.",
        },
        {
          q: "Avete una policy di cancellazione?",
          a: "Cancellazione gratuita fino a 7 giorni prima. Tra 7 e 2 giorni: 50%. Oltre: tariffa intera.",
        },
      ],
    },
    cta: {
      eyebrow: "S.06 — Disponibilità",
      title: "Tieni il tuo set.",
      button: "Richiedi una data",
      sub: "Risposta entro 24 ore.",
    },
    footer: {
      address: ["Spazio BAKR", "Via — , 20100 Milano · IT"],
      contact: ["hello@spaziobakr.com", "+39 — — —"],
      socials: [
        { label: "Instagram", href: "https://instagram.com" },
        { label: "Vimeo", href: "https://vimeo.com" },
      ],
      legal: "© 2026 Spazio BAKR. Tutti i diritti riservati.",
    },
    booking: {
      title: "Prenota lo spazio",
      sub: "Raccontaci il progetto: ti rispondiamo entro 24 ore con disponibilità, preventivo e dettagli logistici.",
      back: "Torna alla home",
      form: {
        name: "Nome e cognome",
        email: "Email",
        phone: "Telefono",
        company: "Brand · Studio · Agenzia",
        type: "Tipo di utilizzo",
        typeOptions: [
          { value: "editorial", label: "Editoriale / moda" },
          { value: "brand", label: "Brand content" },
          { value: "video", label: "Video / film" },
          { value: "podcast", label: "Podcast / interviste" },
          { value: "event", label: "Evento privato" },
          { value: "workshop", label: "Workshop / talk" },
          { value: "other", label: "Altro" },
        ],
        date: "Data desiderata",
        timeStart: "Inizio",
        timeEnd: "Fine",
        crew: "Persone in shooting",
        equipment: "Attrezzatura aggiuntiva richiesta",
        notes: "Note · brief · link riferimenti",
        submit: "Invia richiesta",
        submitting: "Invio in corso…",
        successTitle: "Richiesta inviata.",
        successBody: "Ti rispondiamo entro 24 ore con disponibilità e preventivo.",
        errorTitle: "Qualcosa è andato storto.",
        errorBody: "Riprova tra qualche istante o scrivi a hello@spaziobakr.com.",
        requiredHint: "I campi con * sono obbligatori.",
      },
    },
    info: {
      title: "Info pratiche",
      sub: "Tutto quello che serve sapere prima di prenotare.",
      back: "Torna alla home",
      sections: [
        {
          title: "Come arrivare",
          body: [
            "Lo spazio si trova in zona —, Milano. Accesso comodo da Tangenziale Est e da Mappa MM Linea —.",
            "Carico/scarico con ingresso dedicato a livello strada, parcheggio interno per 4 veicoli.",
          ],
        },
        {
          title: "Tariffe",
          body: [
            "Mezza giornata · 4 ore — su richiesta",
            "Giornata intera · 8 ore — su richiesta",
            "Multi-day / produzioni — preventivo personalizzato",
            "Eventi serali — listino dedicato.",
          ],
        },
        {
          title: "Cosa è incluso",
          body: [
            "Uso esclusivo dell'intero spazio · 240 m² su un piano.",
            "Energia, internet 1 Gbps, climatizzazione, illuminazione di servizio.",
            "Una persona di studio in supporto durante tutto il booking.",
            "Wi-Fi guest, area trucco, lounge, cucina di servizio.",
          ],
        },
        {
          title: "Attrezzatura su richiesta",
          body: [
            "Ciclorama bianco · 6 × 4 m",
            "Fondali in tela · nero, grigio, bianco",
            "Set illuminazione — Aputure, Profoto",
            "Treppiedi, slider, monitor regia.",
          ],
        },
        {
          title: "Regolamento",
          body: [
            "Vietato fumare all'interno. Niente fuoco libero senza autorizzazione.",
            "Catering esterno consentito; lasciamo lo spazio come l'abbiamo trovato.",
            "Animali ben accetti, su richiesta.",
          ],
        },
      ],
    },
    marquee: [
      "Spazio BAKR",
      "Loft 240 m²",
      "Cemento · Acciaio · Vetro",
      "Milano",
      "Studio · Set · Stage",
    ],
  },
  en: {
    nav: {
      spaces: "Space",
      services: "Uses",
      info: "Info",
      book: "Book",
    },
    hero: {
      eyebrow: "Spazio BAKR · Studio · Loft",
      title: "Concrete.",
      titleAlt: "Steel.",
      sub: "Bare volume. 240 m² on one floor. Reinforced concrete, steel, glass.",
      location: "Milan · IT · 45.4642 N",
      scroll: "Scroll",
    },
    manifesto: {
      eyebrow: "S.01 — Manifesto",
      line1: "A bare room.",
      line2: "Reinforced concrete, steel, glass.",
      line3: "No decoration — just light, matter, shadow.",
    },
    gallery: {
      eyebrow: "S.02 — Space",
      title: "Volume, atmosphere, detail.",
      captions: [
        {
          title: "Volume",
          body: "240 m² on one floor. Exposed reinforced concrete, 4.5 m ceilings, industrial structure.",
        },
        {
          title: "Atmosphere",
          body: "Controlled warm light. Heavy structures, long shadows, acoustic isolation.",
        },
        {
          title: "Detail",
          body: "Black marble finishings, brunished steel, glass. Sartorial care of every surface.",
        },
      ],
    },
    useCases: {
      eyebrow: "S.03 — Uses",
      title: "One space, many uses.",
      items: [
        {
          num: "01",
          label: "Editorial",
          body: "Fashion, portrait, covers.",
        },
        {
          num: "02",
          label: "Brand content",
          body: "Still life, lookbooks, product launches.",
        },
        {
          num: "03",
          label: "Video & film",
          body: "Wide sets, 16A power, acoustic silence.",
        },
        {
          num: "04",
          label: "Private events",
          body: "Dinners, presentations, intimate gatherings up to 60 guests.",
        },
      ],
    },
    specs: {
      eyebrow: "S.04 — Matter",
      title: "Concrete. Steel. Glass.",
      rows: [
        { label: "Concrete", value: "Raw walls, polished floor. Living texture." },
        { label: "Steel", value: "Black frames, industrial details, matte sheen." },
        { label: "Glass", value: "Floor-to-ceiling windows. Light enters and draws." },
      ],
      note: "The space is its matter.",
    },
    faq: {
      eyebrow: "S.05 — Questions",
      title: "Quick answers.",
      items: [
        {
          q: "How do I book the space?",
          a: "Fill the booking form — we reply within 24 hours with availability and a quote.",
        },
        {
          q: "What's included in the base rate?",
          a: "Exclusive use of the space, energy, internet, climate, one studio assistant. Technical gear available on request.",
        },
        {
          q: "What's your cancellation policy?",
          a: "Free cancellation up to 7 days before. Between 7 and 2 days: 50%. Less than that: full rate.",
        },
      ],
    },
    cta: {
      eyebrow: "S.06 — Availability",
      title: "Hold your set.",
      button: "Request a date",
      sub: "Reply within 24 hours.",
    },
    footer: {
      address: ["Spazio BAKR", "Via — , 20100 Milan · IT"],
      contact: ["hello@spaziobakr.com", "+39 — — —"],
      socials: [
        { label: "Instagram", href: "https://instagram.com" },
        { label: "Vimeo", href: "https://vimeo.com" },
      ],
      legal: "© 2026 Spazio BAKR. All rights reserved.",
    },
    booking: {
      title: "Book the space",
      sub: "Tell us about the project — we reply within 24 hours with availability, a quote and logistics.",
      back: "Back to home",
      form: {
        name: "Name & surname",
        email: "Email",
        phone: "Phone",
        company: "Brand · Studio · Agency",
        type: "Type of use",
        typeOptions: [
          { value: "editorial", label: "Editorial / fashion" },
          { value: "brand", label: "Brand content" },
          { value: "video", label: "Video / film" },
          { value: "podcast", label: "Podcast / interview" },
          { value: "event", label: "Private event" },
          { value: "workshop", label: "Workshop / talk" },
          { value: "other", label: "Other" },
        ],
        date: "Preferred date",
        timeStart: "Start",
        timeEnd: "End",
        crew: "People on set",
        equipment: "Extra equipment requested",
        notes: "Notes · brief · references",
        submit: "Send request",
        submitting: "Sending…",
        successTitle: "Request sent.",
        successBody: "We'll reply within 24 hours with availability and a quote.",
        errorTitle: "Something went wrong.",
        errorBody: "Please try again or write to hello@spaziobakr.com.",
        requiredHint: "Fields marked with * are required.",
      },
    },
    info: {
      title: "Practical info",
      sub: "Everything you need to know before booking.",
      back: "Back to home",
      sections: [
        {
          title: "How to reach us",
          body: [
            "The space is located in — district, Milan. Easy access from the eastern ring road and metro line —.",
            "Loading dock with dedicated street-level entrance, internal parking for 4 vehicles.",
          ],
        },
        {
          title: "Rates",
          body: [
            "Half day · 4 hours — on request",
            "Full day · 8 hours — on request",
            "Multi-day / productions — custom quote",
            "Evening events — dedicated rate card.",
          ],
        },
        {
          title: "What's included",
          body: [
            "Exclusive use of the entire space · 240 m² on one floor.",
            "Energy, internet 1 Gbps, climate, service lighting.",
            "One studio assistant on duty for the whole booking.",
            "Guest Wi-Fi, make-up area, lounge, service kitchen.",
          ],
        },
        {
          title: "Equipment on request",
          body: [
            "White cyclorama · 6 × 4 m",
            "Cloth backdrops · black, grey, white",
            "Lighting kits — Aputure, Profoto",
            "Tripods, sliders, control monitors.",
          ],
        },
        {
          title: "House rules",
          body: [
            "No smoking inside. No open flame without prior consent.",
            "External catering allowed; the space goes back as we found it.",
            "Pets welcome, on request.",
          ],
        },
      ],
    },
    marquee: [
      "Spazio BAKR",
      "Loft 240 m²",
      "Concrete · Steel · Glass",
      "Milan",
      "Studio · Set · Stage",
    ],
  },
};
