import { useState } from 'react';
import './App.css';


function App() {
  const questions = [
    {
        question:"My name is ______________ .",
        ansOptions: [{answer: "S.M. Hamza Bukhari", isCorrect: true},
         {answer: "Ahmed Faraz Ali", isCorrect: false},
         {answer:"Atif Ali", isCorrect: false},
         {answer: "Bilal Ahmed", isCorrect: false}],
        correctAnswer:"S.M. Hamza Bukhari"
    },
    {
        question:"HTML stands for ______________ .",
        ansOptions: [{answer: "HyperText Markup Language",isCorrect: true},
        {answer: "HyperText Makeup Language",isCorrect:false},
        {answer: "HyperText Markup Lang", isCorrect: false},
        {answer: "HyperText Mark Language", isCorrect: false}],
        correctAnswer:"HyperText Markup Language"   
         },
    {
        question:"The smallest Ocean is ______________ .",
        ansOptions: [{answer: "Pacific Ocean", isCorrect: false},
        {answer: "Arctic Ocean", isCorrect: true},
        {answer: "Indian Ocean", isCorrect: false},
        {answer: "Atlantic Ocean", isCorrect: false},
        {answer: "the Southern Ocean", isCorrect: false}],
        correctAnswer:"Arctic Ocean"  
         },
    {
        question:"RAM stands for ______________ .",
        ansOptions: [{answer: "Random Access Memory", isCorrect: true},
        {answer: "Read Access Memory", isCorrect: false},
        {answer: "real Access Memory", isCorrect: false},
        {answer: "Random Accept Memory", isCorrect: false}],
        correctAnswer:"Random Access Memory"
         },
    {
        question:"SI unit of Force is ______________ .",
        ansOptions: [{answer: "Candela", isCorrect: false},
        {answer: "Ampere", isCorrect: false},
        {answer: "Newton", isCorrect: true},
        {answer:"Newton Meter", isCorrect: false}],
        correctAnswer:"Newton"
         },
    {
        question:"Smallest number among the numbers given below is ___________ .",
        ansOptions: [{answer: "34", isCorrect: false},
        {answer: "33.02", isCorrect: true},
        {answer: "33.3", isCorrect: false},
        {answer: "34.1", isCorrect: false}],
        correctAnswer:"33.02"
         },
    {
        question:"ROM stands for ______________ .",
        ansOptions: [{answer: "Read Only Memes", isCorrect: false},
        {answer: "Random Only Memory", isCorrect: false},
        {answer: "Read Only Memory", isCorrect: true},
        {answer: "Read On Memory", isCorrect: false}],
        correctAnswer:"Read Only Memory"
         },
    {
        question:"SQL stands for ______________ .",
        ansOptions: [{answer: "Structured Query Lang", isCorrect: false},
        {answer: "Structured Query Language", isCorrect: true},
        {answer: "Struct Query Language", isCorrect: false},
        {answer: "Structured Queen Language", isCorrect: false}],
        correctAnswer:"Structured Query Language"
         },
    {
        question:"DOM stands for ______________  .",
        ansOptions: [{answer: "Document Object Model", isCorrect: true},
        {answer: "Doc Object Model", isCorrect: false},
        {answer: "Document Object Mode", isCorrect: false},
        {answer: "Document Obstacle Model", isCorrect: false}],
        correctAnswer:"Document Object Model"
         },
    {
        question:"JS stands for ______________ .",
        ansOptions: [{answer: "Java Script", isCorrect: true},
        {answer: "Java Science", isCorrect: false},
        {answer: "Just Script", isCorrect: false},
        {answer: "Java Screen", isCorrect: false}],
        correctAnswer:"Java Script"
         },
  ];


  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [result, setResult] = useState(false);
  const [score, setScore] = useState(0);
 
 
  let next = (isCorrect) => {
    if(isCorrect==true)
      {setScore(score+1);
      }

    if(currentQuestion<questions.length-1){ 
     
      setCurrentQuestion(currentQuestion+1);
  }
    else{
      setResult(true);
    }

  }
 
  return (
    <div className="App">
      <header className="App-header">
       
        <div>
        {result?(
        <div className='resultcontainer'>
          <div>
           
          <h3>You Scored {score} out of {questions.length}</h3>
          
          </div>
          <div>
            <ol id='listnone' className='resultQuestions'>
           <h6>Question with correct Answers:</h6>
           {questions.map((allQuestions,i,j)=>
           <li  key={i}>{allQuestions.question}
            <li>Correct Answer: {allQuestions.correctAnswer}
            </li>
            </li>)}
            </ol>
          </div>
        </div>)
        :(
          <div className='container'>
          <div className='top'>
            <span id='score'>Score: {score}</span>
            <span>{currentQuestion+1}/ {questions.length}</span>
       </div>
          <div className='questionDisplay'>
            <span>{questions[currentQuestion].question}</span>
          </div>
          <div className='answersDisplay'>
              {questions[currentQuestion].ansOptions.map((ansOption)=>
              <button onClick={()=>next(ansOption.isCorrect)}>{ansOption.answer}</button>)}
          </div>  
          </div> )}         
        </div>
      </header>
    </div>
  );
}

export default App;
