import React from "react";
import { Box, Typography, Button, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { theme } from "../../../../assets/themes/theme";

interface FormInputProps {
  label: string;
  placeholder: string;
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FormInput({
  label,
  placeholder,
  id,
  value,
  onChange,
}: FormInputProps): React.JSX.Element {
  return (
    <Box>
      <Typography
        variant="caption"
        fontSize={12}
        fontWeight={600}
        color={theme.palette.primary.main}
      >
        <label htmlFor={id}>{label}</label>
      </Typography>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        border={`1px solid ${theme.palette.primary.main}`}
        px={1}
        py={1.5}
        mt={0.5}
        borderRadius={2}
      >
        <input
          id={id}
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={{
            padding: 4,
            border: "none",
            outline: "none",
            fontSize: 12,
            background: "none",
            width: "100%",
          }}
        />
      </Box>
    </Box>
  );
}

interface FormPasteInputProps extends FormInputProps {
  onPasteClick: () => void;
}

export function PasteFormInput({
  label,
  placeholder,
  id,
  value,
  onChange,
  onPasteClick,
}: FormPasteInputProps): React.JSX.Element {
  return (
    <Box>
      <Typography
        variant="caption"
        fontSize={12}
        fontWeight={600}
        color={theme.palette.primary.main}
      >
        <label htmlFor={id}>{label}</label>
      </Typography>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        border={`1px solid ${theme.palette.primary.main}`}
        px={1}
        py={1.5}
        mt={0.5}
        borderRadius={2}
      >
        <input
          id={id}
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={{
            padding: 4,
            border: "none",
            outline: "none",
            fontSize: 12,
            background: "none",
            width: "80%",
          }}
        />
        <Button
          variant="text"
          onClick={onPasteClick}
          style={{
            marginLeft: "8px",
            fontWeight: 600,
            textTransform: "none",
            color: theme.palette.primary.main,
            fontSize: 10,
          }}
        >
          Paste
        </Button>
      </Box>
    </Box>
  );
}

interface FormSelectInputProps {
  label: string;
  id: string;
  value: string;
  options: { label: string; value: string }[];
  onChange: (event: SelectChangeEvent<string>) => void;
}

export function FormSelectInput({
  label,
  id,
  value,
  options,
  onChange,
}: FormSelectInputProps): React.JSX.Element {
  return (
    <Box>
      <Typography
        variant="caption"
        fontSize={12}
        fontWeight={600}
        color={theme.palette.primary.main}
      >
        <label htmlFor={id}>{label}</label>
      </Typography>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        border={`1px solid ${theme.palette.primary.main}`}
        px={1}
        py={1.5}
        mt={0.5}
        borderRadius={2}
      >
        <Select
          id={id}
          value={value}
          onChange={onChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{
            "& .MuiOutlinedInput-notchedOutline": { border: 0 }, 
            "&:hover .MuiOutlinedInput-notchedOutline": { border: 0 }, 
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": { border: 0 },
            "& .MuiSelect-select": {
              padding: 0.5, 
            },
            fontSize: 12,
            background: "none",
            width: "100%",
          }}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </Box>
  );
}
