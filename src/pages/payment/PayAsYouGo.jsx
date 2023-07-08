import React from 'react';
import ReactDOM from 'react-dom';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Radio,
    Button,
  } from '@mui/material';

const PayAsYouGo = ({onClose}) => {
  const portalRoot = document.getElementById('modal-root');

  const backdropStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    zIndex: 9999, 
  };

  const portalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'black',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Raleway',
    zIndex: 10000, 
    height: "590px",
    width: "80%",
    color: "white"
  };

  const btn ={
    border: "none",
    outline: "none",
    backgroundColor: "inherit",
    color: "white",
    fontSize: "28px",
    float:"right"
  }

  const heading = {
    color: "#FFD600",
    textAlign: "center"
  }

  const dollar={
    fontSize: "40px",
    color: "#FFD600",
    textAlign: "center",
    fontFamily: "Outfit"
  }

  const span = {
    fontSize: "14px",
    fontWeight: "400"
  }

  const tableStyle = {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: '0 10px',
  };

  const cellStyle = {
    borderBottom: '1px solid #ccc',
    padding: '10px',
    textAlign: "center",
    color: "white",
    fontFamily: "Raleway"
  };

  const tableBtn ={
    border: "none",
    outline: "none",
    borderRadius: "20px",
    color: "white",
    backgroundColor: "#FFD600"
  }

  const handleClose = () => {
    onClose();
  };



  return ReactDOM.createPortal(
    <div>
      <div style={backdropStyle}></div>
      <div style={portalStyle}>
        <button style={btn}onClick={handleClose}>&times;</button>
        <h1 style={heading}>  Pay As You Go </h1>
        <p style={{textAlign: "center", margin: "0px", padding:"0px"}} >Credits available for use forever</p>
      <div>
        <h1 style={dollar}>USD $ 0.998 <span style={span}>/credit</span></h1>
      </div>
      <TableContainer>
      <Table style={tableStyle} aria-label="mui table">
        <TableBody>
          <TableRow>
            <TableCell style={cellStyle}>
              <Radio sx={{color: "#FFD600"}}/>
            </TableCell>
            <TableCell style={cellStyle}>10 Credits</TableCell>
            <TableCell style={cellStyle}>$ 10</TableCell>
            <TableCell style={cellStyle}>1$ /Credit</TableCell>
            <TableCell style={cellStyle}>
              <Button variant="contained" sx={tableBtn}>
                Buy Now
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={cellStyle}>
              <Radio  sx={{color: "#FFD600"}}/>
            </TableCell>
            <TableCell style={cellStyle}>30 Credits</TableCell>
            <TableCell style={cellStyle}>$ 20</TableCell>
            <TableCell style={cellStyle}>1$ /Credit</TableCell>
            <TableCell style={cellStyle}>
              <Button variant="contained" sx={tableBtn}>
              Buy Now
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={cellStyle}>
              <Radio  sx={{color: "#FFD600"}}/>
            </TableCell>
            <TableCell style={cellStyle}>30 Credits</TableCell>
            <TableCell style={cellStyle}>$ 20</TableCell>
            <TableCell style={cellStyle}>1$ /Credit</TableCell>
            <TableCell style={cellStyle}>
              <Button variant="contained" sx={tableBtn}>
              Buy Now
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={cellStyle}>
              <Radio  sx={{color: "#FFD600"}}/>
            </TableCell>
            <TableCell style={cellStyle}>30 Credits</TableCell>
            <TableCell style={cellStyle}>$ 20</TableCell>
            <TableCell style={cellStyle}>1$ /Credit</TableCell>
            <TableCell style={cellStyle}>
              <Button variant="contained" sx={tableBtn}>
              Buy Now
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    </div>,
    portalRoot
  );
};

export default PayAsYouGo;
