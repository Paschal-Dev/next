import { Box, Typography } from "@mui/material";
import React from "react";
import { Icon } from "@iconify/react";
import { MediaProps } from "../../../utils/utils";
import Image from "next/image";

type IconType = "svg" | "icon";
interface VcComponentProps extends MediaProps {
  iconType: IconType;
  icon?: string;
  img?: string;
  iconBg: string;
  iconColor?: string;
  head: string;
  body: string;
}

export function VcComponent(props: VcComponentProps): React.JSX.Element {
  const { iconType, icon, img, iconBg, iconColor, head, body, deviceType } = props;
  return (
    <Box>
      <Box display={"flex"} alignItems={"center"} gap={1} mb={1}>
        <Box
          bgcolor={iconBg}
          height={deviceType === "mobile" ? 40 : 50}
          width={deviceType === "mobile" ? 40 : 50}
          borderRadius={"50%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {iconType === "svg" && img && (
            <Image src={img} alt="" style={{ marginTop: "10px" }} />
          )}
          {iconType === "icon" && icon && iconColor && (
            <Icon icon={icon} fontSize={deviceType === "mobile" ? 28 :36} color={iconColor} />
          )}
        </Box>
        <Typography variant={deviceType === "mobile" ? "h6" : "h5"} fontWeight={800}>
          {head}
        </Typography>
      </Box>
      <Typography variant={deviceType === "mobile" ? "body2" : "body1"} fontWeight={500}>
        {body}
      </Typography>
    </Box>
  );
}
