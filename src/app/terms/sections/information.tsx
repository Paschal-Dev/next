import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Information({ deviceType }: any): React.JSX.Element {
  
  return (
    <Box>
      <Box bgcolor={"#009bd81e"} p={2}>
        <Container
          disableGutters={
            deviceType === "mobile" || deviceType === "tablet" ? false : true
          }
        >
          <Box display={"flex"} alignItems={"center"}>
            <Box sx={{ mt: deviceType === "mobile" ? -13 : 0 }}>
              <Box bgcolor={"#009bd81e"} borderRadius={"50%"} mr={2} p={1}>
                <Icon
                  icon="bxs:error"
                  style={{ fontSize: deviceType === "mobile" ? 30 : 35 }}
                  color="#009FDD"
                />
              </Box>
            </Box>
            <Typography
              variant="body2"
              sx={{
                fontWeight: deviceType === "mobile" ? 600 : 800,
                fontSize: deviceType === "mobile" ? "16px" : "21px",
              }}
              color={"#009FDD"}
            >
              Very Important Information about your rights and obligations, as
              well as conditions, limitations, and exclusions that may apply to
              you, are contained in this agreement. Please carefully read it.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box py={2} bgcolor={"#FFFFFF"}>
        <Container
          disableGutters={
            deviceType === "mobile" || deviceType === "tablet" ? false : true
          }
        >
          <Box>
            <Typography
              variant="body2"
              sx={{
                fontWeight: deviceType === "mobile" ? 500 : 600,
                fontSize: deviceType === "mobile" ? "13px" : "16px"
              }}
              
            >
              <span style={{ color: "#009FDD" }}>These Terms of Service</span>{" "}
              and any amendments and restatements hereof (the “Agreement”) form
              a legal agreement covering the provision of services from
              Peerwallet to you, including offering a marketplace to enable
              buyers and sellers of “Fiat and Digital Assets” (such term to be
              broadly understood to include digital currencies such as Bitcoin,
              Tether, and others including fiat currencies, supported by a
              Peerwallet system) to engage in transactions with each other (the
              “Marketplace”), offering hosted wallet services, holding and
              releasing Assets as instructed upon completion of a purchase of
              Assets and any other services described in this Agreement
              (collectively the “Services” and individually, a “Service”)
              provided by Peerwallet and all of its affiliates, collectively,
              “Peerwallet” or “we” or “us” or the “Company”) to you as an
              individual (also referred to as a “user” or “you”). Peerwallet.com
              and its related Services are owned and operated by Peerwallet.
              Your use of the Services will be governed by this Agreement, along
              with our Privacy Policy and Cookie Policy
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: deviceType === "mobile" ? 600 : 600,
              }}
              fontSize={"14px"}
              color={"#009FDD"}
              py={2}
            >
              THESE TERMS REQUIRE THAT DISPUTES BE RESOLVED BY ARBITRATION AND
              NOT BY JURY TRIAL OR CLASS ACTION.
            </Typography>
            <Typography variant="body2" fontWeight={400} fontSize={"16px"}>
              By signing up to use an account through Peerwallet.com, or any
              associated websites, APIs, or mobile applications, including any
              URLs operated by Peerwallet (collectively the “Peerwallet Website”
              or the “Website”), you agree that you have carefully and
              thoroughly read, understand, and accept all of the terms and
              conditions contained in this Agreement including our Privacy
              Policy and Cookie Policy
            </Typography>
            <Typography
              variant="body2"
              fontWeight={700}
              fontSize={"14px"}
              color={"#009FDD"}
              py={2}
            >
              THE VALUE OF FINANCIAL/DIGITAL ASSETS CAN GO UP OR DOWN, AND THE
              RISK OF LOSING MONEY WHEN BUYING, SELLING, HOLDING, OR INVESTING
              IN DIGITAL ASSETS CAN BE SIGNIFICANT. In light of your financial
              situation, YOU SHOULD CAREFULLY CONSIDER IF TRADING OR HOLDING
              DIGITAL ASSETS IS SUITABLE FOR YOU.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
