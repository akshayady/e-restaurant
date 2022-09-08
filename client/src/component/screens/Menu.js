import React, { useContext, useEffect, useState } from 'react'
import { Grid, Typography, Container, Box, Button, Tab, Tabs} from '@mui/material';
import Banner from "../asset/chef-3.png";
// import Footer from './Footer';

import { toast } from 'react-toastify';
import axios from 'axios';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

import Product from '../Product/Product';
import { GlobalContext } from './../../GlobalContext';
import Footer from './Footer';


function Explore() {

  const data = useContext(GlobalContext)
  const [products, setProducts] = data.productApi.products;
  const [isUser] = data.authApi.isUser;
  const [isAdmin] = data.authApi.isAdmin;

  const [token] = data.token

  const [value, setValue] = useState(0);
  const [curItems, setCurItems] = useState([]);

  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filterResult = (catItem) => {
    // console.log('cate item =', catItem)

    if (catItem === "All") {
      setCurItems(products);
    } else {
      let result = products.filter((curData) => {
        return curData.category === catItem;
      });
      console.log("filtered result =", result);
      setCurItems(result);
    }
  };

  useEffect(() => {
    filterResult("All");
  }, [products]);

  const delHandler = async (id) => {
    if (window.confirm(`Are you sure to delete product?`)) {
      try {
        let product = await axios.get(`/api/v1/product/get/${id}`)
        if (!product) {
          toast.error('no product found')
        } else {
            // delete image
          axios.post(`/api/v1/image/product/destroy`, { public_id: product.public_id }, {
              headers: {Authorization: token}
           })
           await axios.delete(`/api/v1/product/delete/${id}`, {
              headers: {Authorization: token}
           })
            .then(res => {
              toast.success("Product deleted succssfully");
              window.location.reload();
          }).catch(err => toast.error(err.message))
        }

        } catch (err) {
          toast.error(err.message)
        }
    } else {
      toast.warning('delete terminated')
    }
  }

  return (
   <>
    <Container mt={5}>
    <Box mt={1}  >
            <Grid container>
              <Grid item md={8} >
              <Typography
          variant="h4"
          align="start"
          mt={1}
          sx={{ fontWeight: "600" }}
        >
          Welcome to <RestaurantMenuIcon/> Hotel RajKumar
        </Typography>

        <Typography
              variant="h3"
              align='end'
              sx={{ padding: "50px", color: "chocolate", fontWeight: "700" }}
            >
              Taste  the Authentic Natti Style Foods..... {" "}
            </Typography>
              </Grid>
              <Grid item md={4} >
                <img src={Banner} />
              </Grid>
            </Grid>
          </Box>
       
          <Typography
           align='center'
             mt={3}
             mb={3}
            > <Divider sx={{paddingY:'1px',marginY:'20px'}}>
            <Chip label="Our Menu" />
          </Divider>
             
            </Typography>

          <Grid container color='red' sx={{padding:'80px', background:`linear-gradient(rgba(20,30,0,0.9),rgba(0,0,0,0.5),rgba(0,0,2,0.3))`}} mt={1} mb={2}>
            <Grid item xs={12} pb={4} md={12}>
             
              <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"  
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
            >
              <Tab
                label={
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    onClick={() => filterResult("All")}
                  >
                    <Chip
                      label="All"
                      variant="outlined"
                      sx={{
                        "&:hover": {
                          background: "#f4474a",
                          color: "white",
                        },
                        fontWeight: "bold",
                      }}
                    />
                  </Box>
                }
              />
              <Tab
                label={
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    onClick={() => filterResult("Veg")}
                  >
                    <Chip
                      label="veg"
                      variant="outlined"
                      sx={{
                        "&:hover": {
                          background: "#f4474a",
                          color: "white",
                        },
                        fontWeight: "bold",
                      }}
                    />
                  </Box>
                }
              />
              <Tab
                label={
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    onClick={() => filterResult("Non-veg")}
                  >
                    <Chip
                      label="Non-veg"
                      variant="outlined"
                      sx={{
                        "&:hover": {
                          background: "#f4474a",
                          color: "white",
                        },
                        fontWeight: "bold",
                      }}
                    />
                  </Box>
                }
              />
              <Tab
                label={
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    onClick={() => filterResult("Fast-food")}
                  >
                    <Chip
                      label="FastFood"
                      variant="outlined"
                      sx={{
                        "&:hover": {
                          background: "#f4474a",
                          color: "white",
                        },
                        fontWeight: "bold",
                      }}
                    />
                  </Box>
                }
              />
            </Tabs>
          </Box>
              <Typography variant='h4' color={'seashell'}>Grab Your favorites here..!</Typography>
            </Grid>
            
            <Grid container> 
              {
                curItems && curItems.map((item,index)=>{
                  return(
                      <Product key={index} {...item} isUser={isUser} isAdmin={isAdmin} del={delHandler} />
                  )
                })
              }
            </Grid>
          </Grid>
      
    </Container>
    <Footer/>
    </>
  )
}

export default Explore