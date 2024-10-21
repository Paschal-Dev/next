import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../../../assets/themes/theme";
import { PageButton } from "../components/buttons";
import howItWorks from "../../../../assets/images/send/how-it-works.png";
import { MediaProps } from "../../../../utils/utils";
import Image from "next/image";

export default function SendHowItWorks({
  deviceType,
}: MediaProps): React.JSX.Element {
  return (
    <Box bgcolor={"#E8E8E8"} py={8}>
      <Container
        disableGutters={
          deviceType === "mobile" || deviceType === "tablet" ? false : true
        }
      >
        <Box
          bgcolor={"#fff"}
          p={deviceType === "mobile" ? 4 : 8}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={6}
          borderRadius={12}
        >
          <Grid container alignItems={"end"} spacing={5}>
            {deviceType !== "mobile" && deviceType !== "tablet" && (
              <Grid item xs={12} md={6} lg={6}>
                <Image
                  src={howItWorks}
                  alt="How it Works"
                  style={{ width: "100%", height: "auto" }}
                />
              </Grid>
            )}
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
              display={"flex"}
              flexDirection={"column"}
              alignItems={deviceType === "mobile" ? "center" : "start"}
            >
              <Box display={"flex"} flexDirection={"column"} gap={3} mb={3}>
                <Typography
                  variant="h2"
                  fontSize={deviceType === "mobile" ? 36 : 64}
                  fontWeight={900}
                  textAlign={deviceType === "mobile" ? "center" : "left"}
                >
                  <span style={{ color: theme.palette.primary.main }}>How</span>{" "}
                  It Works
                </Typography>
                <Typography variant="body1" fontSize={15}>
                  This is a P2P remittance system where approved merchants are
                  involved in sending withdrawals to users who want to withdraw
                  or send Bank payments. These merchants are verified
                  individuals or companies from several regions who make it
                  possible for you or your recipients to receive payments
                  locally via Bank transfer.
                </Typography>
                <Typography variant="body1" fontSize={15}>
                  Anyone with a Peerwallet balance can send Bank payments, as
                  long as there are available Merchants in your chosen region.
                </Typography>
                <Typography variant="body1" fontSize={15}>
                  If you want to load your Peerwallet balance, you can do so
                  from the Market Place with several payment methods. The Market
                  place makes P2P funding possible, where approved Merchants are
                  also able to help you fund your Peerwallet account via local
                  payment methods.
                </Typography>
              </Box>
              <PageButton
                bgcolor={theme.palette.primary.main}
                text="Send Funds Now"
                color="#fff"
                hovercolor="#000"
                deviceType={deviceType}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
