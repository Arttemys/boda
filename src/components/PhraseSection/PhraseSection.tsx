import { Box, Collapse, Divider, Grid2 as Grid } from "@mui/material"
import { CustomTypography } from "../CustomTypography/CustomTypography"
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import { useState } from "react";
import Image from "next/image";
import { isMobile } from "react-device-detect";


interface sections {
  title: string,
  value: string,
  src: string,
  alias?: string,
  text: string
}

export const PhraseSection = () => {
  const [expand, setExpand] = useState<string | null>(null)

  const sections: { [key: string]: sections } = {
    DRESS_CODE: {
      title: 'Dress Code',
      value: 'dress_code',
      src: '/wedding-dress.png',
      text: 'La vestimenta es elegante y sofisticada, pero no debe ser demasiado formal. Busca una combinación que refleje tu personalidad y que te haga sentir cómodo y confiado.'
    },
    GIFT: {
      title: 'Regalo',
      value: 'gift',
      src: '/surprise.png',
      alias: 'Arttemys',
      text: 'Nuestro mejor regalo es tu compañia, pero si deseas hacernos uno podrias ayudarnos a cumplir nuestros mayores deseos.'
    }
  }

  return <Grid sx={{ height: isMobile ? 'auto' : 460, backgroundColor: 'primary.light' }}>
    <Grid container spacing={5} size={12} py={5} px={isMobile ? 2 : 16} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid size={12}>
        <CustomTypography variant={isMobile ? 'h5' : 'h4'} color="primary" fontWeight={300} letterSpacing={2} align="center" label="¿Dudas?" />
        <CustomTypography variant={isMobile ? 'h5' : 'h4'} color="primary" fontWeight={400} letterSpacing={2} align="center" label="Te contamos todos los detalles" mt={1} fontFamily={'kalam'} />
      </Grid>

      {!isMobile ? <Grid container size={8} spacing={8}>
        {Object.values(sections).map((section) => {
          return (
            <Grid size={12 / Object.keys(sections).length} key={section.title}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 2 }}>
                <CustomTypography variant="h6" color="primary" fontWeight={300} label={section.title} letterSpacing={2} />
                {expand === section.value ? <ExpandLessOutlinedIcon onClick={() => setExpand(null)} /> : <ExpandMoreOutlinedIcon onClick={() => setExpand(section.value)} />}
              </Box>
              <Divider sx={{ mt: 1, maxWidth: '50%' }} />
              <Collapse in={expand === section.value} sx={{ py: 2 }}>
                <CustomTypography variant="h6" color="primary" fontWeight={300} label={section.text} />
                {section.alias && <CustomTypography variant="h6" color="primary" fontWeight={700} label={`Alias: ${section.alias}`} mt={2} />}
              </Collapse>
            </Grid>
          )
        })}
      </Grid> : Object.values(sections).map((section) => {
        return (
          <Grid key={section.title} size={isMobile ? 12 : 4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', mt: isMobile ? 2 : 0 }}>
              <Image
                alt="wedding-dress"
                src={section.src}
                width={80}
                height={80}
              />
              <CustomTypography variant={isMobile ? 'h6' : 'h5'} color="primary" fontWeight={isMobile ? 400 : 300} align="center" label={section.text} />
              {section.alias && <CustomTypography variant="h6" color="primary" fontWeight={700} label={`Alias: ${section.alias}`} mt={1} />}
            </Box>
          </Grid>
        )
      })}

      <Grid size={isMobile ? 12 : 4} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', mt: isMobile ? 2 : 0 }}>
          <Image
            alt="camera-gif"
            src='/camera.png'
            width={70}
            height={70}
          />
          <CustomTypography variant={isMobile ? 'h6' : 'h5'} color="primary" fontWeight={isMobile ? 400 : 300} align="center" label="Ayuda a que crezcan nuestros recuerdos. Publica tus fotos en redes sociales el dia de la boda con nuestro hashtag #BodaSyD" />
        </Box>
      </Grid>
    </Grid>
  </Grid >
}