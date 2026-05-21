import {decode} from 'html-entities'

export default function Question(props) {
    const {correctAnswer, options, question} = props.questionObj

    const optionItems = options.map((option, index) => (
        <label className="radio" key={index}>
            <input type="radio" name={props.questionId} value={option} required />
            <span className="name">{decode(option)}</span>
        </label>
    ))


    return props.questionId? (
        <div className="question">
            <p className="question-text">{decode(question)}</p>
            <div className="radio-inputs">{optionItems}</div>
        </div>
    ) : null
}