import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import whyUse from "../../../assets/images/virtual-cards/vc-why-use.png";
import { MediaProps } from "../../../utils/utils";
import Image from "next/image";

export default function WhyChoose({
  deviceType,
}: MediaProps): React.JSX.Element {
  return (
    <Box bgcolor={"#000000"} color={"#fff"}>
      <Container
        disableGutters={
          deviceType === "mobile" || deviceType === "tablet" ? false : true
        }
      >
        <Box py={5}>
          <Grid container spacing={2} display={"flex"} alignItems={"center"}>
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
              display={"flex"}
              justifyContent={deviceType === "mobile" ? "start" : "start"}
            >
              <Image src={whyUse} alt="Why-Use" style={{width: '94%'}} />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-between"}
                alignItems={"start"}
                gap={2}
              >
                <Typography variant="h4" fontSize={deviceType === "mobile" ? 24 : 32} fontWeight={800}>
                  Here are a few reasons why you should use Peerwallet Virtual
                  card Marketplace.
                </Typography>
                <Typography variant="body2" fontSize={15} fontWeight={300}>
                  Peerwallet enables users to fund their cryptocurrency wallets
                  with either crypto or fiat currencies. Users can top up their
                  Peerwallet balance with USDT or PWAT, which can then be
                  utilized on the Peerwallet marketplace for various purposes
                  such as transferring to another user, purchasing a virtual
                  card, or withdrawing to either crypto or fiat currencies.
                  Unlike conventional P2P platforms, vendors on Peerwallet
                  automatically sell their assets to users who wish to fund
                  their balances.
                </Typography>
                <Typography variant="body2" fontSize={15} fontWeight={300}>
                  As a vendor, if you have authorization to sell crypto through
                  a gateway, you can integrate it into Peerwallet, allowing
                  users to conveniently fund their accounts using your gateway.
                  With thousands of users on Peerwallet seeking to fund their
                  accounts using local payment methods, this integration
                  presents a significant opportunity for vendors.
                </Typography>
                <Typography variant="body2" fontSize={15} fontWeight={300}>
                  Forget the complexities of traditional payment systems. Let us
                  show you an innovative way to boost your profits effortlessly.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
