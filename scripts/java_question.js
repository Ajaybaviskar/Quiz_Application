// Question Section Start  
const questions = [
    {
        question:"When is the finalize() method called?",
        answers:[
            {text:"Before garbage Collection",correct:true},
            {text:"Before an Object goes out of scope",correct:false},
            {text:"Before a variable goes out of scope",correct:false},
            {text:"None",correct:false},
        ]
    },
    {
        question:"Select the valid statement",
        answers:[
            {text:"char[] ch=new char(5)",correct:false},
            {text:"char[] ch=new char[5]",correct:true},
            {text:"char[] ch=new char()",correct:false},
            {text:"char[] ch=new char[]",correct:false},
        ]
    },
    {
        question:"Identify the infinite loop.",
        answers:[
            {text:"for(; ;)",correct:false},
            {text:"for(int i=0;i<1;i--)",correct:false},
            {text:"for(int i=0;j++",correct:false},
            {text:"All of the above",correct:true},
        ]
    },
    {
        question:"What is Runnable",
        answers:[
            {text:"Abstract class",correct:false},
            {text:"Interface",correct:true},
            {text:"Class",correct:false},
            {text:"Method",correct:false},
        ]
    },
    {
        question:"Exception created by try block is caught in which block",
        answers:[
            {text:"catch",correct:true},
            {text:"throw",correct:false},
            {text:"final",correct:false},
            {text:"none",correct:false},
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