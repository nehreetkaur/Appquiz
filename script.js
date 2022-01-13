const quizData = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz= document.querySelector('.quiz-container');

const mainQuestion=document.getElementById("question");

const answerEl=document.querySelectorAll('.answer');

const submit=document.getElementById('submit')

const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');

let questionToLoad=0;
let score=0;

loadQuestion();

function loadQuestion(){
 deselectQuestion();
const questions=quizData[questionToLoad];

mainQuestion.innerText=questions.question;
a_text.innerText=questions.a;
b_text.innerText=questions.b;
c_text.innerText=questions.c;
d_text.innerText=questions.d;






}
     function getResults(){
           let answer=undefined;
        answerEl.forEach((el)=>{
      if(el.checked){
          answer=el.id;
      }
        })
return answer;

     }





 function deselectQuestion(){

    answerEl.forEach((el)=>{
       el.checked=false;
    })

 }



 submit.addEventListener("click",()=>{
     const answer=getResults();
    // console.log(answer);
if(answer){
    if(answer===quizData[questionToLoad].correct){
        score++;
    }

    questionToLoad++;
    if(questionToLoad < quizData.length){
        loadQuestion()
    }
        else {
            quiz.innerHTML = `
                <h2>You total score is  ${score} out of ${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }

 });