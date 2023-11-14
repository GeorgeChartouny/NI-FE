import React, { useEffect } from "react";
import {ChartDataType} from "../../types/types";
// import { LineChart } from "@mui/x-charts/LineChart";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Container, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import {format} from "date-fns";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export const LineChartComponent = () => {
  const { isFetching, error, data, aggTime } = useSelector(
    (state: RootState) => state.data
  );
  let rslDeviationData: ChartDataType[] = [];
  let rslInputPowerData: ChartDataType[] = [];
  let maxRxLevel: ChartDataType[] = [];

  const chartData  = data.map((item) => ({
    time: new Date(item.timE_Stamp).toLocaleDateString(), // Formatting timestamp as per requirement
    kpi: item.maX_RX_LEVEL,
  }));

  const FilterAggData = () => {
    data.map((d) => {
      rslDeviationData.push({
        time: new Date(d.timE_Stamp).toLocaleDateString(),
        value: d.rsL_DEVIATION,
      });
      rslInputPowerData.push({
        time: new Date(d.timE_Stamp).toLocaleDateString(),
        value: d.rsL_INPUT_POWER,
      });
      maxRxLevel.push({
        time: new Date(d.timE_Stamp).toLocaleDateString(),
        value: d.maX_RX_LEVEL,
      });
    });
  };

  useEffect(() => {
    console.log('chartData', chartData)
    FilterAggData();
  }, [data]);

  return (
    <>
      {data.length > 0 ? (
        <Container
          component={Paper}
          sx={{
            borderRadius: "15px",
            height: "50%",
            width: "70%",
            padding: "5px",
            overflowX: "scroll",

          }}
        >
             <Typography variant="h5" sx={{ mb: 2 }}>
            KPIs
          </Typography> 
        <ResponsiveContainer width="100%" height="85%">
        
          <LineChart
            // colors={["#790b0c"]}
            // leftAxis={[labelFontSize:"20",]}
          //   xAxis={[
          //     { 
          //       dataKey: 'time',
                
          //      }
          //     ]}
          //   series={[
          //     {
          //       dataKey: 'value',
          //     },
          //   ]}
          //   width={500}
          //   height={300}
          // dataset={chartData}
          data = {chartData}
            
          >
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey="time" />
                    <YAxis />
                   <Tooltip />
                   <Legend />
                   <Line type="monotone" dataKey="kpi" stroke="#790b0c" strokeWidth={2} />

            </LineChart>
            </ResponsiveContainer>
         </Container>
      ) : (
        <></>
      )}
    </>
  );
};
