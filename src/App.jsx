import { useEffect, useState } from 'react'
import './App.css'
import Description from './components/Description';
import Options from './components/Options';
import Feedback from './components/Feedback';


function App() {
  const localFeedback = JSON.parse(localStorage.getItem('feedback')) || {
    good: 0,
    neutral: 0,
    bad: 0
  }
  const [feedback, setFeedback] = useState(localFeedback)
  const updateFeedback = feedbackType => {

    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1
    })

    // Burada durumu güncellemek için setter'ı kullan
  }
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad
  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0
    })
    localStorage.removeItem('feedback')
  }
  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback))
  })
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100)



  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      <Feedback
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        total={totalFeedback}
        positive={positiveFeedback ? positiveFeedback : 0}
      />
    </>
  )
}

export default App
