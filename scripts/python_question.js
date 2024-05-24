// Question Section Start  
const questions = [
    {
        question:"Which of the following statements is correct regarding the object-oriented programming concept in Python?",
        answers:[
            {text:"Classes are real-world entities while objects are not real",correct:false},
            {text:"Objects are real-world entities while classes are not real",correct:true},
            {text:"Both objects and classes are real-world entities",correct:false},
            {text:"All of the above",correct:false},
        ]
    },
    {
        question:"What is the method inside the class in python language?",
        answers:[
            {text:"Object",correct:false},
            {text:"Function",correct:true},
            {text:"Attribute",correct:false},
            {text:"Argument",correct:false},
        ]
    },
    {
        question:"Why does the name of local variables start with an underscore discouraged?",
        answers:[
            {text:"To identify the variable",correct:false},
            {text:"It confuses the interpreter",correct:false},
            {text:"It indicates a private variable of a class",correct:true},
            {text:"All of the above",correct:false},
        ]
    },
    {
        question:"Which of the following precedence order is correct in Python?",
        answers:[
            {text:"Parentheses, Exponential, Multiplication, Division, Addition, Subtraction",correct:false},
            {text:"Multiplication, Division, Addition, Subtraction, Parentheses, Exponential",correct:true},
            {text:"Division, Multiplication, Addition, Subtraction, Parentheses, Exponential",correct:false},
            {text:"Exponential, Parentheses, Multiplication, Division, Addition, Subtraction",correct:false},
        ]
    },
    {
        question:"Which of the following functions is a built-in function in python language?",
        answers:[
            {text:"val()",correct:false},
            {text:"print()",correct:true},
            {text:"console.log",correct:false},
            {text:"None of these",correct:false},
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