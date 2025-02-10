import { Typography } from '@mui/material'
import React from 'react'
import styles from './CountDownSection.module.css'
import { isMobile } from "react-device-detect";


interface numProp {
  num: string | number,
  unit: string,
  flip: boolean,
};

export const NumberBox = ({ num, unit, flip }: numProp) => {
  return (
    <div className={styles.numberBox}>
      <Typography variant={isMobile ? 'h5' : 'h2'} color='primary.light' letterSpacing={3}>
        {num}
      </Typography>
      <Typography variant='h5' color='primary.light' letterSpacing={5}>
        {unit}
      </Typography>
    </div>
  )
}