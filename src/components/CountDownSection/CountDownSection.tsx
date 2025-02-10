import { Grid2 as Grid, useTheme } from "@mui/material"
import { useEffect, useState } from "react"
import { TimerContainer } from "./TimerContainer";
import dayjs from "dayjs";


export const CountDownSection = () => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const dueDate = dayjs('12-19-2025 21:00:00');
  const today = dayjs()
  const time = dueDate.diff(today, 'milliseconds')

  const theme = useTheme()

  useEffect(() => {
    const updateTime = setInterval(() => {

      const difference = time - (new Date().getTime() - today.valueOf()); // Calcula la diferencia actual

      const newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      const newHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const newMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);


      if (difference <= 0) {
        clearInterval(updateTime);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    })
    return () => {
      clearInterval(updateTime);
    }
  }, [])



  return <Grid container sx={{ backgroundColor: theme.palette.background.default, height: 400 }} spacing={1}>
    <TimerContainer
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
    />
  </Grid>
}