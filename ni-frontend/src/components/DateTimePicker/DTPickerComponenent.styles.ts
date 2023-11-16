import styled from "styled-components";

class DTPickerStyles {

    PButton = styled.p`
    cursor: pointer;
    /* border:1px solid var(--secondary-color); */
    /* border-radius: 100px; */
    transition: var(--primary-transition);
    color: var(--primary-color);
    /* width:15px; */
    display: flex;
    justify-content: center;
    font-size: 5rem;
    /* height: 15px; */
    margin-right: 2vw;
    
    &:hover{
        /* border-radius: 0; */
        color: var(--gold-color);
        /* box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24); */


    }
    `

}

const dTPickerStyles = new DTPickerStyles();
export default dTPickerStyles;