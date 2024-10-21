"use client";

import React from "react";
import { Typography, List, Grid, ListItemButton, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { Category, Post } from "../data";
import { Icon } from "@iconify/react";
import { theme } from "../../../assets/themes/theme";
import { MediaProps } from "../../../utils/utils";

interface CategoryListProps extends MediaProps {
  categories: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  deviceType,
}) => {
  const router = useRouter();

  const handleSelectPost = (post: Post) => {
    router.push(`/doc/read?title=${post.slug}`); // Using query parameter for post slug
  };

  return (
    <>
      {categories.map((category) => (
        <Grid item xs={12} sm={12} md={6} lg={6} key={category.name}>
          <Box
            bgcolor={"#fff"}
            py={3}
            px={deviceType === "mobile" ? 2 : 5}
            borderRadius={4}
          >
            <Box display={"flex"} alignItems={"center"}>
              <Box
                bgcolor={category.iconBG}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                borderRadius={"50%"}
                height={40}
                width={40}
                mr={1}
              >
                <Icon
                  icon={category.icon}
                  fontSize={28}
                  color={category.iconColor}
                />
              </Box>
              <Typography variant="h5" fontWeight={800}>
                {category.name}
              </Typography>
            </Box>
            <hr />
            <List>
              {category.posts.map((post) => (
                <ListItemButton
                  key={post.id}
                  onClick={() => handleSelectPost(post)}
                >
                  <Icon
                    icon="bxs:file"
                    fontSize={44}
                    color={theme.palette.primary.main}
                    style={{ marginRight: 10 }}
                  />
                  <Typography variant="h6" fontWeight={400}>
                    {post.title}
                  </Typography>
                </ListItemButton>
              ))}
            </List>
          </Box>
        </Grid>
      ))}
    </>
  );
};

export default CategoryList;
