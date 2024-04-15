// Question Section Start  
const questions = [
    {
        question:"What is C++?",
        answers:[
            {text:"C++ is an object oriented programming language",correct:false},
            {text:"C++ in a proceduaral programming language",correct:false},
            {text:"C++ supports both procedural and object oriented programming language",correct:true},
            {text:"C++ is a functiona programming language",correct:false},
        ]
    },
    {
        question:"Which of the following is the correct syntax of including a user defined header files in C++?",
        answers:[
            {text:"#include [userdefined]",correct:false},
            {text:"#include “userdefined”",correct:true},
            {text:"#include <userdefined.h>",correct:false},
            {text:"#include <userdefined>",correct:false},
        ]
    },
    {
        question:"Which of the following user-defined header file extension used in c++?",
        answers:[
            {text:"hg",correct:false},
            {text:"cpp",correct:false},
            {text:"h",correct:true},
            {text:"hf",correct:false},
        ]
    },
    {
        question:"Which of the following is a correct indentifier in C++ ?",
        answers:[
            {text:"VAR_1234",correct:false},
            {text:"$var_name",correct:true},
            {text:"7VARNAME",correct:false},
            {text:"7var_name",correct:false},
        ]
    },
    {
        question:"Which of the following is not a type of Constructor in C++?",
        answers:[
            {text:"Default construtor",correct:false},
            {text:"Parameterized constructor",correct:false},
            {text:"Copy constructor",correct:false},
            {text:"Friend constructor",correct:true},
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