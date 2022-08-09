import { Container, Grid } from "@mui/material";
import ContainerCustom from "components/Page";
import Profile from "modules/profile";
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
      <Profile />
    </Grid>
  );
}
