"use client";
import { theme } from '@/assets/themes/theme';
import MobileNavbar from '@/components/navbar/mobile';
import Navbar from '@/components/navbar/navbar';
import { useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react'

export default function NavbarLayout() {
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
        <div>
            {deviceType === "mobile" && <MobileNavbar />}
            {deviceType === "tablet" && <MobileNavbar />}
            {deviceType === "pc" && <Navbar />}
        </div>
    )
}
