import { Box } from "@mui/material";
import React from "react";
import { theme } from "../../../assets/themes/theme";

interface TextInputProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
}

interface SelectInputProps {
  id: string;
  label: string;
  options: { value: string; label: string }[];
}

export const TextInput: React.FC<TextInputProps> = ({
  id,
  label,
  type = "text",
  placeholder,
}) => (
  <Box display={"flex"} flexDirection={"column"} gap={1}>
    <label
      htmlFor={id}
      style={{
        color: theme.palette.primary.main,
        fontSize: 12,
        fontWeight: 700,
      }}
    >
      {label}
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      style={{
        padding: 12,
        borderRadius: 8,
        border: "1px solid #B5D2DD",
        fontSize: 12,
        background: "#fff",
        color: theme.palette.text.secondary,
        outline: "none",
      }}
    />
  </Box>
);

export const SelectInput: React.FC<SelectInputProps> = ({
  id,
  label,
  options,
}) => (
  <Box display={"flex"} flexDirection={"column"} gap={1}>
    <label
      htmlFor={id}
      style={{
        color: theme.palette.primary.main,
        fontSize: 12,
        fontWeight: 700,
      }}
    >
      {label}
    </label>
    <select
      id={id}
      style={{
        padding: 12,
        borderRadius: 8,
        border: "1px solid #B5D2DD",
        fontSize: 12,
        background: "#fff",
        color: theme.palette.text.secondary,
        cursor: "pointer",
        outline: "none",
      }}
      defaultValue=""
    >
      <option value="" disabled>
        Select {label}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </Box>
);
