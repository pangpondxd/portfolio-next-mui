import { Box, Container } from "@mui/material";
import React from "react";

export default function ContainerCustom(props) {
  return (
    <Box sx={{ minHeight: "80vh" }}>
      <Container maxWidth="md" sx={{ width: "100vh" }}>
        {props.children}
      </Container>
    </Box>
  );
}
