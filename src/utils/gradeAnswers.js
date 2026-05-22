import Questions from "../components/Questions"

export default function gradeAnswers(userAnswers, questionsArray) {
    const correctAnswers = {}
    const optionStates = {}

    questionsArray.forEach((question, qIndex) => {
    const questionNumber = qIndex + 1

    // 1. Store correct answer
    correctAnswers[questionNumber] = question.correctAnswer

    // 2. Get user's answer for this question
    const userAnswer = userAnswers[questionNumber]

    // 3. Initialize option states for this question
    optionStates[qIndex] = question.options.map((option) => {

        // Case 1: This option is what user selected
        if (option === userAnswer) {
        return option === question.correctAnswer
            ? "correct"
            : "wrong"
        }

        // Case 2: This is the correct answer (but user picked wrong)
        if (option === question.correctAnswer) {
        return "correct"
        }

        // Case 3: Everything else
        return "not-selected"
    })
    })

   
    // calculate user score
    let score = 0
    for (const [questionId, userAnswer] of Object.entries(userAnswers)) {
        if (userAnswer === correctAnswers[questionId]) {
            score++
        }  
    }

    return { score, correctAnswers, optionStates }
}