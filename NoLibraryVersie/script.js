const quizContainer = document.getElementById("quiz"); // link met de div "quiz"
const resultsContainer = document.getElementById("results"); // Link resultsContainer aan de div "results"
const submitButton = document.getElementById("submit"); // link submitButton aan button "submit"
const myQuestions = [ // Mijn vragen
    {
        question: "Heb jij een pechhulp verzekering?",
        answers: {
            "Ja": "10",
            "Nee": "20",
            "Misschien": "30",
            "Een beetje": "40"
        }
    },
    {
        question: "Heb jij een pechhulp verzekering?",
        answers: {
            "Ja": "10",
            "Nee": "20",
            "Misschien": "30",
            "Een beetje": "40"
        }
    },
    {
        question: "Heb jij een pechhulp verzekering?",
        answers: {
            "Ja": "10",
            "Nee": "20",
            "Misschien": "30",
            "Een beetje": "40"
        }
    }
];

function buildQuiz(){
    // HTML output aanmaken
    const output = [];

    // Voor elke vraag
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

        // we'll want to store the list of answer choices
        const answers = [];

    // Voor elk antwoord
    for(letter in currentQuestion.answers){

        // toevoegen van radio buttons aan de antwoorden
        answers.push(
            `<label>
            <input type="radio" name="question${questionNumber}" value="${currentQuestion.answers[letter]}">
            ${letter}
            
          </label>`
        );
    }

    // Toevoegen van vragen en antwoorden aan de output
    output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
    );
}
);

    // Plaatsen van de output in html op de website
    quizContainer.innerHTML = output.join('');
}

function showResults(){

    // Vergaren van de antwoorden in de verschillende containers
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // Bijhouden van de antwoorden en de totale scoren
    let numTotal = 0;
    let allAnswers = [];

    // Voor elke vraag het antwoord
    myQuestions.forEach( (currentQuestion, questionNumber) => {

        // Welk antwoord is gekozen
        const answerContainer = answerContainers[questionNumber];
    const selector = 'input[name=question'+questionNumber+']:checked';
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // Zet alle antwoorden in de array allAnswers
    allAnswers.push(userAnswer);
    console.log(allAnswers);
});
    //allAnswers optellen en plaatsen in numTotal
    for ( var i = 0; i < allAnswers.length; i++ ){
        numTotal += parseInt( allAnswers[i]);
    }

    // Laat het resultaat zien
    console.log(numTotal);
    resultsContainer.innerHTML = numTotal;

    
    //maak ranks bij verschillende hoogten scores
    if (numTotal <= 30) {
        resultsContainer.innerHTML = "Ga ff meer losbreken";
    }
    
    else if(numTotal >= 30 && numTotal <= 80) {
        resultsContainer.innerHTML = "Lekker op weg pik";
    }
    
    else if (numTotal >= 80) {
        resultsContainer.innerHTML = "Losbreek koning +1";
    }
}


buildQuiz(); // Laad in de quiz

submitButton.addEventListener("click", showResults); // Laat resultaten zien wanneer er op de submit button wordt gedrukt
