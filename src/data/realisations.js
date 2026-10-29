// Réalisations — completed jobs, evidenced by photographs.
//
// A Réalisation is one job, for one client, at one location, delivering one or
// more prestations. See CONTEXT.md.
//
// Grouping, dates and durations are derived from the EXIF capture timestamps and
// GPS of the camera originals — NOT from the folder names they arrived in, which
// are prestation categories and split a single job across two directories.
//
// `duration` is only set where the photo span genuinely brackets the work
// (an "avant" at the start, an "après" at the end). Where every frame was shot
// in one sweep at the end of the job, the span measures the photography rather
// than the job, and the field is omitted rather than guessed.
//
// Only curated frames appear here — 32 of 72. The omissions are deliberate;
// read docs/adr/0004 before adding to this file.

export const realisations = [
  {
    slug: "moussan-2026-10-17",
    commune: "Moussan",
    dept: "Aude (11)",
    date: "2026-10-17",
    dateLabel: "Octobre 2026",
    prestations: [{ label: "Fin de chantier", slug: "fin-de-chantier" }],
    duration: "5 h 12 sur site",
    summary:
      "Maison rénovée à Moussan : décapage à la monobrosse des sols en grès cérame poli effet marbre et grès mat, retrait des projections de plâtre et de peinture, dépoussiérage de la charpente apparente et remise à neuf des rails de baies vitrées.",
    media: [
      {
        type: "single",
        file: "sejour-marbre-apres",
        feature: true,
        caption:
          "Séjour et cuisine livrés : grès cérame poli effet marbre décapé sans trace, façades et plinthes dépoussiérées.",
      },
      {
        type: "pair",
        avant: "rail-baie-avant",
        apres: "rail-baie-apres",
        caption:
          "Rails de baie vitrée obstrués par la terre et les aiguilles de pin — aspirés, brossés et décrassés à cœur.",
      },
      {
        type: "single",
        file: "monobrosse-materiel",
        caption:
          "Matériel déployé sur site : monobrosse et aspirateur industriel eau et poussière pour traiter les sols en profondeur.",
      },
      {
        type: "single",
        file: "sejour-escalier-apres",
        caption:
          "Vue d'ensemble du séjour au pied de l'escalier après élimination du voile de laitance et des résidus de chantier.",
      },
      {
        type: "single",
        file: "charpente-plafond-apres",
        caption:
          "Poutres apparentes, plafonds et luminaires dépoussiérés avant remise des clés.",
      },
      {
        type: "single",
        file: "sol-gres-gris-apres",
        caption:
          "Seconde pièce après passage de la monobrosse : carrelage grand format assaini et uniforme.",
      },
      {
        type: "single",
        file: "plinthes-finition-apres",
        caption:
          "Jonctions sols et murs reprises dans le détail, débarrassées des gouttes de peinture.",
      },
      {
        type: "single",
        file: "sol-projections-avant",
        caption:
          "État initial du carrelage avant notre intervention : projections de plâtre, taches de peinture et poussière de ponçage.",
      },
    ],
  },
  {
    slug: "alignan-du-vent-2026-07-09",
    commune: "Alignan-du-Vent",
    dept: "Hérault (34)",
    date: "2026-07-09",
    dateLabel: "Juillet 2026",
    prestations: [{ label: "Fin de chantier", slug: "fin-de-chantier" }],
    summary:
      "Rénovation haut de gamme : murs en pierre, cuisine sur mesure et carreaux de ciment. Filmé lors de notre visite avant travaux, puis nettoyage fin de chantier complet à l'autolaveuse avant remise des clés.",
    media: [
      {
        type: "single",
        file: "sejour-autolaveuse",
        feature: true,
        caption:
          "Autolaveuse en action sur le séjour — pierre apparente et carrelage rendus impeccables.",
      },
      {
        type: "video",
        file: "chantier-avant-1",
        caption:
          "Le chantier filmé lors de notre visite, avant l'intervention.",
      },
      {
        type: "video",
        file: "chantier-avant-2",
        caption:
          "Suite de la visite : gravats, protections et résidus à évacuer.",
      },
      {
        type: "video",
        file: "resultat",
        caption: "Le résultat, une fois le chantier livré.",
      },
      {
        type: "pair",
        avant: "vitre-avant",
        apres: "vitre-apres",
        caption:
          "Traces de calcaire et résidus de chantier sur les vitrages — traitement anti-calcaire et finition sans trace.",
      },
      {
        type: "single",
        file: "wc-apres",
        caption:
          "Carreaux de ciment détachés et protégés, sanitaires désinfectés.",
      },
      {
        type: "single",
        file: "cuisine-apres",
        caption: "Traces de peinture retirées sans abîmer les finitions.",
      },
      {
        type: "single",
        file: "plan-travail-apres",
        caption: "Plan de travail débarrassé de la poussière de ponçage.",
      },
      {
        type: "single",
        file: "sejour-apres",
        caption: "Séjour prêt à recevoir — sols lavés, mobilier essuyé.",
      },
      {
        type: "single",
        file: "finitions-apres",
        caption: "Jusqu'aux plinthes et aux angles de meubles.",
      },
      {
        type: "single",
        file: "couloir-apres",
        caption: "Traitement de la remontée de laitance sur grès cérame.",
      },
      {
        type: "single",
        file: "fenetre-apres",
        caption: "Menuiseries et vitrages nettoyés à cœur.",
      },
    ],
  },
  {
    slug: "cers-2026-04-30",
    commune: "Cers",
    dept: "Hérault (34)",
    date: "2026-04-30",
    dateLabel: "Avril 2026",
    prestations: [{ label: "Nettoyage haute pression (Kärcher)" }],
    duration: "2 h 49 sur site",
    summary:
      "Terrasse en béton envahie par les mousses et la végétation, reprise au nettoyeur haute pression.",
    media: [
      {
        type: "mi-parcours",
        file: "terrasse-mi-parcours",
        feature: true,
        caption:
          "Une seule passe au nettoyeur haute pression. La limite parle d'elle-même.",
      },
      {
        type: "single",
        file: "terrasse-avant",
        caption: "Mousses, terre et végétation incrustées dans le béton.",
      },
    ],
  },
  {
    slug: "ginestas-2025-10-28",
    commune: "Ginestas",
    dept: "Aude (11)",
    date: "2025-10-28",
    dateLabel: "Octobre 2025",
    prestations: [{ label: "Fin de chantier", slug: "fin-de-chantier" }],
    duration: "3 h 13 sur site",
    summary:
      "Appartement neuf livré après travaux : voile de laitance sur les sols, projections de plâtre et vitrages à reprendre.",
    media: [
      {
        type: "single",
        file: "sejour-apres",
        feature: true,
        caption:
          "Livraison du chantier : sols, cuisine et menuiseries prêts à habiter.",
      },
      {
        type: "single",
        file: "carrelage-avant",
        caption:
          "Projections de plâtre et de colle après la pose du carrelage.",
      },
      {
        type: "single",
        file: "laitance-avant",
        caption: "Voile de laitance sur toute la surface avant traitement.",
      },
      {
        type: "single",
        file: "fenetre-apres",
        caption:
          "Vitrages nettoyés sans trace — la lumière du sud entre enfin.",
      },
    ],
  },
  {
    slug: "coursan-2025-10-27",
    commune: "Coursan",
    dept: "Aude (11)",
    date: "2025-10-27",
    dateLabel: "Octobre 2025",
    prestations: [
      { label: "Ménage" },
      { label: "Fin de chantier", slug: "fin-de-chantier" },
    ],
    duration: "2 h 50 sur site",
    summary:
      "Appartement ancien repris de fond en comble après travaux : parquet encrassé, sanitaires entartrés et cuisine à dégraisser.",
    media: [
      {
        type: "pair",
        avant: "parquet-avant",
        apres: "parquet-apres",
        feature: true,
        caption:
          "Parquet ancien sous la poussière de travaux — dépoussiéré, lavé et nourri.",
      },
      {
        type: "pair",
        avant: "douche-avant",
        apres: "douche-apres",
        caption:
          "Bac de douche entartré et encrassé — détartrage complet, joints compris.",
      },
      {
        type: "pair",
        avant: "plan-travail-avant",
        apres: "plan-travail-apres",
        caption:
          "Plan de travail incrusté de graisse — dégraissage et remise à blanc.",
      },
      {
        type: "single",
        file: "cuisine-apres",
        caption:
          "Cuisine entièrement dégraissée, meubles vidés et nettoyés intérieur comme extérieur.",
      },
    ],
  },
];
