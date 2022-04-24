const LINEAR = 'LINEAR';
const CIRCLE = 'CIRCLE';
const QUADRATIC = 'QUADRATIC';
const CUBIC = 'CUBIC';
const EXPONENTIAL = 'EXPONENTIAL';
const LOGARITHMIC = 'LOGARITHMIC';
const INVERSE = 'INVERSE';
const ABSOLUTE = 'ABSOLUTE';
const SPIRAL = 'SPIRAL';
const SINECOSINE = 'SINECOSINE';
const TANGENT = 'TANGENT';
const PUSSY = 'PUSSY';

class Question {
    constructor(question, answerProfile) {
        this.question = question;
        this.answerProfile = answerProfile
        this.answer = null;
    }

    setAnswer(number) {
        this.answer = number;
    }
}