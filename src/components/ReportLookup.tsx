import React from "react";

const ReportLookup: React.FC = () => {
  return (
    <div className="report-lookup-section p-4 rounded" style={glassmorphismStyle}>
      <h4 className="fw-bold">Report Search</h4>
      <p>Use the field below to find reports</p>
      <div className="form-group w-100">
        <input
          type="text"
          className="form-control glass-input"
          placeholder="Report Name"
        />
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
  height: "20.9vh",
};

export default ReportLookup;
