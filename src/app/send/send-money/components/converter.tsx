/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { theme } from "../../../../assets/themes/theme";
import usd from "../../../../assets/images/send/usd.png";
import eur from "../../../../assets/images/send/eur.png";
import { MediaProps } from "../../../../utils/utils";
import Image from "next/image";

interface Currencies {
  value: string;
  label: string;
  img: string;
  symbol: string;
  conversionRateToUSD: number;
}

const currencies: Currencies[] = [
  {
    value: "usd",
    label: "USD",
    img: `${usd.src}`,
    symbol: "$",
    conversionRateToUSD: 1,
  },
  {
    value: "gbp",
    label: "GBP",
    img: `${usd.src}`,
    symbol: "£",
    conversionRateToUSD: 0.73,
  },
  {
    value: "eur",
    label: "EUR",
    img: `${eur.src}`,
    symbol: "€",
    conversionRateToUSD: 0.85,
  },
];

export default function Converter({
  deviceType,
}: MediaProps): React.JSX.Element {
  const [currency1, setCurrency1] = React.useState<string>(currencies[0].value);
  const [currency2, setCurrency2] = React.useState<string>(currencies[2].value);
  const [amount1, setAmount1] = React.useState<string>("1000.00");
  const [amount2, setAmount2] = React.useState<string>("");

  const updateAmount2 = (newAmount1: string) => {
    const conversionRate =
      currencies.find((currency) => currency.value === currency2)
        ?.conversionRateToUSD || 1;
    const convertedAmount = (
      (parseFloat(newAmount1) /
        (currencies.find((currency) => currency.value === currency1)
          ?.conversionRateToUSD || 1)) *
      conversionRate
    ).toFixed(2);
    setAmount2(convertedAmount);
  };

  const updateAmount1 = (newAmount2: string) => {
    const conversionRate =
      currencies.find((currency) => currency.value === currency1)
        ?.conversionRateToUSD || 1;
    const convertedAmount = (
      (parseFloat(newAmount2) /
        (currencies.find((currency) => currency.value === currency2)
          ?.conversionRateToUSD || 1)) *
      conversionRate
    ).toFixed(2);
    setAmount1(convertedAmount);
  };

  const handleCurrency1Change = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newCurrency = event.target.value;
    setCurrency1(newCurrency);
    updateAmount2(amount1);
  };

  const handleCurrency2Change = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newCurrency = event.target.value;
    setCurrency2(newCurrency);
    updateAmount1(amount2);
  };

  const handleAmount1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = event.target.value;
    setAmount1(newAmount);
    updateAmount2(newAmount);
  };

  const handleAmount2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = event.target.value;
    setAmount2(newAmount);
    updateAmount1(newAmount);
  };

  // Initial conversion on component load
  useEffect(() => {
    updateAmount2(amount1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency1, currency2]);

  const conversionRate =
    (currencies.find((currency) => currency.value === currency2)
      ?.conversionRateToUSD || 1) /
    (currencies.find((currency) => currency.value === currency1)
      ?.conversionRateToUSD || 1);

  return (
    <Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        border={`1px solid ${theme.palette.primary.main}`}
        px={deviceType === "mobile" ? 2 : 4}
        py={1}
        borderRadius={3}
      >
        <Box>
          <Typography variant="caption" fontSize={10} fontWeight={600}>
            You'll Send
          </Typography>
          <Box display={"flex"} alignItems={"center"}>
            <Typography variant="body1" fontSize={22} fontWeight={800}>
              {
                currencies.find((currency) => currency.value === currency1)
                  ?.symbol
              }
            </Typography>
            <input
              type="number"
              value={amount1}
              onChange={handleAmount1Change}
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
        </Box>
        <Box
          bgcolor={"#F6F6F6"}
          px={2}
          py={1}
          borderRadius={6}
          display={"flex"}
          alignItems={"center"}
        >
          <Image
            src={
              currencies.find((currency) => currency.value === currency1)
                ?.img || ""
            }
            width={20}
            height={20}
            alt={currency1}
          />
          <select
            value={currency1}
            onChange={handleCurrency1Change}
            style={{
              border: "none",
              outline: "none",
              fontWeight: 800,
              background: "#F6F6F6",
            }}
          >
            {currencies.map((currency) => (
              <option key={currency.value} value={currency.value}>
                {currency.label}
              </option>
            ))}
          </select>
        </Box>
      </Box>

      <Box
        m={"auto"}
        width={"88%"}
        color={theme.palette.primary.main}
        position={"relative"}
        py={2}
        display={"flex"}
        flexDirection={"column"}
        gap={1}
      >
        <Box
          component="span"
          height="100%"
          borderLeft={`1px dashed ${theme.palette.primary.main}`}
          position="absolute"
          left={deviceType === "mobile" ? "1.5%" : "1%"}
          top="0"
        />
        <Box display="flex" alignItems="center">
          <Box
            component="span"
            width={7}
            height={7}
            borderRadius="50%"
            bgcolor={theme.palette.primary.main}
            ml={0.2}
            mr={1}
          />

          <Grid container justifyContent="space-between">
            <Grid item xs={7} md={9}>
              <Typography variant="caption" fontSize={12} fontWeight={700}>
                Current Exchange Rate
              </Typography>
            </Grid>
            <Grid item xs={5} md={3}>
              <Typography variant="caption" fontSize={12} fontWeight={700}>
                1{" "}
                {
                  currencies.find((currency) => currency.value === currency1)
                    ?.label
                }{" "}
                = {conversionRate.toFixed(2)}{" "}
                {
                  currencies.find((currency) => currency.value === currency2)
                    ?.label
                }
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box display="flex" alignItems="center" position="relative">
          <Box
            component="span"
            width={7}
            height={7}
            borderRadius="50%"
            bgcolor={theme.palette.primary.main}
            ml={0.2}
            mr={1}
          />
          <Grid container>
            <Grid item xs={7} md={9}>
              <Typography variant="caption" fontSize={12} fontWeight={700}>
                Peerwallet's Fee
              </Typography>
            </Grid>
            <Grid item xs={5} md={3} display={"flex"} justifyContent={"start"}>
              <Typography variant="caption" fontSize={12} fontWeight={700}>
                0.00USD
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        border={`1px solid ${theme.palette.primary.main}`}
        px={deviceType === "mobile" ? 2 : 4}
        py={1}
        borderRadius={3}
      >
        <Box>
          <Typography variant="caption" fontSize={10} fontWeight={600}>
            Recipient Conversion
          </Typography>
          <Box display={"flex"} alignItems={"center"}>
            <Typography variant="body1" fontSize={22} fontWeight={800}>
              {
                currencies.find((currency) => currency.value === currency2)
                  ?.symbol
              }
            </Typography>
            <input
              type="number"
              value={amount2}
              onChange={handleAmount2Change}
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
        </Box>
        <Box
          bgcolor={"#F6F6F6"}
          px={2}
          py={1}
          borderRadius={6}
          display={"flex"}
          alignItems={"center"}
        >
          <Image
            src={
              currencies.find((currency) => currency.value === currency2)
                ?.img || ""
            }
            width={20}
            height={20}
            alt={currency2}
          />
          <select
            value={currency2}
            onChange={handleCurrency2Change}
            style={{
              border: "none",
              outline: "none",
              fontWeight: 800,
              background: "#F6F6F6",
            }}
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
  );
}
