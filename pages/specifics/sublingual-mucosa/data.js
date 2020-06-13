let diseases = [
  { name: "Leukoplakia", value: 0 }, // 0
];

// results correspond to index of diesease above^

let questions = [
  {
    text: "Base?",
    options: [
      { text: "Purulent", result: [] },
      { text: "Clean", result: [] },
      { text: "Cratered", result: [] },
    ],
    active: -1,
  },

  {
    text: "Symmetry?",
    options: [
      { text: "Symmetrical", result: [] },
      { text: "Asymmetrical", result: [] },
    ],
    active: -1,
  },

  {
    text: "Edge?",
    options: [
      { text: "Rolled", result: [] },
      { text: "Inflamed", result: [] },
    ],
    active: -1,
  },

  {
    text: "Colour?",
    options: [
      { text: "Whitish", result: [0] },
      { text: "Red", result: [] },
      { text: "Yellowish", result: [] },
      { text: "Mixed (red and white)", result: [] },
    ],
    active: -1,
  },

  {
    text: "Size?",
    options: [
      { text: "Large (larger than 1cm)", result: [] },
      { text: "Medium (0.4 - 0.8cm)", result: [] },
      { text: "Small (Less than 0.4 cm)", result: [] },
    ],
    active: -1,
  },

  {
    text: "Shape?",
    options: [
      { text: "Round", result: [] },
      { text: "Ill-defined", result: [0] },
    ],
    active: -1,
  },

  {
    text: "Consistency?",
    options: [
      { text: "Removable", result: [] },
      { text: "Soft", result: [] },
      { text: "Hard", result: [] },
      { text: "Adherent", result: [0] },
    ],
    active: -1,
  },

  {
    text: "Surface?",
    options: [
      { text: "Nodular/Verrucous", result: [0] },
      { text: "Depressed", result: [] },
      { text: "Sesslie", result: [] },
      { text: "Flat", result: [] },
      { text: "Pedunculated", result: [] },
      { text: "Indurated", result: [] },
      { text: "Irregular", result: [0] },
    ],
    active: -1,
  },

  {
    text: "Pattern of Growth?",
    options: [
      { text: "Burrowed (Endophytic)", result: [] },
      { text: "Raised", result: [0] },
    ],
    active: -1,
  },
];
