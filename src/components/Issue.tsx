import React, { useState } from "react";

const Issue: React.FC = () => {
  const issues = [
    {
      name: "Netflix Inc.",
      stockId: "NFLX456",
      unissued: 870000,
      totalAuthorized: 1000000,
      outstanding: 130000,
      shareholders: 45623,
    },
    {
      name: "Apple Inc.",
      stockId: "AAPL123",
      unissued: 2000000,
      totalAuthorized: 3000000,
      outstanding: 1000000,
      shareholders: 120770,
    },
    {
      name: "Google LLC",
      stockId: "GOOGL567",
      unissued: 500000,
      totalAuthorized: 1500000,
      outstanding: 1000000,
      shareholders: 91303,
    },
  ];

  const [selectedIssue, setSelectedIssue] = useState(issues[0]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = issues.find(issue => issue.name === e.target.value);
    setSelectedIssue(selected || issues[0]);
  };

  return (
    <div className="issue-section p-4 rounded h-100" style={glassmorphismStyle}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="text-dark fw-bold">Issue Overview</h4>
        <select
          className="form-select glass-input w-50"
          value={selectedIssue.name}
          onChange={handleSelectChange}
          style={{ maxWidth: '300px' }}
        >
          {issues.map((issue, index) => (
            <option key={index} value={issue.name}>
              {issue.name}
            </option>
          ))}
        </select>
      </div>

      {/* Issue Name and Stock ID */}
      <div className="d-flex align-items-center mb-4">
        <i className="fas fa-certificate fa-2x me-3"></i>
        <div>
          <h5 className="fw-bold mb-1">{selectedIssue.name}</h5>
          <span className="badge bg-dark text-light">
            Stock ID: {selectedIssue.stockId}
          </span>
        </div>
      </div>
      {/* Divider/Separator */}
        <hr className="m-1" />
      {/* Total Authorized Shares + Shareholder Breakdown */}
      <div className="px-3 pt-3 rounded">
        <div className="d-flex justify-content-between">
          <div className="fw-bold">
            <strong><i className="fa-regular fa-square-full bg-primary"></i> Outstanding:</strong> {(selectedIssue.outstanding).toLocaleString()}
          </div>
          <div className="fw-bold">
            <strong><i className="fa-regular fa-square-full bg-success"></i> Unissued:</strong> {(selectedIssue.unissued).toLocaleString()}
          </div>
        </div>
        <div className="mt-3 mb-4">
          <div className="progress-stacked" style={{ height: "25px" }}>
            <div
              className="progress"
              role="progressbar"
              aria-label="Outstanding"
              aria-valuenow="15"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: (selectedIssue.outstanding / selectedIssue.totalAuthorized) * 100 + "%", height: "25px" }}
            >
              <div className="progress-bar overflow-visible bg-primary fw-bold">{(selectedIssue.outstanding / selectedIssue.totalAuthorized * 100).toFixed(2) + "%"}</div>
            </div>
            <div
              className="progress"
              role="progressbar"
              aria-label="Unissued"
              aria-valuenow="30"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: (selectedIssue.unissued / selectedIssue.totalAuthorized) * 100 + "%", height: "25px"  }}
            >
              <div className="progress-bar overflow-visible bg-success fw-bold">{(selectedIssue.unissued / selectedIssue.totalAuthorized * 100).toFixed(2) + "%"}</div>
            </div>
          </div>
        </div>
        <div className="fw-bold mb-3">
            <strong><i className="fas fa-chart-pie me-2"></i>Total Authorized: </strong> {(selectedIssue.totalAuthorized).toLocaleString()}
        </div>
        <div className="fw-bold">
          <strong><i className="fas fa-users me-2"></i>Active Shareholders: </strong> {(selectedIssue.shareholders).toLocaleString()}
        </div>
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

export default Issue;
