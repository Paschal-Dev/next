import { Box, Container, Grid, Typography } from "@mui/material";
import merchant from "../../../assets/images/learnmore/merchant.png";
import React from "react";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MerchantSecurity({deviceType}:any): React.JSX.Element {
  return (
    <Container
          disableGutters={
            deviceType === "mobile" || deviceType === "tablet" ? false : true
          }
        >
      <Grid container spacing={4}>
        <Grid item md={6}>
          <Box>
            <Typography
              variant="h6"
              fontWeight={800}
              fontSize={deviceType === "mobile" ? "20px" : "40px"}
              color={"#009FDD"}
              sx={{textAlign: deviceType === "mobile" ? "center" : deviceType === "tablet" ?  "center" : ""}}
            >
              Merchant Security & Trust
            </Typography>
            <Typography variant="body2" pt={3} fontSize={16}>
              Since the Peerwallet idea can only be accomplished with Merchants,
              in other to reduce risk and increase trust for the Peerwallet
              Marketplace, all Merchants must be verified & approved before they
              can offer funding, withdrawal & other services on Peerwallet.
            </Typography>
            <Typography variant="h6" fontWeight={700} pt={3}>
              Escrow System
            </Typography>
            <Typography variant="body2" fontSize={16}>
              Verification does not guarantee safety that’s why we also
              introduced the Escrow system each time a Merchant wants to
              transact with a user or vice versa. The security of both the
              Merchant and the User is extremely dear to us and we would do
              everything possible in making sure every transaction on Peerwallet
              is safe, secure, and easy to use. Funds on Peerwallet are final
              and irreversible and this is shown before and during transfers are
              made. Please read the terms and conditions for more information
              about this.
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Image src={merchant} alt="" style={{width: '100%'}} />
        </Grid>
      </Grid>
    </Container>
  );
}
