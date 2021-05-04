import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global-style";
import "../styles/keyframes.css";
import SvgFilters from "../styles/svg-filters";
import theme from "../styles/theme";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SvgFilters />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
