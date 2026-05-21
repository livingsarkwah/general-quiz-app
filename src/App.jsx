import { useState, useEffect } from 'react'
import Landing from './components/Landing'
import Questions from './components/Questions'
import './App.css'
import getQuestion from './utils/getQuestions.js'

export default function App() {
	const [start, setStart] = useState(false)
	const [questions, setQuestions] = useState([])
	console.log(questions[0])

	function toggleStart() {
	setStart(prevStart => !prevStart)
	}

	function fetchQuestions(obj) {
	getQuestion(obj.num, obj.category, obj.difficulty).then(questions => {
		setQuestions(questions)
	})
	}



	return (
		<>
			{start ? <Questions questionsArray={questions} /> : <Landing toggleStart={toggleStart} fetchQuestions={fetchQuestions} />}
		</>
	)
}


