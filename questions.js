let questions = [
    { // 1
        "question" :"Would you say you are a very positive person?",
        "answerWeight": {
            LINEAR: 0.5,
            CIRCLE: -0.3,
            QUADRATIC: 1,
            CUBIC: 0.5,
            EXPONENTIAL: 1,
            LOGARITHMIC: -1,
            INVERSE: -1,
            ABSOLUTE: 1,
            SINECOSINE: -0.3,
            TANGENT: 0.3,
            SPIRAL: 0.3,
            PUSSY: 0
        },
        "choices": [
            "Hell no!",
            "Sorry, but no.",
            "I don't know?",
            "Well, yeah.",
            "Hell yeah!"
        ],
        "answer": null
    },
    { // 2
        "question" :"Do you enjoy taking risks?",
        "answerWeight": {
            LINEAR: 0.3,
            CIRCLE: -0.5,
            QUADRATIC: 0.3,
            CUBIC: 0.5,
            EXPONENTIAL: 0.3,
            LOGARITHMIC: -0.3,
            INVERSE: -0.3,
            ABSOLUTE: 0.1,
            SINECOSINE: -1,
            TANGENT: 1,
            SPIRAL: -0.5,
            PUSSY: 0
        },
        "choices": [
            "Hell no!",
            "Sorry, but no.",
            "I don't know?",
            "Well, yeah.",
            "Hell yeah!"
        ],
        "answer": null
    },
    { // 3
        "question" :"Can you easily motivate yourself to work on something important, even if it is something you don't enjoy?",
        "answerWeight": {
            LINEAR: 0.5,
            CIRCLE: -0.5,
            QUADRATIC: 0.5,
            CUBIC: 0.3,
            EXPONENTIAL: 1,
            LOGARITHMIC: -1,
            INVERSE: -0.5,
            ABSOLUTE: 0.1,
            SINECOSINE: -0.3,
            TANGENT: 0.5,
            SPIRAL: -0.2,
            PUSSY: 0
        },
        "choices": [
            "Me procrastinate.",
            "I can't really.",
            "I don't know?",
            "Sure. Yeah.",
            "Hell yeah!"
        ],
        "answer": null
    }, 
    { // 4
        "question" :"When there is an opportunity to improve yourself, <br> do you think you seize them well?",
        "answerWeight": {
            LINEAR: 0.3,
            CIRCLE: -1,
            QUADRATIC: 1,
            CUBIC: 0.5,
            EXPONENTIAL: 0.5,
            LOGARITHMIC: -.05,
            INVERSE: -0.5,
            ABSOLUTE: 0.1,
            SINECOSINE: -0.5,
            TANGENT: 0.5,
            SPIRAL: -0.2,
            PUSSY: 0
        },
        "choices": [
            "Hell no!",
            "Sorry, but no.",
            "I don't know?",
            "Well, yeah.",
            "Hell yeah!"
        ],
        "answer": null
    },
    { // 5
        "question" :"Are the things you say to others clear and straightforward?",
        "answerWeight": {
            LINEAR: 1,
            CIRCLE: -0.5,
            QUADRATIC: 0.5,
            CUBIC: 0.5,
            EXPONENTIAL: 0.5,
            LOGARITHMIC: -0.3,
            INVERSE: -0.3,
            ABSOLUTE: 0.5,
            SINECOSINE: -0.3,
            TANGENT: 0.3,
            SPIRAL: -1,
            PUSSY: 0
        },
        "choices": [
            "Maybe not yes.",
            "Possibly? Idk.",
            "I don't know?",
            "Well, yeah.",
            "Absolutely!"
        ],
        "answer": null
    },
    { // 6
        "question" :"When things are down, do you easily get back up?",
        "answerWeight": {
            LINEAR: 0.3,
            CIRCLE: -0.5,
            QUADRATIC: 0.5,
            CUBIC: 1,
            EXPONENTIAL: 0.5,
            LOGARITHMIC: -0.5,
            INVERSE: -1,
            ABSOLUTE: 0.3,
            SINECOSINE: -0.3,
            TANGENT: 0.3,
            SPIRAL: -0.5,
            PUSSY: 0
        },
        "choices": [
            "Hell no!",
            "Sorry, but no.",
            "I don't know?",
            "Well, yeah.",
            "Hell yeah!"
        ],
        "answer": null
    },
    { // 7
        "question" :"Do you like exploration / exploring new things?",
        "answerWeight": {
            LINEAR: 0.1,
            CIRCLE: -1,
            QUADRATIC: 0.5,
            CUBIC: 0.5,
            EXPONENTIAL: 1,
            LOGARITHMIC: -0.5,
            INVERSE: -0.5,
            ABSOLUTE: 0.1,
            SINECOSINE: -0.5,
            TANGENT: 0.5,
            SPIRAL: -0.5,
            PUSSY: 0
        },
        "choices": [
            "Hell no!",
            "Sorry, but no.",
            "I don't know?",
            "Well, yeah.",
            "Hell yeah!"
        ],
        "answer": null
    },
    { // 8
        "question" :"Are you more likely to fight or to flight/flee during confrontation?",
        "answerWeight": {
            LINEAR: 0.3,
            CIRCLE: -0.75,
            QUADRATIC: 0.5,
            CUBIC: 1,
            EXPONENTIAL: 0.3,
            LOGARITHMIC: -1,
            INVERSE: -0.3,
            ABSOLUTE: 0.1,
            SINECOSINE: -0.5,
            TANGENT: 0.5,
            SPIRAL: -0.5,
            PUSSY: 0
        },
        "choices": [
            "Run!!!",
            "I'll run.",
            "I don't know?",
            "Yeah, I'll fight.",
            "To war!!!"
        ],
        "answer": null
    },
    { // 9
        "question" :"When there is a problem, do you handle it yourself <br> or do you wait for someone else to do it for you?",
        "answerWeight": {
            LINEAR: 1,
            CIRCLE: -0.5,
            QUADRATIC: 0.3,
            CUBIC: 0.3,
            EXPONENTIAL: 0.5,
            LOGARITHMIC: -0.5,
            INVERSE: -0.5,
            ABSOLUTE: 0.1,
            SINECOSINE: -0.2,
            TANGENT: 0.2,
            SPIRAL: -1,
            PUSSY: 0
        },
        "choices": [
            "Go, slaves!",
            "Emmm... no...?",
            "I don't know?",
            "Sure.",
            "I got it!"
        ],
        "answer": null
    },
    { // 10
        "question" :"You have a test coming up, and you haven't revised. <br> Do you say 'fuck it', or do you rush your revision?",
        "answerWeight": {
            LINEAR: 0.3,
            CIRCLE: -0.3,
            QUADRATIC: 0.2,
            CUBIC: 0.3,
            EXPONENTIAL: 1,
            LOGARITHMIC: -1,
            INVERSE: -0.5,
            ABSOLUTE: 0.2,
            SINECOSINE: -0.5,
            TANGENT: 1,
            SPIRAL: -0.2,
            PUSSY: 0
        },
        "choices": [
            "Fuck it.",
            "I'll be scared.",
            "I don't know?",
            "I'll work a bit.",
            "Revision!"
        ],
        "answer": null
    },
];