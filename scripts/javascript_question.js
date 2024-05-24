// Question Section Start  
// JavaScript Question 
const questions = [
    {
        question:"JavaScript is an ------------ language? ",
        answers:[
            {text:"Object-Based",correct:false},
            {text:"Procedural",correct:false},
            {text:"Object-Oriented",correct:true},
            {text:"None of the Above",correct:false},
        ]
    },
    {
        question:"Which of the following keywords is used to define a variable in Javascript?",
        answers:[
            {text:"var",correct:false},
            {text:"let",correct:false},
            {text:"Both A and B",correct:true},
            {text:"None of the above",correct:false},
        ]
    },
    {
        question:"In the JavaScript, which one of the following is not considered as an error: ",
        answers:[
            {text:"Syntax error",correct:false},
            {text:"Missing of semicolons",correct:false},
            {text:"Division by zero",correct:true},
            {text:"Missing of Bracket",correct:false},
        ]
    },
    {
        question:"Which of the following number object function returns the value of the number?",
        answers:[
            {text:"toString()",correct:false},
            {text:"toLocaleString()",correct:false},
            {text:"valueOf()",correct:true},
            {text:"toPrecision()",correct:false},
        ]
    },
    {
        question:"Which one of the following is the correct way for calling the JavaScript code",
        answers:[
            {text:"Preprocessor",correct:false},
            {text:"Triggering Event",correct:false},
            {text:"RMI",correct:false},
            {text:"Function/Method",correct:true},
        ]
    }
];  
// Question End


const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

// add score login  
let currentQuestionIndex=0;
let score=0; 

// Start quiz Function
function startQuiz(){
    currentQuestionIndex=0;
    score=0; 
    nextButton.innerHTML="Next"; 
    showQuestion(); 
}
// show Question
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question; 

    // target answer buttons
    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);

    });    
} 
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

// answer selection function 
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true"; 
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }


    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true; 

    });
    nextButton.style.display="block"
}

// create show score function
function showScore(){
    resetState();
    questionElement.innerHTML=`You scored  ${score} out of ${questions.length} !`;
    nextButton.innerHTML="Play Again"
    nextButton.style.display="block";


}

function handdlNextButton(){
    currentQuestionIndex++; 
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handdlNextButton();
    }else{
        startQuiz();
    }
})

// let's start our main Quiz
startQuiz();