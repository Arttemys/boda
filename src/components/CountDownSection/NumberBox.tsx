import { Typography } from '@mui/material'
import React from 'react'
import styles from './CountDownSection.module.css'
import { isMobile } from "react-device-detect";


interface numProp {
  num: number | string,
  unit: string,
};

export const NumberBox = ({ num, unit }: numProp) => {
  return (
    <div className={styles.numberBox}>
      <Typography variant={isMobile ? 'h5' : 'h2'} color='primary.light' letterSpacing={3}>
        {num}
      </Typography>
      <Typography variant={isMobile ? 'subtitle1' : 'h5'} color='primary.light' letterSpacing={isMobile ? 1 : 5}>
        {unit}
      </Typography>
    </div>
  )
}