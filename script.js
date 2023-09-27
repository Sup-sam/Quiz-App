const questions = [
    {
    question:"What is useful language in programming in web development?",
    answers:[
        {text:"Js",correct:true},
        {text:"react",correct:false},
        {text:"spring",correct:false},
        {text:"django",correct:false}
    ]
    },
    {
        question:"what is traditional food in KSA?",
    answers:[
        {text:"Basbosa",correct:false},
        {text:"Mansf",correct:false},
        {text:"Kabsa",correct:true},
        {text:"Pizza",correct:false}
    ]

    },
    {
        question:"what is Capital of France?",
    answers:[
        {text:"Capri",correct:false},
        {text:"London",correct:false},
        {text:"Jeddah",correct:false},
        {text:"Paris",correct:true}
    ]
    },
    {
        question:"what is one of these is color?",
    answers:[
        {text:"Marcedis",correct:false},
        {text:"White",correct:true},
        {text:"Book",correct:false},
        {text:"Channel",correct:false}
    ]
    }
];

const makeQuestions = document.getElementById("question");
const answersBtn = document.getElementById("answer-buttons");
const nextQuestions = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;




function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextQuestions.innerHTML = "Next";
    showQuestions();
}




function showQuestions(){
    resrtState();
    let currentQuestions = questions[currentQuestionIndex];
    let questionsNo = currentQuestionIndex + 1;
    makeQuestions.innerHTML = questionsNo + "." + currentQuestions.question;

    currentQuestions.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answersBtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click" , selectAnswer);
    })
}




// below to remove the choices before the answers
function resrtState(){
    nextQuestions.style.display = "none";
    while(answersBtn.firstChild){
        answersBtn.removeChild(answersBtn.firstChild);
    }
}




function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answersBtn.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextQuestions.style.display = "block";
}




function showScore(){
    resrtState();
    makeQuestions.innerHTML = `You Scored is ${score} out of ${questions.length}!`;
    nextQuestions.innerHTML = "Test Again";
    nextQuestions.style.display = "block";
}




function pressNext(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestions();
    }else{
        showScore();
    }
}

nextQuestions.addEventListener("click" ,()=>{
    if(currentQuestionIndex < questions.length){
        pressNext();
    }else{
        startQuiz();
    }
});

startQuiz();