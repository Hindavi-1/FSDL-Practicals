// Quiz questions and answers
const quizData = [
  {
    question: "What does HTML stand for?",
    options: {
      A: "Hyper Text Markup Language",
      B: "High Tech Modern Language",
      C: "Hyper Transfer Markup Language",
      D: "Home Tool Markup Language",
    },
    correct: "A",
  },
  {
    question: "Which property is used to change the background color?",
    options: {
      A: "color",
      B: "bgcolor",
      C: "background-color",
      D: "background",
    },
    correct: "C",
  },
  {
    question: "Which HTML tag is used to define a JavaScript file?",
    options: {
      A: "<js>",
      B: "<javascript>",
      C: "<script>",
      D: "<scripting>",
    },
    correct: "C",
  },
  {
    question: "Which CSS property controls text size?",
    options: {
      A: "text-style",
      B: "font-size",
      C: "text-size",
      D: "font-style",
    },
    correct: "B",
  },
  {
    question: "What will 'console.log(2 + '2')' output?",
    options: {
      A: "4",
      B: "22",
      C: "Error",
      D: "NaN",
    },
    correct: "B",
  },
];

// Get DOM elements
const questionElement = document.getElementById("question");
const option1Text = document.getElementById("option1-text");
const option2Text = document.getElementById("option2-text");
const option3Text = document.getElementById("option3-text");
const option4Text = document.getElementById("option4-text");
const options = document.querySelectorAll('input[name="option"]');
const nextButton = document.getElementById("next-btn");
const quizElement = document.getElementById("quiz");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-btn");

// Quiz variables
let currentQuestion = 0;
let score = 0;
let userAnswers = [];

// Load question
function loadQuestion() {
  // Clear previous selection
  options.forEach((option) => {
    option.checked = false;
  });

  // Get current question data
  const currentQuizData = quizData[currentQuestion];

  // Update question and options
  questionElement.innerText = currentQuizData.question;
  option1Text.innerText = currentQuizData.options.A;
  option2Text.innerText = currentQuizData.options.B;
  option3Text.innerText = currentQuizData.options.C;
  option4Text.innerText = currentQuizData.options.D;
}

// Check if an option is selected
function getSelectedOption() {
  let answer = null;
  options.forEach((option) => {
    if (option.checked) {
      answer = option.value;
    }
  });
  return answer;
}

// Start the quiz
function startQuiz() {
  currentQuestion = 0;
  score = 0;
  userAnswers = [];
  loadQuestion();
  quizElement.classList.remove("hide");
  resultElement.classList.add("hide");
}

// Show the result
function showResult() {
  quizElement.classList.add("hide");
  resultElement.classList.remove("hide");
  scoreElement.innerText = score;
}

// Event listeners
nextButton.addEventListener("click", () => {
  // Get selected option
  const answer = getSelectedOption();

  // If no option selected, alert and return
  if (!answer) {
    alert("Please select an option!");
    return;
  }

  // Save user's answer
  userAnswers[currentQuestion] = answer;

  // Check if answer is correct
  if (answer === quizData[currentQuestion].correct) {
    score++;
  }

  // Move to next question
  currentQuestion++;

  // If there are more questions, load the next one
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    // Quiz is finished, show result
    showResult();
  }
});

// Restart quiz
restartButton.addEventListener("click", startQuiz);

// Initialize the quiz
startQuiz();
