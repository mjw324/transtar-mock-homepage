"use client";
import { useEffect } from 'react';
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import "../styles/custom-bootstrap.scss";

export default function Home() {
  return (
    <main className="d-flex flex-column vh-100">
      {/* Navbar */}
      <NavBar />
      {/* Sidebar and Content */}
      <div className="d-flex flex-grow-1">
        {/* Sidebar */}
        <SideBar />

        {/* Content */}
        <div className="flex-grow-1 p-4">
          <h2>Welcome to the Admin Dashboard</h2>
          <p>This is your main content area.</p>
        </div>
      </div>
    </main>
  );
}
