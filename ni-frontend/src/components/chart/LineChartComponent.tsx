import React, { useEffect } from "react";
import {ChartDataType} from "../../types/types";
import { LineChart } from "@mui/x-charts/LineChart";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Container, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";

export const LineChartComponent = () => {
  const { isFetching, error, data, aggTime } = useSelector(
    (state: RootState) => state.data
  );
  let rslDeviationData: ChartDataType[] = [];
  let rslInputPowerData: ChartDataType[] = [];
  let maxRxLevel: ChartDataType[] = [];

  const FilterAggData = () => {
    data.map((d) => {
      rslDeviationData.push({
        time: d.timE_Stamp,
        value: d.rsL_DEVIATION,
      });
      rslInputPowerData.push({
        time: d.timE_Stamp,
        value: d.rsL_INPUT_POWER,
      });
      maxRxLevel.push({
        time: d.timE_Stamp,
        value: d.maX_RX_LEVEL,
      });
    });
  };

  useEffect(() => {

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
            overflowY: "scroll",
          }}
        >
          <Typography variant="h5" sx={{ mb: 2 }}>
            KPIs
          </Typography>
          <LineChart
            colors={["#790b0c"]}
            // leftAxis={[labelFontSize:"20",]}
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: data,
              },
            ]}
            width={500}
            height={300}
          />
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};
