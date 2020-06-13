let diseases = [
  { name: "Oral Submucous Fibrosis", value: 0 }, // 0
  { name: "Plaque Lichen Planus", value: 0 }, // 1
  { name: "Chronic Candidosis", value: 0 }, // 2
  { name: "Oral Submucous Fibrosis (later stage)", value: 0 }, // 3
  { name: "Dyskeratosis Congenita", value: 0 }, // 4
  { name: "Leukoplakia", value: 0 }, // 5
  { name: "Atrophic Lichen Planus", value: 0 }, // 6
  { name: "Desquamative Lichen Planus", value: 0 }, // 7
  { name: "Ulcerated/Erosive Lichen Planus", value: 0 }, // 8
  { name: "Erythroleukoplakia", value: 0 }, // 9
  { name: "Oral Submucous Fibrosis (earlier stage)", value: 0 }, // 10
  { name: "Reticular Lichen Planus", value: 0 }, // 11
  { name: "Chronic Cutaneous Lupus Erythematosus (CCLE)", value: 0 }, // 12
  { name: "Oral Submucous Fibrosis (later stage/scarring)", value: 0 }, // 13
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
      { text: "Symmetrical", result: [0] },
      { text: "Asymmetrical", result: [] },
    ],
    active: -1,
  },

  {
    text: "Edge?",
    options: [
      { text: "Rolled", result: [0] },
      { text: "Inflamed", result: [] },
    ],
    active: -1,
  },

  {
    text: "Colour?",
    options: [
      { text: "Whitish", result: [1, 2, 3, 4, 5] },
      { text: "Red", result: [6, 7] },
      { text: "Yellowish", result: [8] },
      { text: "Mixed (red and white)", result: [9, 10, 2, 11, 8, 12] },
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
      { text: "Ill-defined", result: [12, 7, 1, 6, 11, 2, 5, 4, 0, 9] },
    ],
    active: -1,
  },

  {
    text: "Consistency?",
    options: [
      { text: "Removable", result: [] },
      { text: "Soft", result: [] },
      { text: "Hard", result: [13, 1] },
      { text: "Adherent", result: [1, 2, 5] },
    ],
    active: -1,
  },

  {
    text: "Surface?",
    options: [
      { text: "Ulcerated", result: [12] },
      { text: "Reticular", result: [11, 8] },
      { text: "Nodular/Verrucous", result: [5, 2] },
      { text: "Depressed", result: [] },
      { text: "Sesslie", result: [] },
      { text: "Flat", result: [7, 2] },
      { text: "Pedunculated", result: [] },
      { text: "Indurated", result: [0] },
      { text: "Irregular", result: [9, 4, 5, 2, 8] },
      { text: "Striae", result: [12] },
    ],
    active: -1,
  },

  {
    text: "Pattern of Growth?",
    options: [
      { text: "Burrowed (Endophytic)", result: [] },
      { text: "Raised", result: [5, 4, 2, 11, 1] },
    ],
    active: -1,
  },
];
