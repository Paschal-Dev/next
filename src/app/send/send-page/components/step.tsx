import React from "react";
import { Box, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

interface StepProps {
  step: string;
  bgcolor: string;
  gradientStop: string;
  icon: string;
  title: string;
  body: string;
}

export default function Step(props: StepProps): React.JSX.Element {
  const { step, bgcolor, gradientStop, icon, title, body } = props;
  return (
    <Box
      px={3}
      py={6}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      position={"relative"}
      border={"2px solid #fff"}
      borderRadius={8}
      textAlign={"center"}
      gap={3}
      color={"#fff"}
      boxShadow={"4px 8px 15px 2px #90909033"}
      sx={{
        width: "100%",
        height: "200px",
        background: `linear-gradient(to top, ${bgcolor}, ${gradientStop})`,
      }}
    >
      <Box
        color={"#fff"}
        height={30}
        width={30}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        border={"2px solid #fff"}
        borderRadius={"50%"}
        position={"absolute"}
        top={"-5%"}
        right={"auto"}
        boxShadow={"4px 8px 15px 2px #90909033"}
        sx={{
          background: `linear-gradient(to top, ${bgcolor}, ${gradientStop})`,
        }}
      >
        <Typography variant="body2" fontSize={12} fontWeight={800}>
          {step}
        </Typography>
      </Box>
      <Box
        bgcolor={"#fff"}
        p={4}
        borderRadius={"50%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        boxShadow={"0px 0px 7px 3px #0000001a"}
      >
        <Icon icon={icon} color={bgcolor} fontSize={48} />
      </Box>
      <Box>
        <Typography variant="h5" fontWeight={800} mb={0.5}>
          {title}
        </Typography>
        <Typography variant="body2" fontSize={12} fontWeight={700}>
          {body}
        </Typography>
      </Box>
    </Box>
  );
}
