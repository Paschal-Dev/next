import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import CategoryList from "./components/category";
import { knowledgeBase } from "./data";
import { MediaProps } from "../../utils/utils";

export default function DocCategories({
  deviceType,
}: MediaProps): React.JSX.Element {
  return (
    <Box
      bgcolor={"#e8e8e8"}
      color={"#000000"}
      px={deviceType === "mobile" || deviceType === "tablet" ? 0 : 5}
      py={5}
      mt={-2}
    >
      <Container
        disableGutters={
          deviceType === "mobile" || deviceType === "tablet" ? false : true
        }
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={5}
        >
          <Box
            textAlign={"center"}
            width={deviceType === "mobile" ? "90%" : "70%"}
          >
            <Typography
              variant="h2"
              fontSize={deviceType === "mobile" ? 34 : 44}
              fontWeight={900}
            >
              Knowledge Base
            </Typography>
            <hr style={{ width: "25%" }} />
            <Typography variant="body1" fontWeight={600}>
              Library of information about Peerwallet
            </Typography>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={4}
            borderRadius={10}
          >
            <Grid container spacing={5}>
              <CategoryList
                deviceType={deviceType}
                categories={knowledgeBase}
              />
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
