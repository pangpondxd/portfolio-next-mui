import { Container, Grid } from "@mui/material";
import ContainerCustom from "components/Page";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <Grid>
      <Head>
        <title>Tanawat Wirattangsakul Portfolio</title>
        <meta name="description" content="Tanawat Wirattangsakul Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContainerCustom>
        <Container>test</Container>
      </ContainerCustom>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
        </a>
      </footer>
    </Grid>
  );
}
