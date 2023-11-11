import React from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { TableBody } from "@mui/material";

export const GridData = () => {
  const HeadTableStyle = {
    fontWeight: "bold",
    fontSize: "0.8rem",
    textAlign: "left",
  };

  const BodyTableStyle = {
    fontSize: "0.8rem",
    textAlign: "left",
  };

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: "15px",
          height: "100%",
          padding: "5px",
          overflowY: "scroll",
        }}
      >
        <Table sx={{ minWidth: "650px" }} arial-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={HeadTableStyle}>DATETIME KEY</TableCell>
              <TableCell sx={HeadTableStyle}>Time</TableCell>
              <TableCell sx={HeadTableStyle}>NE Type</TableCell>
              <TableCell sx={HeadTableStyle}>NE Alias</TableCell>
              <TableCell sx={HeadTableStyle}>RSL INPUT POWER</TableCell>
              <TableCell sx={HeadTableStyle}>MAX RX LEVEL</TableCell>
              <TableCell sx={HeadTableStyle}>RSL DEVIATION</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell sx={BodyTableStyle}>Value Here</TableCell>
              <TableCell sx={BodyTableStyle}>Value Here</TableCell>
              <TableCell sx={BodyTableStyle}>Value Here</TableCell>
              <TableCell sx={BodyTableStyle}>Value Here</TableCell>
              <TableCell sx={BodyTableStyle}>Value Here</TableCell>
              <TableCell sx={BodyTableStyle}>Value Here</TableCell>
              <TableCell sx={BodyTableStyle}>Value Here</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
