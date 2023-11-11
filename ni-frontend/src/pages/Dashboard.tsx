
import { GridData } from "../components/grid/GridData";
import { Menu } from "../components/menu/menu";
import styles from "./Dashboard.styles";

export const Dashboard = () => {

 return (
  <styles.Container>
    <div>Dashboard</div>
    <Menu/>
    <GridData/>
  </styles.Container>
);

};
