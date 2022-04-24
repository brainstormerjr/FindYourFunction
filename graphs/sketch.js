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

function letsGoScroll() {
    document.getElementById("scrollTarget")
        .scrollIntoView({behavior: 'smooth', block: 'start'});
}

function loadMain() {
    window.location.href = '../index.html';
}