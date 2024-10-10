import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import merchant from "../../../assets/images/terms/merchant.svg";
import React from "react";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MerchantTerms({ deviceType }: any): React.JSX.Element {
 
  return (
    <Box py={ deviceType === "mobile" ? 3 : 5} bgcolor={"#fff"}>
      <Container
        disableGutters={
          deviceType === "mobile" || deviceType === "tablet" ? false : true
        }
      >     
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: deviceType === "mobile" ? 600 : 800,
              fontSize: deviceType === "mobile" ? "20px" : "48px",
            }}
          >
            Merchant <span style={{ color: "#009FDD" }}>Terms of Service</span>
          </Typography>
          <Box pb={1}>
            <Image
              src={merchant}
              alt=""
              style={{
                display:
                  deviceType === "mobile"
                    ? "none"
                    : deviceType === "tablet"
                    ? "none"
                    : "flex",
              }}
            />
          </Box>
          <Typography variant="caption" fontWeight={400} fontSize={"16px"}>
            The Peerwallet Terms of Service still apply and are in no way
            replaced by this Merchant Terms of Service, which is just intended
            to be a quick reference for the Merchant.
          </Typography>
          <Box>
            <Typography variant="caption" fontSize={"16px"} fontWeight={500}>
              Please be aware that by choosing to trade on Peerwallet, you agree
              to the following conditions:
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <Typography variant="caption" fontSize={"14px"} fontWeight={400}>
              1. As a Merchant, you agree to assume all responsibility and risk
              for any fraud resulting from the sale of your financial or digital
              assets.
            </Typography>
            <Typography variant="caption" fontSize={"14px"} fontWeight={400}>
              2. Any money lost through fraud or payments paid toward our escrow
              fee may not be refunded by Peerwallet.
            </Typography>
            <Typography variant="caption" fontSize={"14px"} fontWeight={400}>
              3. It is the merchant responsibility to pay all taxes.
            </Typography>
            <Typography variant="caption" fontSize={"14px"} fontWeight={400}>
              4. Please open a dispute and wait for a moderator to intervene if
              you need to report a problem with a trade.
            </Typography>
            <Typography variant="caption" fontSize={"14px"} fontWeight={400}>
              5. If you release the digital asset before the payment has been
              received in full, Peerwallet will not be held responsible.
            </Typography>
            <Typography variant="caption" fontSize={"14px"} fontWeight={400}>
              6.The following activities are prohibited on Peerwallet and will
              result in the suspension of your account:
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection={"column"} ml={3}>
            <Typography variant="caption" fontSize={"14px"} fontWeight={400}>
              a. Off-escrow information exchange within a transaction/trade
            </Typography>
            <Typography variant="caption" fontSize={"14px"} fontWeight={400}>
              b. Trading off escrow
            </Typography>
            <Typography variant="caption" fontSize={"14px"} fontWeight={400}>
              c. Unresponsiveness - Merchants are expected to respond promptly
            </Typography>
            <Typography variant="caption" fontSize={"14px"} fontWeight={400}>
              d. Using foul or abusive language
            </Typography>
            <Typography variant="caption" fontSize={"14px"} fontWeight={400}>
              e.pretending to be a moderator
            </Typography>
            <Typography variant="caption" fontSize={"14px"} fontWeight={400}>
              f. opening multiple accounts
            </Typography>
            <Typography variant="caption" fontSize={"14px"} fontWeight={400}>
              g. Negotiation
            </Typography>
            <Typography variant="caption" fontSize={"14px"} fontWeight={400}>
              h. deliberate asset-locking
            </Typography>
            <Typography variant="caption" fontSize={"14px"} fontWeight={400}>
              i.Any other form of deceptive or fraudulent activity
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
