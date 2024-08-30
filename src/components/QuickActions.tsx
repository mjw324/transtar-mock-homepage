import React from "react";

const QuickActions: React.FC = () => {
  return (
    <div
      className="quick-actions-section d-flex flex-column justify-content-between p-4 rounded h-100"
      style={glassmorphismStyle}
    >
      <h4 className="text-dark fw-bold mb-4">Quick Actions</h4>
      <div className="row g-3 h-100">
        <div className="col-md-6">
          <button className="btn btn-dark btn-glass w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center">
            <i className="fas fa-share-square mb-2 fa-2x"></i>
            <span className="fw-bold">Share Transactions</span>
          </button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-dark btn-glass w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center">
            <i className="fas fa-user-edit mb-2 fa-2x"></i>
            <span className="fw-bold">Holder Maintenance</span>
          </button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-dark btn-glass w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center">
            <i className="fas fa-sticky-note mb-2 fa-2x"></i>
            <span className="fw-bold">Notes / Reminders / Attachments</span>
          </button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-dark btn-glass w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center">
            <i className="fas fa-file-alt mb-2 fa-2x"></i>
            <span className="fw-bold">Create Document</span>
          </button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-dark btn-glass w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center">
            <i className="fas fa-money-check-alt mb-2 fa-2x"></i>
            <span className="fw-bold">Conduct Dividend</span>
          </button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-dark btn-glass w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center">
            <i className="fas fa-vote-yea mb-2 fa-2x"></i>
            <span className="fw-bold">Conduct Proxy</span>
          </button>
        </div>
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


export default QuickActions;
