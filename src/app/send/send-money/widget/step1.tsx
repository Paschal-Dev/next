import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import Converter from "../components/converter";
import { SendButton } from "../../send-page/components/buttons";
import { theme } from "../../../../assets/themes/theme";
import { Icon } from "@iconify/react";
import Merchants from "../components/merchants";
import { MediaProps } from "../../../../utils/utils";
import { useRouter } from "next/navigation";

interface ClickProps extends MediaProps {
  onNext: () => void;
}

export default function Step1({
  onNext,
  deviceType,
}: ClickProps): React.JSX.Element {
  const router = useRouter();
  const totalSteps = 4;
  const currentStep = 1;

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      flexDirection={"column"}
      gap={4}
      height={"100%"}
    >
      <Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box display={"flex"} alignItems={"center"} pb={1}>
            <IconButton
              onClick={() => router.push("/send")}
              sx={{ marginRight: 1, padding: 0 }}
            >
              <Icon icon="mdi:arrow-back" color="#000" />
            </IconButton>
            <Icon
              icon="mdi:bank"
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
              Send{" "}
              <span style={{ color: theme.palette.primary.main }}>Money</span>
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
      <Box>
        <Converter deviceType={deviceType} />
      </Box>
      <Box>
        <Merchants deviceType={deviceType} />
        <Box
          bgcolor={theme.palette.secondary.main}
          borderRadius={3}
          mt={2}
          py={1}
          px={4}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography
              variant={deviceType === "mobile" ? "body2" : "body1"}
              fontWeight={600}
            >
              Recipient Recieves
            </Typography>
            <Typography
              variant="body1"
              fontSize={deviceType === "mobile" ? 20 : 24}
              fontWeight={800}
            >
              €913.149
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box display={"flex"} flexDirection={"column"} gap={2}>
        <SendButton
          text={"Continue"}
          color="#fff"
          bgcolor={theme.palette.primary.main}
          shadowcolor="#d8f0fa"
          onclick={onNext}
        />
      </Box>
    </Box>
  );
}
