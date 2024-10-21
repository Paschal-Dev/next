import React from "react";
import { Box, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

interface WhyChooseProps {
  icon: string;
  title: string;
  body: string;
}

export default function SendWhyChooseItem(
  props: WhyChooseProps
): React.JSX.Element {
  return (
    <Box display={"flex"} alignItems={"start"} gap={1}>
      <Icon icon={props.icon} fontSize={16} style={{marginTop: 4}} />
      <Box>
        <Typography variant="body1" fontWeight={800}>
          {props.title}
        </Typography>
        <Typography variant="body2" fontWeight={400}>
          {props.body}
        </Typography>
      </Box>
    </Box>
  );
}
