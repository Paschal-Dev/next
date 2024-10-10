import { Box, Container, Typography } from "@mui/material";
import about from "../../../assets/images/terms/about-peerwallet.svg";
import React from "react";
import MyAccordion from "./accordion";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function AboutPeerwallet({deviceType}: any): React.JSX.Element {
  return (
    <Box pt={3} mb={deviceType === "mobile" ? 5 : 12}>
      <Container
        disableGutters={
          deviceType === "mobile" || deviceType === "tablet" ? false : true
        }
      >
        {" "}
        <Box sx={{ pl: deviceType === "mobile" ? 1 : 0 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight:800,
              fontSize: deviceType === "mobile" ? "18px" : deviceType === "tablet" ? "40px" : "48px",
            }}
          >
            <span style={{ color: "#009FDD" }}> About Peerwallet</span> and Its
            Services
          </Typography>
          <Box>
            <Image
              src={about}
              alt="aboutpeerwallet"
              style={{ width: deviceType === "mobile" ? "90%" : "100%" }}
            />
          </Box>
          <Box pt={1}>
            <Typography variant="caption" fontWeight={400} fontSize={"16px"}>
              With merchants allowing more than 300 payment methods in exchange
              for their assets, Peerwallet is a top peer-to-peer
              semi-decentralized marketplace for the acquisition and sale of
              financial assets. Peer-to-peer negotiations and exchanges about
              payment options take place between marketplace buyers (referred to
              as Buyers) and sellers (referred to as Sellers or
              Merchants). Our users are accountable and liable legally
              utilizing such payment methods in a legal manner and agreeing on
              which payment methods to employ to complete a transaction.
            </Typography>
          </Box>
          <Box pt={3}>
            <Typography variant="caption" fontWeight={400} fontSize={"16px"}>
              Peerwallet additionally provides hosted digital wallet services
              via a top global provider of digital asset wallets. Our global
              user base can publish offers to purchase or sell Digital Assets
              using several practical techniques. The person who created the
              offer is in charge of outlining the conditions of the deal,
              including the forms of payment the Seller would acknowledge. The
              Sellers Digital Assets are locked as part of our transaction
              processes (which we describe as Peerwallet Escrow) once an offer
              is chosen by another Peerwallet user until all conditions
              necessary to complete the transaction have been met. Once the
              Buyer has complied with the requirements of the transaction and
              payment has been verified as legitimate and received by the
              Seller, the sale is complete, and Digital Assets are unlocked and
              released to the Buyer by the Seller. NOT AS A PAYMENT PROCESSOR,
              PEERWALLET. THE BUYER AND SELLER ARE ENTIRELY RESPONSIBLE FOR
              SENDING AND RECEIVING PAYMENT AND CONFIRMING THE VALIDITY OF THE
              TRANSACTIONS. If the Buyer decides to terminate the transaction,
              the Digital Assets that we have locked are returned to the Seller.
              The sale cannot be canceled by the seller at any time. The sole
              alternative available to the Seller is to unlock the Digital
              Assets and give them to the Buyer. This is for the Buyers
              security protection.
            </Typography>
          </Box>
          <Box py={3}>
            <Typography variant="caption" fontSize={"16px"} fontWeight={400}>
              If the Seller must cancel the transaction because the Buyer
              disregarded the conditions of the transaction, the Seller shall
              initiate a dispute and set forth the grounds thereof as more fully
              outlined in Section 8 of this Agreement. On our website,
              transactions are carried out between Buyers and Sellers.
              Peerwallet is not a party to any transaction as a result.
            </Typography>
          </Box>
          <Box pb={3}>
            <Typography variant="caption" fontSize={"16px"} fontWeight={400}>
              To the fullest extent allowed by law, you hereby agree to bear
              responsibility for any actions taken under your wallet and to
              assume all risks associated with authorized or illegal access to
              your wallet.
            </Typography>
          </Box>
          <Box>
            <MyAccordion deviceType={deviceType} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
