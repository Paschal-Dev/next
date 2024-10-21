import React from "react";
import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

export interface BlogPreviewProps {
  image: string | StaticImageData;
  blogTitle: string;
  desc: string;
}

export default function BlogPreview(
  props: BlogPreviewProps
): React.JSX.Element {
  const { image, blogTitle, desc } = props;
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"start"}>
      <Image src={image} alt="" style={{ width: "100%" }} />
      <Box px={2} display={"flex"} flexDirection={"column"} gap={1}>
        <Typography variant="h5" fontWeight={700}>
          {blogTitle}
        </Typography>
        <Typography variant="body2" fontSize={10}>
          {desc}
        </Typography>
      </Box>
    </Box>
  );
}
