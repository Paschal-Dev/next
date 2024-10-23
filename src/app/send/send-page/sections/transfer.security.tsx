import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../../../assets/themes/theme";
import { PageButton } from "../components/buttons";
import tsImage from "../../../../assets/images/send/transfer-security.png";
import { MediaProps } from "../../../../utils/utils";
import Image from "next/image";

export default function TransferSecurity({
  deviceType,
}: MediaProps): React.JSX.Element {
  return (
    <Box bgcolor={"#000"} color={"#fff"} py={8}>
      <Container
        disableGutters={
          deviceType === "mobile" || deviceType === "tablet" ? false : true
        }
      >
        <Box
          bgcolor={"#282828"}
          p={deviceType === "mobile" ? 3 : 8}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={6}
          borderRadius={12}
        >
          <Grid container alignItems={"end"} spacing={6}>
            <Grid
              item
              sm={12}
              md={6}
              lg={6}
              display={"flex"}
              flexDirection={"column"}
              alignItems={deviceType === "mobile" ? "center" : "start"}
            >
              <Box display={"flex"} flexDirection={"column"} gap={4} mb={5}>
                <Typography
                  variant="h3"
                  fontSize={deviceType === "mobile" ? 32 : 52}
                  fontWeight={900}
                  textAlign={deviceType === "mobile" ? "center" : "left"}
                >
                  Transfer{" "}
                  <span style={{ color: theme.palette.primary.main }}>
                    Security
                  </span>
                </Typography>
                <Typography variant="body1" fontSize={15}>
                  Sending Bank payments from Peerwallet is safe, any Merchant
                  sending payments have been verified and also has some security
                  deposits with us. Security deposits are funds locked by
                  Merchants to cover for unforeseen transaction failure, and to
                  increase trust among peerwallet users. The minimum lock for
                  Merchant issuing a Bank transfer is $3,000 and the withdrawal
                  amount’s equivalent in the Merchant’s balance.
                </Typography>
                <Typography variant="body1" fontSize={15}>
                  Illustration: If you want to withdraw $10,000 for example,
                  only Merchants who have a balance of $10,000 in their
                  peerwallet balance would be able to initiate the withdrawal.
                  This guarantees the equivalent lock for Escrow purposes.
                </Typography>
              </Box>
              <PageButton
                bgcolor={theme.palette.primary.main}
                text="Withdraw Money Now"
                color="#fff"
                deviceType={deviceType}
              />
            </Grid>
            {deviceType !== "mobile" && deviceType !== "tablet" && (
              <Grid item sm={12} md={6} lg={6}>
                <Image
                  src={tsImage}
                  alt="How it Works"
                  style={{ width: "100%", height: "auto" }}
                />
              </Grid>
            )}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
