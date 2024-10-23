import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { theme } from "../../../../assets/themes/theme";
import { MediaProps } from "../../../../utils/utils";

interface Merchant {
  name: string;
  rate: string;
  duration: string;
}

const merchants: Merchant[] = [
  {
    name: "SDS Resources",
    rate: "1.05%",
    duration: "30 Mins",
  },
  {
    name: "Fatech LTD",
    rate: "1.05%",
    duration: "90 Mins",
  },
  {
    name: "Socrates INC",
    rate: "1.05%",
    duration: "90 Mins",
  },
];

export default function Merchants({
  deviceType,
}: MediaProps): React.JSX.Element {
  const [selectedMerchant, setSelectedMerchant] = React.useState<string | null>(
    merchants[0].name
  );

  const handleSelect = (merchantName: string) => {
    setSelectedMerchant(merchantName);
  };

  return (
    <Box>
      <Typography variant="h6" fontSize={16} fontWeight={700}>
        Select Merchant:
      </Typography>
      <Box
        borderTop={`1px solid ${theme.palette.primary.main}`}
        borderBottom={`1px solid ${theme.palette.primary.main}`}
        py={2}
      >
        <Grid
          container
          sx={{
            bgcolor: "#e5f5fc",
            px: 2,
            py: 2,
            borderRadius: 3,
            border: `1px solid #B2E2F5`,
          }}
        >
          {merchants.map((merchant) => (
            <Grid
              key={merchant.name}
              item
              xs={6}
              md={4}
              lg={4}
              px={deviceType === "mobile" ? 0 : 1}
            >
              <Box
                bgcolor={"#fff"}
                border={`1px solid #B2E2F5`}
                px={0.7}
                py={1}
                borderRadius={2}
                onClick={() => handleSelect(merchant.name)}
                sx={{
                  cursor: "pointer",
                  boxShadow:
                    selectedMerchant === merchant.name
                      ? "0px 0px 16px 0px rgba(52, 52, 52, 0.15)"
                      : "none",
                }}
              >
                <Box
                  bgcolor={"#E5F5FC"}
                  p={1}
                  borderRadius={2}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={1}
                >
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    gap={0.5}
                    borderBottom={"1px solid #B2E2F5"}
                    pb={0.5}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        display: "inline-block",
                      }}
                    >
                      <input
                        type="radio"
                        checked={selectedMerchant === merchant.name}
                        onChange={() => handleSelect(merchant.name)}
                        style={{
                          position: "absolute",
                          opacity: 0,
                          width: 0,
                          height: 0,
                        }}
                      />
                      <Box
                        sx={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          border: `1px solid ${theme.palette.primary.main}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          backgroundColor: "#fff",
                        }}
                      >
                        {selectedMerchant === merchant.name && (
                          <Icon
                            icon="lets-icons:check-fill"
                            fontSize={10}
                            color={theme.palette.primary.main}
                            style={{ background: "#fff", borderRadius: "50%" }}
                          />
                        )}
                      </Box>
                    </Box>
                    <Typography variant="body2" fontSize={10} fontWeight={800}>
                      {merchant.name}
                    </Typography>
                  </Box>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Box
                      bgcolor={"#D1FADF"}
                      color={"#039855"}
                      px={0.5}
                      py={0.3}
                      border={"1px solid #6CE9A6"}
                      borderRadius={1}
                    >
                      <Typography variant="body2" fontSize={8} fontWeight={600}>
                        Rate: {merchant.rate}
                      </Typography>
                    </Box>
                    <Box display={"flex"} alignItems={"end"} gap={0.5}>
                      <Icon
                        icon="tabler:clock-filled"
                        fontSize={12}
                        color={theme.palette.primary.main}
                      />
                      <Typography variant="body2" fontSize={8}>
                        {merchant.duration}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
