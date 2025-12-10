import { Button, Grid2 as Grid, Typography } from "@mui/material"
import Image from "next/image"
import styles from './PlaceSection.module.css'
import Link from "next/link"
import { isMobile } from "react-device-detect";


export const PlaceSection = () => {
  return <Grid container spacing={2} sx={{ justifyContent: 'center', mb: 5, backgroundColor: 'white' }}>
    <Grid size={12}>
      <div className={styles.hDivider}>
        <div className={styles.shadow}></div>
      </div>
    </Grid>
    <Grid size={12} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Image
        alt="champagne-gift"
        src='/champagne.gif'
        width={100}
        height={100}
      />
    </Grid>
    <Grid size={12} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Typography variant={isMobile ? 'h4' : 'h2'}>Fiesta</Typography>
    </Grid>
    <Grid size={isMobile ? 8 : 4} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Typography variant={isMobile ? 'body1' : 'h5'} letterSpacing={2} align="center">
        Queremos que compartas con nosotros este momento tan especial,
        por lo que te invitamos a que nos acompañes a celebrarlo.<br />
        Te esperamos a las 20:00 hs para la celebracion del civil, sino podes ingresar a partir de las 21:00 hs.<br />
        En <Link href={'https://www.instagram.com/mola_multieventos/?igsh=YW94amo2MTc3OHY1#'} target="_blank"><span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Mola Eventos</span></Link><br />
        San Martin 152, Roldan, Santa Fe
      </Typography>
    </Grid>
    <Grid size={12} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Button
        variant="contained"
        color="primary"
        target="_blank"
        href="https://www.google.com/maps/place/Mola+Multieventos/@-32.9015824,-60.9024383,17z/data=!3m1!4b1!4m6!3m5!1s0x95b6499d9be8125f:0xd34dc37ff31543cf!8m2!3d-32.9015824!4d-60.8998634!16s%2Fg%2F11r4gprryb?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D"
        sx={{ mt: 2, borderRadius: 12, px: 3 }}>
        <Typography variant={isMobile ? 'body1' : 'h5'} align="center" letterSpacing={2}>
          COMO LLEGAR
        </Typography>
      </Button>
    </Grid>
  </Grid>
}
