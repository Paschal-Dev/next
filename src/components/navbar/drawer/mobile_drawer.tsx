/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-nested-ternary */
import React from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Box, Button, ListItemButton, Drawer as MUIDrawer, Toolbar, useTheme } from "@mui/material";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import pwat from "../../../assets/images/peerwallet-logo.png";


const MobileDrawer = ({ setMobileOpen, mobileOpen }: { setMobileOpen: any; mobileOpen: any }) => {
  const drawerItems = [
    { text: "How it Works", hasChildren: false, to: "/how-it-works" },
    { text: "FAQ", hasChildren: false, to: "/faq" },
    { text: "Virtual Cards", to: "/vcard", hasChildren: false },
    { text: "Sellers", to: "/sell", hasChildren: false },
    { text: "PWAT", to: "/pwat", hasChildren: false },
    { text: "Knowledge Base", to: "/doc", hasChildren: false },
  ];

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [openAbout, setOpenAbout] = React.useState(false);
  const [openResources, setOpenResources] = React.useState(false);
  const theme = useTheme();
  const router = useRouter();

  const handleClick1 = () => setOpenAbout(!openAbout);
  const handleClick2 = () => setOpenResources(!openResources);

  const handleListItemClick = (to: string, index: number) => {
    router.push(to);
    setSelectedIndex(index);
    setMobileOpen(!mobileOpen);
  };

  const myDrawer = (
    <div
      style={{
        height: "100%",
        width: 225,
        display: "flex",
        flexDirection: "column",
        color: "white",
        backgroundColor: "black",
      }}
    >
      <Toolbar />
      <Divider />
      <br />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Image handled from public folder */}
        <Box pb={1}>
          <Link href="/" passHref>
            <Image src={pwat} alt="PeerWallet"/>
          </Link>
        </Box>

        <List component="nav" aria-labelledby="nested-list-subheader">
          {drawerItems.map((item, index) => {
            const { text, to } = item;
            return text === "What to Invest" || text === "Company" ? (
              <div key={index}>
                <ListItemButton
                  style={{ borderRadius: 6 }}
                  selected={selectedIndex === index}
                  onClick={text === "What to Invest" ? handleClick1 : handleClick2}
                  sx={{ cursor: 'pointer' }}  // Ensure the cursor changes to a pointer to indicate it's clickable
                >
                  <ListItemText primary={text} />
                  {(text === "What to Invest" ? openAbout : openResources) ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )}
                </ListItemButton>

              </div>
            ) : (
              <ListItemButton
                style={{ borderRadius: 6 }}
                key={index}
                selected={selectedIndex === index}
                onClick={() => handleListItemClick(to, index)}
              >
                <ListItemText primary={text} />
              </ListItemButton>
            );
          })}
        </List>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "stretch",
          height: "50%",
          width: "75%",
        }}
      >
        <Button
          variant="outlined"
          sx={{
            backgroundColor: "transparent",
            color: theme.palette.secondary.main,
            borderColor: theme.palette.secondary.main,
            textTransform: "capitalize",
            mx: 5,
            p: 2,
            fontSize: 12,
          }}
          onClick={() => {
            setMobileOpen(!mobileOpen);
            router.push("/login");
          }}
        >
          Login
        </Button>
        <br />
        <Button
          variant="contained"
          disableElevation
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: "white",
            textTransform: "capitalize",
            fontSize: 12,
            p: 2,
            mx: 5,
          }}
          onClick={() => {
            setMobileOpen(!mobileOpen);
            router.push("/signup");
          }}
        >
          Register
        </Button>
      </div>
    </div>
  );

  return (
    <MUIDrawer
      variant={"temporary"}
      anchor={"left"}
      open={mobileOpen}
      onClose={() => setMobileOpen(!mobileOpen)}
      sx={{ width: 500 }}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      {myDrawer}
    </MUIDrawer>
  );
};

export default MobileDrawer;
