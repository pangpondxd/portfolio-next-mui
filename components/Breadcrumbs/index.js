import React from "react";
import { Breadcrumbs, Grid, Typography } from "@mui/material";
import Link from "next/link";

export default function BreadcrumbsCustom(props) {
  return (
    <Grid
      sx={{
        nav: {
          position: "initial",
        },
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <Breadcrumbs aria-label="breadcrumb">
        {props.menu.map((menu, index) => (
          <Grid container key={index}>
            {menu?.to ? (
              <Link underline="hover" color="inherit" href={menu?.to}>
                {menu.title}
              </Link>
            ) : (
              <Typography
                sx={{
                  cursor: "initial",
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 35,
                }}
              >
                {menu.title}
              </Typography>
            )}
          </Grid>
        ))}
      </Breadcrumbs>
    </Grid>
  );
}
