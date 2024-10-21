"use client";
import React, { useState } from "react";
import { Drawer, IconButton, useMediaQuery, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import MainSideBarContent from "../mainsidebarcontent";

const drawerWidth = "100%";

export default function MainSideBar():React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:960px)");

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isMobile ? (
        <Box
          sx={{
            position: "fixed",
            top: isOpen ? 6 : 38,
            left: isOpen ? 32 : 26,
            zIndex: 1300,
          }}
        >
          <IconButton
            color="primary"
            aria-label="toggle drawer"
            edge="start"
            onClick={toggleDrawer}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Drawer
            variant="temporary"
            open={isOpen}
            onClose={toggleDrawer}
            sx={{
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: "border-box",
                overflowY: "scroll",
                scrollbarWidth: "auto", // Ensures scrollbar is visible by default
                scrollbarColor: "#009FDD #b7e2f3ec",
              },
            }}
          >
            <MainSideBarContent />
          </Drawer>
        </Box>
      ) : (
        <Drawer
          variant="permanent"
          sx={{
            mb: -5,
            pb: 10,
            height: "calc(100vh)",
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              position: "relative",
              height: "100%",
              zIndex: 0,
              overflowY: "scroll", 
              scrollbarWidth: "auto", // Ensures scrollbar is visible by default
              scrollbarColor: "#009FDD #b7e2f3ec",
            },
          }}
        >
          <MainSideBarContent />
        </Drawer>
      )}
    </>
  );
};

