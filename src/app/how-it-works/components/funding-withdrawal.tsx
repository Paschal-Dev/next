import { Box, Container, Typography } from "@mui/material";
import funding from "../../../assets/images/learnmore/funding-withdrawals.png";
import React from "react";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FundingWithdrawal({deviceType}:any): React.JSX.Element {
  return (
    <Container
    disableGutters={
      deviceType === "mobile" || deviceType === "tablet" ? false : true
    }
  >
      <Box
        bgcolor={"#fff"}
        py={3}
        px={deviceType === "mobile" ? 0 : 2}
        pb={8}
        sx={{
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <Container>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography
              variant="h6"
              fontWeight={800}
              fontSize={deviceType === "mobile" ? 20 : 40}
              color={"#009FDD"}
            >
              Funding & Withdrawals
            </Typography>
          </Box>
          <Box>
            <Image src={funding} alt="" style={{width: '100%'}} />
          </Box>
          <Typography variant="body2" fontSize={16}>
            There is a very unique way to fund and withdraw on Peerwallet.
            Peerwallet uses the Merchant system to accomplish the funding and
            the withdrawal process. Merchants can list which payment method they
            can offer, thereby increasing the number of funding and withdrawal
            options available.
          </Typography>
          <Typography variant="body2" pt={2} fontSize={16}>
            This method is referred to as “Peer to Peer”. This is regarded as
            the most successful way to quickly move cash from one person to
            another other and Peerwallet has adopted this method for funding and
            withdrawals. During funding or withdrawals, the whole process is
            automatically Escrowed so that all parties would be fully protected.
            Escrow payments are quite secure and safe making sure that both
            parties are protected.
          </Typography>
          <Typography variant="h6" fontWeight={700} pt={2}>
            Illustration:
          </Typography>
          <Typography variant="body2" fontSize={16}>
           If a user wants to load wallet his/her Peerwallet worth
            EUR5,000, then he checks which Merchant offers funding in his local
            currency and preferred payment method, after identifying such
            merchant, he clicks to view the merchant listing offer and terms.
            The next step is to initiate a trade and send funds to the Merchant,
            then Merchant confirms payment and then releases funds which go to
            the user’s Peerwallet wallet balance. In case of dispute and
            escalation for intervention, we shall duly verify all payments from
            all parties and decide to either release the funds to the user or
            cancel the trade. This method has been proven to be safe, reliable,
            and easy to use.
          </Typography>
        </Container>
      </Box>
    </Container>
  );
}
