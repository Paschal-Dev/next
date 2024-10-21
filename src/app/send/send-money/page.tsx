/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { theme } from "../../../assets/themes/theme";
import SendWidget from "./widget/widget";
import line from "../../../assets/images/send/send-line.png";
import sendBg from "../../../assets/images/send/send-bg.png";
import sendtopBg from "../../../assets/images/send/send-top-bg.png";
import sendImage from "../../../assets/images/send/send-image.png";
import { MediaProps } from "../../../utils/utils";
import Image from "next/image";

export default function SendMoney({
  deviceType,
}: MediaProps): React.JSX.Element {
  return (
    <Box mb={10}>
      <Box
        pt={deviceType === "mobile" || deviceType === "tablet" ? 8 : 4}
        pb={3}
        sx={{ backgroundImage: `url(${sendtopBg.src})` }}
        textAlign={"center"}
      >
        <Typography variant="h3" fontSize={40} fontWeight={800} color={"#fff"}>
          <span style={{ color: theme.palette.primary.main }}>Send</span> Money
        </Typography>
        <Image
          src={line.src}
          width={100}
          height={100}
          style={{ width: "auto", height: "auto" }}
          alt=""
        />
      </Box>
      <Box height={16} bgcolor={theme.palette.primary.main} width={"100%"} />
      <Box sx={{ backgroundImage: "url(" + sendBg + ")" }}>
        <Grid container columnSpacing={5}>
          {deviceType !== "mobile" && (
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
              bgcolor={"#e5f5fb"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box
                width={"80%"}
                m={"auto"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-between"}
                alignItems={"center"}
                textAlign={"center"}
                gap={4}
              >
                <Image
                  src={sendImage}
                  alt=""
                  width={100}
                  height={100}
                  style={{ width: "90%", height: "auto" }}
                />
                <Box>
                  <Typography
                    variant="h3"
                    fontSize={deviceType === "mobile" ? 28 : 32}
                    fontWeight={900}
                  >
                    <span style={{ color: theme.palette.primary.main }}>
                      Send Money
                    </span>{" "}
                    Via Peerwallet's P2P Remittance
                  </Typography>
                  <Image
                    src={line.src}
                    width={100}
                    height={100}
                    style={{ width: "auto", height: "auto" }}
                    alt=""
                  />
                </Box>
              </Box>
            </Grid>
          )}
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            py={5}
            display={"flex"}
            justifyContent={
              deviceType === "mobile" || deviceType === "tablet"
                ? "center"
                : "start"
            }
            alignItems={"center"}
          >
            <SendWidget deviceType={deviceType} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
