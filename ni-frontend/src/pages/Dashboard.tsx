
import { GridData } from "../components/grid/GridData";
import { Loading } from "../components/loading/Loading";
import { Menu } from "../components/menu/menu";
import styles from "./Dashboard.styles";

export const Dashboard = () => {

 return (
  <styles.Container>
    <Menu/>
    <GridData/>
  </styles.Container>
);

};
