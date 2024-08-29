import React from "react";

interface Report {
  id: number;
  name: string;
  lastGenerated: string; // Date when the report was last generated
}

const Reports: React.FC = () => {
  // Sample reports data
  const today = new Date();
  const reports: Report[] = [
    {
      id: 1,
      name: "Cash Reports",
      lastGenerated: new Date().toLocaleDateString(),
    },
    {
      id: 2,
      name: "Daily Cash Balancing Report",
      lastGenerated: new Date(
        today.setDate(today.getDate() - 1)
      ).toLocaleDateString(),
    },
    {
      id: 3,
      name: "Transaction Report",
      lastGenerated: new Date(
        today.setDate(today.getDate() - 3)
      ).toLocaleDateString(),
    },
    {
      id: 4,
      name: "Funds Receivable Report",
      lastGenerated: new Date(
        today.setDate(today.getDate() - 3)
      ).toLocaleDateString(),
    },
    {
      id: 5,
      name: "Dividend Reports",
      lastGenerated: new Date(
        today.setDate(today.getDate() - 4)
      ).toLocaleDateString(),
    },
    {
      id: 6,
      name: "Issue Reports",
      lastGenerated: new Date(
        today.setDate(today.getDate() - 10)
      ).toLocaleDateString(),
    },
  ];

  // Mapping report types to icons
  const reportIcons: { [key: string]: string } = {
    "Cash Reports": "fas fa-dollar-sign",
    "Daily Cash Balancing Report": "fas fa-balance-scale",
    "Transaction Report": "fas fa-exchange-alt",
    "Funds Receivable Report": "fas fa-money-bill-wave",
    "Dividend Reports": "fas fa-money-check-alt",
    "Issue Reports": "fas fa-file-alt",
  };

  return (
    <div className="reports-section p-4 rounded" style={glassmorphismStyle}>
      <h4 className="mb-4 text-dark fw-bold">Recently Run Reports</h4>
      <ul className="list-group">
        {reports.map((report) => (
          <li key={report.id} className="list-group-item btn-glass mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <button
                  className="btn btn-dark btn-icon me-3"
                  style={btnIconStyle}
                >
                  <i className={`${reportIcons[report.name]} fa-2x`}></i>
                </button>
                <div>
                  <h6 className="fw-bold mb-1">{report.name}</h6>
                  <p className="mb-1 text-muted">
                    Last Generated: {report.lastGenerated}
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <button className="btn btn-dark btn-icon">
                  <i className="fas fa-file-pdf"></i>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
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
  maxHeight: "400px",
  overflowY: "auto",
};

// Custom styles for buttons
const btnIconStyle = {
  minWidth: "65px",
};

export default Reports;
