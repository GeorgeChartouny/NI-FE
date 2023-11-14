import {useEffect,useState} from "react";
import { LineChartComponent } from "../components/chart/LineChartComponent";
import { GridData } from "../components/grid/GridData";
import { Menu } from "../components/menu/menu";
import styles from "./Dashboard.styles";
import { Loading } from "../components/loading/Loading";

export const Dashboard = () => {
const [isLoading, setIsLoading] = useState<boolean>(true);


useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false); // Set isLoading to false after 2 seconds
  }, 1000);

  return () => clearTimeout(timer); // Cleanup timer on component unmount
}, []);

if(isLoading) return <Loading/>
 return (
  <styles.Container>
    <Menu/>
    <GridData/>
    <LineChartComponent/>
  </styles.Container>
);

};
