import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Icon } from "@iconify/react";
import { theme } from "../assets/themes/theme";
import { useMediaQuery } from "@mui/material";

interface ButtonProps {
  text: string;
}

export function ContainedBtn(props: ButtonProps): React.JSX.Element {
  const [deviceType, setDeviceType] = useState("mobile");

  const mobile = useMediaQuery(theme.breakpoints.only("xs"));
  const tablet = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (mobile) {
      setDeviceType("mobile");
    } else if (tablet) {
      setDeviceType("tablet");
    } else {
      setDeviceType("pc");
    }
  }, [mobile, tablet]);

  const { text } = props;
  return (
    <Button
      variant="contained"
      sx={{
        textTransform: "uppercase",
        fontWeight: 700,
        fontSize: deviceType === "mobile" ? 12 : 20,
        color: "#fff",
        height: 56,
        px: 4,
        border: `2px solid ${theme.palette.primary.main}`,
        borderRadius: 2,
        ":hover": {
          background: "none",
          border: `2px solid ${theme.palette.secondary.main}`,
          color: theme.palette.secondary.main,
        },
      }}
    >
      {text}
    </Button>
  );
}

export function OutlinedBtn(props: ButtonProps): React.JSX.Element {
  const [deviceType, setDeviceType] = useState("mobile");

  const mobile = useMediaQuery(theme.breakpoints.only("xs"));
  const tablet = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (mobile) {
      setDeviceType("mobile");
    } else if (tablet) {
      setDeviceType("tablet");
    } else {
      setDeviceType("pc");
    }
  }, [mobile, tablet]);
  const { text } = props;
  return (
    <Button
      variant="outlined"
      sx={{
        textTransform: "uppercase",
        fontWeight: 700,
        fontSize: deviceType === "mobile" ? 12 : 20,
        color: "#fff",
        height: 56,
        width: deviceType === "mobile" ? "100%" : "auto",
        px: 3,
        border: `2px solid ${theme.palette.primary.main}`,
        borderRadius: 2,
        ":hover": { border: `2px solid ${theme.palette.secondary.main}` },
      }}
    >
      {text}
    </Button>
  );
}

export function VideoBtn(props: ButtonProps): React.JSX.Element {
  const [deviceType, setDeviceType] = useState("mobile");

  const mobile = useMediaQuery(theme.breakpoints.only("xs"));
  const tablet = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (mobile) {
      setDeviceType("mobile");
    } else if (tablet) {
      setDeviceType("tablet");
    } else {
      setDeviceType("pc");
    }
  }, [mobile, tablet]);
  const { text } = props;
  return (
    <Button
      variant="outlined"
      sx={{
        textTransform: "uppercase",
        fontWeight: 700,
        fontSize: deviceType === "mobile" ? 12 : 20,
        color: "#fff",
        height: 56,
        px: 3,
        border: `2px solid ${theme.palette.primary.main}`,
        borderRadius: 2,
        ":hover": {
          border: `2px solid ${theme.palette.secondary.main}`,
          color: theme.palette.secondary.main,
        },
      }}
    >
      <Icon
        icon="material-symbols:play-circle-outline"
        fontSize={deviceType === "mobile" ? 20 : 32}
        style={{ marginRight: 5 }}
      />
      {text}
    </Button>
  );
}

export function SearchBtn(props: ButtonProps): React.JSX.Element {
  const [deviceType, setDeviceType] = useState("mobile");

  const mobile = useMediaQuery(theme.breakpoints.only("xs"));
  const tablet = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (mobile) {
      setDeviceType("mobile");
    } else if (tablet) {
      setDeviceType("tablet");
    } else {
      setDeviceType("pc");
    }
  }, [mobile, tablet]);

  const { text } = props;
  return (
    <Button
      variant="contained"
      sx={{
        textTransform: "capitalize",
        fontWeight: 500,
        fontSize: deviceType === "mobile" ? 14 : 20,
        width: "auto",
        color: "#fff",
        px: deviceType === "mobile" ? 4 : 2,
        border: `2px solid ${theme.palette.primary.main}`,
        borderRadius: 10,
        ":hover": {
          background: "none",
          border: `2px solid ${theme.palette.primary.main}`,
        },
      }}
    >
      <Icon
        icon="material-symbols:search"
        fontSize={24}
        style={{ marginRight: 5 }}
      />
      {text}
    </Button>
  );
}
