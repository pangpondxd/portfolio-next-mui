import React from "react";
import { Grid } from "@mui/material";
import Profile from "modules/profile";
import Head from "next/head";

export function getStaticProps({ locale }) {
  return {
    props: {
      locale,
    },
  };
}

export default function Home(props) {
  return (
    <>
      <Head>
        <title>ธนวัฒน วิรัชตั้งสกุล Portfolio</title>
        <meta name="description" content="Tanawat Wirattangsakul Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {props?.locale}
      <Profile />
    </>
  );
}
