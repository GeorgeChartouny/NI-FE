import React from 'react'
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell"
import TableRow from "@mui/material/TableRow";


export const GridData = () => {
    const headTableStyle = {
        fontWeight: "bold",
        fontSize: "0.8rem",
        textAlign: "left",
      };
  return (
  <>
  <TableContainer component={Paper}
  sx={{
    borderRadius:"15px",
    height:"100%",
    padding:"5px",
    overflowY:"scroll"
  }}
  >
    <Table sx={{minWidth:"650px"}} arial-label="simple table">
        <TableHead>
            <TableRow>

            <TableCell sx={headTableStyle}>DATETIME KEY</TableCell>
            <TableCell sx={headTableStyle}>Time</TableCell>
            <TableCell sx={headTableStyle}>NE Type</TableCell>
            <TableCell sx={headTableStyle}>NE Alias</TableCell>
            <TableCell sx={headTableStyle}>RSL INPUT POWER</TableCell>
            <TableCell sx={headTableStyle}>MAX RX LEVEL</TableCell>
            <TableCell sx={headTableStyle}>RSL DEVIATION</TableCell>
            </TableRow>
        </TableHead>
    </Table>
  </TableContainer>
  </>
  )
}
