import styled from "styled-components";

class LineChartComponentStyles {
  Form = styled.form`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  `;

Label = styled.label`
color: orange;
`;
}
const lineChartComponentStyles = new LineChartComponentStyles();
export default lineChartComponentStyles;