"use client";
import React, {useEffect, useRef, useState} from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import TabBar, {TabBarHandle} from "../components/TabBar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/custom-bootstrap.scss";
import QuickActions from "@/components/QuickActions";
import Today from "@/components/Today";
import Reports from "@/components/Reports";
import Issue from "@/components/Issue";
import Holder from "@/components/Holder";
import Image from "next/image";
import Notifications from "@/components/Notifications";

export default function Home() {
    const tabBarRef = useRef<TabBarHandle>(null);
    const [isSidebarVisible, setSidebarVisible] = useState(true);
    const [isFullHeight, setIsFullHeight] = useState(true);

    // Check screen size and adjust height accordingly
    useEffect(() => {
        const handleResize = () => {
            const isLgOrBelow = window.innerWidth < 1200; // lg breakpoint is 1200px
            setIsFullHeight(!isLgOrBelow);
            if (isLgOrBelow) {
                setSidebarVisible(false);
            }
        };

        // Set the initial visibility based on screen size
        handleResize();

        // Attach the event listener for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const addTab = (title: string) => {
        if (tabBarRef.current) {
            tabBarRef.current.addTab(title);
        }
    };

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    return (
        <main className={`d-flex flex-column ${isFullHeight ? "vh-100" : ""} overflow-hidden`}>
            {/* Background Image */}
            <div className="position-absolute h-100 w-100 z-n1">
                <Image
                    src="/background3.jpg"
                    alt="Background"
                    quality={100}
                    fill={true}
                    sizes="100vw"
                    style={{
                        objectFit: "cover",
                    }}
                />
            </div>
            {/* Navbar */}
            <NavBar addTab={addTab} toggleSidebar={toggleSidebar}/>
            {/* Tab Bar */}
            <TabBar ref={tabBarRef}/>
            {/* Sidebar and Content */}
            <div
                className={`d-flex flex-grow-1 ${isFullHeight ? "bg-secondary bg-opacity-25" : "gradient-bg-deep-purple"} overflow-hidden`}
            >
                {/* Sidebar */}
                <SideBar isVisible={isSidebarVisible}/>
                <div className={`flex-grow-1 p-4 d-flex flex-column h-100 ${isSidebarVisible ? "" : "ms-0"}`}>
                    {/* Grid layout for lg and md screens */}
                    <div className="h-100 d-flex flex-column">
                        {/* First Row: Takes up 50% of the height */}
                        <div className="row g-4 flex-grow-1 h-50 pb-4">
                            <div className="col-xl-4 col-lg-12 d-flex flex-column mh-100">
                                <Holder/>
                            </div>
                            <div className="col-xl-4 col-lg-12 d-flex flex-column mh-100">
                                <QuickActions/>
                            </div>
                            <div className="col-xl-4 col-lg-12 d-flex flex-column mh-100">
                                {/* Company Logo */}
                                <div
                                    className="mb-3 d-none d-xl-block">
                                    <div
                                        className="logo-wrapper rounded w-100 h-100 d-flex align-items-center justify-content-center">
                                        <Image
                                            src="/continental-stock-logo.svg"
                                            alt="Continental"
                                            width={0}
                                            height={0}
                                            className="company-logo w-75"
                                        />
                                    </div>
                                </div>

                                {/* Notifications Pane */}
                                <div className="glass-pane rounded d-flex flex-grow-1 d-flex h-100 flex-column">
                                    <Notifications/>
                                </div>
                            </div>
                        </div>

                        {/* Second Row: Takes up 50% of the height */}
                        <div className="row g-4 flex-grow-1 h-50 py-lg-4 pb-4">
                            <div className="col-xl-4 col-lg-12 d-flex flex-column mh-100">
                                <Issue/>
                            </div>
                            <div className="col-xl-4 col-lg-12 d-flex flex-column mh-100">
                                <Reports/>
                            </div>
                            <div className="col-xl-4 col-lg-12 d-flex flex-column mh-100">
                                <Today/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
