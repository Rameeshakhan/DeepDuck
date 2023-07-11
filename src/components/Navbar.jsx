import React, { useState } from 'react';
import { Typography, Button, Drawer, List, ListItem, ListItemText, IconButton, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import logo from "../assets/images/logo.png";
import { useNavigate } from 'react-router-dom';
import FeatureDropDown from './FreatureDropDown';
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = ({ deepDuckImage, optionColor }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isFeatureDropDownOpen, setIsFeatureDropDownOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 650px)');

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleFeatureDropDownToggle = () => {
    setIsFeatureDropDownOpen(!isFeatureDropDownOpen);
  };

  const closeFeatureDropDown = () => {
    setIsFeatureDropDownOpen(false);
  };

  const list = {
    background: "#1E1E1E",
    margin: "10px 20px ",
    width: "90%",
    borderRadius: "10px",
    fontFamily: "Raleway"
  };

  const signupBtn = {
    width: "90%",
    margin: "20px 20px 10px 20px",
    backgroundColor: "#FFD600",
    color: "white",
    border: "none",
    fontFamily: "Raleway",
    padding: "10px",
    borderRadius: "10px",
    fontSize: "14px"
  };

  const loginBtn = {
    width: "90%",
    margin: "0px 20px 0px 20px",
    backgroundColor: "#1E1E1E",
    color: "white",
    border: "none",
    fontFamily: "Raleway",
    padding: "10px",
    borderRadius: "10px",
    fontSize: "14px"
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '20px', justifyContent: 'space-between' }}>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <picture>
          <img
            src={logo}
            alt="Logo"
            height="39px"
            width="47px"
            onClick={() => navigate("/")}
            style={{
              cursor: "pointer"
            }}
          />
        </picture>
        <span style={{ marginLeft: '10px' }}>
          <img src={deepDuckImage} alt="Logo" height="17px" width="86px" />
        </span>
      </div>

      {isMobile ? (
        // Mobile view
        <>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleToggle}>
            <MenuIcon sx={{ color: optionColor }} />
          </IconButton>

          <Drawer anchor="right" open={open} onClose={handleToggle} PaperProps={{ sx: { backgroundColor: 'black', color: 'white', textAlign: "left", margin: "20px auto", width: "300px" } }}>
            <List style={{ width: '300px' }}>
              <ListItem button sx={list}>
                <ListItemText primary="Swap it" />
              </ListItem>
              <ListItem button onClick={handleFeatureDropDownToggle} sx={list}>
                <ListItemText primary="Feature" />
              </ListItem>
              <ListItem button onClick={() => navigate("/pricing")} sx={list}>
                <ListItemText primary="Pricing" />
              </ListItem>
            </List>
            <button style={signupBtn} onClick={() => navigate('/signup')}>Sign Up</button>
            <button style={loginBtn} onClick={() => navigate('/login')}>Log in</button>
            <Typography
              sx={{ textAlign: "center", fontSize: "12px", color: "#5E5E5E", margin: "10px", padding: "10px", cursor: "pointer" }}
            >
              <span onClick={() => navigate('/policy')}>Terms & Services </span> | <span onClick={() => navigate('/policy')}> Privacy Policy</span>
            </Typography>
          </Drawer>
        </>
      ) : (
        // Desktop view
        <>
          <div style={{ flex: '1', textAlign: 'center' }}>
            <Typography
              variant="p"
              style={{
                fontFamily: 'Raleway',
                fontSize: '14px',
                fontWeight: 600,
                lineHeight: '16px',
                letterSpacing: '0em',
                textAlign: 'left',
                color: optionColor,
                margin: "0px 20px",
                cursor: "pointer"
              }}
              onClick={() => navigate("/")}
            >
              Swap it
            </Typography>
            <Typography
  variant="p"
  style={{
    fontFamily: 'Raleway',
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '16px',
    letterSpacing: '0em',
    color: optionColor,
    margin: "0px 20px",
    cursor: "pointer",
    textAlign: "center",
    display: "inline-flex",
    alignItems: "center",
  }}
  onClick={handleFeatureDropDownToggle}
>
  <span style={{ marginRight: "5px" }}>Feature</span>
  <RiArrowDropDownLine size="24px" />
</Typography>

            {isFeatureDropDownOpen && (
              <FeatureDropDown />
            )}
            <Typography
              variant="p"
              onClick={() => navigate("/pricing")}
              style={{
                fontFamily: 'Raleway',
                fontSize: '14px',
                fontWeight: 600,
                lineHeight: '16px',
                letterSpacing: '0em',
                textAlign: 'left',
                color: optionColor,
                margin: "0px 20px",
                cursor: "pointer"
              }}
            >
              Pricing
            </Typography>
          </div>

          <div>
            <Button
              variant="contained"
              sx={{
                color: optionColor,
                margin: '5px',
                background: 'none',
                outline: 'none',
                fontFamily: 'Raleway',
                fontSize: '14px',
                fontWeight: 600,
                lineHeight: '16px',
                letterSpacing: '0em',
                textAlign: 'left',
                textTransform: 'none',
                border: "none",
                boxShadow: "none",
                '&:hover': {
                  background: 'none',
                  color: 'inherit',
                  outline: 'none',
                },
              }}
              onClick={() => navigate('/login')}
            >
              Log In
            </Button>

            <Button
              variant="contained"
              sx={{
                background: 'rgba(255, 214, 0, 1)',
                outline: 'none',
                fontFamily: 'Raleway',
                fontSize: '14px',
                fontWeight: 600,
                lineHeight: '16px',
                letterSpacing: '0em',
                textAlign: 'left',
                borderRadius: '8px',
                textTransform: 'none',
                color: optionColor,
                '&:hover': {
                  background: 'rgba(255, 214, 0, 1)',
                  color: 'white',
                  outline: 'none',
                },
              }}
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
