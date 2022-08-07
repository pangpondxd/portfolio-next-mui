import { GlobalStyles } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Navbar from "components/Navbar";
import ContainerCustom from "components/Page";
import { theme } from "styles/theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const styles = {};
  return (
    <ContainerCustom>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={styles} />
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </ContainerCustom>
  );
}

export default MyApp;
