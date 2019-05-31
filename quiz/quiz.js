var quiz = (function () {


    var my = {}; // alles wat aan my wordt gehangen wordt public
    // ... all vars and functions are in this scope only
    // still maintains access to all globals

    var quizContainer = "quiz"; // default quiz
    var resultsContainer ="results"; // default results
    var submitButton = "submit"; // default submitbutton
    var myQuestions = []; // aanmaken van lege array waar json vragen worden ingezet
    var myResults = []; // aanmaken van lege array waar json results worden ingezet


    my.buildQuiz = function (path, quizDiv, resultsDiv, submitBtn) {
        // $.getScript(path, function () {
        // Als ze undefined zijn worden ze gevuld met de defaults.
        if (typeof quizDiv === 'undefined') { quizDiv = quizContainer; } // Neem defaults als het niet geconfigreerd is
        if (typeof resultsDiv === 'undefined') { resultsDiv = resultsContainer; } // Neem defaults als het niet geconfigreerd is
        if (typeof submitBtn === 'undefined') { submitBtn = submitButton; } // Neem defaults als het niet geconfigreerd is
        quizContainer = document.getElementById(quizDiv); // Instellen quiz div
        resultsContainer = document.getElementById(resultsDiv); // Instellen results div
        submitButton = document.getElementById(submitBtn); // Instellen submit button

        // inladen config file
        $.ajax({
            type: 'GET',
            url: path,
            dataType: 'json',
            success: function (data) {
                myQuestions = data.vragen;
                myResults = data.resultaten[0];
                build();
            },
            error: function(xhr, textStatus, errorThrown){
                alert('request failed ' + textStatus + errorThrown);
            }
        });

        submitButton.addEventListener("click", showResults); // Laat resultaten zien wanneer er op de submit button wordt gedrukt
            // HTML output aanmaken

            function build() {

                const output = [];

                //console.log(path);


                // Inladen van de vragen en antwoorden
                myQuestions.forEach(
                    (currentQuestion, questionNumber) => {

                        // we'll want to store the list of answer choices
                        const answers = [];

                        // Voor elk antwoord
                        for (letter in currentQuestion.answers) {

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

            function showResults() {

                // Vergaren van de antwoorden in de verschillende containers
                const answerContainers = quizContainer.querySelectorAll('.answers');

                // Bijhouden van de antwoorden en de totale scoren
                let numTotal = 0;
                let allAnswers = [];

                // Voor elke vraag het antwoord
                myQuestions.forEach((currentQuestion, questionNumber) => {

                    // Welk antwoord is gekozen
                    const answerContainer = answerContainers[questionNumber];
                    const selector = 'input[name=question' + questionNumber + ']:checked';
                    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

                    // Zet alle antwoorden in de array allAnswers
                    allAnswers.push(userAnswer);
                    console.log(allAnswers);
                });
                //allAnswers optellen en plaatsen in numTotal
                for (var i = 0; i < allAnswers.length; i++) {
                    numTotal += parseInt(allAnswers[i]);
                }

                // // Laat het resultaat zien
                // console.log(numTotal);
                // resultsContainer.innerHTML = numTotal;

                //maak ranks bij verschillende hoogten scores
                if (numTotal <= 80) {
                    resultsContainer.innerHTML = myResults["profiel1"];
                } else if (numTotal >= 80 && numTotal <= 160) {
                    resultsContainer.innerHTML = myResults["profiel2"];
                } else if (numTotal >= 200) {
                    resultsContainer.innerHTML = myResults["profiel3"];
                }
            }
        // }
        // );
    }




    return my;
}());