
function getQuestion(number, category, difficulty) {
    return fetch(`https://opentdb.com/api.php?amount=${number}&category=${category}&difficulty=${difficulty}`)
        .then(res => res.json())
        .then(data => storeQuestions(data))
}


function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function storeQuestions(data) {
    if (data.response_code !== 0) {
        console.error("Error fetching questions")
        return
    }
    const questions = data.results.map(question => {
        return {
            question: question.question,
            correctAnswer: question.correct_answer,
            options: shuffle([...question.incorrect_answers, question.correct_answer])
        }
    })
    return questions
}



export default getQuestion

