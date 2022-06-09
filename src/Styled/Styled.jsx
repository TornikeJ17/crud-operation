import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        width:1000px;
        max-width:100%;
        margin: auto;
    }
`;
export const Container = styled.div`
  margin-top: 4rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
