import Question from "./Question"

export default function Questions({questionsArray}) {
    console.log("Questions component rendered")
    const isLoading = questionsArray.length === 0
    const skeletonWidths = ["72%", "84%", "64%", "78%", "70%"]

    function gradeAnswers(formData) {
        console.log("Grading answers...")
        const userAnswers = Object.fromEntries(formData)
        console.log(userAnswers)
    }

    function handleSubmit(event) {
    event.preventDefault()

    const form = event.currentTarget
    if (!form.checkValidity()) {
        form.reportValidity()
        return
    }

    const formData = new FormData(form)
    gradeAnswers(formData)
    }

    return (
    <>
        <form onSubmit={handleSubmit} className="questions-main">
            {isLoading ? (
                <div className="question-skeletons" aria-busy="true" aria-live="polite">
                    {skeletonWidths.map((width, index) => (
                        <div className="question question-skeleton" key={index}>
                            <div className="skeleton skeleton-title" style={{ width }} />
                            <div className="radio-inputs skeleton-options">
                                <span className="skeleton skeleton-pill" />
                                <span className="skeleton skeleton-pill" />
                                <span className="skeleton skeleton-pill" />
                                <span className="skeleton skeleton-pill" />
                            </div>
                        </div>
                    ))}
                    <p className="loading-text">Loading questions...</p>
                </div>
            ) : (
                questionsArray.map((question, index) => (
                    <Question key={index} questionId={`q${index + 1}`} questionObj={question} />
                ))
            )}

            <button className="check-answers-btn" type="submit" disabled={isLoading} >Check answers</button>

        </form>
    </>
    )
}

