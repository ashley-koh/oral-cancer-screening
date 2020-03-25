const dieseases = [
  { name: "Dyskeratosis Congenita", value: 0 },         // 0
  { name: "Oral Submucous Fibrosis", value: 0 },        // 1
  { name: "Oral Squamous Cell Carcinoma", value: 0 },   // 2
  { name: "Erythroplakia", value: 0 },                  // 3
  { name: "Erythroleukoplakia", value: 0 },             // 4
]

// results correspond to index of diesease above^

const questions = [

  {
    text: "Colour?",
    options: [
      { text: "Whitish", result: [ 0, 1, 2 ] },
      { text: "Red", result: [ 2, 3 ] },
      { text: "Yellowish", result: [] },
      { text: "Mixed (red and white)", result: [ 4, 1, 2 ] }
    ]
  },
  
  {
    text: "Base?",
    options: [
      { text: "Purulent", result: [] },
      { text: "Clean", result: [] },
      { text: "Cratered", result: [] }
    ]
  },

  {
    text: "Symmetry?",
    options: [
      { text: "Symmetrical", result: [ 1 ] },
      { text: "Asymmetrical", result: [] }
    ]
  },

  {
    text: "Edge?",
    options: [
      { text: "Rolled", result: [ 2 ] },
      { text: "Inflamed", result: [] }
    ]
  },

  {
    text: "Size?",
    options: [
      { text: "Large (Larger than 1cm)", result: [] },
      { text: "Medium (0.4 - 0.8cm)", result: [] },
      { text: "Small (Less than 0.4cm)", result: [] }
    ]
  }, 

  {
    text: "Shape?",
    options: [
      { text: "Round", result: [] },
      { text: "Ill-defined", result: [ 0, 1, 2, 3, 4 ] }
    ]
  },

  {
    text: "Consistency?",
    options: [
      { text: "Soft", result: [] },
      { text: "Hard", result: [ 1, 2 ] }
    ]
  },

  {
    text: "Surface?",
    options: [
      { text: "Irregular", result: [ 0, 2, 4 ] },
      { text: "Depressed", result: [ 3 ] },
      { text: "Sessile", result: [] },
      { text: "Smooth", result: [ 3 ] },
      { text: "Pedunculated", result: [ 1, 2 ] },
      { text: "Indurated", result: [ 2 ] }
    ]
  },

  {
    text: "Pattern of growth?",
    options: [
      { text: "Ulcerated", result: [] },
      { text: "Raised", result: [ 0 ] }
    ]
  }
]