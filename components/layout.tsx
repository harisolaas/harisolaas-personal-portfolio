import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import AnimatedClick from "./animated-click";
import NavLink from "./nav-link";
import { defaultText, globalPadding } from "../styles/mixins";

const GlobalNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 280px;
  ${defaultText}
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
    background-image: linear-gradient(
      ${({ theme }) =>
        `${theme.colors.background} 60%, ${theme.colors.background}dd 70%, #0000`}
    );
    content: "";
    height: 100%;
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
  return (
    <LayoutWrapper>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <div>
          <NavLink href="/">
            <Logo>HS</Logo>
          </NavLink>
        </div>
        <GlobalNavigation>
          <NavLink href="/skills">Skills</NavLink>|
          <NavLink href="/experience">Experience</NavLink>|
          <NavLink href="/contact">Contact</NavLink>
        </GlobalNavigation>
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
