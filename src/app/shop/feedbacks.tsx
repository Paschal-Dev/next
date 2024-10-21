'use client';
import { Box, Typography, useMediaQuery, Card, CardContent, Container } from "@mui/material";
import { theme } from "../../assets/themes/theme";
import line from "../../assets/images/shop/dotted-line.png";
import avatar1 from "../../assets/images/shop/avatar1.png";
import avatar2 from "../../assets/images/shop/avatar2.png";
import avatar3 from "../../assets/images/shop/avatar3.png";
import { useState, useEffect } from "react";
import Image from "next/image";

const feedbacks = [
    {
        name: "Sylvester U",
        position: "CEO - SDS Resources",
        feedback: "I highly recommend this platform for its user-friendly app. It allows me to browse and shop conveniently on my phone, making the entire shopping experience effortless.",
        avatar: avatar1,
        borderColor: "#00ADEF",
        background: 'linear-gradient(180deg, rgba(0, 159, 221, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
    },
    {
        name: "Jessica Igbeia",
        position: "CEO - Jeritz (jeritz.com)",
        feedback: "The user interface is clean and intuitive, making it easy for buyers to find products and navigate through different categories. So I highly recommend this platform for any to use",
        avatar: avatar2,
        borderColor: "#FFD700",
        background: 'linear-gradient(180deg, rgba(252, 200, 43, 0.1) 0%, rgba(255, 255, 255, 0) 100%)',

    },
    {
        name: "Adoghe Joshua",
        position: "CEO - Just Write Cooperation",
        feedback: "I appreciate the exceptional customer service provided by this platform. Whenever I needed assistance, their support team was prompt. It's reassuring to know that help is just a message away.",
        avatar: avatar3,
        borderColor: "#00ADEF",
        background: 'linear-gradient(180deg, rgba(0, 159, 221, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
    },
];

const FeedBack = () => {
    const [deviceType, setDeviceType] = useState("mobile");

    const mobile = useMediaQuery(theme.breakpoints.only("xs"));
    const tablet = useMediaQuery(theme.breakpoints.down("md"));

    useEffect(() => {
        if (mobile) {
            setDeviceType("mobile");
        } else if (tablet) {
            setDeviceType("tablet");
        } else {
            setDeviceType("pc");
        }
    }, [mobile, tablet]);

    return (
        <Box bgcolor={"#e8e8e8"} color={"#000000"} pb={5} pt={5}>
            <Container disableGutters>
            <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={5}
            >
                <Box textAlign={"center"} width={deviceType === "mobile" ? "90%" : "70%"}>
                    <Typography variant="h2" fontSize={deviceType === "mobile" ? 28 : 48} fontWeight={900} paddingBottom={2}>
                        Users Feedback
                    </Typography>
                    <hr style={{ width: "25%", margin: "0 auto" }} />
                </Box>
                <Box position={'relative'} alignItems={'center'} justifyContent={'center'} width={"80%"}
                    p={deviceType === "mobile" ? 2 : 5}>
                    <Image src={line} alt="" style={{ position: "absolute", left: 180, top: 116, display: deviceType === "mobile" ? 'none' : 'block', width: '70%', height: 'auto' }} />
                    <Box
                        display={"flex"}
                        flexDirection={deviceType === "mobile" ? "column" : "row"}
                        alignItems={"center"}
                        gap={deviceType === "mobile" ? 3 : 3}
                        position={'relative'}
                    >
                        {feedbacks.map((feedback, index) => (
                            <Card key={index} sx={{ borderRadius: 3, boxShadow: 3}}>
                                <CardContent sx={{ p: 0 }}>
                                    <Box display="flex" alignItems="center" pb={1} pt={2} pl={2} pr={2}>
                                        <Image alt={feedback.name} src={feedback.avatar} style={{ width: 40, height: 40, marginRight: 1 }} />
                                        <Box textAlign="left">
                                            <Typography variant="h4" fontSize={20} fontWeight={800}>
                                                {feedback.name}
                                            </Typography>
                                            <Typography variant="body2" fontSize={12} color="rgba(0, 159, 221, 1)">
                                                {feedback.position}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            background: feedback.background,
                                            borderTop: `2px solid ${feedback.borderColor}`,
                                        }}
                                    />
                                    <Typography
                                        variant="body2"
                                        textAlign="left"
                                        sx={{
                                            background: feedback.background,
                                            p: 2,
                                        }}
                                    >
                                        {feedback.feedback}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                </Box>
            </Box>
            </Container>
        </Box>
    );
};

export default FeedBack;
