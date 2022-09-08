import React, { useState, useContext } from "react";

import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Divider,
  MenuItem,
  Menu,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Grid,
  Stack,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";

import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";

import { styled } from "@mui/material/styles";

import CloseSharpIcon from "@mui/icons-material/CloseSharp";

import { Link } from "react-router-dom";

import { NavLink } from "react-router-dom";

import { GlobalContext } from "./../../GlobalContext";

import axios from "axios";

import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

const pages = ["Menu", "About"];

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",

  alignItems: "center",

  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
}));

const drawerWidth = 300;

const boxSX = {
  "&:hover": {
    color: "yellow",
    
  },
};



function Navbar() {
  const [anchorNav, setAnchorNav] = useState(null);

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  /* login and signup handler*/

  const handleOpenMenu = (event) => {
    setAnchorNav(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorNav(null);
  };

  const context = useContext(GlobalContext);

  const navigate = useNavigate();

  const [isLogged, setIsLogged] = context.authApi.isLogged;

  const [isAdmin, setIsAdmin] = context.authApi.isAdmin;

  const [isUser, setIsUser] = context.authApi.isUser;
  const [cart] = context.authApi.cart;

  const logoutUser = async () => {
    if (window.confirm(`Are u sure to logout`)) {
      await axios.get("/api/v1/auth/logout");

      localStorage.clear();

      if (isAdmin) {
        setIsAdmin(false);
      }

      if (isUser) {
        setIsUser(false);
      }

      setIsLogged(false);

      toast.success("logout success");

      navigate("/");

      window.location.reload();
    } else {
      toast.warning("logout terminated");
    }
  };

  /* common route */

  const commonRoute = () => {
    return (
      <Box>
        <Button
          sx={{ fontSize: 25, mr: 0.5,fontSize:"10px" }}
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenMenu}
          color="inherit"
          variant="outlined"
        >
          Account
        </Button>

        <Menu
          id="menu-appbar"
          anchorEl={anchorNav}
          anchorOrigin={{
            vertical: "bottom",

            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",

            horizontal: "left",
          }}
          open={Boolean(anchorNav)}
          onClose={handleCloseMenu}
          sx={{
            display: "block",
          }}
        >
          <MenuItem onClick={handleCloseMenu}>
            <Typography
              component={Link}
              to={`/orders`}
              color="black"
              sx={{ textDecoration: "none" }}
            >
              Orders
            </Typography>
          </MenuItem>

          <MenuItem onClick={handleCloseMenu}>
            <Typography
              component={Link}
              to={`/profile`}
              color="black"
              sx={{ textDecoration: "none" }}
            >
              Profile
            </Typography>
          </MenuItem>

          <MenuItem onClick={handleCloseMenu}>
            {isUser ? (
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to={`/user/dashboard`}
              >
                User dashboard
              </NavLink>
            ) : null}

            {isAdmin ? (
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to={`/admin/dashboard`}
              >
                Admin dashboard
              </NavLink>
            ) : null}
          </MenuItem>

          
          <MenuItem onClick={handleCloseMenu}>
            

            {isAdmin ? (
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to={`/admin/allOrders`}
              >
                All Orders
              </NavLink>
            ) : null}
          </MenuItem>

          <Divider />

          <MenuItem onClick={handleCloseMenu}>
            <Typography
              onClick={logoutUser}
              color="black"
              sx={{ textDecoration: "none" }}
            >
              Logout
            </Typography>
          </MenuItem>
        </Menu>
      </Box>
    );
  };

  return (
    <React.Fragment>
      <AppBar position="sticky" sx={{ backgroundColor:"rgba(2,1,0,0.8)"}}>
        <Toolbar>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Typography
              component={Link}
              to={`/`}
              variant="h6"
              sx={{ textDecoration: "none", color: "white" }}
            ><RestaurantMenuIcon/>
              {isAdmin ? "Admin" : "  Hotel RajKumar"}
            </Typography>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1, justifyContent:"flex-end",paddingRight:"20px"}}>
            <Button component={Link} to={`/Menu`} color="inherit" sx={{ m: 1}} >
              Menu
            </Button>

            <Button
              component={Link}
              to={`/about`}
              color="inherit"
              sx={{ m: 1}}
            >
              About
            </Button>
          </Box>

          {/* <Box>
            <Button
              sx={{ fontSize: 25, mr: 0.5,fontSize:'10px' }}
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenMenu}
              color="inherit"
              variant="outlined"
            >
              
              Account
            </Button>

            <Menu
              id="menu-appbar"
              anchorEl={anchorNav}
              anchorOrigin={{
                vertical: "bottom",

                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",

                horizontal: "left",
              }}
              open={Boolean(anchorNav)}
              onClose={handleCloseMenu}
              sx={{
                display: "block",
              }}
            >
              <MenuItem onClick={handleCloseMenu}>
                <Typography
                  component={Link}
                  to={`/login`}
                  color="black"
                  sx={{ textDecoration: "none" }}
                >
                  Login
                </Typography>
              </MenuItem>

              <MenuItem onClick={handleCloseMenu}>
                <Typography
                  component={Link}
                  to={`/register`}
                  color="black"
                  sx={{ textDecoration: "none" }}
                >
                  Register
                </Typography>
              </MenuItem>

              {isLogged ? (
                commonRoute()
              ) : (
                <Menu>
                  <MenuItem>
                    <NavLink to={"/login"}>Login</NavLink>
                  </MenuItem>

                  <MenuItem>
                    <NavLink to={"/register"}>Register</NavLink>
                  </MenuItem>
                </Menu>
              )}
            </Menu>
          </Box> */}

{
          isLogged ? commonRoute() : (
            <Stack spacing={2} direction="row">
            <NavLink to={"/login"} ><Button variant="contained" size="small">
              Login</Button>
            </NavLink>
            <NavLink to={"/register"} ><Button variant="contained" size="small" >
              Register</Button>
            </NavLink>
           
          </Stack>
          )
        }
          

          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ bgcolor: "secondary" }}
          />

          <Box>
          <IconButton sx={{ color: "white", ml: 0.5 }}>
            {
            isAdmin ? null : (

                <NavLink to={'/product/Cart'} >
                    <span className='text-light'>{cart.length > 0 ? cart.length : null}
                    </span>
                    <ShoppingCartSharpIcon sx={{ fontSize: 25,color:"white" }} />
                </NavLink>
           
            )
           }
              
            
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer component */}

      <Drawer
        sx={{
          width: drawerWidth,

          flexShrink: 0,

          "& .MuiDrawer-paper": {
            width: drawerWidth,

            boxSizing: "border-box",
          },
        }}
        variant="temporary"
        anchor="left"
        onClose={() => {
          handleDrawerClose();
        }}
        open={open}
      >
        <DrawerHeader>
          <Typography sx={{ flexGrow: 1 }}>FoodDelivery App</Typography>

          <IconButton onClick={handleDrawerClose}>
            <CloseSharpIcon />
          </IconButton>
        </DrawerHeader>

        <Divider />

        <List>
          {pages.map((link, index) => {
            return (
              <ListItem button component={Link} to={`/${link}`} key={index}>
                <ListItemText primary={link} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </React.Fragment>
  );
}

export default Navbar;
