import { Container, Grid, Paper, Typography } from "@mui/material";
import BreadcrumbsCustom from "components/Breadcrumbs";
import { motion } from "framer-motion";
export default function Profile() {
  return (
    <>
      <BreadcrumbsCustom menu={[{ title: "Home" }]} />
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
