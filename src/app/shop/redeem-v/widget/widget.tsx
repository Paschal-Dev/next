import React, { useState } from "react";
import { Box } from "@mui/material";
import Form from "./form";
import Confirm from "./confirm";
import Completed from "./completed";
import { MediaProps } from "../../../utils/utils";

export default function Widget({ deviceType }: MediaProps): React.JSX.Element {
  const [step, setStep] = useState(1);

  const handleFormSubmit = () => {
    setStep(2);
  };

  const handleConfirm = () => {
    setStep(3);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleCompleted = () => {
    setStep(1);
  };

  return (
    <Box
      width={
        deviceType === "mobile" || deviceType === "tablet" ? "100%" : "95%"
      }
      m={"auto"}
      bgcolor={"#fcfdfd"}
    >
      <Box
        px={deviceType === "mobile" ? 2 : 4}
        py={deviceType === "mobile" ? 4 : 6}
        borderRadius={5}
        boxShadow={"1px 1px 10px rgba(229, 245, 253, 1)"}
        border={"1px solid #009FDD"}
        sx={{
          background:
            deviceType === "mobile"
              ? "#fff"
              : `
        radial-gradient(circle at top left, rgba(203, 236, 248, 0.3), rgba(203, 236, 248, 0) 40%),
        radial-gradient(circle at top right, rgba(203, 236, 248, 0.3), rgba(203, 236, 248, 0) 60%),
        radial-gradient(circle at bottom right, rgba(203, 236, 248, 0.8), rgba(203, 236, 248, 0) 60%)
      `,
          backgroundSize: "50% 50%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top left, top right, bottom right",
        }}
      >
        {step === 1 && <Form onSubmit={handleFormSubmit} />}
        {step === 2 && (
          <Confirm onConfirm={handleConfirm} onBack={handleBack} />
        )}
        {step === 3 && <Completed onCompleted={handleCompleted} />}
      </Box>
    </Box>
  );
}
