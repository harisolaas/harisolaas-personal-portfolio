import Link from "next/link";
import Head from "next/head";
import { FC } from "react";

type LayoutProps = { title?: string };

const Layout: FC<LayoutProps> = ({ children, title = "Hari Solaas" }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <Link href="/skills">
            <a>Skills</a>
          </Link>{" "}
          |
          <Link href="/experience">
            <a>Experience</a>
          </Link>{" "}
          |
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </nav>
      </header>

      {children}

      <footer></footer>
    </div>
  );
};

export default Layout;
