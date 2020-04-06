let diseases = [
    { name: "Dyskeratosis Congenita", value: 0 },     // 0
    { name: "Leeukoplakia", value: 0 },        				// 1
    { name: "Chronic Candidosis", value: 0 },   			// 2
]

// results correspond to index of diesease above^

let questions = [

{
    text: "What colour is the dorsum?",
    options: [
    { text: "Whitish", result: [ 0, 1, 2 ] },
    { text: "Red", result: [] },
    { text: "Yellowish", result: [] },
    { text: "Mixed (red and white)", result: [ 2 ] }
    ],
    active: -1
},

{
    text: "How is the base like?",
    options: [
    { text: "Purulent", result: [] },
    { text: "Clean", result: [] },
    { text: "Cratered", result: [] }
    ],
    active: -1
},

{
    text: "Symmetry?",
    options: [
    { text: "Symmetrical", result: [] },
    { text: "Asymmetrical", result: [] }
    ],
    active: -1
},

{
    text: "Edge?",
    options: [
    { text: "Rolled", result: [] },
    { text: "Inflamed", result: [] }
    ],
    active: -1
},

{
    text: "Size?",
    options: [
    { text: "Large (Larger than 1cm)", result: [] },
    { text: "Medium (0.4 - 0.8cm)", result: [] },
    { text: "Small (Less than 0.4cm)", result: [] }
    ],
    active: -1
}, 

{
    text: "Shape?",
    options: [
    { text: "Round", result: [] },
    { text: "Ill-defined", result: [ 0, 1, 2 ] }
    ],
    active: -1
},

{
    text: "Consistency?",
    options: [
    { text: "Soft", result: [] },
    { text: "Hard", result: [] },
    { text: "Removable", result: [] },
    { text: "Adherent", result: [ 1, 2 ] },
    ],
    active: -1
},

{
    text: "Surface?",
    options: [
    { text: "Verrucous/Nodular", result: [ 1, 2 ] },
    { text: "Depressed", result: [] },
    { text: "Sesslie", result: [] },
    { text: "Flat", result: [ 2 ] },
    { text: "Pedunculated", result: [] },
    { text: "Indurated", result: [] },
    { text: "Irregular", result: [ 0, 1, 2 ] },
    ],
    active: -1
},

{
    text: "Pattern of growth?",
    options: [
    { text: "Burrowed", result: [] },
    { text: "Raised", result: [ 0, 1, 2 ] }
    ],
    active: -1
}
]