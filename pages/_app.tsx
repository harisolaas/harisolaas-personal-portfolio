import { AppProps } from "next/app";
import { FC } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import GlobalStyle from "../styles/global-style";

const theme: DefaultTheme = {
  colors: {
    primary: "#eeeeee",
    background: "#173246",
  },
};

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
