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
  display: flex;
  height: ${({ theme }) => theme.headerHeight};
  justify-content: space-between;
  position: fixed;
  width: 100%;
`;
const LayoutWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  padding-bottom: 48px;
  position: relative;
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

type LayoutProps = { title?: string };
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
          <NavLink href="/">HS</NavLink>
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
