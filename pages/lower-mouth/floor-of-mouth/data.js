let diseases = [
	{ name: "Plaque Lichen Planus", value: 0 },               // 0
	{ name: "Dyskeratosis Congenita", value: 0 },        			// 1
	{ name: "Erythroplakia", value: 0 },   			            	// 2
	{ name: "Ulcerated/Erosive Lichen Planus", value: 0 },   	// 3
	{ name: "Reticular Lichen Planus", value: 0 },   					// 4
	{ name: "Erythroleukoplakia", value: 0 },   			    		// 5
	{ name: "Atrophic Lichen Planus", value: 0 },   					// 6
	{ name: "Oral Squamous Carcinoma", value: 0 }							// 7
]

// results correspond to index of diesease above^

let questions = [

	{
		text: "What colour is the lateral border?",
		options: [
		{ text: "Whitish", result: [ 0, 1 ] },
		{ text: "Red", result: [ 2 ] },
		{ text: "Yellowish", result: [ 3 ] },
		{ text: "Mixed (red and white)", result: [ 3, 4, 5, 6 ] }
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
		{ text: "Ill-defined", result: [ 0, 1, 2, 3, 4, 5, 6 ] }
		],
		active: -1
	},

	{
		text: "Consistency?",
		options: [
		{ text: "Soft", result: [] },
		{ text: "Hard", result: [ 0 ] },
		{ text: "Removable", result: [] },
		{ text: "Adherent", result: [ 0 ] },
		],
		active: -1
	},

	{
		text: "Surface?",
		options: [
			{ text: "Depressed", result: [ 2 ] },
			{ text: "Sesslie", result: [] },
			{ text: "Flat", result: [ 2 ] },
			{ text: "Pedunculated", result: [] },
			{ text: "Indurated", result: [] },
			{ text: "Irregular", result: [ 1, 5 ] },
			{ text: "Reticular", result: [ 3, 4, 6 ] },
			{ text: "Ulcerated", result: [ 3, 7 ] },
		],
		active: -1
	},

	{
		text: "Pattern of growth?",
		options: [
		{ text: "Burrowed", result: [] },
		{ text: "Raised", result: [ 0, 1, 4 ] }
		],
		active: -1
	}
]