import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { theme } from "../../../../assets/themes/theme";
import MainPageWidget from "../components/main-page-widget";
import { MediaProps } from "../../../../utils/utils";

export default function SendHeader({
  deviceType,
}: MediaProps): React.JSX.Element {
  return (
    <Box
      bgcolor={"#000"}
      py={deviceType === "mobile" || deviceType === "tablet" ? 8 : 5}
      px={deviceType === "mobile" || deviceType === "tablet" ? 0 : 5}
    >
      <Container
        disableGutters={
          deviceType === "mobile" || deviceType === "tablet" ? false : true
        }
      >
        <Grid container alignItems={"center"} spacing={5}>
          <Grid item xs={12} md={6} lg={6} color={"#fff"}>
            <Typography
              variant="h2"
              fontSize={deviceType === "mobile" ? 40 : 60}
              fontWeight={800}
              mb={2}
              textAlign={deviceType === "mobile" ? "center" : "left"}
            >
              <span style={{ color: theme.palette.secondary.main }}>
                Send Money Globally
              </span>{" "}
              to any Bank Account{" "}
            </Typography>
            <Typography
              variant={deviceType === "mobile" ? "body2" : "body1"}
              fontSize={24}
              textAlign={deviceType === "mobile" ? "center" : "left"}
            >
              Via Peerwallet’s P2P Remittance Marketplace.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            display={"flex"}
            justifyContent={
              deviceType === "mobile" || deviceType === "tablet"
                ? "center"
                : "end"
            }
          >
            <MainPageWidget deviceType={deviceType} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
