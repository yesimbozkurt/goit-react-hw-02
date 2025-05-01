import React from 'react'

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
    return (
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '20px' }}>

            <button onClick={() => updateFeedback('good')}>Good</button>
            <button onClick={() => updateFeedback('neutral')}>Neutral</button>
            <button onClick={() => updateFeedback('bad')}>Bad</button>
            {totalFeedback > 0 && (
                <button onClick={resetFeedback}>Reset</button>
            )}
        </div>
    )
}

export default Options