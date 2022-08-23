import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
export default function Navbar() {
  return (
    <Box
      sx={{
        flexFlow: 1,
        position: "sticky",
        height: 80,
        display: {
          lg: "flex",
          xs: "none",
        },
        alignItems: "center",
      }}
    >
      <Grid container>
        <Grid item xs={5} pl={4}>
          <Link href="/">
            <Typography
              color="#fff"
              fontSize={30}
              fontWeight="bold"
              sx={{ cursor: "pointer" }}
            >
              Tanawat Wirattangsakul
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={7}>
          <Grid container spacing={2}>
            <Grid item>
              <Link href="#">
                <Typography
                  color="#fff"
                  fontSize={30}
                  fontWeight="bold"
                  sx={{ cursor: "pointer" }}
                >
                  Profile
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link href="#">
                <Typography
                  color="#fff"
                  fontSize={30}
                  fontWeight="bold"
                  sx={{ cursor: "pointer" }}
                >
                  Skill
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link href="#">
                <Typography
                  color="#fff"
                  fontSize={30}
                  fontWeight="bold"
                  sx={{ cursor: "pointer" }}
                >
                  Education
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link href="#">
                <Typography
                  color="#fff"
                  fontSize={30}
                  fontWeight="bold"
                  sx={{ cursor: "pointer" }}
                >
                  Job History
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/contact-me">
                <Typography
                  color="#fff"
                  fontSize={30}
                  fontWeight="bold"
                  sx={{ cursor: "pointer" }}
                >
                  Contact Me
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
