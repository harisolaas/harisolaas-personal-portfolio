import Head from "next/head";
import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";
import { defaultText, globalPadding } from "../styles/mixins";

type LayoutProps = { title?: string };

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
  height: 76px;
  justify-content: space-between;
`;
const LayoutWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
  position: relative;
`;
const Main = styled.main`
  ${globalPadding}
`;
const Footer = styled.footer`
  ${globalPadding}
  bottom: 0;
  height: 28px;
  position: absolute;
  text-align: center;
  width: 100%;
`;

const Layout: FC<LayoutProps> = ({ children, title = "Hari Solaas" }) => {
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
          <Link href="/">
            <a>HS</a>
          </Link>
        </div>
        <GlobalNavigation>
          <Link href="/skills">
            <a>Skills</a>
          </Link>
          |
          <Link href="/experience">
            <a>Experience</a>
          </Link>
          |
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </GlobalNavigation>
      </Header>
      <Main>{children}</Main>
      <Footer>FOOTER</Footer>
    </LayoutWrapper>
  );
};

export default Layout;
