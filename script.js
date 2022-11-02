const quizData = [
    {
        question: "which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Pyhton",
        d: "javascript",
        correct: "d",
    }
    {
        question: "What does CSS stand for?"
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Crs SUVs Sailboats",
        correct: "b",
    }
    {
        question: "What does HTML stand for?"
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicvopters Terminals Motoboats"
        correct: "a",
    }


]

const quiz= document.getElementById('quiz')
const answerEls = Document.querySelectorAll)'.answer')_
const questionE1 = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c-text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadquiz()

function loadquiz {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionE1.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d


function deselectAnswers(){
    let answerEls answerEls.forEach(answerEl => {

    })
}