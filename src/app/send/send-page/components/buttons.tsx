import { Button } from "@mui/material";
import React from "react";
import { MediaProps } from "../../../../utils/utils";

interface SendButtonProps {
  text: string;
  color: string;
  bgcolor: string;
  onclick?: () => void;
  shadowcolor?: string;
  hovercolor?: string;
}

export function SendButton(props: SendButtonProps): React.JSX.Element {
  const { text, color, bgcolor, onclick, shadowcolor } = props;
  return (
    <Button
      variant="contained"
      fullWidth
      sx={{
        color: color,
        background: bgcolor,
        borderRadius: 3,
        py: 1.5,
        fontWeight: 700,
        border: `1px solid ${bgcolor}`,
        boxShadow: `1px 1px 10px ${shadowcolor}`,
        ":hover": {
          background: "none",
          boxShadow: `1px 1px 10px ${shadowcolor}`,
          color: "#000",
        },
      }}
      onClick={onclick}
    >
      {text}
    </Button>
  );
}

interface PageButtonProps extends MediaProps {
  text: string;
  color: string;
  bgcolor: string;
  onclick?: () => void;
  shadowcolor?: string;
  hovercolor?: string;
}

export function PageButton(props: PageButtonProps): React.JSX.Element {
  const { text, color, hovercolor, bgcolor, onclick, deviceType } = props;
  return (
    <Button
      variant="contained"
      sx={{
        color: color,
        background: bgcolor,
        borderRadius: 3,
        py: 2,
        px: deviceType === "mobile" ? 4 : 5,
        fontWeight: 800,
        fontSize: deviceType === "mobile" ? 20 : 24,
        width: "auto",
        border: `1px solid ${bgcolor}`,
        boxShadow: "none",
        ":hover": {
          background: "none",
          color: hovercolor,
        },
      }}
      onClick={onclick}
    >
      {text}
    </Button>
  );
}
