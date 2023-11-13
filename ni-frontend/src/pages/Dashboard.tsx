
import { LineChartComponent } from "../components/chart/LineChartComponent";
import { GridData } from "../components/grid/GridData";
import { Menu } from "../components/menu/menu";
import styles from "./Dashboard.styles";

export const Dashboard = () => {

 return (
  <styles.Container>
    <Menu/>
    <GridData/>
    <LineChartComponent/>
  </styles.Container>
);

};
