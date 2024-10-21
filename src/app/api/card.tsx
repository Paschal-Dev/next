import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import coil from "../../assets/images/api/coil.png";
import plugins from "../../assets/images/api/plugins.png";
import knowledge from "../../assets/images/api/knowledge.png";

export default function Card(): React.JSX.Element {
  return (
    <Box>
      <Grid container spacing={3} pt={4}>
        <Grid item md={4} xs={12} sm={4}>
          <Box
            border={"1px solid #A981FE"}
            borderRadius={4}
            bgcolor={"#a981fe1f"}
            pt={2}
            pb={1}
            px={2}
            sx={{
              boxShadow: "8px 8px 16px 0px rgba(169, 129, 254, 0.2)",
            }}
          >
            <Typography
              variant="h2"
              fontWeight={800}
              fontSize={"14px"}
              pb={2}
              color={"#A981FE"}
            >
              Knowledge base
            </Typography>
            <Typography
              variant="body2"
              fontSize={"10px"}
              fontWeight={300}
              pb={8.5}
            >
              You can learn more from the Peerwallet's Knowledgebase
            </Typography>
            <Box
              sx={{
                position: "relative",
                right: -80,
                top: 55,
                mt: -20,
                backgroundImage: `url(${knowledge})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "55%",
                height: 100,
              }}
            ></Box>
            <Button
              variant="contained"
              sx={{
                py: 0.5,

                bgcolor: "#A981FE",
                color: "#fff",
                borderRadius: 5,

                ":hover": { bgcolor: "#fff", color: "#A981FE" },
                fontSize: "10px",
                fontWeight: 400,
              }}
            >
              Go
            </Button>

            <Icon
              icon="solar:document-text-bold"
              fontSize={30}
              color="#A981FE"
              style={{ marginLeft: 66 }}
            />
          </Box>
        </Grid>
        <Grid item md={4} xs={12} sm={4}>
          <Box
            border={"1px solid #F98F54"}
            borderRadius={4}
            bgcolor={"#f98e5410"}
            pt={2}
            px={2}
            pb={1.5}
            sx={{
              boxShadow: "4px 8px 15px 2px rgba(249, 143, 84, 0.2)",
            }}
          >
            <Typography
              variant="h2"
              fontWeight={800}
              fontSize={"14px"}
              pb={2}
              color={"#F98F54"}
            >
              API Details
            </Typography>
            <Box
              sx={{
                position: "relative",
                left: 85,
                top: 100,
                mt: -14,
                backgroundImage: `url(${coil})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "55%",
                height: 100,
              }}
            ></Box>
            <Typography
              variant="body2"
              fontSize={"10px"}
              fontWeight={300}
           
            >
              From your account, you can set your API details
            </Typography>
            <Button
              variant="contained"
              sx={{
                py: 0.5,

                bgcolor: "#F98F54",
                color: "#fff",
                borderRadius: 5,
                ":hover": { bgcolor: "#fff", color: "#F98F54" },
                fontSize: "10px",
                fontWeight: 400,
              }}
            >
              Go
            </Button>

            <Icon
              icon="eos-icons:api"
              fontSize={43}
              color="#F98F54"
              style={{ marginLeft: 66, marginTop: 2 }}
            />
          </Box>
        </Grid>
        <Grid item md={4} xs={12} sm={4}>
          <Box
            border={"1px solid #FCC82B"}
            borderRadius={4}
            bgcolor={"#fcc82b15"}
            pt={2}
            px={2}
            pb={1}
            sx={{
              boxShadow: "4px 8px 15px 2px rgba(252, 200, 43, 0.2)",
            }}
          >
            <Typography
              variant="h2"
              fontWeight={800}
              fontSize={"14px"}
              pb={1}
              color={"#FCC82B"}
            >
              Plugins
            </Typography>
            <Typography
              variant="body2"
              fontSize={"10px"}
              fontWeight={300}
              
            >
              Download Peerwallet Plugins for your businesses
            </Typography>
            <Box
              sx={{
                position: "relative",
                left: 88,
                top: 60,
                mt: -12,
                backgroundImage: `url(${plugins})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "55%",
                height: 100,
              }}
            ></Box>
            <Button
              variant="contained"
              sx={{
                py: 0.5,

                bgcolor: "#FCC82B",
                color: "#fff",
                borderRadius: 5,

                ":hover": { bgcolor: "#fff", color: "#FCC82B" },
                fontSize: "10px",
                fontWeight: 400,
              }}
            >
              Go
            </Button>

            <Icon
              icon="fluent:plug-disconnected-24-filled"
              fontSize={43}
              color="#FCC82B"
              style={{ marginLeft: 66 }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
