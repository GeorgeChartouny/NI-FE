import styled from "styled-components";
import { tablet } from "../utils/responsive";

class GlobalStyles {
  SubmitButton = styled.button`
    width: 100px;
    height: 40px;
    background-color: var(--secondary-color);
    border: none;
    border-radius: var(--button-radius);
    color: var(--primary-color);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    font-size: var(--small-font);
    transition: var(--primary-transition);
    ${tablet({ width: "50px", height: "20px", fontSize: "12px" })}

    &:hover {
      color: var(--secondary-color);
      background-color: var(--primary-color);
      font-size: var(--body-font);
      font-weight: bold;
      box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
        0 17px 50px 0 rgba(0, 0, 0, 0.19);

      cursor: pointer;
      ${tablet({ fontSize: "16px" })}
    }
  `;

  RadioButton = styled.input``;
}

const globalStyles = new GlobalStyles();
export default globalStyles;
