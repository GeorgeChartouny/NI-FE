/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { ChartDataType } from "../../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { TableContainer, Typography } from "@mui/material";
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
import { format } from "date-fns";

export const LineChartComponent = () => {
  const {data } = useSelector(
    (state: RootState) => state.data
  );

  const [kpiValue, setKpiValue] = useState<string>("rsL_INPUT_POWER");
  let chartData: ChartDataType[] = [];
if(data.length >0){
  if (kpiValue === "rsL_DEVIATION") {
    chartData = data.map((item) => ({
      time: format(new Date(item.timE_Stamp), "yyyy-MM-dd HH:mm:ss"),
      kpi: item.rsL_DEVIATION,
      neValue: item.nE_TYPE ==="-" ? item.nE_ALIAS : item.nE_TYPE,
    }));
  } else if (kpiValue === "rsL_INPUT_POWER") {
    chartData = data.map((item) => ({
      time: format(new Date(item.timE_Stamp), "yyyy-MM-dd HH:mm:ss"),
      kpi: item.rsL_INPUT_POWER,
      neValue: item.nE_TYPE ==="-" ? item.nE_ALIAS : item.nE_TYPE,

    }));
  } else if (kpiValue === "maX_RX_LEVEL") {
    chartData = data.map((item) => ({
      time: format(new Date(item.timE_Stamp), "yyyy-MM-dd HH:mm:ss"),
      kpi: item.maX_RX_LEVEL,
      neValue: item.nE_TYPE ==="-" ? item.nE_ALIAS : item.nE_TYPE,

    }));
  }
}

  chartData.sort((a, b) => (a.time < b.time ? -1 : 1));

  const CustomToolTip: React.FC<{
    active?:boolean;
     payload?: Array<{value:number; payload: ChartDataType}>
      label?: string
    }> = ({active,payload,label})=> {
if(active && payload && payload.length>0){

    const timeValueLabel:string = payload[0].payload.time;
    const kpiLabel:number = payload[0].payload.kpi;
    const neValueLabel: string = payload[0].payload.neValue; 
  
    return (
      <div style={{ backgroundColor: `var(--semiSecondary-color) `, color:`var(--primary-color)`, padding: '5px', border: '1px solid #ccc' ,borderRadius:`var(--primary-radius)`}}>
         <p>{`NE: ${neValueLabel}`}</p>
         <p>{`DateTime: ${timeValueLabel}`}</p>
         <p>{`KPI: ${kpiLabel}`}</p>
      </div>
    );
  
}
return null;
  }

  useEffect(() => {}, [chartData]);

  return (
    <>
      {data.length > 0 ? (
        <TableContainer
          component={Paper}
          sx={{
            borderRadius: "15px",
            height: "50%",
            width: "95%",
            padding: "15px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <Typography variant="h5" sx={{ mb: -2 }}>
            {kpiValue.toLocaleUpperCase().replaceAll("_", " ")} KPI
          </Typography>
          <ResponsiveContainer width="100%" height="85%">
            <LineChart data={chartData}>
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip content={<CustomToolTip />} />
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
        </TableContainer>
      ) : (
        <></>
      )}
    </>
  );
};
