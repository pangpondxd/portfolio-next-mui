import { Container, Typography } from "@mui/material";
import BreadcrumbsCustom from "components/Breadcrumbs";
import ContainerCustom from "components/Page";
export default function ContactMe() {
  return (
    <ContainerCustom>
      <BreadcrumbsCustom
        menu={[{ title: "Home", to: "/" }, { title: "Contact Me" }]}
      />
      <Typography>Contact Me</Typography>
    </ContainerCustom>
  );
}
