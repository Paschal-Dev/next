import React from "react";
import { Box, Grid, Toolbar } from "@mui/material";
import ApiDoc from "./apiduc";
import MainSideBar from "./component/mainsidebar";
import Main from "./main";
import FirstRightBar from "./firstrightbar";
import { MediaProps } from "@/utils/utils";

export default function Document({ deviceType }: MediaProps): React.JSX.Element {
  return (
    <Box>
      {/* <Box p={"13px"} bgcolor={"#009FDD"} zIndex={1}></Box> */}
      <Box bgcolor={"whitesmoke"}>
        <Grid container spacing={2}>
          <Grid item md={3} xs={12} sm={12}>
            <MainSideBar />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            sm={12}
            sx={{
              overflowY: "scroll", // Ensures scrollbar is always visible
              height: "100vh",
              "&::-webkit-scrollbar": {
                width: "9px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#009FDD",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "#b7e2f3ec",
              },
              "&::-webkit-scrollbar-button": {
                display: "none",
              },
              scrollbarWidth: "auto", // Ensures scrollbar is visible by default
              scrollbarColor: "#009FDD #b7e2f3ec",
            }}
          >
            <Main />
            <ApiDoc />
          </Grid>
          <Grid
            item
            md={3}
            xs={12}
            sm={12}
            sx={{ display: deviceType === "mobile" ? "none" : "flex" }}
          >
            <FirstRightBar anchor={"right"} />
          </Grid>
        </Grid>

        <Toolbar />
      </Box>
    </Box>
  );
}
