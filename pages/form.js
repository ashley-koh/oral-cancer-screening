$(document).ready(() => {
  questions.forEach((question, index) => {
    // add title
    $("#diagnosis-form").append(`
			<div class="row">
				<span class="title">${index + 1}. ${question.text}</span>
			</div>
			<div class="row" style="margin-bottom: 1.5em;">
				<div id="question${index}"></div>
			</div>  
		`);

    // add options
    question.options.forEach((option, optIndex) => {
      $(`#diagnosis-form #question${index}`).append(`
				<label class="radio-inline"><input type="radio" id="${index}-${optIndex}" onchange="onRadioClick(this.value)" value="${index}-${optIndex}">${option.text}</label>
			`);
    });
  });

  $("#diagnosis-form").append(`
		<div class="row">
			<button type="button" class="btn btn-dark" onclick="onDiagnoseClick()">Diagnose</button>
		</div>
	`);
});

function onRadioClick(value) {
  let option = value.split("-").map((index) => parseInt(index)); // Convert into array

  $(`#${option[0]}-${questions[option[0]].active}`).prop("checked", false); // Unselect previous answer

  questions[option[0]].active = option[1]; // Select currently checked answer
}

function onDiagnoseClick() {
  let errors = [];

  questions.map((question, index) => {
    if (question.active > -1) {
      // if question is answered calculate number of times each disease is called
      question.options[question.active].result.forEach((diseaseIndex) => {
        diseases[diseaseIndex].value += 1;
      });
    } else {
      // if question isn't answered
      errors.push(index);
    }
  });

  console.log("diseases", diseases);
  console.log("errors", errors);

  // remove past alert and results
  $(".alert").alert("close");
  $(".card").remove();

  // show error msgs
  if (errors.length !== 0) {
    // add alert
    $("#diagnosis-form").prepend(`
		<div class="alert alert-warning alert-dismissible fade show" role="alert">
			<strong>Wait!</strong> Make sure all fields are filled in.
			<button type="button" class="close" data-dismiss="alert" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
		`);
  } else {
    let diseaseListHtml = "";

    let diseaseList = diseases.slice().sort((a, b) => b.value - a.value);

    let benchmark = diseaseList[0].value;

    diseaseList.forEach((disease) => {
      if (disease.value === benchmark) {
        diseaseListHtml += `<li>${disease.name}</li>`;
      }
    });

    $("#diagnosis-form").prepend(`
			<div class="card">
				<h5 class="card-header">
					Diagnosis Results
				</h5>
				<div class="card-body">
					<h5 class="card-title">Potential Disease(s):</h5>
					<ul>
						${diseaseListHtml}
					</ul>
				</div>
			</div>
		`);
  }

  $("html,body").animate({ scrollTop: 0 }, "slow");
}

function routeToHome() {
  if (config === "production") {
    location.href =
      "https://ashley-koh.github.io/oral-cancer-screening/index.html";
  } else {
    location.href = "/index.html";
  }
}
