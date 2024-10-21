import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../../assets/themes/theme";
import { SearchBtn } from "../../../components/buttons";
import bannerImage from "../../../assets/images/kb/kb-header-image.png";
import bannerBg from "../../../assets/images/kb/kb-head-bg.png";
import lines from "../../../assets/images/kb/kb-lines.png";
import PwatSpin from "../../../components/pwat-spin";
import { MediaProps } from "../../../utils/utils";
import Image from "next/image";

export default function KBHeader({
  deviceType,
}: MediaProps): React.JSX.Element {
  return (
    <Box
      color={"#ffffff"}
      pt={deviceType === "mobile" || deviceType === "tablet" ? 12 : 5}
      position="relative"
      sx={{
        backgroundImage: `url(${bannerBg.src})`,
        backgroundSize: "cover",
      }}
    >
      <Container
        disableGutters={
          deviceType === "mobile" || deviceType === "tablet" ? false : true
        }
      >
        <Grid container alignItems={"center"} mb={2}>
          <Grid item sm={12} md={6} lg={6} pb={1}>
            <Box
              width={"90%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
              alignItems={"start"}
              gap={2}
              position={"relative"}
              mt={deviceType === "mobile" || deviceType === "tablet" ? 0 : -14}
            >
              <Typography
                variant="h2"
                color={theme.palette.secondary.main}
                fontSize={52}
                fontWeight={800}
              >
                Peerwallet’s{" "}
                <span style={{ color: theme.palette.primary.main }}>
                  Knowledge Base
                </span>
              </Typography>
              <Typography variant="body1" fontSize={20} lineHeight={1.2}>
                We Have Written & Explained How To Use Peerwallet
              </Typography>
              <Box
                width={"100%"}
                display={"flex"}
                alignItems={"center"}
                gap={2}
              >
                <input
                  placeholder="Search the Knowledge Base"
                  style={{
                    width: deviceType === "mobile" ? "100%" : "45%",
                    padding: "10px 20px",
                    borderRadius: 20,
                    border: `1px solid ${theme.palette.primary.main}`,
                    outline: "none",
                  }}
                />
                <SearchBtn text="Search" />
              </Box>
              {deviceType !== "mobile" && deviceType !== "tablet" && (
                <Image
                  src={lines}
                  alt=""
                  style={{
                    width: "20%",
                    height: "auto",
                    position: "absolute",
                    right: 140,
                    bottom: -110,
                  }}
                />
              )}
            </Box>
          </Grid>
          {deviceType !== "mobile" && deviceType !== "tablet" && (
            <Grid item sm={12} md={6} lg={6} position={"relative"}>
              <Image
                src={bannerImage}
                alt="Banner-Image"
                style={{ marginBottom: -24, width: "100%", height: "auto" }}
              />
              <PwatSpin width={"20%"} top={"23%"} left={"13%"} />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
