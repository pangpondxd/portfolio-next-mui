import { GlobalStyles, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import ContainerCustom from "components/Page";
import { RecoilRoot } from "recoil";
import { theme } from "styles/theme";
import React from "react";
import "styles/globals.css";
import { appWithTranslation } from "next-i18next";
function MyApp({ Component, pageProps }) {
  const styles = {};
  return (
    <>
      <ThemeProvider theme={theme}>
        <ContainerCustom>
          <RecoilRoot>
            <GlobalStyles styles={styles} />
            <Component {...pageProps} />
          </RecoilRoot>
        </ContainerCustom>
      </ThemeProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
