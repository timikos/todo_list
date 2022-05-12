import { useState, useEffect } from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import './created-time-for-task.css'

function CreatedTimeForTask () {
  const currentDate = new Date()
  const createDate = new Date()
  const [timeCreated, setTime] = useState()

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(() => formatDistanceToNow(createDate, currentDate))
    }, 1000)

    return () => clearInterval(timerID)
  }, [])

  return (<span className="created-time">{timeCreated}</span>)
}

export default CreatedTimeForTask
