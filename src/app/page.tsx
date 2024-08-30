"use client";
import React, { useRef, useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import TabBar, { TabBarHandle } from "../components/TabBar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/custom-bootstrap.scss";
import HolderLookup from "@/components/HolderLookup";
import QuickActions from "@/components/QuickActions";
import Today from "@/components/Today";
import Reports from "@/components/Reports";
import ReportLookup from "@/components/ReportLookup";
import Issue from "@/components/Issue";

export default function Home() {
  const tabBarRef = useRef<TabBarHandle>(null);
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const addTab = (title: string) => {
    if (tabBarRef.current) {
      tabBarRef.current.addTab(title);
    }
  };

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <main className="d-flex flex-column" style={{ height: "270vh" }}> {/* Such a large height is needed for the long sidebar dropdowns */}
      {/* Navbar */}
      <NavBar addTab={addTab} toggleSidebar={toggleSidebar} />
      {/* Tab Bar */}
      <TabBar ref={tabBarRef} />
      {/* Sidebar and Content */}
      <div className="d-flex flex-grow-1">
        {/* Sidebar */}
        <SideBar isVisible={isSidebarVisible} />
        {/* Background options */}
        <div className={`flex-grow-1 p-4 gradient-bg-dark-blue ${isSidebarVisible ? '' : 'ms-0'}`}>
          <div className="row g-4">
            <div className="col-lg-4 col-md-12">
              <Today />
            </div>
            <div className="col-lg-4 col-md-12">
              <QuickActions />
            </div>
            <div className="col-lg-4 col-md-12 d-flex flex-column justify-content-between">
              <HolderLookup />
              <ReportLookup />
            </div>
          </div>
          <div className="row g-4 pt-3">
            <div className="col-lg-4 col-md-12">
              <Reports />
            </div>
            <div className="col-lg-4 col-md-12">
              <Issue />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
