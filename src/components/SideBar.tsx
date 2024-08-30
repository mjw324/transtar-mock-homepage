import React from "react";

const SideBar = ({ isVisible }: { isVisible: boolean }) => {
  if (!isVisible) {
    return null;
  }
  return (
    <div
      className="d-flex flex-column p-2 bg-light"
      style={{ width: "265px" }}
    >
      <div className="d-flex">
        <img
          src="/br-blue-logo.svg"
          alt="Company_Icon"
          width="240"
          height="47"
          className="d-inline-block align-top me-2"
        />
      </div>

      {/* Cash Accounting Dropdown */}
      <div className="dropend mt-2">
        <button
          className="btn btn-dark fw-bold dropdown-toggle w-100 text-start"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Cash Accounting
        </button>
        <ul
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButton1"
          style={{ width: "257px" }}
        >
          <li>
            <a className="dropdown-item" href="#">
              Adjust Cash Balance
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Bulk Collect
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Collect Cash Receivable
            </a>
          </li>
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Cash Transactions <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Cash Transactions</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Cash Transaction
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Cash Transaction
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Modify Cash Transaction
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Reverse Cash Transaction
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Certificate Processing Dropdown */}
      <div className="dropend mt-2">
        <button
          className="btn btn-dark fw-bold dropdown-toggle w-100 text-start"
          type="button"
          id="dropdownMenuButton2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Certificate Processing
        </button>
        <ul
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButton2"
          style={{ width: "250px" }}
        >
          {/* Batch Processing Instructions Group */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Batch Processing <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Batch Processing</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Batch
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Batch
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Continue Batch
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Batch
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Batch
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Insure Batch
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Record Completion
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Reject Batch
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Track Batch
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Verify Batch
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Call Certificate(s)
            </a>
          </li>
          {/* Cancel Certificate(s) Group */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Cancel Certificates <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Cancel Certificates</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Certificates to Cancel
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Plan Shares to Cancel
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Rapid Redemption
                </a>
              </li>
            </ul>
          </li>
          {/* Inventory Management Group */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Inventory Management <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Inventory Management</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Create Inventory
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Move Inventory
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Remove Inventory
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Issue Certificate(s)
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Modify Certificate(s)
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Replace Certificate(s)
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Reverse Batch
            </a>
          </li>
          {/* Stop Placement Group */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Stop Placement <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Stop Placement</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Stop
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Affidavit of Loss
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Stop
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Stop
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Stop
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  List Stop
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Release Stop
                </a>
              </li>
            </ul>
          </li>
          {/* Transfer Certificate(s) Group */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Transfer Certificates <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Transfer Certificates</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Plan Shares to Transfer
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Select Next Certificate
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Specify Certificates
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      {/* Corporate Action Processing Dropdown */}
      <div className="dropend mt-2">
        <button
          className="btn btn-dark fw-bold dropdown-toggle w-100 text-start"
          type="button"
          id="dropdownMenuButton3"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Corporate Actions
        </button>
        <ul
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButton3"
          style={{ width: "250px" }}
        >
          {/* Accrued Interest Group */}
          <li>
            <a className="dropdown-item" href="#">
              Process Accrued Interest
            </a>
          </li>

          {/* Call Group */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Call <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Call</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Call
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Call
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Call
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Call
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Process Call
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Release Call
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sinking Fund Setup
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Verify Calls
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Close Loan
            </a>
          </li>

          {/* Dividend Group */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Dividend <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Dividend</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Dividend
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Dividend
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Dividend
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Dividend
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Process Dividend
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Release Dividend
                </a>
              </li>
            </ul>
          </li>

          {/* Exchange Group */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Exchange <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Exchange</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Exchange
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Exchange
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Exchange
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Exchange
                </a>
              </li>
            </ul>
          </li>

          {/* Interest Group */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Interest <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Interest</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Interest
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Interest
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Interest
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Interest
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Process Interest
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Release Interest
                </a>
              </li>
            </ul>
          </li>

          {/* Liquidation of Plan Shares Group */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Liquidation of Plan Shares{" "}
              <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Liquidation of Plan Shares</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Liquidation
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Liquidation
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Liquidation
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Liquidation
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Process Liquidation
                </a>
              </li>
            </ul>
          </li>

          {/* Maturity Group */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Maturity <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Maturity</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Maturity
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Maturity
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Maturity
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Maturity
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Process Maturity
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Release Maturity
                </a>
              </li>
            </ul>
          </li>

          {/* Principal Reduction Payment Group */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Principal Reduction <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Principle Reduction</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Payment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Payment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Payment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Payment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Process Payment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Release Payment
                </a>
              </li>
            </ul>
          </li>

          {/* Proxy Group */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Proxy <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Proxy</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Proxy
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Proxy
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Proxy
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Proxy
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Email Proxy
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Process Proxy
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sequence Proxy Numbers
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a className="dropdown-item" href="#">
              Reverse Corporate Action
            </a>
          </li>

          {/* Reverse Split Group */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Reverse Split <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Reverse Split</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Reverse Split
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Reverse Split
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Reverse Split
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Reverse Split
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Process Reverse Split
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a className="dropdown-item" href="#">
              Schedule Corporate Actions
            </a>
          </li>

          {/* Spin-Off Group */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Spin-Off <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Spin-Off</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Spin-Off
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Spin-Off
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Spin-Off
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Spin-Off
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Process Spin-Off
                </a>
              </li>
            </ul>
          </li>

          {/* Stock Dividend/Split Group */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Stock Dividend/Split <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Stock Dividend/Split</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Stock Dividend/Split
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Stock Dividend/Split
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Stock Dividend/Split
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Stock Dividend/Split
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Process Stock Dividend/Split
                </a>
              </li>
            </ul>
          </li>

          {/* Sweep Cash Group */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Sweep Cash <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Sweep Cash</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Sweep
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Sweep
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Sweep
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Sweep
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Process Sweep
                </a>
              </li>
            </ul>
          </li>

          {/* Tender Group */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Tender <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Tender</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Tender
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Tender
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Tender
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Tender
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Process Tender
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a className="dropdown-item" href="#">
              Unschedule Corporate Actions
            </a>
          </li>
        </ul>
      </div>
      {/* Correspondence Tracking Dropdown */}
      <div className="dropend mt-2">
        <button
          className="btn btn-dark fw-bold dropdown-toggle w-100 text-start"
          type="button"
          id="dropdownMenuButton4"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Correspondence Tracking
        </button>
        <ul
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButton4"
          style={{ width: "257px" }}
        >
          <li>
            <a className="dropdown-item" href="#">
              Add Correspondence
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Assign Correspondence
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Change Correspondence
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Complete Correspondence
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Delegate Account Rep
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Delete Correspondence
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Display Correspondence
            </a>
          </li>
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Document Tracking <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Document Tracking</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Document
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Document
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Document
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Document
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Return Document
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              List Correspondence
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Total Correspondence
            </a>
          </li>
        </ul>
      </div>
      {/* Dashboards Dropdown */}
      <div className="dropend mt-2">
        <button
          className="btn btn-dark fw-bold text-start dropdown-toggle w-100"
          type="button"
          id="dropdownMenuButtonDashboards"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dashboards
        </button>
        <ul
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButtonDashboards"
          style={{ width: "257px" }}
        >
          <li>
            <a className="dropdown-item" href="#">
              Payment Status Dashboard
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Personal Workspace
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Total Relationship Dashboard
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Workflow Inbox
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Workflow Status Dashboard
            </a>
          </li>
        </ul>
      </div>

      {/* Disposals/Escheatment Dropdown */}
      <div className="dropend mt-2">
        <button
          className="btn btn-dark fw-bold text-start dropdown-toggle w-100"
          type="button"
          id="dropdownMenuButtonDisposals"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Disposals/Escheatment
        </button>
        <ul
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButtonDisposals"
          style={{ width: "257px" }}
        >
          <li>
            <a className="dropdown-item" href="#">
              Cremate Envelopes/Certificates
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Destruction List
            </a>
          </li>
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Escheatment <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Escheatment</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Data Point Extract
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Make Check Escheated
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Process Escheatment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Test Escheat
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Test Escheat Coupon
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Unescheat Certificate
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Report Collections/Batches
            </a>
          </li>
        </ul>
      </div>

      {/* Document/Report Production Dropdown */}
      <div className="dropend mt-2">
        <button
          className="btn btn-dark fw-bold dropdown-toggle w-100 text-start"
          type="button"
          id="dropdownMenuButtonDocument"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Document/Report Production
        </button>
        <ul
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButtonDocument"
          style={{ width: "257px" }}
        >
          {/* 1099 Production Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              1099 Production <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">1099 Production</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Generate 1099 Documents
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Statements for 1099
                </a>
              </li>
            </ul>
          </li>

          {/* Direct Items */}
          <li>
            <a className="dropdown-item" href="#">
              ACH Production
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Backup Withholding (W-9)
            </a>
          </li>

          {/* Bill Preparation Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Bill Preparation <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Bill Preparation</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Distribution Bill Preparation
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Maturity Bill Preparation
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Verify Bill
                </a>
              </li>
            </ul>
          </li>

          {/* Canadian Tax Production Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Canadian Tax Production <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Canadian Tax Production</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Canadian Interface
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Generate Canadian Tax Documents
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  List Canadian Tax
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Statements for Canadian Tax
                </a>
              </li>
            </ul>
          </li>

          {/* Certificate Production Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Certificate Production <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Certificate Production</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Produce Certificate(s)
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Pull List
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Reproduce Certificate(s)
                </a>
              </li>
            </ul>
          </li>

          {/* Check Production Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Check Production <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Check Production</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Check
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Assign Check Number(s)
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Contact Reissue Check
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Check(s)
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Format Checks
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Modify Check
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Notice of Check
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Reassign Check(s)
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Reformat Checks
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Refund Check(s)
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Reinstate Replaced Check(s)
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Reissue Check(s)
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Replace Check(s)
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Respecify Check Number(s)
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Verify Pay Packet
                </a>
              </li>
            </ul>
          </li>

          {/* Confirms Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Confirms <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Confirms</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  ACH Confirms
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Address Confirmation
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Audit Confirms
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Book-Entry Confirms
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Instruction Confirms
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Wire Confirms
                </a>
              </li>
            </ul>
          </li>

          {/* Consolidation Instructions Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Consolidation Instructions{" "}
              <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Consolidation Instructions</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Consolidation Instructions
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Consolidation Instructions
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Consolidation Instructions
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Consolidation Instructions
                </a>
              </li>
            </ul>
          </li>

          {/* Direct Items */}
          <li>
            <a className="dropdown-item" href="#">
              Cost Basis Information Request
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Foreign Withholding (W-8)
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Issuer Documents
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Labels for Mailings
            </a>
          </li>

          {/* Notice Documents Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Notice Documents <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Notice Documents</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Notice of Call
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Notice of Destruction
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Notice of Unpresented
                </a>
              </li>
            </ul>
          </li>

          {/* Payment Production Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Payment Production <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Payment Production</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Single Payment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Single ACH
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Single Check
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Single Wire
                </a>
              </li>
            </ul>
          </li>

          {/* Reminders Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Reminders <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Reminders</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Manage Notes
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Reminder Report
                </a>
              </li>
            </ul>
          </li>

          {/* Report Print Activities Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Report Print Activities <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Report Print Activities</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Email Reports
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Print Report
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Reprint Report
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  View Report
                </a>
              </li>
            </ul>
          </li>

          {/* Direct Items */}
          <li>
            <a className="dropdown-item" href="#">
              Ticket Preparation
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Transfer Statement
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Transmittal Letters
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              W8 Withholding
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Wire Production
            </a>
          </li>
        </ul>
      </div>

      {/* Fee Billing Dropdown */}
      <div className="dropend mt-2">
        <button
          className="btn btn-dark fw-bold dropdown-toggle w-100 text-start"
          type="button"
          id="dropdownMenuButtonFeeBilling"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Fee Billing
        </button>
        <ul
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButtonFeeBilling"
          style={{ width: "240px" }}
        >
          {/* Direct Items */}
          <li>
            <a className="dropdown-item" href="#">
              Apply Presentor Fee Payment
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Approve Fee
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Calculate Fee
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Charge Presentor Fee
            </a>
          </li>

          {/* Connect Fees Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Connect Fees <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Connect Fees</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Connection
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Connection
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Connection
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Connection
                </a>
              </li>
            </ul>
          </li>

          {/* Direct Items */}
          <li>
            <a className="dropdown-item" href="#">
              Credit Fee Bill
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Customer Fee Statement
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Delete Overdue
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Extract Fee
            </a>
          </li>

          {/* Fee Billing Category Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Fee Billing Category <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Fee Billing Category</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Category
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Category
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Category
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Category
                </a>
              </li>
            </ul>
          </li>

          {/* Direct Items */}
          <li>
            <a className="dropdown-item" href="#">
              Fee Detail
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              GL Summary
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Increase Billing
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Increase Expense
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              List Schedule
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Prepare Fee Bill
            </a>
          </li>

          {/* Receive Payment of Fee Submenu */}
          <li>
            <a className="dropdown-item" href="#">
              Bulk Receive Payment of Fee
            </a>
          </li>

          {/* Direct Items */}
          <li>
            <a className="dropdown-item" href="#">
              Report Schedule
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Reverse Fee
            </a>
          </li>

          {/* Schedule Fee Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Schedule Fee <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Schedule Fee</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Schedule
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Schedule
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Copy Schedule
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Schedule
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Schedule
                </a>
              </li>
            </ul>
          </li>

          {/* Shareholder Activity Fees Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Shareholder Activity Fees <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Shareholder Activity Fees</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Shareholder Fee
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Shareholder Fee
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Shareholder Fee
                </a>
              </li>
            </ul>
          </li>

          {/* Direct Items */}
          <li>
            <a className="dropdown-item" href="#">
              Summary Report
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Unpaid Fee Report
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Upcoming Date of Next Fee Bill
            </a>
          </li>
        </ul>
      </div>

      {/* File Maintenance Dropdown */}
      <div className="dropend mt-2">
        <button
          className="btn btn-dark fw-bold dropdown-toggle w-100 text-start"
          type="button"
          id="dropdownMenuButtonFileMaintenance"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          File Maintenance
        </button>
        <ul
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButtonFileMaintenance"
          style={{ width: "257px" }}
        >
          {/* 1099 Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              1099 <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">1099</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Adjust 1099 Balances
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change 1099 Information
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Year to Date Info (1099)
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Process OID File
                </a>
              </li>
            </ul>
          </li>

          {/* ABA Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              ABA <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">ABA</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add ABA
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change ABA
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete ABA
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display ABA
                </a>
              </li>
            </ul>
          </li>

          {/* Activity Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Activity <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Activity</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Activity
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Activity
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Activity
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Activity
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  List Activity
                </a>
              </li>
            </ul>
          </li>

          {/* Administrator Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Administrator <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Administrator</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Administrator
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Administrator
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Administrator
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Administrator
                </a>
              </li>
            </ul>
          </li>

          {/* Benchmark Rate Table Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Benchmark Rate Table <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Benchmark Rate Table</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Benchmark Rate Table
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Benchmark Rate Table
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Benchmark Rate Table
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Benchmark Rate Table
                </a>
              </li>
            </ul>
          </li>

          {/* Canned Correspondence Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Canned Correspondence <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Canned Correspondence</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Canned Correspondence
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Canned Correspondence
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Compose Canned Correspondence
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Canned Correspondence
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Canned Correspondence
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Send Canned Correspondence
                </a>
              </li>
            </ul>
          </li>

          {/* Casualty Rates Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Casualty Rates <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Casualty Rates</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Casualty Rate
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Casualty Rate
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Casualty Rate
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Casualty Rate
                </a>
              </li>
            </ul>
          </li>

          {/* Checklists Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Checklists <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Checklists</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Bond Checklist
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Payment Production Checklist
                </a>
              </li>
            </ul>
          </li>

          {/* Direct Item */}
          <li>
            <a className="dropdown-item" href="#">
              Clean Addresses
            </a>
          </li>

          {/* Code Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Code <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Code</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Code
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Code
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Code
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Code
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  List Codes
                </a>
              </li>
            </ul>
          </li>

          {/* Country Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Country <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Country</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Country
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Country
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Country
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Country
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  List Country
                </a>
              </li>
            </ul>
          </li>

          {/* Depot Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Depot <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Depot</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Depot
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Depot
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Depot
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Depot
                </a>
              </li>
            </ul>
          </li>

          {/* Family Members Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Family Members <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Family Members</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Family Member
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Family Member
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Family Member
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Family Member
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  List Family Members
                </a>
              </li>
            </ul>
          </li>

          {/* Form Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Form <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Form</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Form
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Form
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Correct DDA
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Form
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Form
                </a>
              </li>
            </ul>
          </li>

          {/* Holder Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Holder <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Holder</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Holder
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Holder
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Conduct Search
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Consolidate Holder
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Contact Date
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Holder
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Exempt Holder
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Found Holder (Resume Mailings)
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Lost Holder (Stop Mailings)
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Unconsolidate Holder
                </a>
              </li>

              {/* Name Change Submenu */}
              <li>
                <a
                  className="dropdown-item parent-item d-flex justify-content-between align-items-center"
                  href="#"
                >
                  Name Change (of Holder){" "}
                  <i className="fas fa-chevron-right"></i>
                </a>
                <ul className="dropdown-menu dropdown-submenu">
                  <li>
                    <h6 className="dropdown-header">Name Change (of Holder)</h6>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Change Name (of Holder)
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Inventory Change
                    </a>
                  </li>
                </ul>
              </li>

              {/* OFAC Restriction Submenu */}
              <li>
                <a
                  className="dropdown-item parent-item d-flex justify-content-between align-items-center"
                  href="#"
                >
                  OFAC Restriction <i className="fas fa-chevron-right"></i>
                </a>
                <ul className="dropdown-menu dropdown-submenu">
                  <li>
                    <h6 className="dropdown-header">OFAC Restriction</h6>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Add OFAC
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Change OFAC
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Delete OFAC
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Display OFAC
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Release OFAC
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          {/* Institution Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Institution <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Institution</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Institution
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Institution
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Institution
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Institution
                </a>
              </li>
            </ul>
          </li>

          {/* Issue Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Issue <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Issue</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Issue
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Adjust for DTC Balance
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Bond Issue
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  CDS Eligible
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Calculate OID
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Capacity of Transfer Agent (to Issue)
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Issue
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Currency of Issue
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Defeased Status of Issue
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Issue
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Issue
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Exclude Issue from Tax Reporting
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Exercise Issue
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Fast Eligible
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Issue Stated Outstanding
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  OID Creation
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Page Correct
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Remarket Issue
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Verify Stated
                </a>
              </li>
            </ul>
          </li>

          {/* Issuer Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Issuer <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Issuer</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  AMT (Alternate Minimum Tax)
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Issuer
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Issuer
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Issuer
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Issuer
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Issuer Stated
                </a>
              </li>
            </ul>
          </li>

          {/* Direct Item */}
          <li>
            <a className="dropdown-item" href="#">
              Maintain Cede
            </a>
          </li>

          {/* Multiple Currency Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Multiple Currency <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Multiple Currency</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Currency
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Conversion Rate
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Currency Factor
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Currency
                </a>
              </li>
            </ul>
          </li>

          {/* Direct Item */}
          <li>
            <a className="dropdown-item" href="#">
              Note Functionality
            </a>
          </li>

          {/* Obligor Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Obligor <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Obligor</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Obligor
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Obligor
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Consolidate Obligor
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Obligor
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Obligor
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  List Obligor
                </a>
              </li>
            </ul>
          </li>

          {/* Optional Codes Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Optional Codes <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Optional Codes</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Codes (Optional)
                </a>
              </li>
            </ul>
          </li>

          {/* Price Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Price <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Price</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Price
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Search Price
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Update Price
                </a>
              </li>
            </ul>
          </li>

          {/* Rate Table Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Rate Table <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Rate Table</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Rate Table
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Rate Table
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Rate Table
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Rate Table
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  List Rate Table
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Plug Amount for Issue
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Readjust Principal Paydown
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Validate Rate for Issue
                </a>
              </li>
            </ul>
          </li>

          {/* Registration Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Registration <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Registration</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Registration
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Registration
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Registration
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Registration
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  List Registration
                </a>
              </li>
            </ul>
          </li>

          {/* Relationship Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Relationship <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Relationship</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Relationship
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  List Relationship
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Maintain Relationship
                </a>
              </li>
            </ul>
          </li>

          {/* Request Report Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Request Report <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Request Report</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Request
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Request
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Request
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Request
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Run Requests
                </a>
              </li>
            </ul>
          </li>

          {/* Reserve Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Reserve <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Reserve</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Reserve
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Reserve
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Reserve
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Reserve
                </a>
              </li>
            </ul>
          </li>

          {/* Restriction Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Restriction <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Restriction</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Restriction
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Restriction
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Restriction
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Restriction
                </a>
              </li>
            </ul>
          </li>

          {/* Secondary Address Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Secondary Address <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Secondary Address</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Secondary Address
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Secondary Address
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Secondary Address
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Secondary Address
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Tax Secondary Address
                </a>
              </li>
            </ul>
          </li>

          {/* State Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              State <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">State</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add State
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change State
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete State
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display State
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Escheatment Requirements
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  List State
                </a>
              </li>
            </ul>
          </li>

          {/* Tax Lot Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Tax Lot <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Tax Lot</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Allocate Spin-Off Cost Basis
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Apply Cost Basis
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display TCN
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Elect Cost Basis Method
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Modify Tax Lot
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Reverse Allocate Spin-Off Cost Basis
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  TCN Breakdown
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Transfer Control Number
                </a>
              </li>
            </ul>
          </li>

          {/* Wire Instructions Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Wire Instructions <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Wire Instructions</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Wire Instructions
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Wire Instructions
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Wire Instructions
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Wire Instructions
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Instruction Verify
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Unverify Wire
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Verify Wire Instructions
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Import/Export Data Dropdown */}
      <div className="dropend mt-2">
        <button
          className="btn btn-dark fw-bold dropdown-toggle w-100 text-start"
          type="button"
          id="dropdownMenuButtonImportExport"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Import/Export Data
        </button>
        <ul
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButtonImportExport"
          style={{ width: "257px" }}
        >
          {/* Load Data Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Load Data <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Load Data</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  ACH Load
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Book Load
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Broadridge Load
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Cash On Hand Load
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Certificate Load
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Conversion Tools
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Coupon Load
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  DWAC Loader
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Fee Load
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Form Load
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  GS Load
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Holder Load
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Keane Load
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Load ABA
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Load Affiliation
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Load Benchmark Rates
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Load Call
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Load Casualty Rate
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Load Distribution
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Load Fee Expense
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Load Issue
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Load Issuer
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Load Lost Holder
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Load MMI
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Load Obligor
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Load Rate
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Load Search
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Load Tax Certification
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Miscellaneous Load
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  NOBO Load
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Optional Code Load
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Reload Tax Lot
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Secondary Address Load
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Stop Load
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Tax Lot Loader
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  YTD Load
                </a>
              </li>
            </ul>
          </li>

          {/* Unload Data Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Unload Data <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Unload Data</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Certificate Unload
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Check Unload
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Holder Unload
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  OFAC Unload
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Stock Unload
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Stop Unload
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Tax Lot Unload
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Inquiries Dropdown */}
      <div className="dropend mt-2">
        <button
          className="btn btn-dark fw-bold dropdown-toggle w-100 text-start"
          type="button"
          id="dropdownMenuButtonInquiries"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Inquiries
        </button>
        <ul
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButtonInquiries"
          style={{ width: "257px" }}
        >
          {/* Batch Inquiries Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Batch Inquiries <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Batch Inquiries</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Credit Summary
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Debit Summary
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Total Batch Information
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Transfer Summary
                </a>
              </li>
            </ul>
          </li>

          {/* Book Inquiries Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Book Inquiries <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Book Inquiries</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Book-Entry List
                </a>
              </li>
            </ul>
          </li>

          {/* Direct Item */}
          <li>
            <a className="dropdown-item" href="#">
              Cash Balances Inquiries
            </a>
          </li>

          {/* Certificate Inquiries Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Certificate Inquiries <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Certificate Inquiries</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Certificate(s)
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  List of Certificates
                </a>
              </li>
            </ul>
          </li>

          {/* Collection Inquiries Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Collection Inquiries <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Collection Inquiries</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Total Collection Information
                </a>
              </li>
            </ul>
          </li>

          {/* Fee Inquiries Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Fee Inquiries <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Fee Inquiries</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Audit Trail of Fees
                </a>
              </li>
            </ul>
          </li>

          {/* Holder Inquiries Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Holder Inquiries <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Holder Inquiries</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Audit Trail of Holder
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Held Checks for Holder
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Review Contact Dates
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Search for Holder Information
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Total Holder Information
                </a>
              </li>
            </ul>
          </li>

          {/* Inventory Inquiries Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Inventory Inquiries <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Inventory Inquiries</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Movement of Inventory
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Unissued Inventory
                </a>
              </li>
            </ul>
          </li>

          {/* Issue Inquiries Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Issue Inquiries <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Issue Inquiries</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Audit Trail of Issue
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Authorized Shares
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Capital Control Report
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Held Checks for Issue
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  History of Issue
                </a>
              </li>
            </ul>
          </li>

          {/* Issuer Inquiries Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Issuer Inquiries <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Issuer Inquiries</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Audit Trail of Issuer
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Issuer Authorized
                </a>
              </li>
            </ul>
          </li>

          {/* Obligor Inquiries Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Obligor Inquiries <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Obligor Inquiries</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Audit Trail of Obligor
                </a>
              </li>
            </ul>
          </li>

          {/* Proxy Inquiries Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Proxy Inquiries <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Proxy Inquiries</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Summary of Votes Cast
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Interfaces Dropdown */}
      <div className="dropend mt-2">
        <button
          className="btn btn-dark fw-bold dropdown-toggle w-100 text-start"
          type="button"
          id="dropdownMenuButtonInterfaces"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Interfaces
        </button>
        <ul
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButtonInterfaces"
          style={{ width: "257px" }}
        >
          {/* Direct Items */}
          <li>
            <a className="dropdown-item" href="#">
              1099 Internal Revenue Interface
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              ACH Interface
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              ADP Interface
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              ARP Check Reconciliation
            </a>
          </li>

          {/* CDS Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              CDS <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">CDS</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  CDS Confirmation
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  CDS Withdrawal
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Correct Holders of Record
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Holders of Record
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Holders of Record Report
                </a>
              </li>
            </ul>
          </li>

          {/* Direct Items */}
          <li>
            <a className="dropdown-item" href="#">
              Called Bond Information File
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Custodian Ledger Reconciliation
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              DCN5 Processing
            </a>
          </li>

          {/* DRS Processing Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              DRS Processing <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">DRS Processing</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add DRS Record
                </a>
              </li>
            </ul>
          </li>

          {/* Direct Items */}
          <li>
            <a className="dropdown-item" href="#">
              DTC Activities
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              DTC CBRS
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              DTC FAST Inventory
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              DTC RPSR
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              DTC Rapid Coupon Interface
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              DTC Variable Rate Processing
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Debit ACH
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              ESOP Interface
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              FAST Balancing
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              FAST Processing
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              FAST Proxy
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              GNMA Balance
            </a>
          </li>

          {/* Keane Interface Submenu */}
          <li>
            <a className="dropdown-item" href="#">
              Keane Address
            </a>
          </li>

          {/* Direct Items */}
          <li>
            <a className="dropdown-item" href="#">
              MSRB Rates
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              NYSE Outstanding
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Phoenix Balance
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Proxy Meeting Interface
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Registar Function
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Reporting to Exchanges
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              SFTP
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Wire Interface
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              X-17 Interface
            </a>
          </li>
        </ul>
      </div>

      {/* Payments Dropdown */}
      <div className="dropend mt-2">
        <button
          className="btn btn-dark fw-bold dropdown-toggle w-100 text-start"
          type="button"
          id="dropdownMenuButtonPayments"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Payments
        </button>
        <ul
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButtonPayments"
          style={{ width: "257px" }}
        >
          {/* Collection Processing (Bearer) Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Collection Processing (Bearer){" "}
              <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Collection Processing</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Collection Instruction
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Balance Collection Instruction
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Collection Instruction
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Collection Instruction
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Collection Instruction
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Reverse Collection Instruction
                </a>
              </li>

              {/* Envelope Processing Submenu */}
              <li>
                <a
                  className="dropdown-item parent-item d-flex justify-content-between align-items-center"
                  href="#"
                >
                  Envelope Processing <i className="fas fa-chevron-right"></i>
                </a>
                <ul className="dropdown-menu dropdown-submenu">
                  <li>
                    <h6 className="dropdown-header">Envelope Processing</h6>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Add Envelope
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Reverse Envelope
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          {/* Direct Item */}
          <li>
            <a className="dropdown-item" href="#">
              Escheat Bond Coupons
            </a>
          </li>

          {/* Update Payments Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Update Payments <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Update Payments</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Mark Payments as Cashed
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Remit Escheated Checks
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Return Wire
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Returned Check(s)
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Uncash Payments
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Unescheat Check
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Unreturn Wire
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Unreturned Check(s)
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Void Check(s)
                </a>
              </li>
            </ul>
          </li>

          {/* Vendors Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Vendors <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Vendors</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Pay Vendor
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Plan Processing Dropdown */}
      <div className="dropend mt-2">
        <button
          className="btn btn-dark fw-bold dropdown-toggle w-100 text-start"
          type="button"
          id="dropdownMenuButtonPlanProcessing"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Plan Processing
        </button>
        <ul
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButtonPlanProcessing"
          style={{ width: "257px" }}
        >
          {/* Direct Items */}
          <li>
            <a className="dropdown-item" href="#">
              Accept Cash Infusion
            </a>
          </li>

          {/* Add Pending Sale Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Add Pending Sale <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Pending Sale</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Pending Sale
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Pending Sale
                </a>
              </li>
            </ul>
          </li>

          {/* Allocation Processing Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Allocation Processing <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Allocation Processing</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Allocation Transaction
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Modify Allocation Transaction
                </a>
              </li>
            </ul>
          </li>

          {/* Participant Maintenance Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Participant Maintenance <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Participant Maintenance</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Purchase Plan Participant
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Purchase Plan Participant
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Purchase Plan Participant
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Purchase Plan Participant
                </a>
              </li>
            </ul>
          </li>

          {/* Plan Maintenance Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Plan Maintenance <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Plan Maintenance</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Stock Purchase Plan
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Stock Purchase Plan
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Stock Purchase Plan
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Stock Purchase Plan
                </a>
              </li>
            </ul>
          </li>

          {/* Direct Items */}
          <li>
            <a className="dropdown-item" href="#">
              Refund Cash
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sell Plan Shares
            </a>
          </li>
        </ul>
      </div>

      {/* Proxy Voting Dropdown */}
      <div className="dropend mt-2">
        <button
          className="btn btn-dark fw-bold dropdown-toggle w-100 text-start"
          type="button"
          id="dropdownMenuButtonProxyVoting"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Proxy Voting
        </button>
        <ul
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButtonProxyVoting"
          style={{ width: "257px" }}
        >
          {/* Direct Items */}
          <li>
            <a className="dropdown-item" href="#">
              Allocate Beneficial Holder Votes
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Appoint Proxy Holder
            </a>
          </li>

          {/* Breakdown Beneficial Holders Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Breakdown Beneficial Holders{" "}
              <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">
                  Breakdown Beneficial Holders
                </h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Beneficial Holder Breakdown
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Beneficial Holder Breakdown
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Beneficial Holder Breakdown
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Beneficial Holder Breakdown
                </a>
              </li>
            </ul>
          </li>

          {/* Cumulative Voting Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Cumulative Voting <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Cumulative Voting</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Cast Cumulative Proxy
                </a>
              </li>
            </ul>
          </li>

          {/* Direct Items */}
          <li>
            <a className="dropdown-item" href="#">
              Meeting Schedule
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Reallocate Omnibus Proxy Votes
            </a>
          </li>

          {/* Tabulation of Proxies Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Tabulation of Proxies <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Tabulation of Proxies</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Tabulation
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Tabulation
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Tabulation
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Tabulation
                </a>
              </li>
            </ul>
          </li>

          {/* Direct Items */}
          <li>
            <a className="dropdown-item" href="#">
              Unvote Proxy
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Vote Proxies
            </a>
          </li>
        </ul>
      </div>

      {/* Reports Dropdown */}
      <div className="dropend mt-2">
        <button
          className="btn btn-dark fw-bold dropdown-toggle w-100 text-start"
          type="button"
          id="dropdownMenuButtonReports"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Reports
        </button>
        <ul
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButtonReports"
          style={{ width: "257px" }}
        >
          {/* Direct Items */}
          <li>
            <a className="dropdown-item" href="#">
              Book-Entry Statements
            </a>
          </li>

          {/* Cash Reports Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Cash Reports <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Cash Reports</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Compare Cash Balances
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Daily Cash Balancing Report
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Float Analysis
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Statement of Cash Transactions
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Transaction Report
                </a>
              </li>
            </ul>
          </li>

          {/* Collection Reports Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Collection Reports <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Collection Reports</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Funds Receivable Report
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Journal of Collections
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Summary of Collections
                </a>
              </li>
            </ul>
          </li>

          {/* Direct Items */}
          <li>
            <a className="dropdown-item" href="#">
              Consolidated Holder Report
            </a>
          </li>

          {/* Correspondence Reports Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Correspondence Reports <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Correspondence Reports</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Summary of Correspondence
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Turnaround Reporting (of Correspondence)
                </a>
              </li>
            </ul>
          </li>

          {/* Direct Items */}
          <li>
            <a className="dropdown-item" href="#">
              Correspondence Ticket
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Debt Service Schedule
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Deleted Report
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Deliverable Log
            </a>
          </li>

          {/* Dividend Reports Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Dividend Reports <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Dividend Reports</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Dividend Balancing Sheet
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Map of Dividend Payments
                </a>
              </li>
            </ul>
          </li>

          {/* Direct Items */}
          <li>
            <a className="dropdown-item" href="#">
              ERISA Report
            </a>
          </li>

          {/* Escheatment Reports Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Escheatment Reports <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Escheatment Reports</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Map of Check Escheatment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Map of Coupon Escheatment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Map of Share Escheatment
                </a>
              </li>
            </ul>
          </li>

          {/* Direct Items */}
          <li>
            <a className="dropdown-item" href="#">
              Fed Examination
            </a>
          </li>

          {/* Fee Reports Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Fee Reports <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Fee Reports</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Accrual Fee Report
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Aged Fee
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Annual Fee Report
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Anticipated Fee Report
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Billable Report
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Connection Report
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Expense Report
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Invoice Summary Report
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Overdue Fee Notice Report
                </a>
              </li>
            </ul>
          </li>

          {/* Direct Items */}
          <li>
            <a className="dropdown-item" href="#">
              Found Holder Report
            </a>
          </li>

          {/* Interest Reports Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Interest Reports <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Interest Reports</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Holder Roll-Up
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Map of Interest Payments
                </a>
              </li>
            </ul>
          </li>

          {/* Issue Reports Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Issue Reports <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Issue Reports</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Inconsistent CUSIP Report
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  List Issue
                </a>
              </li>
            </ul>
          </li>

          {/* Issuer Reports Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Issuer Reports <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Issuer Reports</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Closed Loan Report
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Issuer Statement
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  List Issuer
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Report of Issuer Detail
                </a>
              </li>
            </ul>
          </li>

          {/* Direct Items */}
          <li>
            <a className="dropdown-item" href="#">
              Login Report
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Lost Holder Status Report
            </a>
          </li>

          {/* Maintenance Transactions Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Maintenance Transactions <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Maintenance Transactions</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Operator Maintenance Report
                </a>
              </li>
            </ul>
          </li>

          {/* Management Reports Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Management Reports <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Management Reports</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Authority of Operator
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Bond Disbursement Report
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Cash Management Report
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Check Production Schedule
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Disbursement Summary
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Form Usage Statistics
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Form-4
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Letter of Credit
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Operator Statistics
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Payment Reconciliation
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Payment Statistics
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Payment Summary
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Production Analysis Report
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Projected Production Report
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Registrar Control
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Requested Reports
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Status Report
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Template List
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Variable Rates Projected Production
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Wire Detail
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Wire Status
                </a>
              </li>
            </ul>
          </li>

          {/* Direct Items */}
          <li>
            <a className="dropdown-item" href="#">
              Paydown List
            </a>
          </li>

          {/* Payment Reports Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Payment Reports <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Payment Reports</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Payment Report
                </a>
              </li>
            </ul>
          </li>

          {/* Direct Item */}
          <li>
            <a className="dropdown-item" href="#">
              Pending Report
            </a>
          </li>

          {/* Plan Reports Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Plan Reports <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Plan Reports</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Bluesky Plan Analysis
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Cash Available for Investment
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Employee Stock Statement
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Liquidation Map
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  List of Plans
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  List Pending
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Map of Sweep Transactions
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Participant List
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Statements for Participants
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Transactions of Plan Investments
                </a>
              </li>
            </ul>
          </li>

          {/* Proxy Reports Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Proxy Reports <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Proxy Reports</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Certified Proxy List
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  List of Voting Detail
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Omnibus Proxy List
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Report of Cumulative Voting
                </a>
              </li>
            </ul>
          </li>

          {/* Redemption Reports Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Redemption Reports <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Redemption Reports</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Map of Redemption Payments
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Paid Item Statement
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Rate Statement
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Summary of Redemption Payments
                </a>
              </li>
            </ul>
          </li>

          {/* Registers Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Registers <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Registers</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  ACH Register
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Check Register
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Dividend Register
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Instruction Register
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Interest Register
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Redemption Register
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Undeliverable Check Register
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Wire Register
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Withholding Register
                </a>
              </li>
            </ul>
          </li>

          {/* Direct Items */}
          <li>
            <a className="dropdown-item" href="#">
              Rejected Batch Report
            </a>
          </li>

          {/* Removed Reports Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Removed Reports <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Removed Reports</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Batch Ticket
                </a>
              </li>
            </ul>
          </li>

          {/* Direct Items */}
          <li>
            <a className="dropdown-item" href="#">
              Report of Optional Codes
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Reserve Report
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Restricted Book Detail Report
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Returned Document Report
            </a>
          </li>

          {/* Reverse Split Reports Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Reverse Split Reports <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Reverse Split Reports</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Map of Reverse Split
                </a>
              </li>
            </ul>
          </li>

          {/* Direct Items */}
          <li>
            <a className="dropdown-item" href="#">
              Review Transfer
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Swep
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Secondary Address List
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Securities Log
            </a>
          </li>

          {/* Securities Transaction Reports Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Securities Transaction Reports{" "}
              <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">
                  Securities Transaction Reports
                </h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Called Securities Report
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Certificates Called Numerically
                </a>
              </li>
            </ul>
          </li>

          {/* Direct Items */}
          <li>
            <a className="dropdown-item" href="#">
              Share Statement
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Shareholder Register
            </a>
          </li>

          {/* Shareholder Reports Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Shareholder Reports <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Shareholder Reports</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Address Listing
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Certified Shareholder List
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Detailed Holder List
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Exact Holder Report
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Geographic Breakdown
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Holding Size Breakdown
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  List of Shareholders
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Look-Alike Shareholder Report
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Ownership Registration Breakdown
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Zip Code Breakdown
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* System Control and Maintenance Dropdown */}
      <div className="dropend mt-2">
        <button
          className="btn btn-dark fw-bold dropdown-toggle w-100 text-start"
          type="button"
          id="dropdownMenuButtonSystemControl"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          System Control/Maintenance
        </button>
        <ul
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButtonSystemControl"
          style={{ width: "257px" }}
        >
          {/* Direct Items */}
          <li>
            <a className="dropdown-item" href="#">
              Allow Operator
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Bill Generator
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Change Password
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Data FTP
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Database Expansion
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              File Manager
            </a>
          </li>

          {/* Grouping of Operators Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Grouping of Operators <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Grouping of Operators</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Operator Group
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Operator Group
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Operator Group
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Operator Group
                </a>
              </li>
            </ul>
          </li>

          {/* Direct Items */}
          <li>
            <a className="dropdown-item" href="#">
              Holiday
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Init AsOf
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Init Cash
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Init Fee
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Init Plan
            </a>
          </li>

          {/* Linkstar Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Linkstar <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Linkstar</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Linkstar Password
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Linkstar Update from Web
                </a>
              </li>
            </ul>
          </li>

          {/* Direct Items */}
          <li>
            <a className="dropdown-item" href="#">
              Navigation Bar Settings
            </a>
          </li>

          {/* Operator Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Operator <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Operator</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Operator
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Audit Trail of Operator
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Build Operator Restriction Sections
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Change Operator
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Copy Operator
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delete Operator
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Display Operator
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Initialize Operator Password
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Internet Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  List Operator
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Maintain Favorites
                </a>
              </li>
            </ul>
          </li>

          {/* Direct Items */}
          <li>
            <a className="dropdown-item" href="#">
              Proxy Trial
            </a>
          </li>

          {/* Purge In-Active Information Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Purge In-Active Information{" "}
              <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Purge In-Active Information</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Holder Information Purge
                </a>
              </li>
            </ul>
          </li>

          {/* Direct Items */}
          <li>
            <a className="dropdown-item" href="#">
              Server Administration
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Set Processing Date
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Switch Operator
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              TS Generic Fixit
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Template Editor
            </a>
          </li>

          {/* Testing Submenu */}
          <li>
            <a
              className="dropdown-item parent-item d-flex justify-content-between align-items-center"
              href="#"
            >
              Testing <i className="fas fa-chevron-right"></i>
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <h6 className="dropdown-header">Testing</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Test Management
                </a>
              </li>
            </ul>
          </li>

          {/* Direct Items */}
          <li>
            <a className="dropdown-item" href="#">
              Trial Program
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Update Address Cleaner
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Update License
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              YTD Trial
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
