import { useState, useEffect } from 'react'
import { formatDistanceToNowStrict } from 'date-fns'

import './created-time-for-task.css'

function CreatedTimeForTask () {
  const currentDate = new Date()
  const [timeCreated, setTime] = useState(`created ${formatDistanceToNowStrict(currentDate)} ago`)

  useEffect(() => {
    const timerID = setInterval(
      () => {
        setTime(`created ${formatDistanceToNowStrict(currentDate)} ago`)
      },
      1000,
    )

    return () => clearInterval(timerID)
  }, [])

  return (<span className="created-time">{timeCreated}</span>)
}

export default CreatedTimeForTask
