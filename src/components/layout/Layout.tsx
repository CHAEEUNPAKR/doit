import React from "react";
import GNB from "./GNB";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <GNB />
      <Main>{children}</Main>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.slate100};
  width: 100%;
  height: 100vh;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 10px;
  }
`;

const Main = styled.main`
  flex: 1;
  width: 90%;
  max-width: 1200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 95%; 
    padding: 10px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 85%;
    padding: 15px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 80%;
    padding: 30px;
  }
`;
