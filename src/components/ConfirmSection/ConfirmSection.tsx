import { Box, Button, Grid2 as Grid, Typography } from "@mui/material"
import Image from "next/image"
import { CustomTypography } from "../CustomTypography/CustomTypography"
import { useSearchParams } from "next/navigation"
import { isMobile } from "react-device-detect";



export const ConfirmSection = () => {
  const params = useSearchParams()
  const q = params.get('q')
  const encondingString = q && atob(q as string)
  // TARJETA ESPECIAL q=dGFyamV0YVNwZWNpYWw=
  // TARJETA NORMAL q=dGFyamV0YU5vcm1hbA==

  const href = encondingString && encondingString === 'tarjetaSpecial' ? 'https://forms.gle/gtQeK1THCAm2g8j6A' : 'https://forms.gle/dgCMe8jZUV9trPjH9'

  return (
    <Grid container size={12} py={3} spacing={2} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', backgroundColor: 'white' }}>
      <Image
        alt="check-gif"
        src='/check.gif'
        width={isMobile ? 75 : 100}
        height={isMobile ? 75 : 100}
      />
      <CustomTypography variant="h5" color="primary.main" letterSpacing={1} align="center" label="CONFIRMACION DE ASISTENCIA" />
      <CustomTypography variant="h5" color="primary.main" letterSpacing={1} fontFamily={'kalam'} align="center" fontStyle={"italic"} label="Esperamos que puedas acompañarnos en este momento tan especial!" />
      <CustomTypography variant="h6" color="primary.main" letterSpacing={1} sx={{ width: isMobile ? '80%' : '40%', textAlign: 'center' }} label="Te pedimos que completes este formulario antes del 1 de diciembre de 2025. Si fuiste invitado/a con un acompañante" />
      <CustomTypography variant={isMobile ? 'h6' : 'h5'} color="primary.main" letterSpacing={1} align="center" sx={{ textDecoration: 'underline' }} label="completar un formulario por persona" />
      <Box sx={{ width: isMobile ? '80%' : '40%', textAlign: 'center' }}>
        <CustomTypography variant="h6" color="primary.main" letterSpacing={1} label={`Precio de tarjeta: ${encondingString && encondingString === 'tarjetaSpecial' ? '$40000' : '$70000'}`} />
        <CustomTypography variant="h6" color="primary.main" letterSpacing={1} label="Efectivo / trasnferencia bancaria" />
        <CustomTypography variant="subtitle1" color="primary.main" fontWeight={700} letterSpacing={1} label="*El precio de la tarjeta aumenta segun INDEC" />
      </Box>
      <Grid size={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          target="_blank"
          href={href}
          sx={{ mt: 2, borderRadius: 12, px: 3 }}>
          <Typography variant={isMobile ? 'subtitle1' : 'h6'} align="center" letterSpacing={2}>
            CONFIRMAR ASISTENCIA
          </Typography>
        </Button>
      </Grid>
    </Grid>
  )
}