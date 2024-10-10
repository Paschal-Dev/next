import { Box, Container, Grid, Typography } from "@mui/material";
import working from "../../../assets/images/learnmore/how-peerwallet-works.png";
import React from "react";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function HowPeerwalletWorks({deviceType,}: any): React.JSX.Element {
  return (
    <Box bgcolor={"#ffff"} p={3}>
      <Container
        disableGutters={
          deviceType === "mobile" || deviceType === "tablet" ? false : true
        }
      >
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <Box
              bgcolor={"#009FDD"}
              borderRadius={deviceType === "mobile" ? 2 : 3}
              display={"flex"}
              justifyContent={"center"}
              width={"90%"}
            >
              <Typography
                variant="h6"
                fontWeight={700}
                fontSize={deviceType === "mobile" ? 20 : 40}
                color={"#ffff"}
              >
                How Peerwallet Works
              </Typography>
            </Box>
            <Typography variant="body2" fontSize={16} pt={2}>
              Peerwallet is a Global Finance Marketplace where everything is
              achieved on a person-to-person model. A person-to-person or a
              peer-to-peer payment system that makes it possible for anyone to
              receive, transfer & spend funds easily from anywhere and all from
              one place. Imagine a wallet where you can fund with Paypal,
              Mastercard, Visa, Local Bank Transfer, Venmo, Cash APP, Neteller,
              Wire, Paystack, Flutterwave, Stripe, PayU, Paytm, Skrill, Square,
              Payoneer, Alipay, and 250 more options! All together makes
              Peerwallet a global payment system that can be used by all and
              accepted by all
            </Typography>
            <Typography variant="body2" fontSize={16} pt={2}>
              nterestingly, sellers who integrate Peerwallet to accept payment
              from their website would be able to accept payment from existing
              Peerwallet users and non-existing users easily with any of the
              payment options available on the P2P market for automated invoice
              payment.
            </Typography>
            <Typography variant="h6" fontWeight={700} pt={2}>
              Illustration:
            </Typography>
            <Typography variant="body2" fontSize={15}>
              If you create a payment link or integrate Peerwallet to accept
              payment from your website, let us assume the bill to be paid is
              $200 and your customer is from Canada, at the checkout page, we
              would fetch which Merchant has integrated automated payment for
              people in Canada then this would be fetched out including the
              option to pay with Peerwallet balance.
            </Typography>
            <Typography variant="body2" fontSize={15} pt={2}>
              There are already hundreds of payment methods that have been
              integrated by several Merchants on Peerwallet, the opportunities
              with a single Peerwallet account are unlimited as it can quickly
              solve how to accept global payments or how to send payments
              easily.
            </Typography>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            display={
              deviceType === "mobile"
                ? "none"
                : deviceType === "tablet"
                ? "none"
                : "flex"
            }
          >
            <Box>
              <Image src={working} alt="" style={{width: '100%'}} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
