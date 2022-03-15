import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme?.fontFamily?.regular};
    font-size: 16px;

  }
  *, *::before, *::after {
    box-sizing: border-box;
  }


  a {
    text-decoration:none;
  }


  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme?.colors?.primary};
  }

  .fixed {
    position:fixed;
    overflow-y:hidden;
  }



 


















 
  `;
