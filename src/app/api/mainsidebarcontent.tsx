"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import pw from "../../assets/images/api/pw.svg";
import Image from "next/image";

export default function MainSideBarContent(): React.JSX.Element {
  const pathname = usePathname();

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const activeStyle = {
    backgroundColor: "#b7e2f3ec",
  };

  return (
    <Box pb={8}>
      <List>
        <Box display={"flex"} alignItems={"center"} ml={4} mb={2} pt={3}>
          <Image src={pw} alt="Logo" style={{ marginRight: "60%" }} />
          <Box
            bgcolor={"#009FDD"}
            borderRadius={"4px"}
            component={Link}
            href="/api"
          >
            <IconButton>
              <Icon icon="solar:rewind-back-bold" fontSize={28} color="#fff" />
            </IconButton>
          </Box>
        </Box>

        {/* Home Link */}
        <ListItem
          sx={{
            ":hover": { bgcolor: "#b8e1f1be" },
            borderRadius: 1,
            color: "#000",
            ...(pathname === "/api" && activeStyle),
          }}
          component={Link}
          href="/api"
        >
          <Icon
            icon="material-symbols:home"
            fontSize={43}
            color="#009FDD"
            style={{ marginRight: "18px", marginLeft: 12 }}
          />
          <ListItemText
            primary="Home"
            primaryTypographyProps={{
              fontWeight: 600,
              fontSize: "18px",
            }}
          />
        </ListItem>

        {/* API Introduction Link */}
        <ListItem
          sx={{
            ":hover": { bgcolor: "#b8e1f1be" },
            borderRadius: 1,
            color: "#000",
            ...(pathname === "api/api-intro" && activeStyle),
          }}
          component={Link}
          href="/api/api-intro"
        >
          <Icon
            icon="fluent:plug-disconnected-24-filled"
            fontSize={35}
            color="#009FDD"
            style={{ marginRight: "18px", marginLeft: 12 }}
          />
          <ListItemText
            primary="API Introduction"
            primaryTypographyProps={{
              fontWeight: 600,
              fontSize: "18px",
            }}
          />
        </ListItem>

        <Container>
          <Box border={"1px solid #C5C5C5"} mb={2} mt={2}></Box>
        </Container>

        {/* Payment Integration Accordion */}
        <ListItem>
          <Accordion
            elevation={0}
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            sx={{ pb: 1 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#009FDD" }} />}
            >
              <Box display={"flex"} alignItems={"center"}>
                <Icon
                  icon="streamline:payment-10-solid"
                  style={{
                    fontSize: 18,
                    marginTop: 6,
                    marginRight: "10px",
                  }}
                  color="#009FDD"
                />
                <Typography
                  variant="body2"
                  fontWeight={500}
                  fontSize={"18px"}
                >
                  Payment Integration
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Box mt={-3} ml={1}>
                <ListItem
                  sx={{
                    ":hover": { bgcolor: "#b8e1f1be" },
                    borderRadius: 2,
                    ...(pathname === "/api/payment" && activeStyle),
                  }}
                  component={Link}
                  href="/api/payment"
                >
                  <ListItemText
                    primary="Payment Integration & Link"
                    primaryTypographyProps={{
                      fontWeight: 600,
                      fontSize: "18px",
                      color: "#009fdd",
                    }}
                  />
                </ListItem>

                <ListItem
                  sx={{
                    ":hover": { bgcolor: "#b8e1f1be" },
                    borderRadius: 2,
                    ...(pathname === "/api/recurring-payment" && activeStyle),
                  }}
                  component={Link}
                  href="/api/recurring-payment"
                >
                  <ListItemText
                    primary="Recurring payments"
                    primaryTypographyProps={{
                      fontWeight: 600,
                      fontSize: "18px",
                      color: "#009fdd",
                    }}
                  />
                </ListItem>

                <ListItem
                  sx={{
                    ":hover": { bgcolor: "#b8e1f1be" },
                    borderRadius: 2,
                    ...(pathname === "/api/payment-veri" && activeStyle),
                  }}
                  component={Link}
                  href="/api/payment-veri"
                >
                  <ListItemText
                    primary="Payment Verification"
                    primaryTypographyProps={{
                      fontWeight: 600,
                      fontSize: "18px",
                      color: "#009fdd",
                    }}
                  />
                </ListItem>

                <ListItem
                  sx={{
                    ":hover": { bgcolor: "#b8e1f1be" },
                    borderRadius: 2,
                    ...(pathname === "/api/transaction-details" &&
                      activeStyle),
                  }}
                  component={Link}
                  href="/api/transaction-details"
                >
                  <ListItemText
                    primary="Fetch Transaction Details"
                    primaryTypographyProps={{
                      fontWeight: 600,
                      fontSize: "18px",
                      color: "#009fdd",
                    }}
                  />
                </ListItem>
              </Box>
            </AccordionDetails>
          </Accordion>
        </ListItem>

        {/* Offers Accordion */}
        <ListItem>
          <Accordion
            elevation={0}
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#009FDD" }} />}
            >
              <Box display={"flex"} alignItems={"center"}>
                <Icon
                  icon="mdi:offer"
                  style={{
                    fontSize: 27,
                    marginTop: 6,
                    marginRight: "5px",
                  }}
                  color="#009FDD"
                />
                <Typography
                  variant="body2"
                  fontWeight={500}
                  fontSize={"18px"}
                  mr={15}
                >
                  Offers
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Box mt={-3} ml={1}>
                <ListItem
                  sx={{
                    ":hover": { bgcolor: "#b8e1f1be" },
                    borderRadius: 2,
                    ...(pathname === "/api/offers" && activeStyle),
                  }}
                  component={Link}
                  href="/api/offers"
                >
                  <ListItemText
                    primary="All Offers"
                    primaryTypographyProps={{
                      fontWeight: 600,
                      fontSize: "18px",
                      color: "#009fdd",
                    }}
                  />
                </ListItem>

                <ListItem
                  sx={{
                    ":hover": { bgcolor: "#b8e1f1be" },
                    borderRadius: 2,
                    ...(pathname === "/api/edit-offer" && activeStyle),
                  }}
                  component={Link}
                  href="/api/edit-offer"
                >
                  <ListItemText
                    primary="Edit Offers"
                    primaryTypographyProps={{
                      fontWeight: 600,
                      fontSize: "18px",
                      color: "#009fdd",
                    }}
                  />
                </ListItem>
              </Box>
            </AccordionDetails>
          </Accordion>
        </ListItem>

        {/* Balance Accordion */}
        <ListItem>
          <Accordion
            elevation={0}
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#009FDD" }} />}
            >
              <Box display={"flex"} alignItems={"center"}>
                <Icon
                  icon="material-symbols:account-balance-wallet"
                  style={{
                    fontSize: 27,
                    marginTop: 6,
                    marginRight: "5px",
                  }}
                  color="#009FDD"
                />
                <Typography
                  variant="body2"
                  fontWeight={500}
                  fontSize={"18px"}
                  mr={13}
                >
                  Balance
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Box mt={-3} ml={1}>
                <ListItem
                  sx={{
                    ":hover": { bgcolor: "#b8e1f1be" },
                    borderRadius: 2,
                    ...(pathname === "/api/acc-bal" && activeStyle),
                  }}
                  component={Link}
                  href="/api/acc-bal"
                >
                  <ListItemText
                    primary="Account Balance"
                    primaryTypographyProps={{
                      fontWeight: 600,
                      fontSize: "18px",
                      color: "#009fdd",
                    }}
                  />
                </ListItem>
                <ListItem
                  sx={{
                    ":hover": { bgcolor: "#b8e1f1be" },
                    borderRadius: 2,
                    ...(pathname === "/api/balance-ledger" && activeStyle),
                  }}
                  component={Link}
                  href="/api/balance-ledger"
                >
                  <ListItemText
                    primary="Balance Ledgers"
                    primaryTypographyProps={{
                      fontWeight: 600,
                      fontSize: "18px",
                      color: "#009fdd",
                    }}
                  />
                </ListItem>
              </Box>
            </AccordionDetails>
          </Accordion>
        </ListItem>

        <Container>
          <Box border={"1px solid #C5C5C5"} my={1}></Box>
        </Container>

        {/* Virtual Card Integration Link */}
        <ListItem
          sx={{
            ":hover": { bgcolor: "#b8e1f1be" },
            borderRadius: 2,
            color:"#000",
            ...(pathname === "/api/virtual-card" && activeStyle),
          }}
          component={Link}
          href="/api/virtual-card"
        >
          <Icon
            icon="ant-design:credit-card-filled"
            fontSize={30}
            color="#009FDD"
            style={{ marginRight: "18px", marginLeft: 12 }}
          />
          <ListItemText
            primary="Virtual Card Integration"
            primaryTypographyProps={{
              fontWeight: 600,
              fontSize: "18px",
            }}
          />
        </ListItem>

        {/* Virtual Card Services Link */}
        <ListItem
          sx={{
            ":hover": { bgcolor: "#b8e1f1be" },
            borderRadius: 2,
            color:"#000",
            ...(pathname === "/api/virtual-card-services" && activeStyle),
          }}
          component={Link}
          href="/api/virtual-card-services"
        >
          <Icon
            icon="ph:code-fill"
            fontSize={30}
            color="#009FDD"
            style={{ marginRight: "18px", marginLeft: 12 }}
          />
          <ListItemText
            primary="Virtual Card Services"
            primaryTypographyProps={{
              fontWeight: 600,
              fontSize: "18px",
            }}
          />
        </ListItem>

        {/* Vouchers Accordion */}
        <ListItem>
          <Accordion
            elevation={0}
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#009FDD" }} />}
            >
              <Box display={"flex"} alignItems={"center"}>
                <Icon
                  icon="mdi:voucher"
                  fontSize={30}
                  color="#009FDD"
                  style={{ marginRight: "18px" }}
                />
                <Typography
                  variant="body2"
                  fontWeight={500}
                  fontSize={"18px"}
                  mr={9}
                >
                  Vouchers
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Box mt={-3} ml={3}>
                <ListItem
                  sx={{
                    ":hover": { bgcolor: "#b8e1f1be" },
                    borderRadius: 2,
                    color:"#000",
                    ...(pathname === "/api/voucher-issue" && activeStyle),
                  }}
                  component={Link}
                  href="/api/voucher-issue"
                >
                  <ListItemText
                    primary="Issue"
                    primaryTypographyProps={{
                      fontWeight: 600,
                      fontSize: "18px",
                      color: "#009fdd",
                    }}
                  />
                </ListItem>

                <ListItem
                  sx={{
                    ":hover": { bgcolor: "#b8e1f1be" },
                    borderRadius: 2,
                    color:"#000",
                    ...(pathname === "/api/voucher-list" && activeStyle),
                  }}
                  component={Link}
                  href="/api/voucher-list"
                >
                  <ListItemText
                    primary="List"
                    primaryTypographyProps={{
                      fontWeight: 600,
                      fontSize: "18px",
                      color: "#009fdd",
                    }}
                  />
                </ListItem>
              </Box>
            </AccordionDetails>
          </Accordion>
        </ListItem>

        {/* User Details Link */}
        <ListItem
          sx={{
            ":hover": { bgcolor: "#b8e1f1be" },
            borderRadius: 2,
            color:"#000",
            ...(pathname === "/api/user-details" && activeStyle),
          }}
          component={Link}
          href="/api/user-details"
        >
          <Icon
            icon="mdi:user"
            fontSize={30}
            color="#009FDD"
            style={{ marginRight: "18px", marginLeft: 12 }}
          />
          <ListItemText
            primary="User Details"
            primaryTypographyProps={{
              fontWeight: 600,
              fontSize: "18px",
            }}
          />
        </ListItem>

        {/* Exchange Rates Link */}
        <ListItem
          sx={{
            ":hover": { bgcolor: "#b8e1f1be" },
            borderRadius: 2,
            color:"#000",
            ...(pathname === "/api/exchange-rate" && activeStyle),
          }}
          component={Link}
          href="/api/exchange-rate"
        >
          <Icon
            icon="ri:exchange-fill"
            fontSize={30}
            color="#009FDD"
            style={{ marginRight: "18px", marginLeft: 12 }}
          />
          <ListItemText
            primary="Exchange Rates"
            primaryTypographyProps={{
              fontWeight: 600,
              fontSize: "18px",
            }}
          />
        </ListItem>

        <Container>
          <Box border={"1px solid #C5C5C5"} my={1}></Box>
        </Container>

        {/* Available Languages Link */}
        <ListItem
          sx={{
            ":hover": { bgcolor: "#b8e1f1be" },
            borderRadius: 2,
            color:"#000",
            ...(pathname === "/api/languages" && activeStyle),
          }}
          component={Link}
          href="/api/languages"
        >
          <Icon
            icon="clarity:language-solid"
            fontSize={30}
            color="#009FDD"
            style={{ marginRight: "18px", marginLeft: 12 }}
          />
          <ListItemText
            primary="Available Languages"
            primaryTypographyProps={{
              fontWeight: 600,
              fontSize: "18px",
            }}
          />
        </ListItem>

        {/* Available Countries Link */}
        <ListItem
          sx={{
            ":hover": { bgcolor: "#b8e1f1be" },
            borderRadius: 2,
            color:"#000",
            ...(pathname === "/api/available-countries" && activeStyle),
          }}
          component={Link}
          href="/api/available-countries"
        >
          <Icon
            icon="mdi:location"
            fontSize={30}
            color="#009FDD"
            style={{ marginRight: "18px", marginLeft: 12 }}
          />
          <ListItemText
            primary="Available Countries"
            primaryTypographyProps={{
              fontWeight: 600,
              fontSize: "18px",
            }}
          />
        </ListItem>

        {/* Currencies Link */}
        <ListItem
          sx={{
            ":hover": { bgcolor: "#b8e1f1be" },
            borderRadius: 2,
            color:"#000",
            ...(pathname === "/api/currencies" && activeStyle),
          }}
          component={Link}
          href="/api/currencies"
        >
          <Icon
            icon="material-symbols:universal-currency-alt"
            fontSize={30}
            color="#009FDD"
            style={{ marginRight: "18px", marginLeft: 12 }}
          />
          <ListItemText
            primary="Currencies"
            primaryTypographyProps={{
              fontWeight: 600,
              fontSize: "18px",
            }}
          />
        </ListItem>

        {/* Transfer Funds Link */}
        <ListItem
          sx={{
            ":hover": { bgcolor: "#b8e1f1be" },
            borderRadius: 2,
            color:"#000",
            ...(pathname === "/api/tranfer-funds" && activeStyle),
          }}
          component={Link}
          href="/api/tranfer-funds"
        >
          <Icon
            icon="heroicons:currency-dollar-solid"
            fontSize={30}
            color="#009FDD"
            style={{ marginRight: "18px", marginLeft: 12 }}
          />
          <ListItemText
            primary="Transfer Funds"
            primaryTypographyProps={{
              fontWeight: 600,
              fontSize: "18px",
            }}
          />
        </ListItem>

        {/* Payment Methods Link */}
        <ListItem
          sx={{
            ":hover": { bgcolor: "#b8e1f1be" },
            borderRadius: 2,
            color:"#000",
            ...(pathname === "/api/payment-methods" && activeStyle),
          }}
          component={Link}
          href="/api/payment-methods"
        >
          <Icon
            icon="solar:card-transfer-bold"
            fontSize={30}
            color="#009FDD"
            style={{ marginRight: "18px", marginLeft: 12 }}
          />
          <ListItemText
            primary="Payment Methods"
            primaryTypographyProps={{
              fontWeight: 600,
              fontSize: "17px",
            }}
          />
        </ListItem>
      </List>
    </Box>
  );
}
