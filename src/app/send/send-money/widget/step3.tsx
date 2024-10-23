import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  TableContainer,
  IconButton,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { theme } from "../../../../assets/themes/theme";
import { SendButton } from "../../send-page/components/buttons";
import { MediaProps } from "../../../../utils/utils";

// Custom styles for the table container and cells
const StyledTableContainer = styled(TableContainer)(() => ({
  borderRadius: 24,
  borderRight: `1px solid #ccc`,
  borderLeft: `1px solid #ccc`,
}));

const StyledTableCell = styled(TableCell)(() => ({
  padding: "8px 0px 8px 20px",
  borderRight: `1px solid #ccc`,
  fontWeight: 500,
  fontSize: 12,
  width: "50%",
  "&:last-of-type": {
    borderRight: "none",
    padding: "8px 20px",
    fontWeight: 500,
  },
  "&.MuiTableCell-head": {
    fontSize: 14,
    fontWeight: 800,
  },
}));

const StyledTableCellHead = styled(StyledTableCell)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  fontWeight: 700,
  textTransform: "uppercase",
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#e2f4fb",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#f9e199",
  },
  "&:last-of-type": {
    "& td": {
      borderBottom: "none",
      fontSize: 15,
      fontWeight: 800,
      color: theme.palette.primary.main,
    },
  },
}));

// Table data array
const tableData = [
  { description: "Delievery Method", value: "Bank Transfer" },
  { description: "Merchant", value: "SDS Resources" },
  { description: "Merchant Rate", value: "1.05%" },
  { description: "Amount", value: "sdsresources@gmail.com" },
  { description: "Subtotal", value: "$1,000" },
  { description: "Amount to recieve", value: "€913.149" },
  { description: "Sending Currency", value: "US Dollar (USD)" },
  { description: "Destination Currency", value: "European Euro (EUR)" },
  { description: "Account Name", value: "John Doe Walker Mike" },
  { description: "Account Number", value: "8273937268" },
  { description: "IBAN", value: "EU123673683883637" },
  { description: "Account Type", value: "Checking" },
  { description: "Routing Number", value: "27372914846274" },
  { description: "Estimated Send Time", value: "30 Minutes" },
  { description: "Exchange Rate", value: "1USD = 1USD" },
  { description: "Peerwallet's Fee", value: "0 USD" },
  { description: "Amount to Pay", value: "$1,000" },
];

interface ClickProps extends MediaProps {
  onNext: () => void;
  onPrevious: () => void;
}

export default function Step3({
  onNext,
  onPrevious,
  deviceType,
}: ClickProps): React.JSX.Element {
  const totalSteps = 4;
  const currentStep = 3;
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      gap={2}
      height={"100%"}
    >
      <Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box display={"flex"} alignItems={"center"} pb={1}>
            <IconButton
              onClick={onPrevious}
              sx={{ marginRight: 1, padding: 0 }}
            >
              <Icon icon="tabler:arrow-left" color="#000" />
            </IconButton>
            <Icon
              icon="ep:list"
              color="#fff"
              style={{
                padding: 5,
                background: theme.palette.primary.main,
                borderRadius: "50%",
              }}
            />
            <Typography variant={deviceType === "mobile" ? "body1" : "h5"} fontWeight={700} marginLeft={1}>
              Confirm{" "}
              <span style={{ color: theme.palette.primary.main }}>Details</span>
            </Typography>
          </Box>
          <Typography variant={deviceType === "mobile" ? "caption" : "body2"} fontWeight={700}>
            {currentStep} of {totalSteps}
          </Typography>
        </Box>
        <Box position="relative" height={2}>
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            borderTop={"3px solid #e0f3fa"}
          />
          <Box
            position="absolute"
            top={0}
            left={0}
            borderTop={`3px solid ${theme.palette.primary.main}`}
            width={`${(currentStep / totalSteps) * 100}%`}
            bgcolor={theme.palette.primary.main}
          />
        </Box>
        <Box
          bgcolor={"#e0f3fa"}
          color={theme.palette.primary.main}
          borderRadius={1.5}
          mt={2}
          mb={1}
          py={1.5}
          px={3}
        >
          <Typography variant="body2" fontWeight={700}>
            Please confirm the details of this transaction
          </Typography>
        </Box>
      </Box>

      <Box
        height={"70%"}
        sx={{
          overflowY: "auto",
          overflowX: "hidden",
          scrollbarWidth: "thin",
          scrollbarColor: `#e0f3fa transparent`,
          "&::-webkit-scrollbar": {
            width: "2px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#e0f3fa",
            borderRadius: "8px",
          },
        }}
      >
        <StyledTableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCellHead>Description</StyledTableCellHead>
                <StyledTableCellHead>Value</StyledTableCellHead>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="td" scope="row">
                    {row.description}
                  </StyledTableCell>
                  <StyledTableCell>{row.value}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </StyledTableContainer>
        <Box
          bgcolor={theme.palette.secondary.main}
          borderRadius={3}
          mt={2}
          mb={1}
          py={1}
          px={2}
        >
          <Typography variant="body2" fontSize={12} fontWeight={600}>
            The total amount to pay would be seen at checkout depending on your
            selected payment method.
          </Typography>
        </Box>
      </Box>

      <Box display={"flex"} flexDirection={"column"} gap={2}>
        <SendButton
          text={"Continue"}
          color="#fff"
          bgcolor={theme.palette.primary.main}
          shadowcolor="#d8f0fa"
          onclick={onNext}
        />
      </Box>
    </Box>
  );
}
