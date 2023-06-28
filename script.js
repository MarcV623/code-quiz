// Quiz Questions
const questions = [
  {
    question: "What is javascript?",
    answers: [
      { answer: "type of latte", correct: false },
      { answer: "scripting language", correct: true },
      { answer: "a poem", correct: false },
      { answer: "an object", correct: false }
    ]
  },
  {
    question: "commonly used data types DO NOT include:",
    answers: [
      { answer: "strings", correct: false },
      { answer: "alerts", correct: false },
      { answer: "Booleans", correct: true },
      { answer: "numbers", correct: false }
    ]
  },
  {
    question: "an array in javascript can be used to store?",
    answers: [
      { answer: "number of strings", correct: false },
      { answer: "other arrays", correct: false },
      { answer: "Booleans", correct: false },
      { answer: "all of the above", correct: true }
    ]
  },
  {
    question: "Where is the correct place to insert a javascript?",
    answers: [
      { answer: "the head section", correct: true },
      { answer: "the body section", correct: false },
      { answer: "both the head and the body sections", correct: false },
      { answer: "in the p tag", correct: false }
    ]
  },
  {
    question: "The external javascript file must contain?",
    answers: [
      {answer: "a script tag", correct: true },
      {answer: "a h1", correct: false },
      {answer: "an Id", correct: false },
      {answer: "a class", correct: false}
    ]
  }
]

// Current question
let current

// Header
const questionText = document.querySelector("#question-placeholder")

// Buttons
const answerABtn = document.querySelector("#answer-a") 
const answerBBtn = document.querySelector("#answer-b") 
const answerCBtn = document.querySelector("#answer-c") 
const answerDBtn = document.querySelector("#answer-d")

// Handle button clicks
function handleClick() {
  current = questions.shift()

  questionText.innerHTML = current.question
  answerABtn.innerHTML = current.answers[0].answer
  answerBBtn.innerHTML = current.answers[1].answer
  answerCBtn.innerHTML = current.answers[2].answer
  answerDBtn.innerHTML = current.answers[3].answer
}

// Added eventListener() to buttons
answerABtn.addEventListener("click", handleClick)
answerBBtn.addEventListener("click", handleClick)
answerCBtn.addEventListener("click", handleClick)
answerDBtn.addEventListener("click", handleClick)

// Update page with first question
handleClick()
