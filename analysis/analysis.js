const data = require("./data.json")

let counts = { }

let totalAnswers = []

for (let i = 0; i < 10; i++) {
  totalAnswers[i] = 0
}

let keys = Object.keys(data.users)

for (let i = 0; i < keys.length; i++) {
  let graph = data.users[keys[i]][0].graph
  if ( !(graph in counts) ) {
    counts[graph] = 1
  } else {
    counts[graph] += 1
  }

  let answers = data.users[keys[i]][0].answers
  
  for (let i = 0; i < 10; i++) {
    totalAnswers[i] += answers[i]
  }
}

console.log("total: " + Object.keys(data.users).length)

console.log(counts)

console.log(totalAnswers)