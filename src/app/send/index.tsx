import React from "react";
import { Box } from "@mui/material";
import SendHeader from "./send-page/sections/header";
import SendSteps from "./send-page/sections/steps";
import WhyChoose from "./send-page/sections/why-choose";
import SendHowItWorks from "./send-page/sections/how-it-works";
import TransferSecurity from "./send-page/sections/transfer.security";
import { MediaProps } from "../../utils/utils";

export default function SendMainPage({
  deviceType,
}: MediaProps): React.JSX.Element {
  return (
    <Box mb={deviceType === "mobile" ? 8 : 15}>
      <SendHeader deviceType={deviceType} />
      <SendSteps deviceType={deviceType} />
      <WhyChoose deviceType={deviceType} />
      <SendHowItWorks deviceType={deviceType} />
      <TransferSecurity deviceType={deviceType} />
    </Box>
  );
}
