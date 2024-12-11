import React from "react";
import styled from "styled-components";
import Link from "next/link";

const GNB = () => {
  return (
    <Nav>
      <Link href="/">
        <Logo src="/LogoSize=Large.svg" />
      </Link>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  width: 100vw;
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid ${({ theme }) => theme.colors.slate200};
   /* 데스크톱 (1920px 이상) */
   @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    box-sizing: border-box;
    padding-left: 10%;
  }
`;

const Logo = styled.img`
  padding: 10px;
  /* 기본 로고 이미지 */
  src: url("/LogoSize=Large.svg");

  /* Tablet 이하 화면에서 다른 로고로 변경 */
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    content: url("/LogoSize=Small.svg");
  }
`;

export default GNB;
