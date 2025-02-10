import React from 'react'
import { NumberBox } from './NumberBox'
import styles from './CountDownSection.module.css'
import { TimerHeader } from './TimerHeader'

interface timeProps {
  days: number | string,
  hours: number | string,
  minutes: number | string,
  seconds: number | string,
}

export const TimerContainer = ({ days, hours, minutes, seconds }: timeProps) => {
  return (
    <>
      <TimerHeader />
      <div className={styles.timerContainer}>
        <NumberBox num={days} unit="Dias" />
        <NumberBox num={hours} unit="Horas" />
        <NumberBox num={minutes} unit="Minutos" />
        <NumberBox num={seconds} unit="Segundos" />
      </div>
    </>
  )
} 