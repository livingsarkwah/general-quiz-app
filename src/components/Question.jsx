import {decode} from 'html-entities'
import React from 'react'

export default function Question(props) {
    const optionObjectLength = Object.keys(props.optionStates).length
    const isGraded = optionObjectLength > 0
    const [selectedOption, setSelectedOption] = React.useState(null)

    
    function handleSelect(value) {
        setSelectedOption(value)
    }

    const {correctAnswer, options, question} = props.questionObj

    const optionItems = options.map((option, index) => {
        
        return (
        <label
            key={index}
            className={isGraded ? `radio ${props.optionStates[index]}` : `radio ${selectedOption === option ? "selected" : ""}`}
            onClick={() => handleSelect(option)}
        >
            <input
                type="radio"
                name={props.questionId}
                value={option}
                required
                checked={selectedOption === option}
                onChange={() => handleSelect(option)}
            />
            <span className="name">{decode(option)}</span>
        </label>
        )
    })



    return props.questionId? (
        <div className="question">
            <p className="question-text">{decode(question)}</p>
            <div className="radio-inputs">{optionItems}</div>
        </div>
    ) : null
}



