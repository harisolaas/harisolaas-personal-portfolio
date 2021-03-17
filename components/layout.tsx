import Head from "next/head";
import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";

type LayoutProps = { title?: string };

const GlobalNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 280px;
`;
const Header = styled.header`
  align-items: center;
  display: flex;
  height: 76px;
  justify-content: space-between;
  padding: 0 36px;
`;
const LayoutWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
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

      {children}

      <footer></footer>
    </LayoutWrapper>
  );
};

export default Layout;
