import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  Grid,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";
import selling from "../../../assets/images/sell/about-sell.svg";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function AboutSell({ deviceType }: any): React.JSX.Element {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box p={6}>
      <Container
        disableGutters={
          deviceType === "mobile" || deviceType === "tablet" ? false : true
        }
      >
        <Grid container columnSpacing={3} alignItems={"center"}>
          <Grid item md={6} xs={12}>
            <Typography
              variant="h2"
              fontSize={deviceType === "mobile" ? "35px" : "44px"}
              fontWeight={900}
              sx={{
                textAlign:
                  deviceType === "mobile"
                    ? "center"
                    : deviceType === "tablet"
                    ? "center"
                    : "",
              }}
            >
              <span style={{ color: "#009FDD" }}>About</span> Sell On Peerwallet
            </Typography>
            <Typography variant="body1" fontWeight={400} pt={2}>
              On Peerwallet, you can accept payments from your website or via
              payment or product links. Your customers would be able to pay you
              using several payment methods.
            </Typography>
            <Typography variant="body1" fontWeight={400} pt={2}>
              You can accept payments from Peerwallet and non Peerwallet users,
              Peerwallet existing users can pay you from their wallet balance,
              or they can pay via Crypto, several Debit - Credit cards gateways,
              Paypal, Bank transfer, Perfect Money and many other payment
              methods.
            </Typography>
            <Typography variant="body1" fontWeight={400} pt={2}>
              No matter the payment method used, you would receive all payments
              in one wallet and you are able to withdraw to your preferred
              method, Bank, Crypto, Paypal or your preferred choice.
            </Typography>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            mt={deviceType === "mobile" ? 3 : deviceType === "tablet" ? 3 : ""}
          >
            <Box position={"relative"}>
              <Image src={selling} alt="" style={{width: '100%'}} />
              <Button
                variant="contained"
                sx={{
                  height: deviceType === "mobile" ? 60 : 80,
                  px: 3,
                  color: "#fff",
                  borderRadius: 4,
                  border: "1px solid #fff",
                  bgcolor: "#FCC82B",
                  fontSize: deviceType === "mobile" ? 12 : 20,
                  fontWeight: 800,
                  position: "absolute",
                  top: "40%",
                  left: deviceType === "mobile" ? "25%" : "35%",
                  ":hover": { bgcolor: "#000", color: "#fff" },
                }}
                onClick={handleOpen}
              >
                <Icon
                  icon="octicon:play-24"
                  fontSize={26}
                  color="#fff"
                  style={{ marginRight: 4 }}
                />{" "}
                PLAY VIDEO
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <DialogContent>
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/AsNynSC76yg?autoplay=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            style={{ border: "none", backgroundColor: "transparent" }}
          ></iframe>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
