import { css } from "styled-components";

export const screen280 = (props: { [x: string]: string }) => {
  return css`
    @media only screen and (max-width: 280px) {
      ${props}
    }
  `;
};

export const mobile = (props: { [x: string]: string }) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};

export const bigMobile = (props: { [x: string]: string }) => {
  return css`
    @media only screen and (max-width: 480px) {
      ${props}
    }
  `;
};

export const screen600 = (props: { [x: string]: string }) => {
  return css`
    @media only screen and (max-width: 600px) {
      ${props}
    }
  `;
};

export const tablet = (props: { [x: string]: string }) => {
  return css`
    @media only screen and (max-width: 780px) {
      ${props}
    }
  `;
};

export const screen900 = (props: { [x: string]: string }) => {
  return css`
    @media only screen and (max-width: 900px) {
      ${props}
    }
  `;
};

export const screen1000 = (props: { [x: string]: string }) => {
  return css`
    @media only screen and (max-width: 1000px) {
      ${props}
    }
  `;
};

export const screen1070 = (props: { [x: string]: string }) => {
  return css`
    @media only screen and (max-width: 1070px) {
      ${props}
    }
  `;
};

export const screen1380 = (props: { [x: string]: string }) => {
  return css`
    @media only screen and (max-width: 1380px) {
      ${props}
    }
  `;
};
