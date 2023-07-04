import React from 'react';
import { Typography, Button } from '@mui/material';
import logo from "../assets/images/logo.png";
import deepDuck from "../assets/images/deepDuck.png";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
const navigate = useNavigate()

  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '20px', justifyContent: 'space-between' }}>
      {/* Images Section */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <picture>
          <img src={logo} alt="Logo" height="39px" width="47px" />
        </picture>
        <span style={{ marginLeft: '10px' }}>
          <img src={deepDuck} alt="Logo" height="17px" width="86px" />
        </span>
      </div>

      {/* Typography Section */}
      <div style={{ flex: '1', textAlign: 'center' }}>
        <Typography variant="p" style={{ fontFamily: 'Raleway', fontSize: '14px', fontWeight: 600, lineHeight: '16px', letterSpacing: '0em', textAlign: 'left', color: '#888888', margin: "0px 20px" }}>
          Swap it
        </Typography>
        <Typography variant="p" style={{ fontFamily: 'Raleway', fontSize: '14px', fontWeight: 600, lineHeight: '16px', letterSpacing: '0em', textAlign: 'left', color: '#888888' ,margin: "0px 20px" }}>
          Feature
        </Typography>
        <Typography variant="p" style={{ fontFamily: 'Raleway', fontSize: '14px', fontWeight: 600, lineHeight: '16px', letterSpacing: '0em', textAlign: 'left', color: '#888888', margin: "0px 20px"  }}>
          Pricing
        </Typography>
      </div>

      {/* Buttons Section */}
      <div>
      <Button
        variant="contained"
        sx={{
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
          color: 'white',
          fontFamily: 'Raleway',
          fontSize: '14px',
          fontWeight: 600,
          lineHeight: '16px',
          letterSpacing: '0em',
          textAlign: 'left',
          borderRadius: '8px',
          textTransform: 'none',
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
    </div>
  );
};

export default Navbar;
