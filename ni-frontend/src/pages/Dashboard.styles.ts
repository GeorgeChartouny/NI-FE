import styled from "styled-components";

class DashboardStyles {
  Container = styled.div`
    background: var(--primary-color);
    height: 100vh;
    width:100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--tertiary-color);
  `;

  Title = styled.h1``;


}

const dashboardStyles = new DashboardStyles();
export default dashboardStyles;
