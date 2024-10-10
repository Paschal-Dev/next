import { Box, Container, Typography } from "@mui/material";
import aml from "../../../assets/images/terms/aml-policy.svg";
import React from "react";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function AmlPolicy({ deviceType }: any): React.JSX.Element {
  return (
    <Box pt={4} sx={{ pl: deviceType === "mobile" ? 1 : 0 }}>
      <Container
        disableGutters={
          deviceType === "mobile" || deviceType === "tablet" ? false : true
        }
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: deviceType === "mobile" ? 700 : 800,
            fontSize: deviceType === "mobile" ? "20px" : "48px",
          }}
        >
          Peerwallet <span style={{ color: "#009FDD" }}>AML Policy</span>
        </Typography>
        <Box>
          <Image
            src={aml}
            alt=""
            style={{ display: deviceType === "mobile" ? "none" : deviceType === "tablet" ? "none" : "flex" }}
          />
        </Box>
        <Box display={"flex"} flexDirection={"column"} pt={2}>
          <Typography
            variant="caption"
            fontWeight={400}
            sx={{ fontSize:"16px" }}
          >
            Peerwallet Limited s.r.o and Peerwallet (individually and
            collectively, the “Company”), incorporated under the laws of Czech
            Republic offers services through a semi-decentralized peer-to-peer
            (“P2P”) marketplace for the purchase and sale of digital assets.
          </Typography>
          <Typography
            variant="caption"
            fontWeight={400}
            fontSize={"16px"}
            pt={1}
          >
            According to the Czech Republic Companies Act 2004, the Firm is
            registered as a FINTECH company (Czech Rebuplic). The Anti-Money
            Laundering (AML) rules and practices of Peerwallet are intended to
            prevent illegal activity on the platform and safeguard the users,
            the company, and the communities of digital currencies and financial
            services from being taken advantage of by criminals. The Company
            complies with the guidelines and laws relating to the Czech Republic
            and the Companies Act.
          </Typography>
          <Typography
            variant="caption"
            fontSize={"16px"}
            fontWeight={400}
            py={3}
          >
            Know Your Customer (KYC) policies and procedures for individual
            and institutional customers have been developed as part of
            Peerwallet Compliance policies to enable the Company to have a
            reasonable belief that it is aware of the true identity of those of
            its customers for whom such review has been carried out. The
            company employees, consultants, executives, owners, and directors
            all abide by the policy, which applies to all users of the platform.
          </Typography>
          <Typography variant="caption" fontSize={"16px"} fontWeight={500}>
            The following actions have been performed by Peerwallet as part of
            KYC & AML Compliance using a risk-based approach:
          </Typography>
        </Box>
        <Box display={"flex"} flexDirection={"column"}>
          <ul style={{ paddingLeft: 25 }}>
            <li>
              The appointment of a Chief Compliance Officer with adequate
              knowledge and independence who is in charge of monitoring
              adherence to pertinent laws, rules, regulations, and industry
              recommendations;
            </li>
            <li style={{ paddingTop: 4, fontSize: "16px", fontWeight: 400 }}>
              Establishing and upholding risk-based policies for customer due
              diligence, enhanced due diligence, and know your customer (KYC);
            </li>
            <li style={{ paddingTop: 4, fontSize: "16px", fontWeight: 400 }}>
              Creating risk-based layers for user verification
            </li>
            <li style={{ paddingTop: 4, fontSize: "16px", fontWeight: 400 }}>
              Utilizing a variety of anti-fraud systems;
            </li>
            <li style={{ paddingTop: 4, fontSize: "16px", fontWeight: 400 }}>
              Rule-based transaction monitoring;
            </li>
            <li style={{ paddingTop: 4, fontSize: "16px", fontWeight: 400 }}>
              Analyses using various analytics including blockchain analytics;
            </li>
          </ul>
        </Box>
        <Box pt={3}>
          <Typography variant="caption" fontSize={"16px"} fontWeight={400}>
            If Peerwallet has provided you with a translation of this policy
            from English, you acknowledge that it is only being done thus for
            your convenience and that only the English version of the policy
            will apply to your dealings with Peerwallet. The English language
            version of the policy shall take precedence over any translation in
            the event of a conflict between the two versions statements.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
