import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Loading } from "../loading/Loading";
import {format} from "date-fns"

export const GridData = () => {
  const HeadTableStyle = {
    fontWeight: "bold",
    fontSize: "0.8rem",
    textAlign: "left",
    color:"#072132"
  };

  const BodyTableStyle = {
    fontSize: "0.8rem",
    textAlign: "left",
    color:"#790b0c"
  };

  const { isFetching, data } = useSelector(
    (state: RootState) => state.data
  );

  let dataFormatted :any[] = [];

  if(data.length > 0) {

   dataFormatted = data.map((item) => ({
    ...item,
    timE_Stamp: format(new Date(item.timE_Stamp), "yyyy-MM-dd HH:mm:ss"),
    // datetimE_KEY: format(new Date(item.datetimE_KEY), 'yyyy-MM-dd HH:mm:ss'),

  }));
   dataFormatted.sort((a, b) => (a.timE_Stamp < b.timE_Stamp ? -1 : 1));
  }
  if(isFetching) return <Loading/>
  return (
    <>
      {dataFormatted.length > 0 ? (
        <TableContainer
          component={Paper}
          sx={{
            borderRadius: "15px",
            height: "50%",
            width: "95%",
            padding: "5px",
            overflowY: "scroll",
            marginBottom:"30px"
          }}
        >
          <Table sx={{ minWidth: "650px" }} arial-label="simple table">
            <TableHead>
              <TableRow>
                {/* <TableCell sx={HeadTableStyle}>DATETIME KEY</TableCell> */}
                <TableCell sx={HeadTableStyle}>Time</TableCell>
                {dataFormatted[0].nE_TYPE !=='-' && <TableCell sx={HeadTableStyle}>NE Type</TableCell>}
                {dataFormatted[0].nE_ALIAS !=='-' && <TableCell sx={HeadTableStyle}>NE Alias</TableCell>}
                <TableCell sx={HeadTableStyle}>RSL INPUT POWER</TableCell>
                <TableCell sx={HeadTableStyle}>MAX RX LEVEL</TableCell>
                <TableCell sx={HeadTableStyle}>RSL DEVIATION</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
                {dataFormatted.map((rowData,index) => (
              <TableRow key ={index}>
                  
                    {/* <TableCell sx={BodyTableStyle}>{rowData.datetimE_KEY}</TableCell> */}
                    <TableCell sx={BodyTableStyle}>{rowData.timE_Stamp}</TableCell>
                    {rowData.nE_TYPE !=='-' && <TableCell sx={BodyTableStyle}>{rowData.nE_TYPE}</TableCell>}
                    {rowData.nE_ALIAS !=='-' && <TableCell sx={BodyTableStyle}>{rowData.nE_ALIAS}</TableCell>}
                    <TableCell sx={BodyTableStyle}>{rowData.rsL_INPUT_POWER}</TableCell>
                    <TableCell sx={BodyTableStyle}>{rowData.maX_RX_LEVEL}</TableCell>
                    <TableCell sx={BodyTableStyle}>{rowData.rsL_DEVIATION}</TableCell>
                  
              </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <h1>No Data to show</h1>
      )}
    </>
  );
};
