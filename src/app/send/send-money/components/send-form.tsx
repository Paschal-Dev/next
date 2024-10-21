import React from "react";
import { Box, SelectChangeEvent, Typography } from "@mui/material";
import { theme } from "../../../../assets/themes/theme";
import {
  FormInput,
  FormSelectInput,
  PasteFormInput,
} from "../components/form-inputs";

export default function SendForm(): React.JSX.Element {
  const options = [
    { label: "Checking", value: "checking" },
    { label: "Saving", value: "saving" },
  ];
  const [selectedOption, setSelectedOption] = React.useState(options[0].value);
  const [formData, setFormData] = React.useState({
    fullName: "",
    accountNumber: "",
    routingNumber: "",
    iban: "",
  });

  const handlePasteClick = (field: keyof typeof formData) => {
    navigator.clipboard.readText().then((text) => {
      setFormData((prevState) => ({ ...prevState, [field]: text }));
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Box>
      <Typography variant="h6" fontSize={16} fontWeight={700}>
        Recipient Details
      </Typography>
      <Box
        borderTop={`1px solid ${theme.palette.primary.main}`}
        py={2}
        display={"flex"}
        flexDirection={"column"}
        gap={2}
      >
        <FormInput
          label="Full Name of Recipient"
          placeholder="Enter Full Name of Recipient"
          id="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
        />
        <PasteFormInput
          label="Account Number"
          placeholder="Enter Account Number"
          id="accountNumber"
          value={formData.accountNumber}
          onChange={handleInputChange}
          onPasteClick={() => handlePasteClick("accountNumber")}
        />
        <PasteFormInput
          label="ACH Routing Number"
          placeholder="Enter Routing Number"
          id="routingNumber"
          value={formData.routingNumber}
          onChange={handleInputChange}
          onPasteClick={() => handlePasteClick("routingNumber")}
        />
        <PasteFormInput
          label="IBAN"
          placeholder="Enter IBAN"
          id="iban"
          value={formData.iban}
          onChange={handleInputChange}
          onPasteClick={() => handlePasteClick("iban")}
        />
        <FormSelectInput
          label="Account Type"
          id="accountType"
          value={selectedOption}
          options={options}
          onChange={handleSelectChange}
        />
      </Box>
    </Box>
  );
}
