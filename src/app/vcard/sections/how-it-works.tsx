import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { VcComponent } from "../components/how-it-works-component";
import { MediaProps } from "../../../utils/utils";

export default function HowItWorks({
  deviceType,
}: MediaProps): React.JSX.Element {
  return (
    <Box
      bgcolor={"#e8e8e8"}
      color={"#000000"}
      pb={5}
      pt={deviceType === "mobile" ? 5 : 25}
    >
      <Container
        disableGutters={
          deviceType === "mobile" || deviceType === "tablet" ? false : true
        }
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={5}
        >
          <Box
            textAlign={"center"}
            width={deviceType === "mobile" ? "100%" : "70%"}
          >
            <Typography
              variant="h2"
              fontSize={deviceType === "mobile" ? 36 : 48}
              fontWeight={900}
            >
              How It Works
            </Typography>
            <hr style={{ width: "25%" }} />
            <Typography
              variant={deviceType === "mobile" ? "body2" : "body1"}
              fontWeight={600}
            >
              Everything happening on Peerwallet is P2P. Merchants, normally
              would apply and be verified with some security deposits before
              they can offer virtual card services, learn more below;
            </Typography>
          </Box>
          <Box
            px={deviceType === "mobile" ? 2 : 6}
            py={5}
            bgcolor={"#fff"}
            display={"flex"}
            flexDirection={"column"}
            gap={4}
            borderRadius={10}
          >
            <Grid container spacing={deviceType === "mobile" ? 4 : 10}>
              <Grid item xs={12} md={6} lg={6}>
                <VcComponent
                  iconType={"icon"}
                  icon="streamline:payment-10-solid"
                  iconColor="#d88129"
                  head="Multiple Funding Options"
                  body="Either as a regular user, seller, or merchant who provides financial services. You would only be required to create one account for all."
                  iconBg={"#fff8e5"}
                  deviceType={deviceType}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <VcComponent
                  iconType={"icon"}
                  icon="ant-design:credit-card-filled"
                  iconColor="#d93c65"
                  head={"Variety Of Cards"}
                  body="From the Marketplace, you have the convenience of selecting which vendor you prefer to issue your card. Simply choose and spend hassle-free!"
                  iconBg={"#fbebf0"}
                  deviceType={deviceType}
                />
              </Grid>
            </Grid>
            <Grid container spacing={deviceType === "mobile" ? 4 : 10}>
              <Grid item xs={12} md={6} lg={6}>
                <VcComponent
                  iconType={"icon"}
                  icon="solar:dollar-bold"
                  iconColor="#12b76a"
                  head={"Quick Spend"}
                  body={
                    "Users have the flexibility to load, spend, and withdraw funds from their wallets using a variety of options, including approved external vendors or within the Marketplace."
                  }
                  iconBg={"#e7f8f0"}
                  deviceType={deviceType}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <VcComponent
                  iconType={"icon"}
                  icon="material-symbols:lock"
                  iconColor="#009fdd"
                  head={"Safe & Secure"}
                  body={
                    "Every time you fund your account, the system ensures smooth transactions by providing an Escrow system, safeguarding all parties involved."
                  }
                  iconBg={"#e5f5fc"}
                  deviceType={deviceType}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
