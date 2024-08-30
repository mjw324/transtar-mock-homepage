"use client";

import React from "react";

const ReportLookup: React.FC = () => {
  return (
    <div
      className="holder-lookup-section p-4 rounded h-50 mb-2"
      style={glassmorphismStyle}
    >
      <h4 className="fw-bold">Holder Search</h4>
      <p>Find total holder information</p>
      <div className="input-group w-100">
        <div className="form-floating">
          <input
            type="text"
            className="form-control glass-input"
            id="floatingInput"
            placeholder="Report Name"
          />
          <label htmlFor="floatingInput">
            Holder Name, Tax ID, or Account #
          </label>
        </div>
        <button className="btn btn-dark btn-glass" type="button">
          <i className="fas fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  );
};

const glassmorphismStyle = {
  background: "rgba(255, 255, 255, 0.3)",
  borderRadius: "15px",
  backdropFilter: "blur(10px)",
  boxShadow: "0 8px 12px rgba(0, 0, 0, 0.1)",
  border: "2px solid rgba(255, 255, 255, 0.15)",
};

export default ReportLookup;
