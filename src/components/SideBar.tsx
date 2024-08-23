import React from "react";

const SideBar = () => {
  return (
    <div
      className="d-flex flex-column p-2 bg-light vh-100 sticky-top"
      style={{ width: "265px" }}
    >
      {/* Cash Accounting Dropdown */}
      <div className="dropdown mt-1">
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
          style={{ width: "240px" }}
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
      <div className="dropdown mt-2">
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
      <div className="dropdown mt-2">
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
      <div className="dropdown mt-2">
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
          style={{ width: "240px" }}
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
      <div className="dropdown mt-2">
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
          style={{ width: "240px" }}
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
      <div className="dropdown mt-2">
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
          style={{ width: "240px" }}
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
      <div className="dropdown mt-2">
        <button
          className="btn btn-dark fw-bold dropdown-toggle w-100 text-start"
          type="button"
          id="dropdownMenuButtonDocument"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Document/Report Production
        </button>
      </div>

      {/* Fee Billing Dropdown */}
      <div className="dropdown mt-2">
        <button
          className="btn btn-dark fw-bold dropdown-toggle w-100 text-start"
          type="button"
          id="dropdownMenuButtonFeeBilling"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Fee Billing
        </button>
      </div>

      {/* File Maintenance Dropdown */}
      <div className="dropdown mt-2">
        <button
          className="btn btn-dark fw-bold dropdown-toggle w-100 text-start"
          type="button"
          id="dropdownMenuButtonFileMaintenance"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          File Maintenance
        </button>
      </div>

      {/* Import/Export Data Dropdown */}
      <div className="dropdown mt-2">
        <button
          className="btn btn-dark fw-bold dropdown-toggle w-100 text-start"
          type="button"
          id="dropdownMenuButtonImportExport"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Import/Export Data
        </button>
      </div>

      {/* Inquiries Dropdown */}
      <div className="dropdown mt-2">
        <button
          className="btn btn-dark fw-bold dropdown-toggle w-100 text-start"
          type="button"
          id="dropdownMenuButtonInquiries"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Inquiries
        </button>
      </div>

      {/* Interfaces Dropdown */}
      <div className="dropdown mt-2">
        <button
          className="btn btn-dark fw-bold dropdown-toggle w-100 text-start"
          type="button"
          id="dropdownMenuButtonInterfaces"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Interfaces
        </button>
      </div>

      {/* Payments Dropdown */}
      <div className="dropdown mt-2">
        <button
          className="btn btn-dark fw-bold dropdown-toggle w-100 text-start"
          type="button"
          id="dropdownMenuButtonPayments"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Payments
        </button>
      </div>

      {/* Plan Processing Dropdown */}
      <div className="dropdown mt-2">
        <button
          className="btn btn-dark fw-bold dropdown-toggle w-100 text-start"
          type="button"
          id="dropdownMenuButtonPlanProcessing"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Plan Processing
        </button>
      </div>

      {/* Proxy Voting Dropdown */}
      <div className="dropdown mt-2">
        <button
          className="btn btn-dark fw-bold dropdown-toggle w-100 text-start"
          type="button"
          id="dropdownMenuButtonProxyVoting"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Proxy Voting
        </button>
      </div>

      {/* Reports Dropdown */}
      <div className="dropdown mt-2">
        <button
          className="btn btn-dark fw-bold dropdown-toggle w-100 text-start"
          type="button"
          id="dropdownMenuButtonReports"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Reports
        </button>
      </div>

      {/* System Control and Maintenance Dropdown */}
      <div className="dropdown mt-2">
        <button
          className="btn btn-dark fw-bold dropdown-toggle w-100 text-start"
          type="button"
          id="dropdownMenuButtonSystemControl"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          System Control/Maintenance
        </button>
      </div>
    </div>
  );
};

export default SideBar;
