import React from "react";
//import Carousel from "react-elastic-carousel";

import { Grid, Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import Burger from "../asset/anibur.png";
import Fast from "../asset/del.png";
import Eat from "../asset/dish.png";
import Drive from "../asset/delicon.png";
import Enjoy from "../asset/bowl.png";
import Boy from "../asset/360.png";
import header from "../asset/foody.webp";
import Img28 from '../asset/wow.jpg';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from "./Footer";
import { Carousel } from "bootstrap";


export default function Home(props) {
  return (
    <Box>
      <Box
        sx={{
          background:`linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.4),rgba(0,0,2,0.9)),url(${header})`,
          // backgroundImage: `url(${header})`,
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <Grid container>
          <Grid
            item
            lg={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "90vh",
              width: "100%",
            }}
          >
            <Typography
              variant="h3"
              gutterBottom
              component="div"
              color="whitesmoke"
              pt={5}
            >
              Get ready to
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              component="div"
              color="#e65100"
              sx={{ fontWeight: "900" }}
            >
              taste the unlimited in Your Home
            </Typography>

            <img src={Boy} width="100%" />
            
          </Grid>

          
        </Grid>
      </Box>

      <Grid pt={6} pb={4} sx={{ padding: "20px" }}>
      <Box
          className="Home"
          sx={{
            backgroundColor: "orange",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
           <Grid container >
            <Grid item md={4}>
              <image src = {Img28} />
            </Grid>
            <Grid item md={4}>
              <image src = {Img28} />
            </Grid>

           </Grid>

        </Box>
        <Box pt={8}>
        <Typography variant="h4" align="center">
            HOW IT WORKS
          </Typography>
          <Grid
            container
            spacing={5}
            alignContent="center"
            justifyContent="center"
            pt={4}
          >
            <Grid
              item
              lg={4}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <img src={Eat} width={100} />
              <Typography variant="h5">Choose Your Favorite</Typography>
              <Typography variant="subtitle">
                Choose your favorite meals and order online or by phone. It's
                easy to customize your order.
              </Typography>
            </Grid>
            <Grid
              item
              lg={4}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <img src={Drive} width={100} />
              <Typography variant="h5">We Deliver Your Meals</Typography>
              <Typography variant="subtitle">
                We prepared and delivered meals arrive at your door. Duis autem
                vel eum iriure dolor in hendrerit in vulputate.
              </Typography>
            </Grid>
            <Grid
              item
              lg={4}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <img src={Enjoy} width={100} />
              <Typography variant="h5">Eat And Enjoy</Typography>
              <Typography variant="subtitle">
                No shooping, no cooking, no counting and no cleaning. Enjoy your
                healthy meals with your family.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Grid spacing={5} pt={5}>
        <Typography variant="h4" align="center">
            Explore options near me
          </Typography>
          <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Popular cuisines near me</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Bakery .Beverages .Biryani .Burger .Chinese .Desserts .Ice Cream
                .Juices .Kebab .Momos .Mughlai .North Indian .Pizza .Rolls
                .Sandwich .Seafood .Shake .Sichuan .South Indian .Street .
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Top Restaurant Chains</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Biryani Blues _ Burger King _ Domino's _ KFC _ Krispy Kreme
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Cities We Deliver To</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>All over India</Typography>
            </AccordionDetails>
          </Accordion>
      
    </div>
        </Grid>

      </Grid>
      <Footer/>

      </Box>

      
    
  );
}
