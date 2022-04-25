let yourGraph = window.sessionStorage.getItem('yourGraph');
console.log(yourGraph);
if (!yourGraph) yourGraph = PUSSY;

document.getElementById("Title").innerHTML 
    = horoscopes[yourGraph].name;

if (yourGraph[0] == 'A'
    || yourGraph[0] == 'E'
    || yourGraph[0] == 'I'
    || yourGraph[0] == 'O'
    || yourGraph[0] == 'U'
) {
    document.getElementById("Subtitle").innerHTML 
        = `You are an ${horoscopes[yourGraph].name} graph!`;
} else {
    document.getElementById("Subtitle").innerHTML 
        = `You are a ${horoscopes[yourGraph].name} graph!`;
}

document.getElementById("scrollTarget").innerHTML 
    = `${horoscopes[yourGraph].name} fact file`;

document.getElementById("generalForm").innerHTML 
    = `${horoscopes[yourGraph].generalForm}`;

document.getElementById("graph").innerHTML 
    = `<img src="${horoscopes[yourGraph].image}" id="graph"></img>`;

    document.getElementById("horoscope").innerHTML 
    = horoscopes[yourGraph].horoscope;


let censored = localStorage.getItem('censored') == 'true';
if (censored == null) {
    censored = true;
    localStorage.setItem('censored', true);
}
updateCensor();

function letsGoScroll() {
    document.getElementById("scrollTarget")
        .scrollIntoView({behavior: 'smooth', block: 'start'});
}

function loadMain() {
    window.location.href = '../index.html';
}

function toggleCensor() {
    censored = !censored;
    localStorage.setItem('censored', censored);
    updateCensor();
}

function updateCensor() {
    document.getElementById("censorButton").className 
        = censored ? "button censorButtonOn" : "button censorButtonOff";
    document.getElementById("censorButton").innerHTML
        = censored ? "Family Friendly Mode: ON" : "Family Friendly Mode: OFF";

    let html = document.documentElement.innerHTML;
    if (censored) {
        html = html.replace(/fuck/g, "f***");
        html = html.replace(/Fuck/g, "F***");
        html = html.replace(/shit/g, "s***");
        html = html.replace(/pussy/g, "p****");
    } else {
        html = html.replace(/f\*\*\*/g, "fuck");
        html = html.replace(/F\*\*\*/g, "Fuck");
        html = html.replace(/s\*\*\*/g, "shit");
        html = html.replace(/p\*\*\*\*/g, "pussy");
    }

    document.documentElement.innerHTML = html;
}