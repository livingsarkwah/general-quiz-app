export default function Skeleton() {
    const skeletonWidths = ["72%", "84%", "64%", "78%", "70%"]
    return (
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
    )
}