import { Grid2 as Grid, useTheme } from "@mui/material"
import { CustomTypography } from "../CustomTypography/CustomTypography"
import { isMobile } from "react-device-detect";


export const FooterSection = () => {
  const theme = useTheme()
  return <Grid container p={5} spacing={2} sx={{ backgroundColor: theme.palette.background.default, justifyContent: 'center' }}>
    <Grid size={12} sx={{ display: 'flex', justifyContent: 'center' }}>
      <CustomTypography
        variant={isMobile ? 'subtitle1' : 'h5'}
        color="primary.light"
        fontWeight={700}
        letterSpacing={2}
        label="Gracias!"
      />
    </Grid>
    <Grid size={12} sx={{ display: 'flex', justifyContent: 'center' }}>
      <CustomTypography
        variant={isMobile ? 'subtitle1' : 'h4'}
        color="primary.light"
        fontWeight={700}
        letterSpacing={2}
        label="¡Te esperamos para celebrar con nosotros!"
        align="center"
      />
    </Grid>
  </Grid>
}
