import React from 'react'
//import { Typography} from '@material-ui/core'
import { Box,Grid,Container, Button, Typography } from '@mui/material'
import aboutMain from '../asset/cbiryani.jpg';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';


function About() {
  return (
    <Box pt={5} pb={6}>
        <Box className="lineContainer">
          <Typography
            align="center"
            sx={{
              fontSize: "1.5rem",
              fontWeight: "600",
              color: "#f4474a",
              fontFamily: "Dancing Script, cursive",
            }}
            className="line"
          ><Button variant='outlined'> About us</Button>
           
          </Typography>
        </Box>
        <Typography
          variant="h4"
          align="center"
          mt={1}
          sx={{ fontWeight: "600" }}
        >
          Welcome to <RestaurantMenuIcon/> Hotel RajKumar
        </Typography>
        <Container>
          <Grid container mt={3}>
            <Grid
              item
              lg={5}
              xs={12}
              sx={{
                display: "flex",
                height: "80vh",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box>
                <Typography variant="h3" fontWeight={700}>
                  We Serve The Best Authentic Natti style foods
                </Typography>
                <Typography mt={4}>
                  We are the country's no.1 Fast food retailer. Country's best
                  food are delivered by us. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Consequatur est fuga corrupti
                  saepe eius excepturi deleniti cum corporis magnam, tempora ad
                  harum accusantium cupiditate eum ullam tenetur similique vitae
                  minus. We gain the satisfaction of our customers with our
                  delicate service and extreme high food quality.
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={7} xs={12}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <img src={aboutMain} alt="no image" width={600} height={400}/>
              </Box>
            </Grid>
          </Grid>
        
          
        </Container>
      </Box>
  )
}

export default About
