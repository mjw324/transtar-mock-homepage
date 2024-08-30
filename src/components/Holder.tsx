"use client";

import React, { useState } from "react";

const Holder: React.FC = () => {
  const holders = [
    {
      id: "12345",
      firstName: "John",
      lastName: "Doe",
      address: "123 Main St, Springfield, IL 62704",
      dob: "05/14/1995",
      phone: "555-123-4567",
      email: "john.doe@example.com",
      taxId: "123-45-6789",
      positions: [
        {
          issueName: "Netflix Inc.",
          shares: [
            {
              type: "Certificate",
              certNumber: "AR.3022",
              issueDate: "01/15/2023",
              denomination: "100",
            },
          ],
          stops: ["Restricted Cert"],
        },
        {
          issueName: "Apple Inc.",
          shares: [
            {
              type: "Book",
              issueDate: "11/05/2022",
              denomination: "150",
            },
          ],
          stops: ["Restricted Book"],
        },
      ],
    },
    {
      id: "67890",
      firstName: "Jane",
      lastName: "Smith",
      address: "456 Elm St, Chicago, IL 60616",
      dob: "08/22/1978",
      phone: "555-987-6543",
      email: "jane.smith@example.com",
      taxId: "987-65-4321",
      positions: [
        {
          issueName: "Google LLC",
          shares: [
            {
              type: "Certificate",
              certNumber: "GR.4023",
              issueDate: "01/23/2023",
              denomination: "300",
            },
          ],
          stops: ["Lost Holder"],
        },
        {
          issueName: "Microsoft Corp.",
          shares: [
            {
              type: "Book",
              issueDate: "02/22/2022",
              denomination: "400",
            },
          ],
          stops: [],
        },
      ],
    },
  ];

  const [selectedHolder, setSelectedHolder] = useState(holders[0]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = holders.find((holder) => holder.id === e.target.value);
    setSelectedHolder(selected || holders[0]);
  };

  return (
    <div className="holder-section p-4 rounded h-100" style={glassmorphismStyle}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="text-dark fw-bold">Holder Overview</h4>
        <select
          className="form-select glass-input w-50"
          value={selectedHolder.id}
          onChange={handleSelectChange}
          style={{ maxWidth: "300px" }}
        >
          {holders.map((holder, index) => (
            <option key={index} value={holder.id}>
              {holder.firstName} {holder.lastName}
            </option>
          ))}
        </select>
      </div>

      {/* Carousel for Holder Information and Positions */}
      <div id="holderCarousel" className="carousel slide" style={{ height: "270px"}}>
        <div className="carousel-inner">
          {/* Slide 1: Holder Information */}
          <div className="carousel-item active">
            <div className="d-flex align-items-center mb-4 mx-5">
              <div>
                <h5 className="fw-bold mb-1">
                  {selectedHolder.firstName} {selectedHolder.lastName}
                </h5>
                <i className="fas fa-id-card fa-2x me-3"></i>
                <p className="mb-1">
                  <strong>OFAC:</strong> {selectedHolder.id}
                </p>
                <p className="mb-1">
                  <strong>Address:</strong> {selectedHolder.address}
                </p>
                <p className="mb-1">
                  <strong>DOB:</strong> {selectedHolder.dob}
                </p>
                <p className="mb-1">
                  <strong>Phone:</strong> {selectedHolder.phone}
                </p>
                <p className="mb-1">
                  <strong>Email:</strong> {selectedHolder.email}
                </p>
                <p className="mb-1">
                  <strong>Tax ID:</strong> {selectedHolder.taxId}
                </p>
              </div>
            </div>
          </div>

          {/* Slide 2-x: Positions */}
          {selectedHolder.positions.map((position, index) => (
            <div key={index} className="carousel-item">
              <div className="px-3 mx-5 pt-3 rounded glass-card">
                <h6 className="fw-bold mb-3">
                  <i className="fas fa-chart-line me-2"></i>
                  {position.issueName}
                </h6>
                {position.shares.map((share, shareIndex) => (
                  <div key={shareIndex} className="mb-3">
                    <p className="mb-1">
                      <strong>{share.type}:</strong>
                    </p>
                    {share.type === "Certificate" && (
                      <div className="ms-3">
                        <p className="mb-1"><strong>Cert #:</strong> {('certNumber' in share) ? share.certNumber : ''}</p>
                        <p className="mb-1"><strong>Issue Date:</strong> {share.issueDate}</p>
                        <p className="mb-1"><strong>Denomination:</strong> {share.denomination}</p>
                      </div>
                    )}
                    {share.type === "Book" && (
                      <div className="ms-3">
                        <p className="mb-1"><strong>Issue Date:</strong> {share.issueDate}</p>
                        <p className="mb-1"><strong>Denomination:</strong> {share.denomination}</p>
                      </div>
                    )}
                  </div>
                ))}
                {position.stops.length > 0 && (
                  <div className="mt-2">
                    <strong>Stops:</strong>
                    <ul className="ms-3">
                      {position.stops.map((stop, stopIndex) => (
                        <li key={stopIndex}>{stop}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#holderCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#holderCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

// Glassmorphism style for the component container
const glassmorphismStyle = {
  background: "rgba(255, 255, 255, 0.3)",
  borderRadius: "15px",
  backdropFilter: "blur(10px)",
  boxShadow: "0 8px 12px rgba(0, 0, 0, 0.1)",
  border: "2px solid rgba(255, 255, 255, 0.15)",
};

export default Holder;
