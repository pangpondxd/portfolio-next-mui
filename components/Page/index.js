import { Box } from "@mui/material";
import React from "react";

export default function ContainerCustom(props) {
  return <Box sx={{ minHeight: "100vh" }}>{props.children}</Box>;
}
