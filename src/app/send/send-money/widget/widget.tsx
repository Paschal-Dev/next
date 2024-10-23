"use client";

import React, { useState } from "react";
import { Box } from "@mui/material";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import { MediaProps } from "../../../../utils/utils";

export default function SendWidget({
  deviceType,
}: MediaProps): React.JSX.Element {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <Box
      width={"95%"}
      display={"flex"}
      height={deviceType === "mobile" || deviceType === "tablet" ? "auto" : 780}
      bgcolor={"#fcfdfd"}
    >
      <Box
        px={deviceType === "mobile" ? 2 : 4}
        py={deviceType === "mobile" ? 3 : 6}
        borderRadius={5}
        flex={1}
        boxShadow={"1px 1px 10px rgba(229, 245, 253, 1)"}
        border={"2px solid #009FDD"}
      >
        {currentStep === 1 && (
          <Step1 onNext={handleNextStep} deviceType={deviceType} />
        )}
        {currentStep === 2 && (
          <Step2
            onNext={handleNextStep}
            onPrevious={handlePreviousStep}
            deviceType={deviceType}
          />
        )}
        {currentStep === 3 && (
          <Step3
            onNext={handleNextStep}
            onPrevious={handlePreviousStep}
            deviceType={deviceType}
          />
        )}
        {currentStep === 4 && <Step4 deviceType={deviceType} />}
      </Box>
    </Box>
  );
}
