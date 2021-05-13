import Head from "next/head";
import styled from "styled-components";
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
  background-image: linear-gradient(
    ${({ theme }) =>
      `${theme.colors.background} 65%, ${theme.colors.background}33`}
  );
  display: flex;
  height: ${({ theme }) => theme.headerHeight};
  justify-content: space-between;
  position: fixed;
  width: 100%;
`;
const LayoutWrapper = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  padding-bottom: 48px;
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
  height: ${({ theme }) => theme.footerHeight};
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
      <Footer>FOOTER</Footer>
    </LayoutWrapper>
  );
};

export default Layout;
