import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { SelectInput, TextInput } from "../components/inputs";
import { theme } from "../../../assets/themes/theme";
import VIcon from "../../../assets/images/rv/rv-voucher-icon.png";
import Image from "next/image";
// import { MediaProps } from "../../../utils/utils";

interface FormProps {
  onSubmit: () => void;
}

export default function Form({ onSubmit }: FormProps): React.JSX.Element {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Perform validation here
    onSubmit();
  };

  return (
    <Box display={"flex"} flexDirection={"column"} gap={4}>
      <Box display={"flex"} flexDirection={"column"} gap={1}>
        <Box display={"flex"} gap={2}>
          <Box
            height={30}
            width={30}
            bgcolor={theme.palette.primary.main}
            borderRadius={"50%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Image src={VIcon} alt="" />
          </Box>
          <Typography variant="h5" fontWeight={700}>
            <span style={{ color: theme.palette.primary.main }}>Redeem</span>{" "}
            Peerwallet Voucher
          </Typography>
        </Box>
        <Box borderBottom={`1px solid ${theme.palette.primary.main}`} />
        <Box bgcolor={"#e2f4fb"} px={2} py={1} borderRadius={3}>
          <Typography
            variant="body2"
            fontSize={11}
            color={theme.palette.primary.main}
            fontWeight={500}
          >
            Validate and redeem your PeerWallet voucher. Your PeerWallet Voucher
            opens ways for more possibilities!
          </Typography>
        </Box>
      </Box>
      <Box>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Grid container spacing={2} rowSpacing={4}>
            <Grid item xs={12} sm={6}>
              <TextInput
                id="first-name"
                label="First Name"
                placeholder="Sylvester"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextInput id="last-name" label="Last Name" placeholder="Doe" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextInput
                id="email"
                label="Email Address"
                type="email"
                placeholder="sylvesterdoe@gmail.com"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SelectInput
                id="country"
                label="Country"
                options={[
                  { value: "USA", label: "USA" },
                  { value: "Canada", label: "Canada" },
                  { value: "UK", label: "UK" },
                ]}
              />
            </Grid>
            <Grid item xs={12}>
              <TextInput
                id="voucher"
                label="Enter Voucher"
                placeholder="7Kd84QzYXh32Ln0fU8wVJ9AcT"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  fontSize: 14,
                  padding: 2,
                  borderRadius: 3,
                  boxShadow: "1px 1px 10px rgba(229, 245, 253)",
                }}
                type="submit"
              >
                Validate Voucher
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
}
