import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global-style";
import "../styles/fonts.css";
import SvgFilters from "../styles/svg-filters";
import theme from "../styles/theme";

const AnimatedBackground = dynamic(
  () => import("../components/animated-background"),
  { ssr: false }
);

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <AnimatedBackground />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SvgFilters />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
