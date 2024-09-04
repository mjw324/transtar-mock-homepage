"use client";
import React, { useRef, useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import TabBar, { TabBarHandle } from "../components/TabBar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/custom-bootstrap.scss";
import QuickActions from "@/components/QuickActions";
import Today from "@/components/Today";
import Reports from "@/components/Reports";
import Issue from "@/components/Issue";
import Holder from "@/components/Holder";
import Image from "next/image";
import HolderLookup from "@/components/HolderLookup";
import ReportLookup from "@/components/ReportLookup";

export default function Home() {
  const tabBarRef = useRef<TabBarHandle>(null);
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  // Check screen size on mount using a small breakpoint
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleResize = () => setSidebarVisible(!mediaQuery.matches);

    // Set the initial visibility based on screen size
    handleResize();

    // Attach the event listener
    mediaQuery.addEventListener("change", handleResize);

    // Cleanup event listener on component unmount
    return () => mediaQuery.removeEventListener("change", handleResize);
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
    <main className="d-flex flex-column">
      {/* Navbar */}
      <NavBar addTab={addTab} toggleSidebar={toggleSidebar} />
      {/* Tab Bar */}
      <TabBar ref={tabBarRef} />
      {/* Sidebar and Content */}
      <div className="d-flex flex-grow-1">
        {/* Sidebar */}
        <SideBar isVisible={isSidebarVisible} />
        <div
          className={`flex-grow-1 p-4 gradient-bg-dark-blue ${
            isSidebarVisible ? "" : "ms-0"
          }`}
        >
          <div className="row g-4">
            <div className="col-lg-4 col-md-12">
              <Today />
            </div>
            <div className="col-lg-4 col-md-12">
              <QuickActions />
            </div>
            {/* Company Logo, Holder Search, and Report Search */}
            <div className="col-lg-4 col-md-12 d-flex flex-column gap-3 justify-content-between">
              <div className="logo-container d-none d-lg-block">
                <div className="logo-wrapper rounded">
                  <Image
                    src="/zions.svg"
                    alt="Zions Bank"
                    loading="eager"
                    width={493}
                    height={60}
                    className="company-logo"
                  />
                </div>
              </div>
              <div className="flex-grow-1 d-flex">
                <HolderLookup />
              </div>
              <div className="flex-grow-1 d-flex">
                <ReportLookup />
              </div>
            </div>
          </div>
          <div className="row g-4 pt-3">
            <div className="col-lg-4 col-md-12">
              <Reports />
            </div>
            <div className="col-lg-4 col-md-12">
              <Issue />
            </div>
            <div className="col-lg-4 col-md-12">
              <Holder />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
