import { Container, Paper, Typography } from "@mui/material";
import BreadcrumbsCustom from "components/Breadcrumbs";
import ContainerCustom from "components/Page";
export default function ContactMe() {
  return (
    <>
      {/* <BreadcrumbsCustom
        menu={[{ title: "Home", to: "/" }, { title: "Contact Me" }]}
      /> */}
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
