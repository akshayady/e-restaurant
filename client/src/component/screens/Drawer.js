import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
 makeStyles,
 Typography
} from "@material-ui/core";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

const useStyles = makeStyles(()=>({
    link:{
        textDecoration:"none",
        color: "blue",
        fontSize: "20px",
    },
    icon:{
        color: "white"
    },
    logo:{
      marginRight:"250px"
    }
}));

function DrawerComponent() {
const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
         <ListItem onClick={() => setOpenDrawer(false)}>
            
              <Link to="/home" className={classes.link}>Home</Link>
            
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            
              <Link to="/explore" className={classes.link}>Explore</Link>
            
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            
              <Link to="/contact" className={classes.link}>Contact</Link>
            
          </ListItem>
          {/* <ListItem onClick={() => setOpenDrawer(false)}>
            
              <Link to="/about" className={classes.link}>Faq</Link>
            
          </ListItem> */}
        </List>
      </Drawer>
      <Typography variant="h4" className={classes.logo} onClick={() => setOpenDrawer(!openDrawer)}>
          Dev-Kart
          
        </Typography>
      {/* <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton> */}
    </>                   
  );
}
export default DrawerComponent;