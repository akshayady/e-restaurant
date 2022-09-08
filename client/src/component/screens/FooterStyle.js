import styled from '@emotion/styled';
import { Box, Typography, Stack, Container, Grid, Button, Divider, IconButton } from '@mui/material';
import React from 'react'
import Footerimage from '../asset/pav.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Banner = styled.div`
background:linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.4),rgba(255,118,2,0.9)),url(${Footerimage});
height:100%;
background-repeat: no-repeat;
background-size: cover;

`;

const FooterStyle = () => {
  return (
    <>
    <Banner>
        <Container sx={{py:8}}>
          

            <Grid container spacing={1} sx={{display:'flex',justifyContent:{xs:'flex-start',md:'center'}}}>
                <Grid item xs={6} sm={3} md={3} sx={{color:'white'}}>
                    <Typography variant='h6'> Contact us: </Typography>
                    <Typography variant="subtitle1">Email: dev_kart@info.in</Typography>
                    <Typography variant="subtitle1">Ph.no : 8975145685</Typography>
                    <Typography variant="subtitle1">Address:</Typography>
                    <Typography variant="subtitle1">#16, 1st main road, sankar road Banglore</Typography>
                </Grid >        
                <Grid item xs={6} sm={3} md={3} sx={{color:'white'}}>
                    <Typography variant='h6'> Legal </Typography>
                    <Typography variant="subtitle1">Terms and Condition</Typography>
                    <Typography variant="subtitle1">Privacy Policy</Typography>
                    <Typography variant="subtitle1">Disclaimer</Typography>
                    <Typography variant="subtitle1">Caution notice</Typography>
                </Grid>
                <Grid item xs={6} sm={3} md={3} sx={{color:'white'}}>
                    <Typography variant="subtitle1">Want to Partner with us??</Typography>
                    <Typography variant="subtitle1"><Button variant='contained' color='warning' href='/about'> Get Started </Button></Typography>
                   
                </Grid>         
               
                <Grid item xs={12} md={3} sx={{color:'white',textAlign:{xs:'center',md:'left'}}}>
                    <Typography variant='h6'>Follow Us</Typography>
                    <IconButton sx={{color:'white'}}>
                        <FacebookIcon/>
                    </IconButton> 
                    <IconButton sx={{color:'white'}}>
                        <InstagramIcon/>
                    </IconButton> 
                    <IconButton sx={{color:'white'}}>
                        <TwitterIcon/>
                    </IconButton> 
                    <IconButton sx={{color:'white'}}>
                        <YouTubeIcon/> 
                    </IconButton> 
                    
                </Grid>              

            </Grid>

            <Divider color="white" sx={{paddingY:'1px',marginY:'20px'}}/>

            <Grid container spacing={2} sx={{color:'white'}}>
                <Grid item xs={12} md={6} sx={{display:'flex',justifyContent:{xs:'center',md:'flex-start'}}}>
                    <Typography variant='p'>Privacy Policy</Typography>
                </Grid>

                <Grid item xs={12} md={6} sx={{display:'flex',justifyContent:{xs:'center',md:'flex-end'}}}>
                <Typography variant='p'>Copyright © RajKumar Corporation 2021 All Rights Reserved</Typography>
                    
                </Grid>
            </Grid>

            

        </Container>
    </Banner>
    </>
  )
}

export default FooterStyle
