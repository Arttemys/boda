import { Grid2 as Grid } from "@mui/material"
import { CustomSlider } from "./CustomSlider"


export const SliderSection = () => {
  return (
    <Grid container size={12} sx={{ display: 'flex', justifyContent: 'center', backgroundColor: 'white' }}>
      <CustomSlider />
    </Grid>
  )
}