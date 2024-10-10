import { Box, Container, Grid, Typography } from "@mui/material";
import seller from "../../../assets/images/learnmore/sellers.png";
import user from "../../../assets/images/learnmore/user.png";
import merchant from "../../../assets/images/learnmore/merchantt.png";
import account from "../../../assets/images/learnmore/types-of-account.png";
import React from "react";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TypesOfAccount({deviceType}:any): React.JSX.Element {
  return (
    <Box bgcolor={"#000"}>
     <Container
          disableGutters={
            deviceType === "mobile" || deviceType === "tablet" ? false : true
          }
        >
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <Box display={deviceType === "tablet" ? "none" : "flex" }>
              <Image src={account} alt="" style={{width: '100%'}} />
            </Box>
          </Grid>
          <Grid item md={6} xs={12} pb={deviceType === "mobile" ? 5 : deviceType === "tablet" ? 5 : ""}>
            <Typography
              variant="h2"
              fontWeight={800}
              fontSize={deviceType === "mobile" ? "20px" : "38px"}
              color={"#ffff"}
              sx={{
                textAlign: deviceType === "mobile"
                  ? " center"
                  : deviceType === "tablet"
                  ? "center"
                  : "",
              }}
            >
              There Are
              <span style={{ color: "#009FDD" }}> 3 Types of Account</span>
            </Typography>
            <Typography
              variant="h2"
              fontWeight={800}
              fontSize={deviceType === "mobile" ? "20px" : "38px"}
              color={"#ffff"}
              sx={{
                textAlign: deviceType === "mobile"
                  ? " center"
                  : deviceType === "tablet"
                  ? "center"
                  : "",
              }}
            >
              Privileges On Peerwallet:
            </Typography>
            <Box display="flex" alignItems="center" pt={2}>
             <Box>
                <Image src={merchant} alt="" />
             </Box>
              <Typography variant="body2" ml={2} color={"#fff"} pt={1}>
                <span style={{ color: "#11CC46" }}> Merchants:</span> They are
                verified & approved individuals or Companies who provide
                funding, withdrawals, and other services on the Marketplace.
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" pt={deviceType === "mobile" ? 0 :deviceType === "tablet" ? 0 : 2}>
              <Box mt={-2}>
                <Image src={seller} alt=""/>
              </Box>
              <Typography variant="body2" ml={2} color={"#fff"} pt={2}>
                <span style={{ color: "#FCC82B" }}> Sellers:</span> They are
                those who have integrated Peerwallet to accept payments from
                their website or sellers who are receiving payments without a
                website, either selling offline or whichever method.
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" pt={deviceType === "mobile" ? 0 :deviceType === "tablet" ? 0 : 2}>
             <Box>
                <Image src={user} alt="" />
             </Box>
              <Typography variant="body2" ml={2} color={"#fff"} pt={2}>
                <span style={{ color: "#009FDD" }}> Users:</span> They are the
                everyday users of Peerwallet, people who pay online, spend,
                withdraw, and so on.
              </Typography>
            </Box>
            <Box display="flex" justifyContent="center" flexDirection={"row"} ml={7}>
            <Typography variant="body2" color={"#fff"} pt={2} >
                interestingly, one can be all at the same time, you can be a
                Merchant, Seller, and also a User; it requires just some
                additional verifications and commitments.
              </Typography>
              </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
