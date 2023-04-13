import React from "react";

export default function Question(props) {
    console.log(props)
    return (
        <div className="question__container">
            <h3>{props.question}</h3>
            <div className="question__answer-container">
                <button className="question__answer-button">{props.answer}</button>
                <button className="question__answer-button">{props.incorrectAnswer[0]}</button>
                <button className="question__answer-button">{props.incorrectAnswer[1]}</button>
                <button className="question__answer-button">{props.incorrectAnswer[2]}</button>
            </div>
        </div>
    )
}