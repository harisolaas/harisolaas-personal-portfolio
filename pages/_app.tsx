import { AppProps } from "next/app";
import { FC } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global-style";
import "../styles/keyframes.css";
import theme from "../styles/theme";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
