import React, { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { SendButton } from "../../send-page/components/buttons";
import { theme } from "../../../../assets/themes/theme";
import { Icon } from "@iconify/react";
import { MediaProps } from "../../../../utils/utils";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Step4({ deviceType }: MediaProps): React.JSX.Element {
  const totalSteps = 4;
  const currentStep = 4;
  const router = useRouter();
  const [showSecondComponent, setShowSecondComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondComponent(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!showSecondComponent ? (
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          gap={3}
          width={"100%"}
        >
          <Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Box display={"flex"} alignItems={"center"} pb={1}>
                <Icon
                  icon="eos-icons:bubble-loading"
                  color="#fff"
                  style={{
                    padding: 5,
                    background: theme.palette.primary.main,
                    borderRadius: "50%",
                  }}
                />
                <Typography
                  variant={deviceType === "mobile" ? "body1" : "h5"}
                  fontWeight={700}
                  marginLeft={1}
                >
                  Transaction{" "}
                  <span style={{ color: theme.palette.primary.main }}>
                    Processing
                  </span>
                </Typography>
              </Box>
              <Typography
                variant={deviceType === "mobile" ? "caption" : "body2"}
                fontWeight={700}
              >
                {currentStep} of {totalSteps}
              </Typography>
            </Box>
            <Box position="relative" height={2}>
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                borderTop={"3px solid #e0f3fa"}
              />
              <Box
                position="absolute"
                top={0}
                left={0}
                borderTop={`3px solid ${theme.palette.primary.main}`}
                width={`${(currentStep / totalSteps) * 100}%`}
                bgcolor={theme.palette.primary.main}
              />
            </Box>
          </Box>

          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={1}
            alignItems={"center"}
          >
            <Box
              bgcolor={"#FEEFC6"}
              height={deviceType === "mobile" ? 60 : 100}
              width={deviceType === "mobile" ? 60 : 100}
              m={"auto"}
              border={
                deviceType === "mobile"
                  ? "10px solid #FFFAEB"
                  : "20px solid #FFFAEB"
              }
              borderRadius={"50%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              textAlign={"center"}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Icon
                  icon="eos-icons:loading"
                  fontSize={49}
                  color={theme.palette.secondary.main}
                />
              </Box>
            </Box>
            <Typography
              variant="body1"
              fontSize={24}
              fontWeight={900}
              textAlign={deviceType === "mobile" ? "center" : "left"}
            >
              Transaction{" "}
              <span style={{ color: theme.palette.secondary.main }}>
                Processing...
              </span>
            </Typography>
            <Typography
              variant="body1"
              textAlign={deviceType === "mobile" ? "center" : "left"}
            >
              The sum of <span style={{ fontWeight: 800 }}>$1,000 </span>
              has been successfully paid
            </Typography>
            <Box
              bgcolor={theme.palette.secondary.main}
              borderRadius={3}
              py={1.5}
              px={deviceType === "mobile" ? 3 : 6}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              width={"90%"}
              sx={{ boxSizing: "border-box" }}
            >
              <Typography
                variant={deviceType === "mobile" ? "body2" : "body1"}
                fontWeight={600}
              >
                Recipient To Receive
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: deviceType === "mobile" ? 20 : 24,
                  fontWeight: 800,
                }}
              >
                €913.149
              </Typography>
            </Box>

            <Box
              bgcolor={"#e0f3fa"}
              borderRadius={3}
              py={1.5}
              px={4}
              mt={3}
              mb={2}
              display={"flex"}
              flexDirection={"column"}
              gap={2}
            >
              <Typography variant="body2" fontSize={12}>
                <span style={{ fontWeight: 900 }}>SDS Resources</span> is
                currently processing payment, it will take approximately 90
                minutes for this order to be processed by{" "}
                <span style={{ fontWeight: 900 }}>SDS Resources.</span>
              </Typography>
              <Typography variant="body2" fontSize={12}>
                If there is any issue with this payment,
                <span style={{ fontWeight: 900 }}> SDS Resources </span>will
                paste a comment <Link href="">Here</Link>. If for any reason
                payment could not be completed, it shall be returned to your
                Peerwallet balance.
              </Typography>
            </Box>
          </Box>

          <Box display={"flex"} flexDirection={"column"} gap={2}>
            <Grid container columnSpacing={2}>
              <Grid item xs={4} md={4}>
                <SendButton
                  text={"Go to Chat"}
                  color="#fff"
                  bgcolor={"#000"}
                  shadowcolor="#d8f0fa"
                  // onclick={() => navigate("/send/send-money")}
                />
              </Grid>
              <Grid item xs={8} md={8}>
                <SendButton
                  text={"Contact Support"}
                  color="#fff"
                  bgcolor={theme.palette.primary.main}
                  shadowcolor="#d8f0fa"
                  // onclick={() => navigate("/send/send-money")}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      ) : (
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          gap={3}
          width={"100%"}
        >
          <Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Box display={"flex"} alignItems={"center"} pb={1}>
                <Icon
                  icon="mdi:check-bold"
                  color="#fff"
                  style={{
                    padding: 5,
                    background: theme.palette.primary.main,
                    borderRadius: "50%",
                  }}
                />
                <Typography
                  variant={deviceType === "mobile" ? "body1" : "h5"}
                  fontWeight={700}
                  marginLeft={1}
                >
                  Transaction{" "}
                  <span style={{ color: theme.palette.primary.main }}>
                    Successful
                  </span>
                </Typography>
              </Box>
              <Typography
                variant={deviceType === "mobile" ? "caption" : "body2"}
                fontWeight={700}
              >
                4 of 4
              </Typography>
            </Box>
            <Box borderBottom={`1px solid ${theme.palette.primary.main}`} />
          </Box>

          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={1}
            alignItems={"center"}
          >
            <Box
              bgcolor={"#D1FADF"}
              height={deviceType === "mobile" ? 60 : 100}
              width={deviceType === "mobile" ? 60 : 100}
              m={"auto"}
              border={
                deviceType === "mobile"
                  ? "10px solid #ECFDF3"
                  : "20px solid #ECFDF3"
              }
              borderRadius={"50%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              textAlign={"center"}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                height={deviceType === "mobile" ? 40 : 60}
                width={deviceType === "mobile" ? 40 : 60}
                bgcolor={"#12B76A"}
                border={"2px solid #34C77D"}
                borderRadius={"50%"}
              >
                <Icon icon="ph:check-bold" fontSize={40} color={"#fff"} />
              </Box>
            </Box>
            <Typography
              variant="body1"
              fontSize={24}
              fontWeight={900}
              textAlign={deviceType === "mobile" ? "center" : "left"}
            >
              Transaction <span style={{ color: "#12B76A" }}>Successful</span>
            </Typography>
            <Typography
              variant="body1"
              textAlign={deviceType === "mobile" ? "center" : "left"}
            >
              The sum of <span style={{ fontWeight: 800 }}>$1,000 </span> has
              been successfully paid
            </Typography>
            <Box
              bgcolor={"#12B76A"}
              color={"#fff"}
              borderRadius={3}
              py={1.5}
              px={deviceType === "mobile" ? 3 : 6}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              width={"90%"}
              sx={{ boxSizing: "border-box" }}
            >
              <Typography
                variant={deviceType === "mobile" ? "body2" : "body1"}
                fontWeight={600}
              >
                Recipient To Receive
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: deviceType === "mobile" ? 20 : 24,
                  fontWeight: 800,
                }}
              >
                €913.149
              </Typography>
            </Box>

            <Box
              bgcolor={"#e0f3fa"}
              borderRadius={3}
              py={1.5}
              px={4}
              mt={3}
              mb={2}
              display={"flex"}
              flexDirection={"column"}
              gap={2}
            >
              <Typography variant="body2" fontSize={12}>
                <span style={{ fontWeight: 900 }}>SDS Resources</span> has
                processed your payment, your recipient should receive their
                money soon.
              </Typography>
              <Typography variant="body2" fontSize={12}>
                If there is any issue with this payment,
                <span style={{ fontWeight: 900 }}> SDS Resources </span>will
                paste a comment <Link href="">Here</Link>. If for any reason
                payment is not recieved after 3 business days, contact us{" "}
                <Link href="">Here</Link>.
              </Typography>
            </Box>
          </Box>

          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={2}
            width={"60%"}
            m={"auto"}
          >
            <SendButton
              text={"Done"}
              color="#fff"
              bgcolor={theme.palette.primary.main}
              shadowcolor="#d8f0fa"
              onclick={() => router.push("/send")}
            />
          </Box>
        </Box>
      )}
    </>
  );
}
