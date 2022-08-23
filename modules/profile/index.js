import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Head from "next/head";
export default function Profile() {
  return (
    <Grid>
      {/* <BreadcrumbsCustom menu={[{ title: "Home" }]} /> */}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Grid container bgcolor="#fff" borderRadius={2.5}>
            <Typography>Hello</Typography>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container bgcolor="#fff" borderRadius={2.5} p={2}>
            <Typography>นายธนวัฒน์ วิรัชตั้งสกุล</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
