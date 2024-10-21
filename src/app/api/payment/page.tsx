"use client";
import React from 'react';
import { Box, Grid } from '@mui/material';
import MainSideBar from '../component/mainsidebar';
import PaymentLink from './payments';
import SecondRightBar from './secondrightsidebar';

export default function PaymentPage(): React.JSX.Element {


  return (
    <Box>
      <Box p={2} bgcolor={"#009FDD"} position={"fixed"} width={"100%"} zIndex={1}></Box>
      <Box bgcolor={"whitesmoke"}>
        <Grid container spacing={5}>
          <Grid item md={3}>
            <MainSideBar />
          </Grid>
          <Grid
            item
            md={6}
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
            <PaymentLink />
          </Grid>
          <Grid item md={3}>
            <SecondRightBar anchor={'right'} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
