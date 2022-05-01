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

// Copy and pasted from sketch.js
function updateCensor() {
  console.log(censored)
  document.getElementById("censorButton").className 
      = censored ? "button censorButtonOn" : "button censorButtonOff";
  document.getElementById("censorButton").innerHTML
      = censored ? "Family Friendly Mode: ON" : "Family Friendly Mode: OFF";

  console.log(document.getElementById("censorButton"))

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