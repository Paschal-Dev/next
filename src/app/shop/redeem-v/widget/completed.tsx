import React from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  TableContainer,
} from "@mui/material";
import { theme } from "../../../assets/themes/theme";
import VIcon from "../../../assets/images/rv/rv-voucher-icon.png";
import { Icon } from "@iconify/react";
import Image from "next/image";

// Custom styles for the Table //

const StyledTableContainer = styled(TableContainer)(() => ({
  borderRadius: 24,
  overflow: "hidden",
  borderRight: `1px solid #ccc`,
  borderLeft: `1px solid #ccc`,
  overflowX: "auto",
}));

const StyledTableCell = styled(TableCell)(() => ({
  padding: "8px 40px",
  borderRight: `1px solid #ccc`,
  fontWeight: 700,
  fontSize: 12,
  "&:last-of-type": {
    borderRight: "none",
    padding: "8px 24px",
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
      fontSize: 16,
      fontWeight: 800,
      color: theme.palette.primary.main,
    },
  },
}));

// End custom styles for the Table //

interface CompletedProps {
  onCompleted: () => void;
}

export default function Completed({
  onCompleted,
}: CompletedProps): React.JSX.Element {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
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
        <Box
          bgcolor={theme.palette.primary.main}
          p={1}
          display={"flex"}
          alignItems={"center"}
          gap={1}
          borderRadius={3}
        >
          <Icon icon="mdi:ticket-percent" fontSize={18} color="#fff" />
          <Typography variant="body2" color={"#fff"} fontWeight={700}>
            Issued by SDSResources LTD
          </Typography>
        </Box>
      </Box>
      <Box
        width={"100%"}
        bgcolor={"#e2f4fb"}
        py={2}
        display={"flex"}
        flexDirection={"column"}
        gap={1}
        alignItems={"center"}
        border={`1px solid ${theme.palette.primary.main}`}
        borderRadius={3}
      >
        <Typography variant="body2" fontWeight={600}>
          Voucher:
        </Typography>
        <Box bgcolor={theme.palette.primary.main} p={1} borderRadius={3}>
          <Typography variant="body1" fontWeight={700} color={"#fff"}>
            7Kd84QzYXh32Ln0fU8wVJ9AcT
          </Typography>
        </Box>
      </Box>
      <StyledTableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCellHead>Description</StyledTableCellHead>
              <StyledTableCellHead>Value</StyledTableCellHead>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell component="td" scope="row">
                Voucher
              </StyledTableCell>
              <StyledTableCell>7Kd84QzYXh32Ln0fU8wVJ9AcT</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="td" scope="row">
                Expiry Date
              </StyledTableCell>
              <StyledTableCell>Monday 9th of June 2025</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="td" scope="row">
                Amount
              </StyledTableCell>
              <StyledTableCell>$100</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="td" scope="row">
                Voucher will be redeemed to:
              </StyledTableCell>
              <StyledTableCell>sdsresources@gmail.com</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="td" scope="row">
                Subtotal
              </StyledTableCell>
              <StyledTableCell>$100</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="td" scope="row">
                Fees
              </StyledTableCell>
              <StyledTableCell>$0.00</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="td" scope="row">
                Total
              </StyledTableCell>
              <StyledTableCell>$100</StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </StyledTableContainer>
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                background: "#000",
                fontSize: 14,
                fontWeight: 600,
                padding: 1,
                borderRadius: 3,
                boxShadow: "1px 1px 10px rgba(229, 245, 253)",
              }}
              onClick={onCompleted}
            >
              <Icon icon="mdi:arrow-back" fontSize={18} />
              Go back
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
