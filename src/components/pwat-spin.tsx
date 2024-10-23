import React from "react";
import { Box } from "@mui/material";
import coinFrame from "../assets/images/pwat-coin-frame.png";
import coin from "../assets/images/pwat-coin.png";
import Image from "next/image";
interface PwatSpinProps {
  width: string | number;
  top?: string | number;
  bottom?: string | number;
  left?: string | number;
  right?: string | number;
}

export default function PwatSpin(props: PwatSpinProps): React.JSX.Element {
  const { width, top, bottom, left, right } = props;

  return (
    <Box
      position={"absolute"}
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      width={width}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      zIndex={1}
    >
      <Image
        src={coinFrame}
        alt=""
        style={{
          animation: "spin 15s linear infinite",
          width: "100%",
          height: "auto",
        }}
      />
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
      <Image
        src={coin}
        alt=""
        style={{ position: "absolute", width: "100%", height: "auto" }}
      />
    </Box>
  );
}
