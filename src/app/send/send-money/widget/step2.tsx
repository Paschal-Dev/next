import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { SendButton } from "../../send-page/components/buttons";
import { theme } from "../../../../assets/themes/theme";
import { Icon } from "@iconify/react";
import SendForm from "../components/send-form";
import { MediaProps } from "../../../../utils/utils";

interface ClickProps extends MediaProps {
  onNext: () => void;
  onPrevious: () => void;
}

export default function Step2({
  onNext,
  onPrevious,
  deviceType,
}: ClickProps): React.JSX.Element {
  const totalSteps = 4;
  const currentStep = 2;
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      flexDirection={"column"}
      gap={2}
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
              onClick={onPrevious}
              sx={{ marginRight: 1, padding: 0 }}
            >
              <Icon icon="tabler:arrow-left" color="#000" />
            </IconButton>
            <Icon
              icon="mdi:user"
              color="#fff"
              style={{
                padding: 5,
                background: theme.palette.primary.main,
                borderRadius: "50%",
              }}
            />
            <Typography variant={deviceType === "mobile" ? "body1" : "h5"} fontWeight={700} marginLeft={1}>
              Recipient{" "}
              <span style={{ color: theme.palette.primary.main }}>Details</span>
            </Typography>
          </Box>
          <Typography variant={deviceType === "mobile" ? "caption" : "body2"} fontWeight={700}>
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
        <Box
          bgcolor={theme.palette.secondary.main}
          borderRadius={1.5}
          mt={2}
          mb={1}
          py={1}
          px={4}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="body2" fontWeight={700}>
              Select Beneficiary
            </Typography>
            <Icon icon="tabler:arrow-right" fontSize={20} />
          </Box>
        </Box>
      </Box>

      <SendForm />

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
