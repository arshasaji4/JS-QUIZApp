const questions = [
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        answers: [
            { text: "var", correct: true },
            { text: "let", correct: false },
            { text: "const", correct: false },
            { text: "int", correct: false }
        ],
    },

    {
        question: "Which function is used to print output in the console?",
        answers: [
            { text: "print()", correct: false },
            { text: "console.log()", correct: true },
            { text: "log()", correct: false },
            { text: "write()", correct: false }
        ],
    },

    {
        question: "Which company developed JavaScript?",
        answers: [
            { text: "Microsoft", correct: false },
            { text: "Netscape", correct: true },
            { text: "Oracle", correct: false },
            { text: "Google", correct: false }
        ],
    },

    {
        question: "Which keyword is used for conditional statements?",
        answers: [
            { text: "if", correct: true },
            { text: "loop", correct: false },
            { text: "for", correct: false },
            { text: "while", correct: false }
        ],
    },

    {
        question: "Which data type is used for true/false values?",
        answers: [
            { text: "boolean", correct: true },
            { text: "string", correct: false },
            { text: "number", correct: false },
            { text: "object", correct: false }
        ],
    },

     {
        question: "Which keyword is used to stop a loop?",
        answers: [
            { text: "continue", correct: false },
            { text: "break", correct: true },
            { text: "return", correct: false },
            { text: "exit", correct: false }
        ],
    },

     {
        question: "Which  keyword is used to create a class in JavaScript?",
        answers: [
            { text: "class", correct: true },
            { text: "function", correct: false },
            { text: "var", correct: false },
            { text: "let", correct: false }
        ],
    },

     {
        question: "Which method is used to join array elements into a string?",
        answers: [
            { text: "merge()", correct: false },
            { text: "split()", correct: false },
            { text: "slice()", correct: false },
            { text: "join()", correct: true }
        ],
    },

     {
        question: "Which method is used to handle errors?",
        answers: [
            { text: "try", correct: false },
            { text: "catch", correct: true },
            { text: "finally", correct: false },
            { text: "throw", correct: false }
        ],
    },

     {
        question: "Which event occurs when a button is clicked?",
        answers: [
            { text: "onmouse", correct: false },
            { text: "hover", correct: false },
            { text: "onclick", correct: true },
            { text: "blur", correct: false }
        ],
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    questionElement.innerHTML =
        questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");

        button.innerHTML = answer.text;

        button.classList.add(
            "btn",
            "w-full",
            "bg-blue-400",
            "hover:bg-blue-500",
            "text-white",
            "font-medium",
            "p-3",
            "rounded-lg",
            "mt-2"
        );

        answerButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";

    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;

    const isCorrect =
        selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("bg-green-500");
        score++;
    } else {
        selectedBtn.classList.add("bg-red-500");
    }

    Array.from(answerButtons.children).forEach(button => {

        if (button.dataset.correct === "true") {
            button.classList.add("bg-green-500");
        }

        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore() {
    resetState();

    questionElement.innerHTML =
        `Your Score: ${score} out of ${questions.length}!`;

    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {

    if (currentQuestionIndex < questions.length - 1) {
        handleNextButton();
    } else {
        showScore();
    }
});

startQuiz();