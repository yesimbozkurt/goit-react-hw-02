import React from 'react'

const Feedback = ({ good, neutral, bad, total, positive }) => {
    // const total = good + neutral + bad;

    return (
        <div>
            {total === 0 && <p>No feedback yet</p>}
            {total > 0 && (
                <div>
                    <p>Good: {good}</p>
                    <p>Neutral: {neutral}</p>
                    <p>Bad: {bad}</p>
                    <p>Total: {total}</p>
                    <p>Positive feedback: {positive}%</p>
                </div>
            )}
        </div>
    )
}

export default Feedback
