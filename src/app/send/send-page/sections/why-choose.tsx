/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { theme } from "../../../../assets/themes/theme";
import whyChoose from "../../../../assets/images/send/why-choose.png";
import SendWhyChooseItem from "../components/why-choose-item";
import { PageButton } from "../components/buttons";
import { MediaProps } from "../../../../utils/utils";
import Image from "next/image";

export default function WhyChoose({
  deviceType,
}: MediaProps): React.JSX.Element {
  return (
    <Box bgcolor={"#000"} py={8} color={"#fff"}>
      <Container
        disableGutters={
          deviceType === "mobile" || deviceType === "tablet" ? false : true
        }
      >
        <Grid container alignItems={"end"} spacing={4}>
          {deviceType === "mobile" && (
            <Grid item xs={12} md={6} lg={6}>
              <Image
                src={whyChoose}
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
            </Grid>
          )}
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            display={"flex"}
            flexDirection={"column"}
            alignItems={deviceType === "mobile" ? "center" : "start"}
          >
            <Box display={"flex"} flexDirection={"column"} gap={3} mb={4}>
              <Typography
                variant="h2"
                fontSize={deviceType === "mobile" ? 40 : 64}
                fontWeight={900}
              >
                <span style={{ color: theme.palette.primary.main }}>Why</span>{" "}
                Choose Us?
              </Typography>
              <Typography
                variant="body2"
                fontWeight={500}
                textAlign={deviceType === "mobile" ? "center" : "left"}
              >
                Here are top 4 reasons why you should send money using
                Peerwallet's P2P Remittance Marketplace.
              </Typography>
              <Box
                bgcolor={"#282828"}
                borderRadius={6}
                pl={3}
                pr={8}
                py={4}
                display={"flex"}
                flexDirection={"column"}
                gap={3}
              >
                <SendWhyChooseItem
                  icon="mdi:gesture-touch"
                  title="Easy to use"
                  body="User friendly interface making navigation easy and straightforward"
                />
                <SendWhyChooseItem
                  icon="ph:seal-percent-fill"
                  title="Lower Fees"
                  body="You have options to choose from merchants with the lowest fees"
                />
                <SendWhyChooseItem
                  icon="subway:round-arrow-4"
                  title="Escrow"
                  body="All Bank payments on Peerwallet are fully Escrowed!"
                />
                <SendWhyChooseItem
                  icon="material-symbols:lock"
                  title="100% secure"
                  body="We have put in place several measures to ensure that our customers' funds are secure"
                />
              </Box>
            </Box>
            <PageButton
              bgcolor={theme.palette.primary.main}
              text="Get Started"
              color="#fff"
              deviceType={deviceType}
            />
          </Grid>
          {deviceType !== "mobile" && deviceType !== "tablet" && (
            <Grid item xs={12} md={6} lg={6}>
              <Image
                src={whyChoose}
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
