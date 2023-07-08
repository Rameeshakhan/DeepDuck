import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const styles = {
  table: {
    border: '1px solid #3B3B3B',
    backgroundColor: "#1F1F1F",
    color: "white",
    fontFamily: "Raleway",
    width: "100%",
    borderRadius: "10px"
  },
  cell: {
    textAlign: 'center',
    border: '1px solid #3B3B3B',
    color: "white",
    padding: "40px"
  },
};

const heading = {
  backgroundColor: "#1F1F1F",
  margin: "0px",
  padding: "50px",
  color: "white",
  textAlign: "center"
};

const ResponsiveTable = () => {
  return (
    <TableContainer component={Paper}>
      <h1 style={heading}>Credit Table</h1>
      <Table style={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell style={styles.cell} rowSpan={2}></TableCell>
            <TableCell style={styles.cell}>Pricing</TableCell>
            <TableCell style={styles.cell}>Photo</TableCell>
            <TableCell style={styles.cell}>Video</TableCell>
            <TableCell style={styles.cell}>GIF</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow style={{backgroundColor:"#2E2E30"}}>
            <TableCell style={styles.cell} rowSpan={2}>Premium Users</TableCell>
            <TableCell style={styles.cell}>Upload</TableCell>
            <TableCell style={styles.cell}>Free</TableCell>
            <TableCell style={styles.cell}>Credit 20</TableCell>
            <TableCell style={styles.cell}>Free</TableCell>
          </TableRow>
          <TableRow style={{backgroundColor:"#2E2E30"}}>
            <TableCell style={styles.cell}>Swap</TableCell>
            <TableCell style={styles.cell}>Free</TableCell>
            <TableCell style={styles.cell}>Free</TableCell>
            <TableCell style={styles.cell}>Credit 5</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={styles.cell} rowSpan={2}>Non Premium Users</TableCell>
            <TableCell style={styles.cell}>Upload</TableCell>
            <TableCell style={styles.cell}>Credit 15</TableCell>
            <TableCell style={styles.cell}>Credit 10</TableCell>
            <TableCell style={styles.cell}>Free</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={styles.cell}>Swap</TableCell>
            <TableCell style={styles.cell}>Credit 5</TableCell>
            <TableCell style={styles.cell}>Free</TableCell>
            <TableCell style={styles.cell}>Credit 5</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ResponsiveTable;
