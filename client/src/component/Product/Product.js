import { Card, CardContent, Grid, Typography, Box, Button, List, ListItem, CardMedia, IconButton,Divider, CardActions } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';


const noImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsNGGjrfSqqv8UjL18xS4YypbK-q7po_8oVQ&usqp=CAU"

function Product(props) {
    const {_id, title, price, image, desc, stock, category,qnty,rating, isAdmin, del} = props
  return ( 
    <React.Fragment>
      {
         stock === 0 ? null : (
          
          <Grid item xs={12} sm={6} md={4} sx={{padding:1}}>
            <NavLink to={`/product/details/${_id}`} style={{textDecoration:'none'}}>
              <Card  sx={{height:'350px', backgroundColor:'burlywood',maxWidth:"300px",borderRadius:'20px'}} >
                {
                  image.url ? (
                    <CardMedia component='img' image={image.url} sx={{height:'190px',borderRadius:'25px',padding:"7px"}} alt={title} />
                  ): (
                    <CardMedia component='img' image={noImage} alt="No image found" />
                  )
                }
                <CardContent sx={{padding:'5px'}}>
                  <Typography variant='h5' textAlign='center'>{title}</Typography>

                  <List sx={{height:"80px",paddingTop:'0.5px'}}>
                    <ListItem sx={{display:'flex',justifyContent:'space-between'}}>
                      <strong>Price</strong>
                      <span> &#8377;{price} </span>
                    </ListItem>

                    <ListItem>
                      <Typography variant='p'>
                        {desc}
                      </Typography>
                      <Typography hidden >
                        { category}
                      </Typography>
                    </ListItem>
                  </List>

                  <Box component='div'>
                    {
                      isAdmin ? (
                        
                          // <NavLink to={`/product/update/${_id}`} style={{textDecoration:'none', color:'black'}} >
                          //   <Button variant='contained' color='warning' endIcon={<EditRoundedIcon/>}>Edit</Button>
                          // </NavLink>
                          <CardActions style={{display:'flex',justifyContent:'space-between',padding:'2px',marginBottom:'10px'}}>
                            <NavLink to={`/product/update/${_id}`} >
                                <IconButton color='info'>
                                  <EditRoundedIcon/>
                                </IconButton>
                            </NavLink>
                            <IconButton onClick={() => del(_id)} color="error">
                              <DeleteForeverRoundedIcon/>
                            </IconButton>
                          </CardActions>
                        
                      ): null
                    }
                  </Box>
                </CardContent>
                  
              </Card>
            </NavLink>
            

          </Grid>
          

        
        )
      }

    </React.Fragment>






















  )
}

export default Product
