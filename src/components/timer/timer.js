import { useEffect, useState } from 'react'
import { formatDistanceToNowStrict } from 'date-fns'

import './timer.css'

function Timer() {
  const dateStart = new Date()
  const [timer, setTimer] = useState(formatDistanceToNowStrict(dateStart))
  const [timerOn, setTimerOn] = useState(false)
  const saveTimer = 0
  useEffect(() => {
    if (timerOn) {
      const timerID = setInterval(
        () => {
          setTimer(formatDistanceToNowStrict(dateStart))
        },
        1000,
      )
      return () => clearInterval(timerID)
    }
  }, [timerOn])

  const start = () => {
    setTimerOn(true)
  }
  const end = () => {
    setTimerOn(false)
  }
  return (
    <span className="task__description">
      <button
        className="icon icon-play"
        onClick={start}
      />
      <button
        className="icon icon-pause"
        onClick={end}
      />
      {timer}
    </span>
  )
}

export default Timer
