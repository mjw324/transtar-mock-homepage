"use client";
import React, { useRef } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import TabBar, { TabBarHandle } from "../components/TabBar";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "../styles/custom-bootstrap.scss";
import HolderLookup from "@/components/HolderLookup";

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
          <HolderLookup />
        </div>
      </div>
    </main>
  );
}
/** gradient-bg-primary-secondary
gradient-bg-purple-pink
gradient-bg-teal-cyan
gradient-bg-orange-yellow
gradient-bg-green-blue
gradient-bg-red-purple
gradient-bg-dark-light
 */