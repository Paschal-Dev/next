"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { SendButton } from "./buttons";
import { theme } from "../../../../assets/themes/theme";
import usd from "../../../../assets/images/send/usd.png";
import eur from "../../../../assets/images/send/eur.png";
import { MediaProps } from "../../../../utils/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Currencies {
  value: string;
  label: string;
  img: string;
  symbol: string;
}

const currencies: Currencies[] = [
  { value: "usd", label: "USD", img: `${usd.src}`, symbol: "$" },
  { value: "gbp", label: "GBP", img: `${usd.src}`, symbol: "£" },
  { value: "eur", label: "EUR", img: `${eur.src}`, symbol: "€" },
];

export default function MainPageWidget({
  deviceType,
}: MediaProps): React.JSX.Element {
  const [selectedCurrency, setSelectedCurrency] = React.useState<string>(
    currencies[0].value
  );
  const [amount, setAmount] = React.useState<string>("1000");
  const [loggedIn, setLoggedIn] = React.useState(false);
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCurrency(event.target.value);
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const selectedCurrencyObj = currencies.find(
    (currency) => currency.value === selectedCurrency
  );

  const selectedCurrencyIcon = currencies.find(
    (currency) => currency.value === selectedCurrency
  );

  React.useEffect(() => {
    setLoggedIn(Math.random() > 0.5);
  }, []);

  return (
    <Box
      bgcolor={"#fff"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      gap={4}
      border={`1px solid ${theme.palette.primary.main}`}
      py={6}
      px={deviceType === "mobile" ? 2 : 4}
      borderRadius={4}
      width={deviceType === "mobile" ? "100%" : "80%"}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        pb={1}
        borderBottom={`1px solid ${theme.palette.primary.main}`}
      >
        <Icon
          icon="mdi:bank"
          color="#fff"
          style={{
            padding: 5,
            background: theme.palette.primary.main,
            borderRadius: "50%",
          }}
        />
        <Typography variant="h5" fontWeight={700} marginLeft={1}>
          Send <span style={{ color: theme.palette.primary.main }}>Money</span>
        </Typography>
      </Box>
      <Box>
        <Typography variant="body2" fontWeight={800} ml={1} mb={1}>
          Enter Amount
        </Typography>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          border={`1px solid ${theme.palette.primary.main}`}
          bgcolor="#e0f3fa"
          px={deviceType === "mobile" ? 2 : 4}
          py={2}
          borderRadius={3}
        >
          <Box display={"flex"} alignItems={"center"}>
            {selectedCurrencyIcon && (
              <Typography
                variant="body1"
                fontSize={22}
                fontWeight={800}
                pt={"4px"}
              >
                {selectedCurrencyIcon.symbol}
              </Typography>
            )}
            <input
              type="number"
              name=""
              value={amount}
              onChange={handleAmountChange}
              id=""
              style={{
                padding: 4,
                border: "none",
                outline: "none",
                fontWeight: 800,
                fontSize: 20,
                background: "none",
                width: "100%",
              }}
            />
          </Box>
          <Box
            bgcolor={"#fff"}
            px={2}
            py={1}
            borderRadius={6}
            display={"flex"}
            alignItems={"center"}
          >
            {selectedCurrencyObj && (
              <Image
                src={selectedCurrencyObj.img}
                alt={selectedCurrencyObj.label}
                width={20}
                height={20}
                style={{ marginRight: 4, width: "100%", height: "auto" }}
              />
            )}
            <select
              value={selectedCurrency}
              onChange={handleChange}
              style={{ border: "none", outline: "none", fontWeight: 800 }}
            >
              {currencies.map((currency) => (
                <option key={currency.value} value={currency.value}>
                  {currency.label}
                </option>
              ))}
            </select>
          </Box>
        </Box>
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap={2}>
        <SendButton
          text={loggedIn ? "Continue" : "Continue As Guest"}
          color="#fff"
          bgcolor={theme.palette.primary.main}
          shadowcolor="#d8f0fa"
          onclick={() => router.push("/send/send-money")}
        />
        {!loggedIn && (
          <SendButton
            text="Already have an account? Login"
            color="#000"
            bgcolor={theme.palette.secondary.main}
            shadowcolor="#f9f7e6"
          />
        )}
      </Box>
    </Box>
  );
}
