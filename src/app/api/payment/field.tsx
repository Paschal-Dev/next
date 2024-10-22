/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Box, Container, Typography } from "@mui/material";

export default function Field(): React.JSX.Element {
  return (
    <Box pt={3}>
      <Container>
        <Typography variant="h2" fontWeight={700} fontSize={"28px"} id="field">
          Post Fields
        </Typography>
        <Box bgcolor={"#004E6D"} p={3} mt={3} borderRadius={3}>
          <Typography
            variant="body2"
            fontWeight={500}
            fontSize={"16px"}
            color={"#17FF93"}
          >
            <span style={{ color: "#fff" }}>[</span>
            <br />
            &ldquo api-public-key &ldquo<span style={{ color: "#fff" }}>,</span> <br />{" "}
            "email"<span style={{ color: "#fff" }}>,</span> <br />
            "amount"<span style={{ color: "#fff" }}>,</span> <br />{" "}
            "currency_code"<span style={{ color: "#fff" }}>,</span> <br />
            "secret"<span style={{ color: "#fff" }}>,</span> <br />
            "redirect_url"<span style={{ color: "#fff" }}>,</span> <br />
            "post_url"<span style={{ color: "#fff" }}>,</span> <br />
            "off_id"
            <br />
            <span style={{ color: "#fff" }}>]</span>
          </Typography>
        </Box>
        <Typography variant="h2" fontWeight={700} fontSize={"28px"} pt={3} id="success">
          Return Values Success Sample
        </Typography>
        <Box bgcolor={"#004E6D"} p={3} mt={3} borderRadius={3}>
          <Typography
            variant="body2"
            fontWeight={500}
            fontSize={"16px"}
            color={"#FB8888"}
          >
            <span style={{ color: "#fff" }}>{"{"}</span>
            <br />
            "status": <span style={{ color: "#FCC82B" }}>200</span>
            <span style={{ color: "#fff" }}>,</span> <br />
            "pay_link":{" "}
            <span style={{ color: "#17FF93" }}>
              "https://peerwallet.com/pay/?v=0000000000",
            </span>{" "}
            <br />
            "amount": <span style={{ color: "#FCC82B" }}> 10.3,</span>
            <br />
            "currency": <span style={{ color: "#17FF93" }}>"EUR"</span>{" "}
            <span style={{ color: "#fff" }}>,</span> <br />
            "note":{" "}
            <span style={{ color: "#17FF93" }}> "Payment link processed"</span>
            <br />
            <span style={{ color: "#fff" }}>{"}"}</span>
          </Typography>
        </Box>
        <Typography variant="h2" fontWeight={700} fontSize={"28px"} pt={3} id="error">
          Return Values Error Sample
        </Typography>
        <Box bgcolor={"#004E6D"} p={3} mt={3} borderRadius={3}>
          <Typography
            variant="body2"
            fontWeight={500}
            fontSize={"16px"}
            color={"#FB8888"}
          >
            <span style={{ color: "#fff" }}>{"{"}</span>
            <br />
            "status": <span style={{ color: "#FCC82B" }}>111</span>
            <span style={{ color: "#fff" }}>,</span> <br />
            "note":
            <span style={{ color: "#17FF93" }}>
              "API key is either not correct or its in-active"
            </span>
            <br />
            <span style={{ color: "#fff" }}>{"}"}</span>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
