//Question bank
var questionBank= [
    {
        question : 'Zurich is the capital of which country?',
        option : ['Swen','Switzerland','Nigeria','Australia'],
        answer : 'Switzerland'
    },
    {
        question : 'What scientist came up with the three laws of motion?',
        option : ['Lilian isaac','Isaac newton','Michael farrade','Steph curry'],
        answer : 'Isaac newton'
    },
    {
        question : 'What band was Harry Styles in before his solo career?',
        option : ['One direction','10th generation','Maroon 5','Chainsmokers'],
        answer : 'One direction'
    },
    {
        question : 'Hitler party which came into power in 1933 is known as',
        option : ['Labour Party','Nazi Party','Ku-Klux-Klan','Democratic Party'],
        answer : 'Nazi Party'
    },
    {
        question : 'How many weeks are in a year?',
        option : ['52 weeks','365 weeks','45 weeks','63 weeks'],
        answer : '52 weeks'
    },
    {
        question : 'What does “www” stand for in a website browser?',
        option : ['world wide web','walk while web','word wide web','word while wake'],
        answer : 'world wide web'
    },
    {
        question : 'What is "cynophobia"?',
        option : ['fear of cynade','fear of cats','fear of dogs','fear of God'],
        answer : 'fear of dogs'
    },
    {
        question : 'How many languages are written from right to left?',
        option : ['12','7','5','10'],
        answer : '12'
    },
    {
        question : 'What is the name of the biggest technology company in South Korea?',
        option : ['iphone','samsung','tecno','nokia'],
        answer : 'samsung'
    },
    {
        question : 'What was the first soft drink in space?',
        option : ['Bull','Coca cola','7up','Monster'],
        answer : 'Coca cola'
    },
    {
        question : 'Which Disney Princess talks to the most animals?',
        option : ['Cindarella','Bella','Snow white','Jasmine'],
        answer : 'Snow white'
    },
    {
        question : 'What are the names of Cinderella’s stepsisters?',
        option : ['Anastasia and Drizella','Dandoline and Annalise','Adelaide and Daisy','Drizella and Annalise'],
        answer : 'Anastasia and Drizella'
    },
    {
        question : 'When Walt Disney was a child, which character did he play in his school function?',
        option : ['Mickey mouse','Prince charming','Peter pan','Shrak'],
        answer : 'Peter pan'
    },
    {
        question : 'Who has won more tennis grand slam titles?',
        option : ['Venus williams','Novak Djokovic','Serena williams','Refael nadel'],
        answer : 'Serena williams'
    },
    {
        question : 'What is the largest bone in the human body?',
        option : ['Humeru','Femur','skull','Mandible'],
        answer : 'Femur'
    },
    {
        question : 'Which of Newton’s Laws states that ‘for every action, there is an equal and opposite reaction?',
        option : ['First law of motion','Second law of motion','Third law of motion','Fourth law of motion'],
        answer : 'Third law of motion'
    },
    {
        question : 'What is the hottest planet in the solar system?',
        option : ['Mars','Venus','Sun','Mercury'],
        answer : 'Venus'
    },
    {
        question : 'What is the rarest M&M color?',
        option : ['Red','Purple','Green','Brown'],
        answer : 'Brown'
    },
    {

        question : 'What is the smallest country in the world?',
        option : ['Malta','Peru','Chad','Vatican city'],
        answer : 'Vatican city'
    },
    {
        question : 'Which country borders 14 nations and crosses 8 time zones?',
        option : ['USA','Germany','Russia','Australia'],
        answer : 'Russia'
    }
]

let currentQuestionIndex = 0;
let score = 0;
let timer;

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;


//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}
const totalSeconds = 60; // Total time in seconds
let secondsLeft = totalSeconds;
let timerInterval;

const timerElement = document.getElementById("time-left");

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  if (secondsLeft > 0) {
    secondsLeft--;
    timerElement.textContent = formatTime(secondsLeft);
  } else {
    clearInterval(timerInterval);
    timerElement.textContent = "Time's up!";
    // Handle end of time logic here
  }
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}

  displayQuestion();