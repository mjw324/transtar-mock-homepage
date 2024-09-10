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
import ReportLookup from "@/components/ReportLookup";
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
            setSidebarVisible(!isLgOrBelow);
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
            <div className="position-absolute w-100 h-100 z-n1">
                <Image
                    src="/layers-background.jpg"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="background-image"
                />
            </div>
            {/* Navbar */}
            <NavBar addTab={addTab} toggleSidebar={toggleSidebar}/>
            {/* Tab Bar */}
            <TabBar ref={tabBarRef}/>
            {/* Sidebar and Content */}
            <div
                className={`d-flex flex-grow-1 ${isFullHeight ? "bg-warning bg-opacity-25" : "gradient-bg-fun-green"}  overflow-hidden`}>
                {/* Sidebar */}
                <SideBar isVisible={isSidebarVisible}/>
                <div className={`flex-grow-1 p-4 d-flex flex-column h-100 ${isSidebarVisible ? "" : "ms-0"}`}>
                    {/* Grid layout for lg and md screens */}
                    <div className="container-fluid h-100 d-flex flex-column">
                        {/* First Row: Takes up 50% of the height */}
                        <div className="row g-4 flex-grow-1 h-50 pb-4">
                            <div className="col-xl-4 col-lg-12 d-flex flex-column mh-100">
                                <Today/>
                            </div>
                            <div className="col-xl-4 col-lg-12 d-flex flex-column mh-100">
                                <QuickActions/>
                            </div>
                            <div className="col-xl-4 col-lg-12 d-flex flex-column mh-100">
                                <div className="row mb-3">
                                    <div className="col-12">
                                        <div
                                            className="logo-wrapper rounded h-100 d-flex align-items-center justify-content-center">
                                            <Image
                                                src="/UMB.svg"
                                                alt="Zions Bank"
                                                layout="responsive"
                                                width={10}
                                                height={10}
                                                className="company-logo w-50"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row d-flex">
                                    <div className="col-12">
                                        <Notifications/>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Second Row: Takes up 50% of the height */}
                        <div className="row g-4 flex-grow-1 h-50 py-4">
                            <div className="col-xl-4 col-lg-12 d-flex flex-column mh-100">
                                <Reports/>
                            </div>
                            <div className="col-xl-4 col-lg-12 d-flex flex-column mh-100">
                                <Issue/>
                            </div>
                            <div className="col-xl-4 col-lg-12 d-flex flex-column mh-100">
                                <Holder/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
