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
  `;

  Label = styled.label`
  /* border:2px, black, solid; */
  width: 200px;
  height: 100px;
  color: orange;
  `
}

const menuStyles = new MenuStyles();
export default menuStyles;
