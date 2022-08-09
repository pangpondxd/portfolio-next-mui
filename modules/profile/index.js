import { Paper, Typography } from "@mui/material";
import Head from "next/head";
export default function Profile() {
  return (
    <>
      <Head>
        <title>ธนวัฒน์ วิรัชตั้งสกุล</title>
        <meta property="og:title" content="Tanawat Wirattangsakul" />
        <meta property="og:title" content="ธนวัฒน์ วิรัชตั้งสกุล" />
      </Head>
      {/* <BreadcrumbsCustom menu={[{ title: "Home" }]} /> */}
      <Paper variant="outlined" sx={{ p: 4 }}>
        <Typography>
          testasdasdasdasdasdasdasdasdasdasdtestasdasdasdasdasdasdasdasdasdasd
          testasdasdasdasdasdasdasdasdasdasd testasdasdasdasdasdasdasdasdasdasd
          testasdasdasdasdasdasdasdasdasdasd testasdasdasdasdasdasdasdasdasdasd
        </Typography>
      </Paper>
    </>
  );
}
