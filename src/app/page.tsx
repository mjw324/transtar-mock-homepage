"use client";
import React, { useRef } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import TabBar, { TabBarHandle } from "../components/TabBar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // This includes Popper
import "../styles/custom-bootstrap.scss";
import HolderLookup from "@/components/HolderLookup";
import QuickActions from "@/components/QuickActions";
import Today from "@/components/Today";
import Reports from "@/components/Reports";
import ReportLookup from "@/components/ReportLookup";
import Issue from "@/components/Issue";

export default function Home() {
  const tabBarRef = useRef<TabBarHandle>(null);

  const addTab = (title: string) => {
    if (tabBarRef.current) {
      tabBarRef.current.addTab(title);
    }
  };

  return (
    <main className="d-flex flex-column" style={{height: "246vh"}}> {/* Such a large height is needed for the huge sidebar dropdowns */}
      {/* Navbar */}
      <NavBar addTab={addTab} />
      {/* Tab Bar */}
      <TabBar ref={tabBarRef} />
      {/* Sidebar and Content */}
      <div className="d-flex flex-grow-1">
        {/* Sidebar */}
        <SideBar />
        {/* Background options */}
        {/* gradient-bg-deep-purple */} {/* gradient-bg-dark-blue */}
        {/* gradient-bg-fun-green */}
        {/* gradient-bg-midnight-navy */} {/* gradient-bg-peach */}
        {/* gradient-bg-forest-green */} {/* gradient-bg-charcoal */}
        {/* gradient-bg-deep-teal */}
        {/* gradient-bg-oxford-blue */}
        <div className="flex-grow-1 p-4 gradient-bg-dark-blue">
          <h2 className="text-light pb-3 fw-bold">Dashboard</h2>
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
