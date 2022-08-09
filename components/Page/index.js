import { Box, Container } from "@mui/material";
import React from "react";

export default function ContainerCustom(props) {
  return (
    <Box sx={{ minHeight: "80vh", mt: 10 }}>
      <Container>{props.children}</Container>
    </Box>
  );
}
