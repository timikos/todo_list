import { useEffect, useState } from 'react'
import './timer-container.css'
import Timer from 'react-timer-wrapper'
import Timecode from 'react-timecode'

function TimerContainer({ timerMin, timerSec }) {
  const fullTime = timerSec + (timerMin * 60) + 1
  const [time, setTime] = useState()
  const [duration, setDuration] = useState()
  const [statusTimer, setStatusTimer] = useState(false)
  const onTimerUpdate = ({ time, duration }) => {
    setTime(time)
    setDuration(duration)
  }
  const start = () => {
    setStatusTimer(true)
  }
  const end = () => {
    setStatusTimer(false)
  }
  useEffect(() => {
    setStatusTimer(true)
    setTimeout(() => {
      setStatusTimer(false)
    }, 900)
  }, [])

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

      <Timer
        active={statusTimer}
        duration={fullTime * 1000}
        onTimeUpdate={onTimerUpdate}
      />
      <Timecode time={duration - time} />
    </span>
  )
}

export default TimerContainer
