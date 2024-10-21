"use client";
import { Box, Container, Grid, Link, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import MainSideBar from "../component/mainsidebar";
import VirtualCardIntegrationSideBar from "./virtaulcardintegrationsidebar";
import api from "../../../assets/images/api/api-details.png";
import additional from "../../../assets/images/api/additional.png";
import { theme } from "@/assets/themes/theme";
import Image from "next/image";

export default function VirtualCardIntegration(): React.JSX.Element {

  const [deviceType, setDeviceType] = useState("mobile");
  const mobile = useMediaQuery(theme.breakpoints.only("xs"));
  const tablet = useMediaQuery(theme.breakpoints.down("md"));
  
   useEffect(() => {
       if (mobile) {
        setDeviceType("mobile");
      } else if (tablet) {
       setDeviceType("tablet");
       } else {
        setDeviceType("pc");
      }
  }, [mobile, tablet]);

  return (
    <Box>
      {/* <Box
        p={2}
        bgcolor={"#009FDD"}
        position={"fixed"}
        width={"100%"}
        zIndex={1}
      ></Box> */}
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
            <Container id="Reccuring-Payments">
              <Box
                id="virtual"
                mt={deviceType === "mobile" ? 5 : 4}
                mb={deviceType === "mobile" ? 6 : ""}
              >
                <Typography variant="h2" fontSize={20} fontWeight={900}>
                  Virtual Card Integration
                </Typography>
                <Typography variant="body2" fontSize={"16px"} mt={1}>
                  If you are an approved merchant on Peerwallet and you have
                  been approved to sell virtual cards on Peerwallet, this guide
                  is for you. <br />
                  <br />
                  If you are not a Merchant on Peerwallet, you should first
                  learn more about Merchant services{" "}
                  <Link href="" color={"#009fdd"}>
                    HERE
                  </Link>{" "}
                  and how to apply.
                </Typography>
                <Typography
                  variant="body2"
                  fontSize={"16px"}
                  fontWeight={400}
                  mt={2}
                >
                  <span style={{ fontWeight: 500 }}>How It Works:</span>
                  Peerwallet makes it possible for different Merchants to
                  integrate their Virtual card services. The process has to be
                  automated as this would be tested by the Technical team
                  in-charge of approving Virtual card offers on Peerwallet.
                </Typography>
                <Box mt={3}>
                  <Typography
                    variant="body2"
                    fontWeight={400}
                    fontSize={"16px"}
                  >
                    <span style={{ fontWeight: 500 }}> Illustration:</span>
                    When a user selects your Virtual card offer on Peerwallet to
                    create and load a card, Peerwallet would send some values to
                    an end point which you specified, then you take those values
                    and then send to your Bank’s API to process, the next step
                    is to reformat the response into how Peerwallet wants it and
                    return the values. Look at the steps below for a quick
                    summary.
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight={400}
                    fontSize={"16px"}
                    mt={2}
                  >
                    Step 1 User visits Peerwallet, selects your Virtual card
                    offer, then enters the required details with the initial
                    amount to be loaded on the card.
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight={400}
                    fontSize={"16px"}
                    mt={2}
                  >
                    Step 2 Peerwallet will send some values to the end point you
                    specified when creating the virtual card offer on
                    Peerwallet. Samples of the POST variables are; name, amount,
                    card_name e.t.c
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight={400}
                    fontSize={"16px"}
                    mt={2}
                  >
                    Step 3 At this point, you would collect the values sent from
                    Peerwallet and then query your Bank’s API to create the card
                    using the details sent to you by Peerwallet.
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight={400}
                    fontSize={"16px"}
                    mt={2}
                  >
                    Step 4 When the card has been created and loaded, your Bank
                    would return some values and card details for sure, follow
                    the guide by Peerwallet on the type of response you should
                    return so that Peerwallet would understand the response
                    sent. Or return the appropriate error into the ‘note’
                    variable as sent by your Bank or as you want it seen by the
                    user on Peerwallet.
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight={400}
                    fontSize={"16px"}
                    mt={2}
                  >
                    Step 5 Card is processed and the user on Peerwallet should
                    see all of these processes within 3 to 10 seconds depending
                    on how fast your API service is.
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight={400}
                    fontSize={"16px"}
                    my={2}
                  >
                    After creating your Virtual card offer, then click the edit
                    button you should see the Modify Api Details button to set
                    your API details. The button looks like this.
                  </Typography>
                </Box>
                <Image src={api} alt="" style={{width: deviceType === "mobile" ? "100%" : "" }} />

                <Typography variant="body2" fontSize={"16px"}>
                  From there you should then enter your API details. Below are
                  the required end points to be entered.
                </Typography>
                <ol>
                  <li>Card Creation End Point</li>
                  <li>Fetch Card Details End Point</li>
                  <li>Load Balance End Point</li>
                  <li>Fetch Card Transactions End Point.</li>
                </ol>
                <Typography variant="body2" fontSize={"16px"} id="card">
                  For each query, Peerwallet would send some variables to the
                  end point you have specified and then wait for a response in a
                  format we have also specified. So for each query we shall be
                  explaining here the variables we shall send and the type of
                  response to be gotten back
                </Typography>
              </Box>
              <hr
                style={{
                  border: "1px solid #6b707f",
                  width: "100%",
                  marginTop: 30,
                  marginBottom: 30,
                }}
              />
              <Typography variant="body2" fontSize={"22px"} fontWeight={700}>
                CARD CREATION
              </Typography>
              <Typography variant="body2" fontSize={"14px"} my={2}>
                call_method == create
              </Typography>
              <Typography variant="body2" fontSize={"16px"}>
                call method is the type of query for this call. On that URL
                specified, we shall send a variable called ‘call method’ and it
                shall contain the value called create. Meaning that this call is
                for a new card creation <br />
                <br />
                POST variables sent by Peerwallet to your end point URL for this
                call are as follows;
              </Typography>
              <Typography variant="body2" my={2}>
                [ call_method, email, amount, card_name, card_address,
                card_city, card_state, card_postal_code, card_country ]
              </Typography>
              <Typography variant="body2" fontSize={"16px"} fontWeight={400}>
                <span style={{ fontWeight: 500 }}>email:</span>
                This is the registered email address of the user on Peerwallet
              </Typography>
              <Typography
                variant="body2"
                fontSize={"16px"}
                fontWeight={400}
                mt={2}
              >
                <span style={{ fontWeight: 500 }}>amount:</span>
                This is the amount the user want to load on the card, the amount
                here is in the selling currency you specified when creating the
                card offer.
              </Typography>
              <Typography
                variant="body2"
                fontSize={"16px"}
                fontWeight={400}
                mt={2}
              >
                <span style={{ fontWeight: 500 }}>card_name: </span>
                If you allowed users to choose a card name, then this is the
                name sent. Example, John Doe.
              </Typography>
              <Typography
                variant="body2"
                fontSize={"16px"}
                fontWeight={400}
                mt={2}
              >
                <span style={{ fontWeight: 500 }}>card_address:</span>
                If this option was turned on, this is the card address as
                entered by the user.
              </Typography>
              <Typography
                variant="body2"
                fontSize={"16px"}
                fontWeight={400}
                mt={2}
              >
                <span style={{ fontWeight: 500 }}>card_city:</span>
                If this option was turned on, this is the card city as entered
                by the user.
              </Typography>
              <Typography
                variant="body2"
                fontSize={"16px"}
                fontWeight={400}
                mt={2}
              >
                <span style={{ fontWeight: 500 }}>card_state:</span> If this
                option was turned on, this is the card state entered by the user
              </Typography>
              <Typography
                variant="body2"
                fontSize={"16px"}
                fontWeight={400}
                mt={2}
              >
                <span style={{ fontWeight: 500 }}>card_postal:</span>
                If this option was turned on, this is the postal code of the
                user
              </Typography>
              <Typography
                variant="body2"
                fontSize={"16px"}
                fontWeight={400}
                mt={2}
              >
                <span style={{ fontWeight: 500 }}>card_country:</span>
                If this option was turned on, this is the Country of user for
                the card. This would return in 2 code format. Example, us, fr,
                uk, e.t.c
              </Typography>
              <Typography
                variant="body2"
                fontSize={"16px"}
                fontWeight={400}
                my={2}
              >
                <span style={{ fontWeight: 500 }}>additional variables:</span>
                The additional variables you specified when creating the Virtual
                card offer shall all be returned.
              </Typography>
              <Image src={additional} alt="" style={{width: deviceType === "mobile" ? "100%" : "" }} />
              <Typography variant="body2" fontSize={"16px"}>
                From the example above, we shall return what the user entered as
                date_of_birth and phone_number. The names of the variables are
                what you specified them to be when adding into those fields.
                This is necessary if you want some additional information to be
                able to create the card.
              </Typography>
              <Typography
                variant="body2"
                fontSize={"20px"}
                fontWeight={800}
                id="Explanation-Table"
                mt={2}
              >
                RETURN VALUES FOR CARD CREATION
              </Typography>
              <Grid
                container
                border={"2px solid #D9D9D9"}
                sx={{ borderTopLeftRadius: 19, borderTopRightRadius: 19 }}
                bgcolor={"#009edd3b"}
                mt={2}
              >
                <Grid
                  item
                  md={2}
                  sm={2}
                  xs={2}
                  borderRight={"2px solid #D9D9D9"}
                >
                  <Typography
                    variant="h2"
                    bgcolor={"#009FDD"}
                    color={"#fff"}
                    sx={{
                      borderTopLeftRadius: 20,
                      fontSize: deviceType === "mobile" ? "10px" : "14px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 2 : 3,
                    }}
                  >
                    NAME
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                    color={"#12B76A"}
                  >
                    status
                  </Typography>
                </Grid>
                <Grid
                  item
                  md={2}
                  sm={2}
                  xs={2}
                  borderRight={"2px solid #D9D9D9"}
                >
                  <Typography
                    variant="h2"
                    bgcolor={"#009FDD"}
                    color={"#fff"}
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "14px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 2 : 3,
                    }}
                  >
                    VALUE
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      fontWeight: deviceType === "mobile" ? 400 : 500,
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                  >
                    success or pending or failed
                  </Typography>
                </Grid>
                <Grid
                  item
                  md={3}
                  sm={3}
                  xs={3}
                  borderRight={"2px solid #D9D9D9"}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "9px" : "14px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 2 : 3,
                    }}
                    bgcolor={"#009FDD"}
                    color={"#fff"}
                  >
                    REQUIRED
                  </Typography>
                  <Box
                    bgcolor={"#FDDE80"}
                    sx={{
                      ml: deviceType === "mobile" ? 4 : 5,
                      mt: deviceType === "mobile" ? 1 : 4,
                      width: deviceType === "mobile" ? "23%" : "13%",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: deviceType === "mobile" ? "10px" : "12px",
                      }}
                      fontWeight={500}
                      color={"#BB6005"}
                    >
                      YES
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={5} sm={5} xs={5}>
                  <Typography
                    variant="h2"
                    bgcolor={"#009FDD"}
                    color={"#fff"}
                    sx={{
                      borderTopRightRadius: 20,
                      fontSize: deviceType === "mobile" ? "10px" : "14px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 2 : 3,
                    }}
                  >
                    DESCRIPTION
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                  >
                    should return success if the card has been created, should
                    return pending if the card has been created but the card
                    details are still processing, should return failed if the
                    card could not be created.
                  </Typography>
                </Grid>
                <Grid
                  item
                  md={2}
                  sm={2}
                  xs={2}
                  borderTop={"2px solid #D9D9D9"}
                  bgcolor={"#fff3d3e1"}
                  borderRight={"2px solid #D9D9D9"}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                    color={"#12B76A"}
                  >
                    identifier
                  </Typography>
                </Grid>
                <Grid
                  item
                  md={2}
                  sm={2}
                  xs={2}
                  borderTop={"2px solid #D9D9D9"}
                  bgcolor={"#fff3d3e1"}
                  borderRight={"2px solid #D9D9D9"}
                ></Grid>
                <Grid
                  item
                  md={3}
                  sm={3}
                  xs={3}
                  bgcolor={"#fff3d3e1"}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={"2px solid #D9D9D9"}
                >
                  <Box
                    bgcolor={"#FDDE80"}
                    sx={{
                      ml: deviceType === "mobile" ? 4 : 5,
                      mt: deviceType === "mobile" ? 1 : 4,
                      width: deviceType === "mobile" ? "23%" : "13%",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: deviceType === "mobile" ? "10px" : "12px",
                      }}
                      fontWeight={500}
                      color={"#BB6005"}
                    >
                      YES
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  md={5}
                  sm={5}
                  xs={5}
                  bgcolor={"#fff3d3e1"}
                  borderTop={"2px solid #D9D9D9"}
                >
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                  >
                    This is the ID to recognize a card created. Ex:
                    4985098ht0hhbeuhf{" "}
                    <br
                      style={{
                        display: deviceType === "mobile" ? "flex" : "none",
                      }}
                    />
                    9uhfuhjo
                  </Typography>
                </Grid>
                <Grid
                  item
                  md={2}
                  sm={2}
                  xs={2}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={"2px solid #D9D9D9"}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                    color={"#12B76A"}
                  >
                    note
                  </Typography>
                </Grid>{" "}
                <Grid
                  item
                  md={2}
                  sm={2}
                  xs={2}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={"2px solid #D9D9D9"}
                  pb={8}
                ></Grid>
                <Grid
                  item
                  md={3}
                  sm={3}
                  xs={3}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={"2px solid #D9D9D9"}
                >
                  <Box
                    bgcolor={"#FDDE80"}
                    sx={{
                      ml: deviceType === "mobile" ? 4 : 5,
                      mt: deviceType === "mobile" ? 1 : 4,
                      width: deviceType === "mobile" ? "23%" : "13%",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: deviceType === "mobile" ? "10px" : "12px",
                      }}
                      fontWeight={500}
                      color={"#BB6005"}
                    >
                      YES
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={5} sm={5} xs={5} borderTop={"2px solid #D9D9D9"}>
                  <Typography
                    id="details"
                    variant="body2"
                    fontWeight={500}
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                  >
                    A note should always be sent for every call, this would be
                    displayed to the customer to know what error or success the
                    API is returning
                  </Typography>
                </Grid>
              </Grid>
              <hr
                style={{
                  border: "1px solid #6b707f",
                  width: "100%",
                  marginTop: 30,
                  marginBottom: 30,
                }}
              />
              <Typography variant="body2" fontSize={"20px"} fontWeight={500}>
                FETCH CARD DETAILS
                <br />{" "}
                <span style={{ fontSize: "14px", fontWeight: 400 }}>
                  call_method == fetch
                </span>
              </Typography>
              <Typography variant="body2" fontSize={"16px"} my={2}>
                call method is the type of query for this call. On that URL
                specified, we shall send a variable called ‘call method’ and it
                shall contain the value called fetch. Meaning that this call is
                to fetch a specific card details
              </Typography>
              <Typography variant="body2" fontSize={"16px"} my={2}>
                POST variables sent by Peerwallet to your end point URL for this
                call are as follows;
              </Typography>
              <Typography variant="body2" fontSize={"14px"} mb={2}>
                [ call_method, identifier]
              </Typography>
              <Typography
                variant="body2"
                fontSize={"16px"}
                fontWeight={400}
                my={2}
              >
                <span style={{ fontWeight: 500 }}>identifier: </span>
                This is the unique token stored when the card was created, every
                virtual card is identified by a unique token when they are being
                created. This token is called the identifier which is sent to
                this end url for your to fetch card details.
              </Typography>
              <Typography
                variant="body2"
                fontSize={"20px"}
                fontWeight={800}
                mt={3}
              >
                RETURN VALUES TO FETCH CARD DETAILS
              </Typography>
              <Grid
                container
                border={"2px solid #D9D9D9"}
                sx={{ borderTopLeftRadius: 19, borderTopRightRadius: 19 }}
                bgcolor={"#009edd3b"}
                mt={2}
              >
                <Grid item xs={2} borderRight={"2px solid #D9D9D9"}>
                  <Typography
                    variant="h2"
                    bgcolor={"#009FDD"}
                    color={"#fff"}
                    sx={{
                      borderTopLeftRadius: 20,
                      fontSize: deviceType === "mobile" ? "10px" : "14px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 2 : 3,
                    }}
                  >
                    NAME
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                    color={"#12B76A"}
                  >
                    status
                  </Typography>
                </Grid>
                <Grid item xs={2} borderRight={"2px solid #D9D9D9"}>
                  <Typography
                    variant="h2"
                    bgcolor={"#009FDD"}
                    color={"#fff"}
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "14px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 2 : 3,
                    }}
                  >
                    VALUE
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "8px" : "12px",
                      fontWeight: 600,
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                  >
                    processed or failed
                  </Typography>
                </Grid>
                <Grid
                  item
                  md={3}
                  sm={3}
                  xs={3}
                  borderRight={"2px solid #D9D9D9"}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "14px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 2 : 3,
                    }}
                    bgcolor={"#009FDD"}
                    color={"#fff"}
                  >
                    REQUIRED
                  </Typography>
                  <Box
                    bgcolor={"#FDDE80"}
                    sx={{
                      ml: deviceType === "mobile" ? 4 : 5,
                      mt: deviceType === "mobile" ? 1 : 4,
                      width: deviceType === "mobile" ? "23%" : "13%",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: deviceType === "mobile" ? "10px" : "12px",
                      }}
                      fontWeight={500}
                      color={"#BB6005"}
                    >
                      YES
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={5} sm={5} xs={5}>
                  <Typography
                    variant="h2"
                    bgcolor={"#009FDD"}
                    color={"#fff"}
                    sx={{
                      borderTopRightRadius: 20,
                      fontSize: deviceType === "mobile" ? "10px" : "14px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 2 : 3,
                    }}
                  >
                    DESCRIPTION
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                  >
                    This is an indication that the card details has been
                    fetched, else return failed and add appropriate note of what
                    happened
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={2}
                  borderTop={"2px solid #D9D9D9"}
                  bgcolor={"#fff3d3e1"}
                  borderRight={"2px solid #D9D9D9"}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "8px" : "12px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                    color={"#12B76A"}
                  >
                    card_status
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={2}
                  borderTop={"2px solid #D9D9D9"}
                  bgcolor={"#fff3d3e1"}
                  borderRight={"2px solid #D9D9D9"}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      fontWeight: 500,
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                  >
                    active, blocked, in-active, frozen
                  </Typography>
                </Grid>
                <Grid
                  item
                  md={3}
                  sm={3}
                  xs={3}
                  bgcolor={"#fff3d3e1"}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={"2px solid #D9D9D9"}
                >
                  <Box
                    bgcolor={"#FDDE80"}
                    sx={{
                      ml: deviceType === "mobile" ? 4 : 5,
                      mt: deviceType === "mobile" ? 1 : 4,
                      width: deviceType === "mobile" ? "23%" : "13%",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: deviceType === "mobile" ? "10px" : "12px",
                      }}
                      fontWeight={500}
                      color={"#BB6005"}
                    >
                      YES
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  md={5}
                  sm={5}
                  xs={5}
                  bgcolor={"#fff3d3e1"}
                  borderTop={"2px solid #D9D9D9"}
                >
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                  >
                    You can use any of the status recommended, if status is
                    active it would appear on peerwallet as green, the remaining
                    status would be red.
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={2}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={
                    deviceType === "mobile" ? 0 : "2px solid #D9D9D9"
                  }
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                    color={"#12B76A"}
                  >
                    note
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={2}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={"2px solid #D9D9D9"}
                ></Grid>
                <Grid
                  item
                  md={3}
                  sm={3}
                  xs={3}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={"2px solid #D9D9D9"}
                >
                  <Box
                    bgcolor={"#FDDE80"}
                    sx={{
                      ml: deviceType === "mobile" ? 4 : 5,
                      mt: deviceType === "mobile" ? 1 : 4,
                      width: deviceType === "mobile" ? "23%" : "13%",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: deviceType === "mobile" ? "10px" : "12px",
                      }}
                      fontWeight={500}
                      color={"#BB6005"}
                    >
                      YES
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={5} sm={5} xs={5} borderTop={"2px solid #D9D9D9"}>
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                  >
                    A note should always be sent for every call, this would be
                    displayed to the customer to know what error or success the
                    API is sending.
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={2}
                  borderTop={"2px solid #D9D9D9"}
                  bgcolor={"#fff3d3e1"}
                  borderRight={
                    deviceType === "mobile" ? 0 : "2px solid #D9D9D9"
                  }
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                    color={"#12B76A"}
                  >
                    card_bal
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={2}
                  borderTop={"2px solid #D9D9D9"}
                  bgcolor={"#fff3d3e1"}
                  borderRight={"2px solid #D9D9D9"}
                ></Grid>
                <Grid
                  item
                  md={3}
                  sm={3}
                  xs={3}
                  bgcolor={"#fff3d3e1"}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={"2px solid #D9D9D9"}
                >
                  <Box
                    bgcolor={"#FDDE80"}
                    sx={{
                      ml: deviceType === "mobile" ? 4 : 5,
                      mt: deviceType === "mobile" ? 1 : 2,
                      width: deviceType === "mobile" ? "23%" : "13%",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: deviceType === "mobile" ? "10px" : "12px",
                      }}
                      fontWeight={500}
                      color={"#BB6005"}
                    >
                      YES
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  md={5}
                  sm={5}
                  xs={5}
                  bgcolor={"#fff3d3e1"}
                  borderTop={"2px solid #D9D9D9"}
                >
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                  >
                    The available balance of the card
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={2}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={
                    deviceType === "mobile" ? 0 : "2px solid #D9D9D9"
                  }
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                    color={"#12B76A"}
                  >
                    card_name
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={2}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={"2px solid #D9D9D9"}
                ></Grid>
                <Grid
                  item
                  md={3}
                  sm={3}
                  xs={3}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={"2px solid #D9D9D9"}
                >
                  <Box
                    bgcolor={"#FDDE80"}
                    sx={{
                      ml: deviceType === "mobile" ? 4 : 5,
                      mt: deviceType === "mobile" ? 1 : 2,
                      width: deviceType === "mobile" ? "23%" : "13%",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: deviceType === "mobile" ? "10px" : "12px",
                      }}
                      fontWeight={500}
                      color={"#BB6005"}
                    >
                      YES
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={5} sm={5} xs={5} borderTop={"2px solid #D9D9D9"}>
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                  >
                    The name of the card
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={2}
                  bgcolor={"#fff3d3e1"}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={
                    deviceType === "mobile" ? 0 : "2px solid #D9D9D9"
                  }
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                    color={"#12B76A"}
                  >
                    card_number
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={2}
                  bgcolor={"#fff3d3e1"}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={"2px solid #D9D9D9"}
                ></Grid>
                <Grid
                  item
                  md={3}
                  sm={3}
                  xs={3}
                  bgcolor={"#fff3d3e1"}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={"2px solid #D9D9D9"}
                >
                  <Box
                    bgcolor={"#FDDE80"}
                    sx={{
                      ml: deviceType === "mobile" ? 4 : 5,
                      mt: deviceType === "mobile" ? 1 : 2,
                      width: deviceType === "mobile" ? "23%" : "13%",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: deviceType === "mobile" ? "10px" : "12px",
                      }}
                      fontWeight={500}
                      color={"#BB6005"}
                    >
                      YES
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  md={5}
                  sm={5}
                  xs={5}
                  bgcolor={"#fff3d3e1"}
                  borderTop={"2px solid #D9D9D9"}
                >
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                  >
                    The number on the card
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={2}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={
                    deviceType === "mobile" ? 0 : "2px solid #D9D9D9"
                  }
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                    color={"#12B76A"}
                  >
                    card_exp_month
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={2}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={"2px solid #D9D9D9"}
                ></Grid>
                <Grid
                  item
                  md={3}
                  sm={3}
                  xs={3}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={"2px solid #D9D9D9"}
                >
                  <Box
                    bgcolor={"#FDDE80"}
                    sx={{
                      ml: deviceType === "mobile" ? 4 : 5,
                      mt: deviceType === "mobile" ? 1 : 2,
                      width: deviceType === "mobile" ? "23%" : "13%",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: deviceType === "mobile" ? "10px" : "12px",
                      }}
                      fontWeight={500}
                      color={"#BB6005"}
                    >
                      YES
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={5} sm={5} xs={5} borderTop={"2px solid #D9D9D9"}>
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                  >
                    The Exp Month of the card
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={2}
                  bgcolor={"#fff3d3e1"}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={
                    deviceType === "mobile" ? 0 : "2px solid #D9D9D9"
                  }
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                    color={"#12B76A"}
                  >
                    card_exp_year
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={2}
                  bgcolor={"#fff3d3e1"}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={"2px solid #D9D9D9"}
                ></Grid>
                <Grid
                  item
                  md={3}
                  sm={3}
                  xs={3}
                  bgcolor={"#fff3d3e1"}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={"2px solid #D9D9D9"}
                >
                  <Box
                    bgcolor={"#FDDE80"}
                    sx={{
                      ml: deviceType === "mobile" ? 4 : 5,
                      mt: deviceType === "mobile" ? 1 : 2,
                      width: deviceType === "mobile" ? "23%" : "13%",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: deviceType === "mobile" ? "10px" : "12px",
                      }}
                      fontWeight={500}
                      color={"#BB6005"}
                    >
                      YES
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  md={5}
                  sm={5}
                  xs={5}
                  borderTop={"2px solid #D9D9D9"}
                  bgcolor={"#fff3d3e1"}
                >
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                  >
                    The Exp Year of the card
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={2}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={
                    deviceType === "mobile" ? 0 : "2px solid #D9D9D9"
                  }
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                    color={"#12B76A"}
                  >
                    card_cvv
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={2}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={"2px solid #D9D9D9"}
                ></Grid>
                <Grid
                  item
                  md={3}
                  sm={3}
                  xs={3}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={"2px solid #D9D9D9"}
                >
                  <Box
                    bgcolor={"#FDDE80"}
                    sx={{
                      ml: deviceType === "mobile" ? 4 : 5,
                      mt: deviceType === "mobile" ? 1 : 2,
                      width: deviceType === "mobile" ? "23%" : "13%",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: deviceType === "mobile" ? "10px" : "12px",
                      }}
                      fontWeight={500}
                      color={"#BB6005"}
                    >
                      YES
                    </Typography>
                  </Box>{" "}
                </Grid>
                <Grid item md={5} sm={5} xs={5} borderTop={"2px solid #D9D9D9"}>
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                  >
                    The CVV Year of the card
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={2}
                  bgcolor={"#fff3d3e1"}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={
                    deviceType === "mobile" ? 0 : "2px solid #D9D9D9"
                  }
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                    color={"#12B76A"}
                  >
                    card_address
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={2}
                  bgcolor={"#fff3d3e1"}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={"2px solid #D9D9D9"}
                ></Grid>
                <Grid
                  item
                  md={3}
                  sm={3}
                  xs={3}
                  bgcolor={"#fff3d3e1"}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={"2px solid #D9D9D9"}
                >
                  <Box
                    bgcolor={"#FFD5D5"}
                    sx={{
                      ml: deviceType === "mobile" ? 4 : 5,
                      mt: deviceType === "mobile" ? 1 : 2,
                      width: deviceType === "mobile" ? "20%" : "10%",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: deviceType === "mobile" ? "10px" : "12px",
                      }}
                      fontWeight={500}
                      color={"#BB0505"}
                    >
                      NO
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  md={5}
                  sm={5}
                  xs={5}
                  borderTop={"2px solid #D9D9D9"}
                  bgcolor={"#fff3d3e1"}
                >
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                  >
                    The billing address of the card
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={2}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={
                    deviceType === "mobile" ? 0 : "2px solid #D9D9D9"
                  }
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                    color={"#12B76A"}
                  >
                    card_city
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={2}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={"2px solid #D9D9D9"}
                ></Grid>
                <Grid
                  item
                  md={3}
                  sm={3}
                  xs={3}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={"2px solid #D9D9D9"}
                >
                  <Box
                    bgcolor={"#FFD5D5"}
                    sx={{
                      ml: deviceType === "mobile" ? 4 : 5,
                      mt: deviceType === "mobile" ? 1 : 2,
                      width: deviceType === "mobile" ? "20%" : "10%",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: deviceType === "mobile" ? "10px" : "12px",
                      }}
                      fontWeight={500}
                      color={"#BB0505"}
                    >
                      NO
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={5} sm={5} xs={5} borderTop={"2px solid #D9D9D9"}>
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    fontSize={"12px"}
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                  >
                    The billing city of the card
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={2}
                  bgcolor={"#fff3d3e1"}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={
                    deviceType === "mobile" ? 0 : "2px solid #D9D9D9"
                  }
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                    color={"#12B76A"}
                  >
                    card_state
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={2}
                  bgcolor={"#fff3d3e1"}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={"2px solid #D9D9D9"}
                  pb={3}
                ></Grid>
                <Grid
                  item
                  md={3}
                  sm={3}
                  xs={3}
                  bgcolor={"#fff3d3e1"}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={"2px solid #D9D9D9"}
                >
                  <Box
                    bgcolor={"#FFD5D5"}
                    sx={{
                      ml: deviceType === "mobile" ? 4 : 5,
                      mt: deviceType === "mobile" ? 1 : 2,
                      width: deviceType === "mobile" ? "20%" : "10%",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: deviceType === "mobile" ? "10px" : "12px",
                      }}
                      fontWeight={500}
                      color={"#BB0505"}
                    >
                      NO
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  md={5}
                  sm={5}
                  xs={5}
                  borderTop={"2px solid #D9D9D9"}
                  bgcolor={"#fff3d3e1"}
                >
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                  >
                    The billing state of the card
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={2}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={
                    deviceType === "mobile" ? 0 : "2px solid #D9D9D9"
                  }
                >
                  <Typography                  
                   id="terminate"
                    variant="body2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                    color={"#12B76A"}
                  >
                    card_postal_code
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={2}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={"2px solid #D9D9D9"}
                ></Grid>
                <Grid
                  item
                  md={3}
                  sm={3}
                  xs={3}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={"2px solid #D9D9D9"}
                >
                  <Box
                    bgcolor={"#FFD5D5"}
                    sx={{
                      ml: deviceType === "mobile" ? 4 : 5,
                      mt: deviceType === "mobile" ? 1 : 2,
                      width: deviceType === "mobile" ? "20%" : "10%",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: deviceType === "mobile" ? "10px" : "12px",
                      }}
                      fontWeight={500}
                      color={"#BB0505"}
                    >
                      NO
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={5} sm={5} xs={5} borderTop={"2px solid #D9D9D9"}>
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                  >
                    The billing postal code of the card
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={2}
                  bgcolor={"#fff3d3e1"}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={
                    deviceType === "mobile" ? 0 : "2px solid #D9D9D9"
                  }
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                    color={"#12B76A"}
                  >
                    card_country
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={2}
                  bgcolor={"#fff3d3e1"}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={"2px solid #D9D9D9"}
                ></Grid>
                <Grid
                  item
                  md={3}
                  sm={3}
                  xs={3}
                  bgcolor={"#fff3d3e1"}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={"2px solid #D9D9D9"}
                >
                  <Box                 
                    bgcolor={"#FFD5D5"}
                    sx={{
                      ml: deviceType === "mobile" ? 4 : 5,
                      mt: deviceType === "mobile" ? 1 : 2,
                      width: deviceType === "mobile" ? "20%" : "10%",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: deviceType === "mobile" ? "10px" : "12px",
                      }}
                      fontWeight={500}
                      color={"#BB0505"}
                    >
                      NO
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  md={5}
                  sm={5}
                  xs={5}
                  borderTop={"2px solid #D9D9D9"}
                  bgcolor={"#fff3d3e1"}
                >
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                  >
                    The billing country of the card
                  </Typography>
                </Grid>
              </Grid>
              <Typography
                variant="body2"
                fontSize={"20px"}
                fontWeight={500}
                mt={3}
                mb={1}
              >
                TERMINATE CARD
                <br />{" "}
                <span style={{ fontSize: "14px", fontWeight: 400 }}>
                  [call_method, identifier, response ]
                </span>
              </Typography>
              <Typography
                variant="body2"
                fontSize={"16px"}
                fontWeight={400}
                mb={2}
              >
                Response would include any of the following;
                <span style={{ fontSize: "18px", fontWeight: 500 }}>
                  paid, cancelled or failed
                </span>
              </Typography>
              <Typography
                variant="body2"
                fontSize={"16px"}
                fontWeight={400}
                my={2}
              >
                <span style={{ fontWeight: 500 }}>Paid: </span>
                means the user has paid for the subscription
              </Typography>
              <Typography
                variant="body2"
                fontSize={"16px"}
                fontWeight={400}
                mb={2}
              >
                <span style={{ fontWeight: 500 }}>Cancelled: </span>
                means the user has cancelled the subscription, you should
                further delete or freeze the card from your end
              </Typography>
              <Typography
              id="balance"
                variant="body2"
                fontSize={"16px"}
                fontWeight={400}
                my={2}
              >
                <span style={{ fontWeight: 500 }}>Failed:</span>
                means the users does not have not enough to pay the
                subscription, you should further delete or freeze the card from
                your end
              </Typography>
              <Typography variant="body2" fontSize={"14px"} mb={6} >
                call_method == recurring
              </Typography>
              <Typography
                variant="body2"
                fontSize={"20px"}
                fontWeight={500}
                mb={2}
              >
                LOAD CARD BALANCE
                <br />{" "}
                <span style={{ fontSize: "14px", fontWeight: 400 }}>
                  call_method == load
                </span>
              </Typography>
              <Typography variant="body2" fontSize={"16px"} mb={2}>
                call method is the type of query for this call. On that URL
                specified, we shall send a variable called ‘call method’ and it
                shall contain the value called load. Meaning that this call is
                load the balance of a particular card <br />
                <br />
                POST variables sent by Peerwallet to your end point URL for this
                call are as follows;
              </Typography>
              <Typography variant="body2" fontSize={"14px"} mb={2}>
                [ call_method, amount, identifier]
              </Typography>
              <Typography
                variant="body2"
                fontSize={"16px"}
                fontWeight={400}
                my={2}
              >
                <span style={{ fontWeight: 500 }}>amount: </span>
                his is the amount the user want to load on the card, the amount
                here is in the selling currency you specified when creating the
                card offer. your end
              </Typography>
              <Typography
                variant="body2"
                fontSize={"16px"}
                fontWeight={400}
                my={2}
              >
                <span style={{ fontWeight: 500 }}>identifier:</span>
                This is the unique token stored when the card was created, every
                virtual card is identified by a unique token when they are being
                created. This token is called the identifier which is sent to
                this end url for your to fetch card details
              </Typography>
              <Typography
                variant="body2"
                fontSize={"20px"}
                fontWeight={800}
                mt={3}
              >
                RETURN VALUES FOR CARD BALANCE
              </Typography>

              <Grid
                container
                border={"2px solid #D9D9D9"}
                sx={{ borderTopLeftRadius: 19, borderTopRightRadius: 19 }}
                bgcolor={"#009edd3b"}
                mt={2}
                mb={10}
              >
                <Grid item xs={2} borderRight={"2px solid #D9D9D9"}>
                  <Typography
                    variant="h2"
                    bgcolor={"#009FDD"}
                    color={"#fff"}
                    sx={{
                      borderTopLeftRadius: 20,
                      fontSize: deviceType === "mobile" ? "10px" : "14px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 2 : 3,
                    }}
                  >
                    NAME
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                    color={"#12B76A"}
                  >
                    status
                  </Typography>
                </Grid>
                <Grid item xs={2} borderRight={"2px solid #D9D9D9"}>
                  <Typography
                    variant="h2"
                    bgcolor={"#009FDD"}
                    color={"#fff"}
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "14px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 2 : 3,
                    }}
                  >
                    VALUE
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "8px" : "12px",
                      fontWeight: 600,
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                  >
                    success or pending or failed
                  </Typography>
                </Grid>
                <Grid
                  item
                  md={3}
                  sm={3}
                  xs={3}
                  borderRight={"2px solid #D9D9D9"}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "14px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 2 : 3,
                    }}
                    bgcolor={"#009FDD"}
                    color={"#fff"}
                  >
                    REQUIRED
                  </Typography>
                  <Box
                    bgcolor={"#FDDE80"}
                    sx={{
                      ml: deviceType === "mobile" ? 4 : 5,
                      mt: deviceType === "mobile" ? 1 : 4,
                      width: deviceType === "mobile" ? "23%" : "13%",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: deviceType === "mobile" ? "10px" : "12px",
                      }}
                      fontWeight={500}
                      color={"#BB6005"}
                    >
                      YES
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={5} sm={5} xs={5}>
                  <Typography
                    variant="h2"
                    bgcolor={"#009FDD"}
                    color={"#fff"}
                    sx={{
                      borderTopRightRadius: 20,
                      fontSize: deviceType === "mobile" ? "10px" : "14px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 2 : 3,
                    }}
                  >
                    DESCRIPTION
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                  >
                    should return success if the card has been loaded, should
                    return pending if the card has been loaded but still
                    processing, should return failed if the card could not be
                    loaded.
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={2}
                  borderTop={"2px solid #D9D9D9"}
                  bgcolor={"#fff3d3e1"}
                  borderRight={"2px solid #D9D9D9"}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "8px" : "12px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                    color={"#12B76A"}
                  >
                    note
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={2}
                  borderTop={"2px solid #D9D9D9"}
                  bgcolor={"#fff3d3e1"}
                  borderRight={"2px solid #D9D9D9"}
                ></Grid>
                <Grid
                  item
                  md={3}
                  sm={3}
                  xs={3}
                  bgcolor={"#fff3d3e1"}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={"2px solid #D9D9D9"}
                >
                  <Box
                    bgcolor={"#FDDE80"}
                    sx={{
                      ml: deviceType === "mobile" ? 4 : 5,
                      mt: deviceType === "mobile" ? 1 : 4,
                      width: deviceType === "mobile" ? "23%" : "13%",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: deviceType === "mobile" ? "10px" : "12px",
                      }}
                      fontWeight={500}
                      color={"#BB6005"}
                    >
                      YES
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  md={5}
                  sm={5}
                  xs={5}
                  bgcolor={"#fff3d3e1"}
                  borderTop={"2px solid #D9D9D9"}
                >
                  <Typography
                  id="transaction"
                    variant="body2"
                    fontWeight={500}
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                  >
                    A note should always be sent for every call, this would be
                    displayed to the customer to know what error or success the
                    API is sending.
                  </Typography>
                </Grid>
              </Grid>
              <hr
                style={{
                  border: "1px solid #6b707f",
                  width: "100%",
                  marginTop: 30,
                  marginBottom: 30,
                }}
              />
              <Typography
                variant="body2"
                fontSize={"20px"}
                fontWeight={500}
                mb={2}
              >
                FETCH CARD TRANSACTIONS
              </Typography>
              <Typography variant="body2" fontSize={"14px"}>
                call_method == trans
              </Typography>
              <Typography variant="body2" fontSize={"16px"} my={2}>
                call method is the type of query for this call. On that URL
                specified, we shall send a variable called ‘call method’ and it
                shall contain the value called trans. Meaning that this call is
                to fetch the transactions of a specific card
              </Typography>
              <Typography variant="body2" fontSize={"16px"} mb={2}>
                POST variables sent by Peerwallet to your end point URL for this
                call are as follows;
              </Typography>
              <Typography variant="body2" fontSize={"14px"} mb={2}>
                [call_method, identifier]
              </Typography>
              <Typography
                variant="body2"
                fontSize={"16px"}
                fontWeight={400}
                my={2}
              >
                <span style={{ fontWeight: 500 }}>identifier:</span>
                This is the unique token stored when the card was created, every
                virtual card is identified by a unique token when they are being
                created. This token is called the identifier which is sent to
                this end url for you to fetch card details.
              </Typography>
              <Typography
                variant="body2"
                fontSize={"20px"}
                fontWeight={800}
                mt={3}
              >
                RETURN VALUES FOR CARD FETCH TRANSACTIONS
              </Typography>
              <Grid
                container
                border={"2px solid #D9D9D9"}
                sx={{ borderTopLeftRadius: 19, borderTopRightRadius: 19 }}
                bgcolor={"#009edd3b"}
                mt={2}
                mb={10}
              >
                <Grid item xs={2} borderRight={"2px solid #D9D9D9"}>
                  <Typography
                    variant="h2"
                    bgcolor={"#009FDD"}
                    color={"#fff"}
                    sx={{
                      borderTopLeftRadius: 20,
                      fontSize: deviceType === "mobile" ? "10px" : "14px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 2 : 3,
                    }}
                  >
                    NAME
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                    color={"#12B76A"}
                  >
                    status
                  </Typography>
                </Grid>
                <Grid item xs={2} borderRight={"2px solid #D9D9D9"}>
                  <Typography
                    variant="h2"
                    bgcolor={"#009FDD"}
                    color={"#fff"}
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "14px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 2 : 3,
                    }}
                  >
                    VALUE
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "8px" : "12px",
                      fontWeight: 600,
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                  >
                    processed or failed
                  </Typography>
                </Grid>
                <Grid
                  item
                  md={3}
                  sm={3}
                  xs={3}
                  borderRight={"2px solid #D9D9D9"}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "14px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 2 : 3,
                    }}
                    bgcolor={"#009FDD"}
                    color={"#fff"}
                  >
                    REQUIRED
                  </Typography>
                  <Box
                    bgcolor={"#FDDE80"}
                    sx={{
                      ml: deviceType === "mobile" ? 4 : 5,
                      mt: deviceType === "mobile" ? 1 : 4,
                      width: deviceType === "mobile" ? "23%" : "13%",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: deviceType === "mobile" ? "10px" : "12px",
                      }}
                      fontWeight={500}
                      color={"#BB6005"}
                    >
                      YES
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={5} sm={5} xs={5}>
                  <Typography
                    variant="h2"
                    bgcolor={"#009FDD"}
                    color={"#fff"}
                    sx={{
                      borderTopRightRadius: 20,
                      fontSize: deviceType === "mobile" ? "10px" : "14px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 2 : 3,
                    }}
                  >
                    DESCRIPTION
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                  >
                    should return processed if the details has been fetched else
                    return failed
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={2}
                  borderTop={"2px solid #D9D9D9"}
                  bgcolor={"#fff3d3e1"}
                  borderRight={"2px solid #D9D9D9"}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "8px" : "12px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                    color={"#12B76A"}
                  >
                    note
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={2}
                  borderTop={"2px solid #D9D9D9"}
                  bgcolor={"#fff3d3e1"}
                  borderRight={"2px solid #D9D9D9"}
                ></Grid>
                <Grid
                  item
                  md={3}
                  sm={3}
                  xs={3}
                  bgcolor={"#fff3d3e1"}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={"2px solid #D9D9D9"}
                >
                  <Box
                    bgcolor={"#FDDE80"}
                    sx={{
                      ml: deviceType === "mobile" ? 4 : 5,
                      mt: deviceType === "mobile" ? 1 : 4,
                      width: deviceType === "mobile" ? "23%" : "13%",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: deviceType === "mobile" ? "10px" : "12px",
                      }}
                      fontWeight={500}
                      color={"#BB6005"}
                    >
                      YES
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  md={5}
                  sm={5}
                  xs={5}
                  bgcolor={"#fff3d3e1"}
                  borderTop={"2px solid #D9D9D9"}
                >
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                  >
                    A note should always be sent for every call, this would be
                    displayed to the customer to know what error or success the
                    API is sending
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={2}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={
                    "2px solid #D9D9D9"
                  }
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      fontWeight: deviceType === "mobile" ? 500 : 700,
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                    color={"#12B76A"}
                  >
                    data [details, amount, date]
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={2}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={"2px solid #D9D9D9"}
                ></Grid>
                <Grid
                  item
                  md={3}
                  sm={3}
                  xs={3}
                  borderTop={"2px solid #D9D9D9"}
                  borderRight={"2px solid #D9D9D9"}
                >
                  <Box
                    bgcolor={"#FDDE80"}
                    sx={{
                      ml: deviceType === "mobile" ? 4 : 5,
                      mt: deviceType === "mobile" ? 1 : 4,
                      width: deviceType === "mobile" ? "23%" : "13%",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: deviceType === "mobile" ? "10px" : "12px",
                      }}
                      fontWeight={500}
                      color={"#BB6005"}
                    >
                      YES
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={5} sm={5} xs={5} borderTop={"2px solid #D9D9D9"}>
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={{
                      fontSize: deviceType === "mobile" ? "10px" : "12px",
                      p: deviceType === "mobile" ? 1 : 2,
                    }}
                  >
                    This should be a simple array of values. <br />
                    data [ details, amount, date ] <br />
                    data [ details, amount, date ] <br />
                    data [ details, amount, date ] e.t.c
                  </Typography>
                </Grid>

          
              </Grid>
            </Container>
          </Grid>
          <Grid item md={3}>
            <VirtualCardIntegrationSideBar anchor={"right"} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
