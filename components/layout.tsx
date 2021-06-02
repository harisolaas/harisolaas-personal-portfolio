import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import AnimatedClick from "./animated-click";
import NavLink from "./nav-link";
import ButtonToggleNav from "./toggle-nav-button";
import { defaultText, globalPadding } from "../styles/mixins";
import media from "../utils/media-queries";
import React from "react";

const ButtonToggleNavWrapper = styled.div`
  ${media("medium")`
    display: none;
  `}
`;
const GlobalNavigation = styled.nav<{ isOpen: boolean }>`
  ${globalPadding}
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-flow: column;
  height: calc(100vh - 48px);
  left: ${({ isOpen }) => (isOpen ? 0 : 100)}%;
  position: absolute;
  top: 48px;
  transition: all 0.3s;
  width: 100%;
  ${media("medium")`
    background-color: unset;
    flex-flow: row;
    height: auto;
    justify-content: space-between;
    padding: 0;
    position: static;
    width: 280px;
  `}
  a {
    ${defaultText}
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
    margin-top: 24px;
    ${media("medium")`
      border-bottom: none;
      font-size: 1rem;
      margin-top: 0;
    `}
  }
`;
const Header = styled.header`
  ${globalPadding}
  align-items: center;
  display: flex;
  height: ${({ theme }) => theme.headerHeight}px;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 1;
  ::before {
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: 0 4px 20px 20px ${({ theme }) => theme.colors.background};
    content: "";
    height: 65%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;
const LayoutWrapper = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  position: relative;
  z-index: 1;
`;
const Logo = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 28px;
  font-weight: bold;
  background: linear-gradient(181deg, #ff803d 0%, #f3c546 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: none;
  transition: all 1s;
  :hover {
    background: linear-gradient(181deg, #f1e86e 0%, #44bb59 100%);
    background-clip: text;
    -webkit-background-clip: text;
  }
`;
const LogoWrapper = styled.span`
  z-index: 1;
`;
const Footer = styled.footer`
  ${globalPadding}
  align-items: center;
  bottom: 0;
  display: flex;
  height: ${({ theme }) => theme.footerHeight}px;
  justify-content: center;
  position: absolute;
  width: 100%;
`;

interface LayoutProps {
  title?: string;
}
const Layout: React.FC<LayoutProps> = ({ children, title = "Hari Solaas" }) => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  return (
    <LayoutWrapper>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
      </Head>
      <Header>
        <LogoWrapper>
          <NavLink href="/">
            <Logo>HS</Logo>
          </NavLink>
        </LogoWrapper>
        <GlobalNavigation isOpen={isNavOpen}>
          <NavLink href="/skills">Skills</NavLink>
          <NavLink href="/experience">Experience</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </GlobalNavigation>
        <ButtonToggleNavWrapper>
          <ButtonToggleNav
            isNavOpen={isNavOpen}
            onClick={() => setIsNavOpen(!isNavOpen)}
          />
        </ButtonToggleNavWrapper>
      </Header>
      {children}
      <Footer>
        <a
          href="https://github.com/harisolaas/harisolaas-personal-portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AnimatedClick>
            <Image src="/images/github-logo.svg" height={32} width={32} />
          </AnimatedClick>
        </a>
      </Footer>
    </LayoutWrapper>
  );
};

export default Layout;
