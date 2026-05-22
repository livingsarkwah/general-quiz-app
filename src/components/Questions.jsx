import React from 'react'
import Question from "./Question"
import gradeAnswers from "../utils/gradeAnswers"
import Skeleton from "./Skeleton.jsx" 


export default function Questions({questionsArray, toggleStart}) {
    const isLoading = questionsArray.length === 0
    const [optionStates, setOptionStates] = React.useState({})
    const [score, setScore] = React.useState(null)

    function checkAnswers (formData) {
        const userAnswers = Object.fromEntries(formData)
        const result = gradeAnswers(userAnswers, questionsArray)
        setScore("Your scored " + result.score + " / " + questionsArray.length + " correct answers")
        setOptionStates(result.optionStates)
    }

    function handleSubmit(event) {
        event.preventDefault()

        if (score) {
            toggleStart()
            return
        }

        const form = event.currentTarget
        if (!form.checkValidity()) {
            form.reportValidity()
            return
        }

        const formData = new FormData(form)
        checkAnswers(formData)
    }

    return (
    <>
        <form onSubmit={handleSubmit} className="questions-main">
            {isLoading ? (
                <Skeleton />
            ) : (
                questionsArray.map((question, index) => (
                    <Question
                        key={index}
                        questionId={`${index + 1}`}
                        questionObj={question}
                        optionStates={ optionStates?.[index] || {} }
                    />
                ))
            )}

            <div className="feedback-container">
                {score && <p className="score">{score}</p>}
                <button
                    className="check-answers-btn"
                    type="submit" disabled={isLoading}
                    
                >
                    {score ? "Play Again" : "Check answers"}
                </button>
            </div>

        </form>
    </>
    )
}

