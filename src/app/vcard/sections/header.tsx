import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../../assets/themes/theme";
import { ContainedBtn, VideoBtn } from "../../../components/buttons";
import bannerImage from "../../../assets/images/virtual-cards/vc-head-banner.png";
import infoGraphic from "../../../assets/images/virtual-cards/vc-infographic.png";
import { MediaProps } from "../../../utils/utils";
import Image from "next/image";

export default function VCHeader({
  deviceType,
}: MediaProps): React.JSX.Element {
  return (
    <Box
      bgcolor={"#000000"}
      color={"#ffffff"}
      pt={deviceType === "mobile" || deviceType === "tablet" ? 12 : 5}
      pb={deviceType === "mobile" ? 5 : 25}
    >
      <Container
        disableGutters={
          deviceType === "mobile" || deviceType === "tablet" ? false : true
        }
        sx={{ position: "relative" }}
      >
        <Grid container alignItems={"center"} mb={2}>
          <Grid item sm={12} md={6} lg={8}>
            <Box
              width={deviceType === "mobile" ? "100%" : "90%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
              alignItems={"start"}
              gap={2}
            >
              <Typography
                variant="h2"
                fontSize={
                  deviceType === "mobile"
                    ? "2.2em"
                    : deviceType === "tablet"
                    ? 48
                    : 52
                }
                fontWeight={800}
                textAlign={deviceType === "mobile" ? "center" : "left"}
              >
                Get The Best{" "}
                <span style={{ color: theme.palette.primary.main }}>
                  Virtual Card Deals On Peerwallet
                </span>
              </Typography>
              <Typography
                variant="body1"
                fontSize={deviceType === "mobile" ? 18 : 24}
                lineHeight={1.2}
              >
                Peerwallet is a P2P Finance Market place that has multiple
                virtual card offers from several approved vendors. Create & Load
                virtual cards automatically using your wallet balance and also
                via the API!
              </Typography>
              <Box
                m={
                  deviceType === "mobile" || deviceType === "tablet"
                    ? "auto"
                    : ""
                }
                my={deviceType === "mobile" ? 2 : 4}
                display={"flex"}
                alignItems={"center"}
                justifyContent={deviceType === "mobile" ? "center" : ""}
                gap={deviceType === "mobile" ? 2 : 3}
              >
                <VideoBtn text="Play Video" />
                <ContainedBtn text="Get Started" />
              </Box>
            </Box>
          </Grid>
          {deviceType !== "mobile" && (
            <Grid item xs={12} md={6} lg={4}>
              <Image src={bannerImage} alt="Banner-Image" style={{width: '100%'}} />
            </Grid>
          )}
        </Grid>
        <Box
          mt={5}
          bgcolor={"#fff"}
          py={1}
          borderRadius={10}
          pl={deviceType === "mobile" ? 2 : 3}
          position={deviceType === "mobile" ? "unset" : "absolute"}
        >
          <Image src={infoGraphic} alt="features-info-graphic" style={{width: '100%'}} />
        </Box>
      </Container>
    </Box>
  );
}
