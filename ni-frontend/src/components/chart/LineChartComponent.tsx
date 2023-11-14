import { useEffect, useState } from "react";
import { ChartDataType } from "../../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Container, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styles from "./LineChartComponent.styles";

export const LineChartComponent = () => {
  const { isFetching, error, data } = useSelector(
    (state: RootState) => state.data
  );
  const [kpiValue, setKpiValue] = useState<string>("rsL_INPUT_POWER");
  let chartData: ChartDataType[] = [];

  if (kpiValue === "rsL_DEVIATION") {
    chartData = data.map((item) => ({
      time: new Date(item.timE_Stamp).toLocaleDateString(), // Formatting timestamp as per requirement
      kpi: item.rsL_DEVIATION,
    }));
  } else if (kpiValue === "rsL_INPUT_POWER") {
    chartData = data.map((item) => ({
      time: new Date(item.timE_Stamp).toLocaleDateString(), // Formatting timestamp as per requirement
      kpi: item.rsL_INPUT_POWER,
    }));
  } else if (kpiValue === "maX_RX_LEVEL") {
    chartData = data.map((item) => ({
      time: new Date(item.timE_Stamp).toLocaleDateString(), // Formatting timestamp as per requirement
      kpi: item.maX_RX_LEVEL,
    }));
  }

  useEffect(() => {}, [chartData]);

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
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" sx={{ mb: 2 }}>
            KPIs
          </Typography>
          <ResponsiveContainer width="100%" height="85%">
            <LineChart data={chartData}>
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="kpi"
                stroke="#790b0c"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
          <styles.Form>
            <styles.Label>
              <input
                type="radio"
                name="kpi"
                value="rsL_DEVIATION"
                checked={kpiValue === "rsL_DEVIATION"}
                onChange={(e) => setKpiValue(e.target.value)}
              />
              RSL DEVIATION
            </styles.Label>
            <styles.Label>
              <input
                type="radio"
                name="kpi"
                value="rsL_INPUT_POWER"
                checked={kpiValue === "rsL_INPUT_POWER"}
                onChange={(e) => setKpiValue(e.target.value)}
              />
              RSL INPUT POWER
            </styles.Label>

            <styles.Label>
              <input
                type="radio"
                name="kpi"
                value="maX_RX_LEVEL"
                checked={kpiValue === "maX_RX_LEVEL"}
                onChange={(e) => setKpiValue(e.target.value)}
              />
              MAX RX LEVEL
            </styles.Label>
          </styles.Form>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};
