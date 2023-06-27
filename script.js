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
    question: "Which HTML elements do we put in javascript code?",
    answers: [
      { answer: "<script>", correct: true },
      { answer: "<js>", correct: false },
      { answer: "<body>", correct: false },
      { answer: "<head>", correct: false }
    ]
  }
]

// Header
const questionText = document.querySelector("#question-placeholder")

// Buttons
const answerABtn = document.querySelector("#answer-a") 
const answerBBtn = document.querySelector("#answer-b") 
const answerCBtn = document.querySelector("#answer-c") 
const answerDBtn = document.querySelector("#answer-d")

// Added eventListener() to buttons
answerABtn.addEventListener("click", handleClick)
answerBBtn.addEventListener("click", handleClick)
answerCBtn.addEventListener("click", handleClick)
answerDBtn.addEventListener("click", handleClick)

// Update page with first question
questionText.innerHTML = questions[0].question
answerABtn.innerHTML = questions[0].answers[0].answer
answerBBtn.innerHTML = questions[0].answers[1].answer
answerCBtn.innerHTML = questions[0].answers[2].answer
answerDBtn.innerHTML = questions[0].answers[3].answer


// Generate password
function generatePassword(length, lowercase_flag, uppercase_flag, numeric_flag, special_flag) {
  const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  const numeric = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  const special = ['*', '$', '#', '%', '&', "#", '!', '^']

  let password = ''
  let pool = []

  if (typeof length !== "number") {
    return "error: length is not a number"
  }

  if (length < 8) {
    return "error: length is less than 8"
  }

  if (length > 128) {
    return "error: length is greater than 128"
  }

  if (typeof lowercase_flag !== "boolean") {
    return "error: lowercase_flag is not a boolean"
  }

  if (typeof uppercase_flag !== "boolean") {
    return "error: uppercase_flag is not a boolean"
  }

  if (typeof numeric_flag !== "boolean") {
    return "error: numeric_flag is not a boolean"
  }

  if (typeof special_flag !== "boolean") {
    return "error: special_flag is not a boolean"
  }

  if (!lowercase_flag && !uppercase_flag && !numeric_flag && !special_flag) {
    return "error: no character sets selected"
  }
    
  if (lowercase_flag) {
    pool = pool.concat(lowercase)
  }

  if (uppercase_flag) {
    pool = pool.concat(uppercase)
  }
  
  if (numeric_flag) {
    pool = pool.concat(numeric)
  }

  if (special_flag) {
    pool = pool.concat(special)
  }

  for (let i = 0; i < length; i++) {
    password = password + pool[Math.floor(Math.random() * pool.length)]
  }

  return password
}

// Write password to the #password input
function writePassword() {
  let passwordlength = parseInt(document.querySelector("#passwordlength").value)
  let lowercase_flag = document.querySelector("#lowercase_flag").checked
  let uppercase_flag = document.querySelector("#uppercase_flag").checked
  let numeric_flag = document.querySelector("#numeric_flag").checked
  let special_flag = document.querySelector("#special_flag").checked
  
  var password = generatePassword(passwordlength, lowercase_flag, uppercase_flag, numeric_flag, special_flag);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function handleClick() {
  console.log("Hello World!")
}

