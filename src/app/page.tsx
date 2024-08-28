"use client";
import React, { useRef } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import TabBar, { TabBarHandle } from "../components/TabBar";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // This includes Popper
import "../styles/custom-bootstrap.scss";
import HolderLookup from "@/components/HolderLookup";
import QuickActions from "@/components/QuickActions";

export default function Home() {
  const tabBarRef = useRef<TabBarHandle>(null);

  const addTab = (title: string) => {
    if (tabBarRef.current) {
      tabBarRef.current.addTab(title);
    }
  };

  return (
    <main className="d-flex flex-column vh-100 ">
      {/* Navbar */}
      <NavBar addTab={addTab} /> 
      {/* Tab Bar */}
      <TabBar ref={tabBarRef} />
      {/* Sidebar and Content */}
      <div className="d-flex flex-grow-1">
        {/* Sidebar */}
        <SideBar />

        {/* Content */}
        <div className="flex-grow-1 p-4 gradient-bg-purple-orange">
          <h2 className="text-light pb-3 fw-bold">Dashboard</h2>
          <div className="row g-4">
            <div className="col-lg-3 col-md-12">
              <HolderLookup />
            </div>
            <div className="col-lg-4 col-md-12">
              <QuickActions />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
