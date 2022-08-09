import { GlobalStyles, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Navbar from "components/Navbar";
import ContainerCustom from "components/Page";
import { LayoutGroup } from "framer-motion";
import { RecoilRoot } from "recoil";
import { theme } from "styles/theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const styles = {};
  return (
    <ContainerCustom>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={styles} />
        <RecoilRoot>
          <Navbar />
          <Grid
            item
            sx={{
              display: {
                xs: "none",
                sm: "inherit",
              },
            }}
          >
            <ContainerCustom>
              <Component {...pageProps} />
            </ContainerCustom>
          </Grid>
        </RecoilRoot>
      </ThemeProvider>
    </ContainerCustom>
  );
}

export default MyApp;
