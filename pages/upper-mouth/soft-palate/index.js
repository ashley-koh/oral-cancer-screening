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
    text: "What colour is the palate?",
    options: [
      { text: "Whitish", result: [ 0, 1, 2 ] },
      { text: "Red", result: [ 2, 3 ] },
      { text: "Yellowish", result: [] },
      { text: "Mixed (red and white)", result: [ 4, 1, 2 ] }
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
      { text: "Symmetrical", result: [ 1 ] },
      { text: "Asymmetrical", result: [] }
    ],
    active: -1
  },

  {
    text: "Edge?",
    options: [
      { text: "Rolled", result: [ 2 ] },
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
      { text: "Ill-defined", result: [ 0, 1, 2, 3, 4 ] }
    ],
    active: -1
  },

  {
    text: "Consistency?",
    options: [
      { text: "Soft", result: [] },
      { text: "Hard", result: [ 1, 2 ] }
    ],
    active: -1
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
    ],
    active: -1
  },

  {
    text: "Pattern of growth?",
    options: [
      { text: "Ulcerated", result: [] },
      { text: "Raised", result: [ 0 ] }
    ],
    active: -1
  }
]

$(document).ready(() => {

  questions.forEach( (question, index) => {
  
    // add title
    $("#diagnosis-form").append(`
      <div class="row">
        <span class="title">${question.text}</span>
      </div>
      <div class="row" style="margin-bottom: 1.5em;">
        <div id="question${index}"></div>
      </div>  
    `)

    // add options
    question.options.forEach( (option, optIndex) => {
      $(`#diagnosis-form #question${index}`).append(`
        <label class="radio-inline"><input type="radio" id="${index}-${optIndex}" onchange="onRadioClick(this.value)" value="${index}-${optIndex}">${option.text}</label>
      `)
    })
  
  });

  $('#diagnosis-form').append(`
    <div class="row">
      <button type="button" class="btn btn-dark">Diagnose</button>
    </div>
  `)
})

function onRadioClick(value) {

  let option = value.split("-").map( index => parseInt(index) ); // Convert into array

  $(`#${option[0]}-${questions[option[0]].active}`).prop( "checked", false ); // Unselect previous answer

  questions[option[0]].active = option[1]; // Select currently checked answer
}