import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../../../assets/themes/theme";
import Step from "../components/step";
import { MediaProps } from "../../../../utils/utils";

export default function SendSteps({
  deviceType,
}: MediaProps): React.JSX.Element {
  return (
    <Box
      bgcolor={"#E8E8E8"}
      pt={deviceType === "mobile" || deviceType === "tablet" ? 5 : 8}
      pb={deviceType === "mobile" || deviceType === "tablet" ? 0 : 8}
    >
      <Container
        disableGutters={
          deviceType === "mobile" || deviceType === "tablet" ? false : true
        }
      >
        <Box
          bgcolor={"#fff"}
          p={deviceType === "mobile" ? 5 : deviceType === "tablet" ? 12 : 8}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={6}
          borderRadius={12}
          sx={{
            borderBottomRightRadius:
              deviceType === "mobile" || deviceType === "tablet" ? 0 : 48,
            borderBottomLeftRadius:
              deviceType === "mobile" || deviceType === "tablet" ? 0 : 48,
          }}
        >
          <Box textAlign={"center"}>
            <Typography
              variant="h3"
              fontSize={deviceType === "mobile" ? 36 : 48}
              fontWeight={900}
            >
              As Simple As{" "}
              <span style={{ color: theme.palette.primary.main }}>1-</span>
              <span style={{ color: "#0AA81A" }}>2</span>
              <span style={{ color: theme.palette.secondary.main }}>-3</span>
            </Typography>
            <hr style={{ width: "38%", marginBottom: 16 }} />
            <Typography
              variant={deviceType === "mobile" ? "body2" : "body1"}
              fontWeight={600}
            >
              It takes only few steps to get your money directly in your bank
              account!
            </Typography>
          </Box>

          <Box
            display={"flex"}
            flexDirection={
              deviceType === "mobile" || deviceType === "tablet"
                ? "column"
                : "row"
            }
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Step
              step="1"
              bgcolor={theme.palette.primary.main}
              gradientStop="#71CCEF"
              icon="majesticons:money-plus"
              title="Load Balance"
              body="Load your balance from the Marketplace or receive payments from another Peerwallet user."
            />
            <Box
              height={24}
              width={deviceType === "mobile" ? 100 : 260}
              bgcolor={theme.palette.primary.main}
              zIndex={
                deviceType === "mobile" || deviceType === "tablet" ? 0 : 2
              }
            />
            <Step
              step="2"
              bgcolor={"#0AA81A"}
              gradientStop="#63E770"
              icon="mdi:card-account-details"
              title="Enter Details"
              body="Enter how much you want to send, select your preferred merchant, and enter your bank details."
            />
            <Box
              height={24}
              width={deviceType === "mobile" ? 100 : 260}
              bgcolor={theme.palette.secondary.main}
              zIndex={
                deviceType === "mobile" || deviceType === "tablet" ? 0 : 2
              }
            />
            <Step
              step="3"
              bgcolor={theme.palette.secondary.main}
              gradientStop="#FCC82B"
              icon="ph:hand-withdraw-fill"
              title="Withdraw Funds"
              body="Confirm details, exchange rate, and fees; your funds would be on the way!"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
