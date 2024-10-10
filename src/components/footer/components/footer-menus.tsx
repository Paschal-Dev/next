import React from "react";
import { Box, Typography } from "@mui/material";
import { theme } from "../../../assets/themes/theme";
import Link from 'next/link';
import { MediaProps } from "@/utils/utils";

interface FooterMenuSetProps extends MediaProps {
  title: string;
  menus: Array<{ label: string; href: string }>;
}

export default function FooterMenuSet(
  props: FooterMenuSetProps
): React.JSX.Element {
  const { title, menus, deviceType } = props;

  return (
    <Box m={"auto"} >
      <Typography
        variant="body1"
        fontWeight={600}
        fontSize={18}
        color={theme.palette.primary.main}
      >
        {title}
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        gap={deviceType === "mobile" ? 1 : 2}
        mt={deviceType === "mobile" ? 2 : 3}
      >
        {menus.map((menu, index) => (
         <Link key={index} href={menu.href} style={{ textDecoration: "none" }}>
         <Typography
           variant="body1"
           fontWeight={400}
           color="#fff"
           sx={{ ":hover": { color: theme.palette.primary.main } }}
         >
           {menu.label}
         </Typography>
       </Link>
       
        ))}
      </Box>
    </Box>
  );
}
