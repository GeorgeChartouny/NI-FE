import styled from "styled-components";
import LogoImage from "../../assets/White_Logo_Yuvo.png";

class LoadingStyles {
  Container = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-color: var(--tertiary-color);
    opacity: 0.7;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `;

  CompanyLogo = styled.div`
    background: url(${LogoImage});
    background-repeat: no-repeat;
    width: 25%;
    height: 25%;
    background-position-x: center;
    background-position-y: center;
  `;
}

const loadingStyles = new LoadingStyles();
export default loadingStyles;
