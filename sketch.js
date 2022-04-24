let scores = {
    LINEAR: 0,
    CIRCLE: 0,
    QUADRATIC: 0,
    CUBIC: 0,
    EXPONENTIAL: 0,
    LOGARITHMIC: 0,
    INVERSE: 0,
    ABSOLUTE: 0,
    SINECOSINE: 0,
    TANGENT: 0,
    SPIRAL: 0,
    PUSSY: 0
}

let matchups = {
    LINEAR: 0,
    CIRCLE: 0,
    QUADRATIC: 0,
    CUBIC: 0,
    EXPONENTIAL: 0,
    LOGARITHMIC: 0,
    INVERSE: 0,
    ABSOLUTE: 0,
    SINECOSINE: 0,
    TANGENT: 0,
    SPIRAL: 0,
    PUSSY: 0
}


// Generate all questions

for (let i = 0; i < questions.length; i++) {
    let questionHTML = `<div class="QuestionContainer">
    <p class="Question" id="question ${i}">${i+1}: ${questions[i].question}</p>

    <div style="text-align:center;">
        <button class="button answer" onclick="selectAnswer(${i},0)" id="button ${i}/0">
            Hell no!
        </button>
        <button class="button answer" onclick="selectAnswer(${i},1)" id="button ${i}/1">
            Sorry, but no.</button>
        <button class="button answer" onclick="selectAnswer(${i},2)" id="button ${i}/2">
            I don't know?
        </button>
        <button class="button answer" onclick="selectAnswer(${i},3)" id="button ${i}/3">
            Well, yeah.
        </button>
        <button class="button answer" onclick="selectAnswer(${i},4)" id="button ${i}/4">
            Hell yeah!
        </button>
    </div>
    </div>`;


    document.getElementById("QuestionsContainer").innerHTML += questionHTML;

}

function letsGoScroll() {
    document.getElementById("scrollTarget")
        .scrollIntoView({behavior: 'smooth', block: 'start'});
}

function selectAnswer(question, option) {
    for (let i = 0; i < 5; i++) {
        document.getElementById(`button ${question}/${i}`)
            .className = "button answer";
    }
    document.getElementById(`button ${question}/${option}`)
            .className = "button answer selected";
    
    // Options range from 0 to 4, we want answers to range from -2 to 2
    questions[question].answer = option - 2;

    // Scroll to next question
    document.getElementById(`question ${question}`)
        .scrollIntoView({behavior: 'smooth', block: 'start'});
}

function calculatePoints() {
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].answer == null) {
            alert("You haven't completed all the questions I'm afraid :(");
            return;
        } else {
            if (questions[i].answer != 0) {
                for (const key in scores) {
                    if (questions[i].answerWeight[key] != 0) { 
                        scores[key] += questions[i].answer 
                            * questions[i].answerWeight[key];
                        matchups[key]++;
                    }
                }
            } else {
                scores[PUSSY] += 1;
            }
        }
    }
    let yourGraph = null;
    let topWinRate = -Infinity;

    if (scores[PUSSY] > questions.length * 0.8) yourGraph = PUSSY;
    else {
        for (const key in scores) {
            if (key == PUSSY) continue;
            let winrate = scores[key] / matchups[key];
            if (winrate >= topWinRate) {
                yourGraph = key;
                topWinRate = winrate;
            }
            // console.log(`${key}: ${winrate}`);
        }
    }

    console.log(yourGraph);
    window.sessionStorage.setItem('yourGraph', yourGraph);

    window.location.href = 'graphs/horoscope.html';
    
}