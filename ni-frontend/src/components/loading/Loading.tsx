import React from "react";
import styles from "./Loading.styles";
import { LoadingAnimation } from "../loading animation/LoadingAnimation";

export const Loading = () => {
  return (
    <styles.Container>
      <LoadingAnimation/>
      <styles.CompanyLogo />
    </styles.Container>
  );
};
