import { useState, useEffect } from 'react'
import Form from './Form'


export default function Landing(props) {
  return (
    <div className="landing-main">
        <div className="landing-text">
            <h1>Quizzical</h1>
            <p>A simple quiz app where you get random questions based on the option selected </p>
        </div>
        <Form toggleStart={props.toggleStart} fetchQuestions={props.fetchQuestions} />
    </div>
  )
}