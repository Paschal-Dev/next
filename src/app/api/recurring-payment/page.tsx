"use client";
import {
  Box,
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MainSideBar from "../component/mainsidebar";
import RecurringSidebar from "./recurring-sidebar";
import { theme } from "@/assets/themes/theme";

export default function RecurringPayment(): React.JSX.Element {

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
            <Container  id="Reccuring-Payments">
              <Box
                mt={deviceType === "mobile" ? 5 : 4}
                mb={deviceType === "mobile" ? 6 : ""}
              >
                <Typography
                  variant="h2"
                  fontSize={20}
                  fontWeight={900}
                 
                >
                  Recurring Payments
                </Typography>
                <Typography variant="body2" fontSize={"16px"} mt={1}>
                  If you want set recurring payments, it’s all the same method
                  when creating a payment link. Just set recurring to yes and
                  send in recurring_duration as Daily, Weekly, Monthly,
                  Quarterly, Half-Yearly or Yearly.
                </Typography>
                <Typography
                  variant="body2"
                  fontSize={"16px"}
                  fontWeight={400}
                  mt={2}
                >
                  The call back URL you have specified would receive a response
                  when the user has paid for the invoice, cancelled or has
                  failed. We shall send the following as POST to your call back
                  URL;
                </Typography>
                <Box mt={3}>
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    fontSize={"16px"}
                  >
                    call_method == recurring
                    <br /> <br />
                    secret == ‘the secret key sent when creating the payment
                    link’
                    <br /> <br />
                    response == paid, cancelled or failed
                    <br /> <br />
                    api-secret-key == we shall send your secret key via the
                    headers
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  fontSize={"16px"}
                  fontWeight={400}
                  mt={2}
                >
                  <span style={{ fontSize: "18px", fontWeight: 500 }}>
                    paid:
                  </span>
                  means the user has paid for the subscription
                </Typography>
                <Typography
                  variant="body2"
                  fontSize={"16px"}
                  fontWeight={400}
                  mt={2}
                >
                  <span style={{ fontSize: "18px", fontWeight: 500 }}>
                    cancelled:
                  </span>
                  means the user has cancelled the subscription, you should
                  further delete or terminate the service.
                </Typography>
                <Typography
                  variant="body2"
                  fontSize={"16px"}
                  fontWeight={400}
                  mt={2}
                >
                  <span style={{ fontSize: "18px", fontWeight: 500 }}>
                    failed:
                  </span>
                  means the user doesn't have not enough to pay the
                  subscription, you should further delete or terminate the
                  service.
                </Typography>
                <Typography
                  variant="body2"
                  fontSize={"16px"}
                  fontWeight={400}
                  mt={2}
                  id="Explanation-Table"
                >
                  Peerwallet would continue to send those values to your call
                  back URL until it receives a response.
                </Typography>
                <Typography
                  variant="body2"
                  fontSize={"16px"}
                  fontWeight={400}
                  mt={2}
                >
                  The expected response is; success (json response)
                </Typography>
                <Typography
                  variant="body2"
                  fontSize={"16px"}
                  fontWeight={400}
                  mt={2}
                >
                  Returning success via json would indicate that your script has
                  received and has acted accordingly based on the response
                  received.
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
              <Typography variant="body2" fontSize={"20px"} fontWeight={800} id="Explanation-Table">
                Values your call back URL would receive
              </Typography>
              <TableContainer
                sx={{
                  border: "1px solid #D9D9D9 ",
                  borderRadius: deviceType === "mobile" ? 5 : 10,
                  mb: 5,
                  mt: 1,
                }}
              >
                <Table
                  sx={{ minWidth: "100%", overflow: "none" }}
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow sx={{ bgcolor: "#009FDD" }}>
                      <TableCell
                        sx={{
                          p: deviceType === "mobile" ? 2 : 5,
                          borderRight: "1px solid #D9D9D9",
                          width: "25%",
                        }}
                      >
                        {" "}
                        <Typography
                          variant="h2"
                          sx={{
                            fontWeight: deviceType === "mobile" ? 600 : 900,
                            fontSize: deviceType === "mobile" ? "13px" : "18px",
                          }}
                          bgcolor={"#009FDD"}
                          color={"#fff"}
                        >
                          VALUE
                        </Typography>
                      </TableCell>
                      <TableCell align="center" sx={{ width: deviceType === "mobile"? "15%" : "25%" }}>
                        
                        <Typography
                          variant="h2"
                          sx={{
                            fontWeight: deviceType === "mobile" ? 600 : 900,
                            fontSize: deviceType === "mobile" ? "13px" : "18px",
                          }}
                          bgcolor={"#009FDD"}
                          color={"#fff"}
                        >
                          SAMPLE <br style={{display: deviceType === "mobile" ? "flex" : "none"}} />VALUE
                        </Typography>
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          p: deviceType === "mobile" ? 1 : 5,
                          borderLeft: "1px solid #D9D9D9",
                          width:deviceType === "mobile"? "60%" :  "50%",
                        }}
                      >
                        {" "}
                        <Typography
                          variant="h2"
                          sx={{
                            fontWeight: deviceType === "mobile" ? 600 : 900,
                            fontSize: deviceType === "mobile" ? "13px" : "18px",
                          }}
                          bgcolor={"#009FDD"}
                          color={"#fff"}
                        >
                          DESCRIPTION
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow sx={{ bgcolor: "#009edd3b" }}>
                      <TableCell sx={{ borderRight: "1px solid #D9D9D9" }}>
                        {" "}
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 400,
                            fontSize: deviceType === "mobile" ? "12px" : "14px",
                            color: "#12B76A",
                          }}
                        >
                          call_method
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 400,
                            fontSize: deviceType === "mobile" ? "12px" : "14px",
                            color: "#BB6005",
                          }}
                        >
                          recurring
                        </Typography>
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ borderLeft: "1px solid #D9D9D9" }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 400,
                            fontSize: "14px",
                          }}
                        >
                          This is a constant value. The call_method will always
                          return the value:{" "}
                          <span style={{ fontSize: "18px", fontWeight: 600 }}>
                            recurring
                          </span>
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ bgcolor: "#fff3d3e1" }}>
                      <TableCell sx={{ borderRight: "1px solid #D9D9D9" }}>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 400,
                            fontSize: deviceType === "mobile" ? "12px" : "14px",
                            color: "#12B76A",
                          }}
                        >
                          secret
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 400,
                            fontSize: deviceType === "mobile" ? "12px" : "14px",
                            color: "#BB6005",
                          }}
                        >
                          Hjyr7yGFUttt7<br style={{display: deviceType === "mobile" ? "flex" : "none"}} />89rhvfHki
                        </Typography>
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ borderLeft: "1px solid #D9D9D9" }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 400,
                            fontSize: "14px",
                          }}
                        >
                          Here a unique secret key sent when creating the
                          payment link, this unique code is what identifies each
                          link you have created.
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ bgcolor: "#009edd3b" }}>
                      <TableCell sx={{ borderRight: "1px solid #D9D9D9" }}>
                        {" "}
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 400,
                            fontSize: deviceType === "mobile" ? "12px" : "14px",
                            color: "#12B76A",
                          }}
                        >
                          response
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 400,
                            fontSize: deviceType === "mobile" ? "12px" : "14px",
                            color: "#BB6005",
                          }}
                        >
                          paid
                        </Typography>
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ borderLeft: "1px solid #D9D9D9" }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 400,
                            fontSize: "14px",
                          }}
                        >
                          Response would include any of the following:
                          <span style={{ fontSize: "18px", fontWeight: 600 }}>
                            paid, cancelled or failed
                          </span>
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ bgcolor: "#fff3d3e1" }}>
                      <TableCell sx={{ borderRight: "1px solid #D9D9D9" }}>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 400,
                            fontSize: deviceType === "mobile" ? "12px" : "14px",
                            color: "#12B76A",
                          }}
                        >
                          api-secret-key
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 400,
                            fontSize: deviceType === "mobile" ? "12px" : "14px",
                            color: "#BB6005",
                          }}
                        >
                          GUYRERT37674876tUY<br style={{display: deviceType === "mobile" ? "flex" : "none"}} />VTr65876tyiguug5687
                        </Typography>
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ borderLeft: "1px solid #D9D9D9" }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 400,
                            fontSize: "14px",
                          }}
                        >
                          We shall send you your secret key on Peerwallet to
                          further secure this the authenticity of this call.
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <hr
                style={{
                  border: "1px solid #6b707f",
                  width: "100%",
                  marginTop: 30,
                  marginBottom: 30,
                }}
              />
              <Typography variant="body2" fontSize={"20px"} fontWeight={800} mt={3}>
              Expected response
              </Typography>
              <TableContainer
                sx={{
                  border: "1px solid #D9D9D9 ",
                  borderRadius: deviceType === "mobile" ? 5 : 10,
                  mb: 15,
                  mt: 1,
                }}
              >
                <Table
                  sx={{ minWidth: "100%", overflow: "none" }}
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow sx={{ bgcolor: "#009FDD" }}>
                      <TableCell
                        sx={{
                          p: deviceType === "mobile" ? 2 : 5,
                          borderRight: "1px solid #D9D9D9",
                          width: "25%",
                        }}
                      >
                        <Typography
                          variant="h2"
                          sx={{
                            fontWeight: deviceType === "mobile" ? 600 : 900,
                            fontSize: deviceType === "mobile" ? "13px" : "18px",
                          }}
                          bgcolor={"#009FDD"}
                          color={"#fff"}
                        >
                          VALUE
                        </Typography>
                      </TableCell>
                      <TableCell align="center" sx={{ width: "25%" }}>
                        {" "}
                        <Typography></Typography>{" "}
                        <Typography
                          variant="h2"
                          sx={{
                            fontWeight: deviceType === "mobile" ? 600 : 900,
                            fontSize: deviceType === "mobile" ? "13px" : "18px",
                          }}
                          bgcolor={"#009FDD"}
                          color={"#fff"}
                        >
                          EXPECTED RESPONSE
                        </Typography>
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          p: deviceType === "mobile" ? 1 : 5,
                          borderLeft: "1px solid #D9D9D9",
                          width: "50%",
                        }}
                      >
                        {" "}
                        <Typography
                          variant="h2"
                          sx={{
                            fontWeight: deviceType === "mobile" ? 600 : 900,
                            fontSize: deviceType === "mobile" ? "13px" : "18px",
                          }}
                          bgcolor={"#009FDD"}
                          color={"#fff"}
                        >
                          DESCRIPTION
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow sx={{ bgcolor: "#009edd3b" }}>
                      <TableCell sx={{ borderRight: "1px solid #D9D9D9" }}>
                        {" "}
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 400,
                            fontSize: deviceType === "mobile" ? "12px" : "14px",
                            color: "#12B76A",
                          }}
                        >
                        status

                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 400,
                            fontSize: deviceType === "mobile" ? "12px" : "14px",
                            color: "#BB6005",
                          }}
                        >
                         success
                        </Typography>
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ borderLeft: "1px solid #D9D9D9" }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 400,
                            fontSize: "14px",
                          }}
                        >
                         You are expected to return success when this has been processed.
If no response is returned, Peerwallet would continue to send values to
your specified call back URL for the next 5 days. Response should be in Json
                        </Typography>
                      </TableCell>
                    </TableRow>
                   
                  </TableBody>
                </Table>
              </TableContainer>

            </Container>
          </Grid>
          <Grid item md={3}>
            <RecurringSidebar anchor={"right"} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
