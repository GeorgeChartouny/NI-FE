import styled from "styled-components";
import { screen600, tablet } from "../../utils/responsive";

class MenuStyles {
  Container = styled.div`
    background-color: var(--tertiary-color);
    width: 100vw;
    height: 10vh;
    color: var(--primary-color);
    border-radius: var(--primary-radius);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    margin-top: 5vh;
    padding: 0 2vw;
  `;

  Title = styled.h1`
    color: var(--secondary-color);
    ${tablet({fontSize:"20px"})}


  `;

  Form = styled.form`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `;

  LabelContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 20vw;
    height: 50px;
  `;

  BorderBreak = styled.div`
    border: 1px var(--secondary-color) solid;
    height: 50px;
    border-radius: var(--primary-radius);
    opacity: 0.7;
  `;
  Label = styled.label`
    color: orange;
    ${tablet({fontSize:"12px"})}
    ${screen600({fontSize:"10px"})}


  `;

  // HiddenToggles = styled.div`
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-between;
  //   position: relative;
  // `;

  // Wrapper = styled.div`
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-between;
  //   position: relative;
  // `;

  // ToggleButton = styled.label`
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-between;
  //   width: 157px;
  //   height: 24px;
  //   color: white;
  //   border: none;
  //   border-radius: 15px;
  //   padding: 0 15px;
  //   background-color: #eaeef1;
  // `;

  // AggInput = styled.input``;

  // LeftLabel = styled.label<{ $active?: boolean }>`
  //   flex: 1;
  //   width: 30%;
  //   border-radius: 15px;
  //   text-align: left;
  //   font-family: Inter;
  //   font-style: normal;
  //   font-weight: 500;
  //   font-size: 12px;
  //   line-height: 15px;
  //   z-index: 1000;
  //   color: ${(props) => (props.active ? "#9FA1A3" : "#009CDF")};
  //   background-color: ${(props) => (props.active ? "#eaeef1" : "white")};
  // `;

  // RightLabel = styled.label<{ $active?: boolean }>`
  //   flex: 1;
  //   width: 30%;
  //   text-align: right;
  //   color: green;
  //   border-radius: 15px;
  //   font-family: Inter;
  //   font-style: normal;
  //   font-weight: 500;
  //   font-size: 12px;
  //   line-height: 15px;
  //   z-index: 1000;
  //   color: ${(props) => (props.active ? "#009CDF" : "#9FA1A3")};
  //   background-color: ${(props) => (props.active ? "white" : "#eaeef1")};
  // `;
}

const menuStyles = new MenuStyles();
export default menuStyles;
