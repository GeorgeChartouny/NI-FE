import styled from "styled-components";

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
    width: 400px;
    height: 50px;
    /* border-left: 1px solid black; */

  `;

BorderBreak = styled.div`

border:1px var(--secondary-color) solid;
height: 100%;
border-radius: var(--primary-radius);
opacity: 0.7;

`
  Label = styled.label`
    color: orange;

  `;
}

const menuStyles = new MenuStyles();
export default menuStyles;
