import Header from './Components/Header'
import Question from './Components/Question'
import React from "react";
import {useState} from "react";
import {useEffect} from "react";

function App() {
    const [ questions, setQuestions ] = useState([]);
    const [ activeGame, setActiveGame ] = useState(false);


    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
            .then(res => res.json())
            .then(data => setQuestions(data.results))
    }, [])

    const questionElements = questions.map(question => {
        return <Question
            question={question.question.replace(/&#039;|&quot;/g, function(match) {
                const replacements = {
                    '&#039;': "'",
                    '&quot;': '"'
                };
                return replacements[match] || match;
            })}
            answer={question.correct_answer}
            incorrectAnswer={question.incorrect_answers}
        />
    });

    console.log(questions.question)
    function startGame() {
        setActiveGame(prevState => !prevState)
    }

    function checkAnswers() {
        //logic to check the answers for the question and update the page.
    }

    //use Open Trivia Database to get API call for questions.

    return (
    <div className="quiz__main">
        {!activeGame && <Header/>}
        {activeGame && <div>{questionElements}</div>}
        {!activeGame && <button className="quiz__main-button" onClick={startGame}>Start Quiz!</button>}
    </div>
  )
}

export default App;
