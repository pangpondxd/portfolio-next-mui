import { Box, Container, Grid } from "@mui/material";
import Navbar from "components/Navbar";
import React from "react";

export default function ContainerCustom(props) {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Navbar />
      <Container sx={{ pt: 10, mb: 10 }}>{props.children}</Container>
    </Box>
  );
}
