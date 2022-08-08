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
          <>
            {menu?.to ? (
              <Link underline="hover" color="inherit" href={menu?.to}>
                {menu.title}
              </Link>
            ) : (
              <Typography sx={{ cursor: "initial" }}>{menu.title}</Typography>
            )}
          </>
        ))}
      </Breadcrumbs>
    </Grid>
  );
}
