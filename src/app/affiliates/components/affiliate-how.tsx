import { Box, Container, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import how from "../../../assets/images/affiliates/affiliate-how.png";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function AffiliateHow(): React.JSX.Element {
  const theme = useTheme();
  const [deviceType, setDeviceType] = useState("mobile");

  const mobile = useMediaQuery(theme.breakpoints.only("xs"));
  const tablet = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (mobile) {
      setDeviceType("mobile");
    } else if (tablet) {
      setDeviceType("tablet");
    } else {
      setDeviceType("pc");
    }
  }, [mobile, tablet]);
  return (
    <Box bgcolor={"#ffff"} py={4}>
      <Container disableGutters={
        deviceType === "mobile" || deviceType === "tablet" ? false : true
      }>
        <Box
          p={deviceType === 'mobile' ? 1 : 5}
          sx={{
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            boxShadow: "0px 0px 14px 4px #8989891A",
            textAlign: deviceType === 'mobile' ? 'center' : 'left',
          }}
        >
            <Grid container spacing={2}>
              <Grid item md={6}>
                <Typography variant="h6" fontWeight={700} fontSize={deviceType === 'mobile' ? 35 : 48}>
                  <span style={{ color: "#009FDD" }}>How</span> Does It Work?
                </Typography>
                <Typography variant="body2" fontSize={16}>
                  You can earn from users’ transactions when you refer them to
                  Peerwallet. You would continue to earn from them as long as
                  they receive payments on Peerwallet. Peerwallet charges the
                  receiver and not the sender, so your profits would come when
                  those you have referred to Peerwallet receive payments.
                </Typography>
                <Typography variant="body2" fontSize={16} pt={2}>
                  We would share 20% of the total fees received from that
                  transaction, Peerwallet’s fee is 1%, so you would get 20% of
                  1% per each transaction.
                </Typography>
              </Grid>
              <Grid item md={6}>
                <Image src={how} alt="" style={{ display: deviceType === 'mobile' ? 'none' : 'flex', width: '100%', height: '98%' }} />
              </Grid>
            </Grid>
        </Box>
      </Container>
    </Box>
  );
}
