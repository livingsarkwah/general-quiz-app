import React from 'react'
import Button from './Button'

export default function Form({toggleStart, fetchQuestions}) {
    function handleSubmit(formData) {
        const userObj = Object.fromEntries(formData)
        console.log(userObj)
        toggleStart()
        fetchQuestions(userObj)
    }
    return (
        <form action={handleSubmit} className="landing-form">
            <div className='form-container'>
            <label htmlFor="number-of-questions">Number of Questions</label>
            <input type="number" id="number-of-questions" name="num" min="2" max="25" defaultValue={2} />

            <label htmlFor="category">Select Category</label>
            <select id="category" name="category">
                <option value="">Any Category</option>
                <option value="9">General Knowledge</option>
                <option value="21">Sports</option>
                <option value="23">History</option>
                <option value="24">Politics</option>
                <option value="17">Science & Nature</option>
                <option value="18">Computers</option>
            </select>

            <label htmlFor="difficulty">Select Difficulty</label>
            <select id="difficulty" name="difficulty">
                <option value="">Any Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
            </div>
            
            <Button size="large">
                Start Game
            </Button>
        </form>
    )
}



