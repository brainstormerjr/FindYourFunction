// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/learn-more#web-version-8
// https://firebase.google.com/docs/web/setup#available-libraries

// Realtime database
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-database.js"
// Authentication
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js"

let yourGraph = window.sessionStorage.getItem('yourGraph');
console.log(yourGraph);
if (!yourGraph) yourGraph = PUSSY;

let tempAns = window.sessionStorage.getItem('answers');
let splitAns = tempAns.split(',')
let answers = splitAns.map(a => {return parseInt(a)})
console.log(answers)

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

// Copy and pasted to localFunctions.js
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

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtN_GSwBGGjYTkFje6qTMYt6K7EKG-sT0",
    authDomain: "find-your-function.firebaseapp.com",
    databaseURL: "https://find-your-function-default-rtdb.firebaseio.com",
    projectId: "find-your-function",
    storageBucket: "find-your-function.appspot.com",
    messagingSenderId: "842600265665",
    appId: "1:842600265665:web:a9869191897a55f262a140"
  };

// Initialize Firebase
initializeApp(firebaseConfig)

async function saveData() {
    const database = getDatabase()

    const auth = getAuth()

    signInAnonymously(auth).then(user => {
        if (user) {
            const reference = ref(database, `users/${user.user.uid}`)
            console.log(`user id: ${user.user.uid}`)
            get(reference).then(data => {
                let ourData = [
                    {
                        answers,
                        graph: yourGraph
                    }
                ]
                if (data.val()) {
                    // data[`graph${Object.keys(existingData).length}`] = yourGraph
                    ourData = data.val()
                    if (!Object.values(ourData).includes({answers,graph: yourGraph})) {
                        ourData.push({answers,graph: yourGraph})
                    }
                }
                set(reference, ourData)
            })
        }
    })
    .catch(err => console.error(err))
}

saveData().catch(e => console.log(e))