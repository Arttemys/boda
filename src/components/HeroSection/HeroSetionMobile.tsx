import { Grid2 as Grid } from "@mui/material";
import Image from "next/image";
import { HeroImage } from "./HeroImage/HeroImage";
import { CustomTypography } from "../CustomTypography/CustomTypography";

export const HeroSetionMobile = () => {

  return <>
    <Grid container sx={{ height: '100dvh', justifyContent: 'center', alignItems: 'center' }}>
      <Image
        alt="hero-banner"
        src='/ring.jpeg'
        width={800}
        height={800}
        style={{
          position: 'absolute',
          zIndex: -1,
        }}
      />
      <Grid>
        <Image
          alt="logo"
          src={'/logo.png'}
          width={400}
          height={400}
          style={{
            position: 'absolute',
            bottom: '50%',
            left: '6dvw',
          }}
        />
      </Grid>

      <Grid size={6} sx={{ backgroundColor: "primary.light", width: '100%', padding: 3, position: 'absolute', bottom: 48 }}>
        <CustomTypography variant="body2" color="primary" fontWeight={700} align="center"
          label="Hay momentos en la vida que son muy especiales por si solos, pero al compartirlos con personas tan especiales como tu, se convierten en momentos imposibles de olvidar. Te esperamos en nuestra boda!" />
      </Grid>
    </Grid >
  </>
}