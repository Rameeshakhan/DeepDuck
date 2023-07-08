import React, { useState } from 'react';
import { Typography, Button, Drawer, List, ListItem, ListItemText, IconButton, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import logo from "../assets/images/logo.png";
import { useNavigate } from 'react-router-dom';

const Navbar = ( {deepDuckImage, optionColor}) => {

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 650px)'); 

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '20px', justifyContent: 'space-between' }}>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <picture>
          <img src={logo} alt="Logo" height="39px" width="47px"
          onClick={()=> navigate("/")}
          />
        </picture>
        <span style={{ marginLeft: '10px' }}>
          <img src={deepDuckImage} alt="Logo" height="17px" width="86px" />
        </span>
      </div>

      {isMobile ? (
        <>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleToggle}>
            <MenuIcon sx={{color: optionColor}}/>
          </IconButton>

          <Drawer anchor="right" open={open} onClose={handleToggle} PaperProps={{ sx: { backgroundColor: 'black', color: 'white' } }}>
            <List style={{ width: '200px' }}>
              <ListItem button onClick={() => navigate('/login')}>
                <ListItemText primary="Log In" />
              </ListItem>
              <ListItem button onClick={() => navigate('/signup')}>
                <ListItemText primary="Sign Up" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Swap it" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Feature" />
              </ListItem>
              <ListItem button onClick={()=> navigate("/pricing")}>
                <ListItemText primary="Pricing"  />
              </ListItem>
            </List>
          </Drawer>
        </>
      ) : (
        <>
          <div style={{ flex: '1', textAlign: 'center' }}>
        <Typography variant="p" style={{ fontFamily: 'Raleway', fontSize: '14px', fontWeight: 600, lineHeight: '16px', letterSpacing: '0em', textAlign: 'left', color: optionColor, margin: "0px 20px" }}>
        Swap it
      </Typography>
      <Typography variant="p" style={{ fontFamily: 'Raleway', fontSize: '14px', fontWeight: 600, lineHeight: '16px', letterSpacing: '0em', textAlign: 'left', color: optionColor, margin: "0px 20px" }}>
        Feature
      </Typography>
      <Typography variant="p" onClick={()=> navigate("/pricing")} style={{ fontFamily: 'Raleway', fontSize: '14px', fontWeight: 600, lineHeight: '16px', letterSpacing: '0em', textAlign: 'left', color: optionColor, margin: "0px 20px"  }}>
        Pricing
      </Typography>
      <Typography variant="p" onClick={()=> navigate("/gallery")} style={{ fontFamily: 'Raleway', fontSize: '14px', fontWeight: 600, lineHeight: '16px', letterSpacing: '0em', textAlign: 'left', color: optionColor, margin: "0px 20px"  }}>
        Gallery
      </Typography>
          </div>
         
        </>
      )}
    </div>
  );
};

export default Navbar;
