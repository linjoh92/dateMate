import { useState, useEffect } from 'react'
import styles from './dateCalc.module.scss'

export default function DateCalc() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formattedTime: string = currentTime.toLocaleTimeString()
  const formattedDate: string = currentTime.toLocaleDateString('fr-FR')
  const dayOfWeek: string = currentTime.toLocaleDateString('en-US', {
    weekday: 'long',
  })

  return (
    <div className={styles.section}>
      <h2>{formattedTime}</h2>
      <h2>{dayOfWeek}</h2>
      <h2>{formattedDate}</h2>
    </div>
  )
}
