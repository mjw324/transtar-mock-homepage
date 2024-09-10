"use client";

import React from "react";

const SideBar = ({isVisible}: { isVisible: boolean }) => {
    if (!isVisible) {
        return null;
    }
    return (
        <div className="d-flex flex-column p-2 pe-3 bg-light scrollbar" style={{width: "300px"}}>
            {/* Cash Accounting Accordion */}
            <div className="accordion" id="cashAccountingAccordion">
                <div className="accordion-item bg-transparent border-0">
                    <h2 className="accordion-header" id="cashAccountingHeading">
                        <button
                            className="accordion-button collapsed bg-transparent fw-bold p-0 py-2 text-dark pb-3"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#cashAccountingCollapse"
                            aria-expanded="false"
                            aria-controls="cashAccountingCollapse"
                        >
                            <i className="fas fa-coins me-2 fa-fw"></i>
                            <span className="d-none d-xxl-block">Cash Accounting</span>
                        </button>
                    </h2>
                    <div
                        id="cashAccountingCollapse"
                        className="accordion-collapse collapse"
                        aria-labelledby="cashAccountingHeading"
                        data-bs-parent="#cashAccountingAccordion"
                    >
                        <div className="accordion-body fw-bold p-0 ps-4">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Adjust Cash Balance
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Bulk Collect
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Collect Cash Receivable
                                    </a>
                                </li>
                                {/* Cash Transactions Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 py-1">
                                    <h2 className="accordion-header" id="cashTransactionsHeading">
                                        <button
                                            className="accordion-button collapsed p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#cashTransactionsCollapse"
                                            aria-expanded="false"
                                            aria-controls="cashTransactionsCollapse"
                                        >
                                            Cash Transactions
                                        </button>
                                    </h2>
                                    <div
                                        id="cashTransactionsCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="cashTransactionsHeading"
                                        data-bs-parent="#cashAccountingCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Delete Cash Transaction
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Display Cash Transaction
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Modify Cash Transaction
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Reverse Cash Transaction
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion" id="certificateProcessingAccordion">
                {/* Certificate Processing Accordion */}
                <div className="accordion-item bg-transparent border-0">
                    <h2 className="accordion-header" id="certificateProcessingHeading">
                        <button
                            className="accordion-button collapsed bg-transparent fw-bold p-0 py-2 text-dark pb-3"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#certificateProcessingCollapse"
                            aria-expanded="false"
                            aria-controls="certificateProcessingCollapse"
                        >
                            <i className="fas fa-money-check-dollar me-2 fa-fw"></i>
                            <span className="d-none d-xxl-block">Certificate Processing</span>
                        </button>
                    </h2>
                    <div
                        id="certificateProcessingCollapse"
                        className="accordion-collapse collapse"
                        aria-labelledby="certificateProcessingHeading"
                        data-bs-parent="#certificateProcessingAccordion"
                    >
                        <div className="accordion-body fw-bold p-0 ps-4">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Call Certificate(s)
                                    </a>
                                </li>
                                {/* Batch Processing Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="batchProcessingHeading">
                                        <button
                                            className="accordion-button collapsed p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#batchProcessingCollapse"
                                            aria-expanded="false"
                                            aria-controls="batchProcessingCollapse"
                                        >
                                            Batch Processing
                                        </button>
                                    </h2>
                                    <div
                                        id="batchProcessingCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="batchProcessingHeading"
                                        data-bs-parent="#certificateProcessingCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Add Batch
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Change Batch
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Continue Batch
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                {/* Cancel Certificates Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 py-1">
                                    <h2
                                        className="accordion-header"
                                        id="cancelCertificatesHeading"
                                    >
                                        <button
                                            className="accordion-button collapsed p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#cancelCertificatesCollapse"
                                            aria-expanded="true"
                                            aria-controls="cancelCertificatesCollapse"
                                        >
                                            Cancel Certificates
                                        </button>
                                    </h2>
                                    <div
                                        id="cancelCertificatesCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="cancelCertificatesHeading"
                                        data-bs-parent="#certificateProcessingCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Certificates to Cancel
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Plan Shares to Cancel
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                {/* Repeat for other sections as needed */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Corporate Actions Accordion */}
            <div className="accordion" id="corporateActionsAccordion">
                <div className="accordion-item bg-transparent border-0">
                    <h2 className="accordion-header" id="corporateActionsHeading">
                        <button
                            className="accordion-button collapsed bg-transparent fw-bold p-0 py-2 text-dark pb-3"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#corporateActionsCollapse"
                            aria-expanded="false"
                            aria-controls="corporateActionsCollapse"
                        >
                            <i className="fas fa-briefcase me-2 fa-fw"></i>
                            <span className="d-none d-xxl-block">Corporate Actions</span>
                        </button>
                    </h2>
                    <div
                        id="corporateActionsCollapse"
                        className="accordion-collapse collapse"
                        aria-labelledby="corporateActionsHeading"
                        data-bs-parent="#corporateActionsAccordion"
                    >
                        <div className="accordion-body fw-bold p-0 ps-4">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Process Accrued Interest
                                    </a>
                                </li>

                                {/* Call Group Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="callHeading">
                                        <button
                                            className="accordion-button collapsed p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#callCollapse"
                                            aria-expanded="false"
                                            aria-controls="callCollapse"
                                        >
                                            Call
                                        </button>
                                    </h2>
                                    <div
                                        id="callCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="callHeading"
                                        data-bs-parent="#corporateActionsCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Add Call
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Change Call
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Delete Call
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Display Call
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Process Call
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Release Call
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Sinking Fund Setup
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Verify Calls
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Close Loan
                                    </a>
                                </li>

                                {/* Dividend Group Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="dividendHeading">
                                        <button
                                            className="accordion-button collapsed p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#dividendCollapse"
                                            aria-expanded="false"
                                            aria-controls="dividendCollapse"
                                        >
                                            Dividend
                                        </button>
                                    </h2>
                                    <div
                                        id="dividendCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="dividendHeading"
                                        data-bs-parent="#corporateActionsCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Add Dividend
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Change Dividend
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Delete Dividend
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Display Dividend
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Process Dividend
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Release Dividend
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Exchange Group Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="exchangeHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#exchangeCollapse"
                                            aria-expanded="false"
                                            aria-controls="exchangeCollapse"
                                        >
                                            Exchange
                                        </button>
                                    </h2>
                                    <div
                                        id="exchangeCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="exchangeHeading"
                                        data-bs-parent="#corporateActionsCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Add Exchange
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Change Exchange
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Delete Exchange
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Display Exchange
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Interest Group Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="interestHeading">
                                        <button
                                            className="accordion-button collapsed p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#interestCollapse"
                                            aria-expanded="false"
                                            aria-controls="interestCollapse"
                                        >
                                            Interest
                                        </button>
                                    </h2>
                                    <div
                                        id="interestCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="interestHeading"
                                        data-bs-parent="#corporateActionsCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Add Interest
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Change Interest
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Delete Interest
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Display Interest
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Process Interest
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Release Interest
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Liquidation of Plan Shares Group Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="liquidationHeading">
                                        <button
                                            className="accordion-button collapsed p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#liquidationCollapse"
                                            aria-expanded="false"
                                            aria-controls="liquidationCollapse"
                                        >
                                            Liquidation of Plan Shares
                                        </button>
                                    </h2>
                                    <div
                                        id="liquidationCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="liquidationHeading"
                                        data-bs-parent="#corporateActionsCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Add Liquidation
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Change Liquidation
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Delete Liquidation
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Display Liquidation
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Process Liquidation
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Maturity Group Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="maturityHeading">
                                        <button
                                            className="accordion-button collapsed p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#maturityCollapse"
                                            aria-expanded="false"
                                            aria-controls="maturityCollapse"
                                        >
                                            Maturity
                                        </button>
                                    </h2>
                                    <div
                                        id="maturityCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="maturityHeading"
                                        data-bs-parent="#corporateActionsCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Add Maturity
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Change Maturity
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Delete Maturity
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Display Maturity
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Process Maturity
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Release Maturity
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Principal Reduction Payment Group Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2
                                        className="accordion-header"
                                        id="principalReductionHeading"
                                    >
                                        <button
                                            className="accordion-button collapsed p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#principalReductionCollapse"
                                            aria-expanded="false"
                                            aria-controls="principalReductionCollapse"
                                        >
                                            Principal Reduction
                                        </button>
                                    </h2>
                                    <div
                                        id="principalReductionCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="principalReductionHeading"
                                        data-bs-parent="#corporateActionsCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Add Payment
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Change Payment
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Delete Payment
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Display Payment
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Process Payment
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Release Payment
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Proxy Group Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="proxyHeading">
                                        <button
                                            className="accordion-button collapsed p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#proxyCollapse"
                                            aria-expanded="false"
                                            aria-controls="proxyCollapse"
                                        >
                                            Proxy
                                        </button>
                                    </h2>
                                    <div
                                        id="proxyCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="proxyHeading"
                                        data-bs-parent="#corporateActionsCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Add Proxy
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Change Proxy
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Delete Proxy
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Display Proxy
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Email Proxy
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Process Proxy
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Sequence Proxy Numbers
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Reverse Corporate Action
                                    </a>
                                </li>

                                {/* Reverse Split Group Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="reverseSplitHeading">
                                        <button
                                            className="accordion-button collapsed p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#reverseSplitCollapse"
                                            aria-expanded="false"
                                            aria-controls="reverseSplitCollapse"
                                        >
                                            Reverse Split
                                        </button>
                                    </h2>
                                    <div
                                        id="reverseSplitCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="reverseSplitHeading"
                                        data-bs-parent="#corporateActionsCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Add Reverse Split
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Change Reverse Split
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Delete Reverse Split
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Display Reverse Split
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Process Reverse Split
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Schedule Corporate Actions
                                    </a>
                                </li>

                                {/* Spin-Off Group Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="spinOffHeading">
                                        <button
                                            className="accordion-button collapsed p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#spinOffCollapse"
                                            aria-expanded="false"
                                            aria-controls="spinOffCollapse"
                                        >
                                            Spin-Off
                                        </button>
                                    </h2>
                                    <div
                                        id="spinOffCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="spinOffHeading"
                                        data-bs-parent="#corporateActionsCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Add Spin-Off
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Change Spin-Off
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Delete Spin-Off
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Display Spin-Off
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Process Spin-Off
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Stock Dividend/Split Group Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2
                                        className="accordion-header"
                                        id="stockDividendSplitHeading"
                                    >
                                        <button
                                            className="accordion-button collapsed p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#stockDividendSplitCollapse"
                                            aria-expanded="false"
                                            aria-controls="stockDividendSplitCollapse"
                                        >
                                            Stock Dividend/Split
                                        </button>
                                    </h2>
                                    <div
                                        id="stockDividendSplitCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="stockDividendSplitHeading"
                                        data-bs-parent="#corporateActionsCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Add Stock Dividend/Split
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Change Stock Dividend/Split
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Delete Stock Dividend/Split
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Display Stock Dividend/Split
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Process Stock Dividend/Split
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Sweep Cash Group Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="sweepCashHeading">
                                        <button
                                            className="accordion-button collapsed p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#sweepCashCollapse"
                                            aria-expanded="false"
                                            aria-controls="sweepCashCollapse"
                                        >
                                            Sweep Cash
                                        </button>
                                    </h2>
                                    <div
                                        id="sweepCashCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="sweepCashHeading"
                                        data-bs-parent="#corporateActionsCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Add Sweep
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Change Sweep
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Delete Sweep
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Display Sweep
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Process Sweep
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Tender Group Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="tenderHeading">
                                        <button
                                            className="accordion-button collapsed p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#tenderCollapse"
                                            aria-expanded="false"
                                            aria-controls="tenderCollapse"
                                        >
                                            Tender
                                        </button>
                                    </h2>
                                    <div
                                        id="tenderCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="tenderHeading"
                                        data-bs-parent="#corporateActionsCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Add Tender
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Change Tender
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Delete Tender
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Display Tender
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Process Tender
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Unschedule Corporate Actions
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Correspondence Tracking Accordion */}
            <div className="accordion" id="correspondenceTrackingAccordion">
                <div className="accordion-item bg-transparent border-0">
                    <h2 className="accordion-header" id="correspondenceTrackingHeading">
                        <button
                            className="accordion-button collapsed bg-transparent fw-bold p-0 py-2 text-dark pb-3"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#correspondenceTrackingCollapse"
                            aria-expanded="false"
                            aria-controls="correspondenceTrackingCollapse"
                        >
                            <i className="fas fa-envelope me-2 fa-fw"></i>
                            <span className="d-none d-xxl-block">Corespondence Tracking</span>
                        </button>
                    </h2>
                    <div
                        id="correspondenceTrackingCollapse"
                        className="accordion-collapse collapse"
                        aria-labelledby="correspondenceTrackingHeading"
                        data-bs-parent="#correspondenceTrackingAccordion"
                    >
                        <div className="accordion-body fw-bold p-0 ps-4">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Add Correspondence
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Assign Correspondence
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Change Correspondence
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Complete Correspondence
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Delegate Account Rep
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Delete Correspondence
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Display Correspondence
                                    </a>
                                </li>
                                {/* Document Tracking Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="documentTrackingHeading">
                                        <button
                                            className="accordion-button collapsed p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#documentTrackingCollapse"
                                            aria-expanded="false"
                                            aria-controls="documentTrackingCollapse"
                                        >
                                            Document Tracking
                                        </button>
                                    </h2>
                                    <div
                                        id="documentTrackingCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="documentTrackingHeading"
                                        data-bs-parent="#correspondenceTrackingCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Add Document
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Change Document
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Delete Document
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Display Document
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Return Document
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        List Correspondence
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Total Correspondence
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Dashboards Accordion */}
            <div className="accordion" id="dashboardsAccordion">
                <div className="accordion-item bg-transparent border-0">
                    <h2 className="accordion-header" id="dashboardsHeading">
                        <button
                            className="accordion-button collapsed bg-transparent fw-bold p-0 py-2 text-dark pb-3"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#dashboardsCollapse"
                            aria-expanded="false"
                            aria-controls="dashboardsCollapse"
                        >
                            <i className="fas fa-tachometer-alt me-2 fa-fw"></i>
                            <span className="d-none d-xxl-block">Dashboards</span>
                        </button>
                    </h2>
                    <div
                        id="dashboardsCollapse"
                        className="accordion-collapse collapse"
                        aria-labelledby="dashboardsHeading"
                        data-bs-parent="#dashboardsAccordion"
                    >
                        <div className="accordion-body fw-bold p-0 ps-4">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Payment Status Dashboard
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Personal Workspace
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Total Relationship Dashboard
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Workflow Inbox
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Workflow Status Dashboard
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Disposals/Escheatment Accordion */}
            <div className="accordion" id="disposalsAccordion">
                <div className="accordion-item bg-transparent border-0">
                    <h2 className="accordion-header" id="disposalsHeading">
                        <button
                            className="accordion-button collapsed bg-transparent fw-bold p-0 py-2 text-dark pb-3"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#disposalsCollapse"
                            aria-expanded="false"
                            aria-controls="disposalsCollapse"
                        >
                            <i className="fas fa-trash-alt me-2 fa-fw"></i>
                            <span className="d-none d-xxl-block">Disposals/Escheatment</span>
                        </button>
                    </h2>
                    <div
                        id="disposalsCollapse"
                        className="accordion-collapse collapse"
                        aria-labelledby="disposalsHeading"
                        data-bs-parent="#disposalsAccordion"
                    >
                        <div className="accordion-body fw-bold p-0 ps-4">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Cremate Envelopes/Certificates
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Destruction List
                                    </a>
                                </li>
                                {/* Escheatment Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="escheatmentHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#escheatmentCollapse"
                                            aria-expanded="false"
                                            aria-controls="escheatmentCollapse"
                                        >
                                            Escheatment
                                        </button>
                                    </h2>
                                    <div
                                        id="escheatmentCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="escheatmentHeading"
                                        data-bs-parent="#disposalsCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Data Point Extract
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Make Check Escheated
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Process Escheatment
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Test Escheat
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Test Escheat Coupon
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Unescheat Certificate
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Report Collections/Batches
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Document/Report Production Accordion */}
            <div className="accordion" id="documentProductionAccordion">
                <div className="accordion-item bg-transparent border-0">
                    <h2 className="accordion-header" id="documentProductionHeading">
                        <button
                            className="accordion-button collapsed bg-transparent fw-bold p-0 py-2 text-dark pb-3"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#documentProductionCollapse"
                            aria-expanded="false"
                            aria-controls="documentProductionCollapse"
                        >
                            <i className="fas fa-file-alt me-2 fa-fw"></i>
                            <span className="d-none d-xxl-block">Document Production</span>
                        </button>
                    </h2>
                    <div
                        id="documentProductionCollapse"
                        className="accordion-collapse collapse"
                        aria-labelledby="documentProductionHeading"
                        data-bs-parent="#documentProductionAccordion"
                    >
                        <div className="accordion-body fw-bold p-0 ps-4">
                            <ul className="nav flex-column">
                                {/* 1099 Production Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="production1099Heading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#production1099Collapse"
                                            aria-expanded="false"
                                            aria-controls="production1099Collapse"
                                        >
                                            1099 Production
                                        </button>
                                    </h2>
                                    <div
                                        id="production1099Collapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="production1099Heading"
                                        data-bs-parent="#documentProductionCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Generate 1099 Documents
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Statements for 1099
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Direct Items */}
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        ACH Production
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Backup Withholding (W-9)
                                    </a>
                                </li>

                                {/* Bill Preparation Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="billPreparationHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#billPreparationCollapse"
                                            aria-expanded="false"
                                            aria-controls="billPreparationCollapse"
                                        >
                                            Bill Preparation
                                        </button>
                                    </h2>
                                    <div
                                        id="billPreparationCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="billPreparationHeading"
                                        data-bs-parent="#documentProductionCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Distribution Bill Preparation
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Maturity Bill Preparation
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Verify Bill
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Canadian Tax Production Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2
                                        className="accordion-header"
                                        id="canadianTaxProductionHeading"
                                    >
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#canadianTaxProductionCollapse"
                                            aria-expanded="false"
                                            aria-controls="canadianTaxProductionCollapse"
                                        >
                                            Canadian Tax Production
                                        </button>
                                    </h2>
                                    <div
                                        id="canadianTaxProductionCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="canadianTaxProductionHeading"
                                        data-bs-parent="#documentProductionCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Canadian Interface
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Generate Canadian Tax Documents
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        List Canadian Tax
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Statements for Canadian Tax
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Certificate Production Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2
                                        className="accordion-header"
                                        id="certificateProductionHeading"
                                    >
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#certificateProductionCollapse"
                                            aria-expanded="false"
                                            aria-controls="certificateProductionCollapse"
                                        >
                                            Certificate Production
                                        </button>
                                    </h2>
                                    <div
                                        id="certificateProductionCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="certificateProductionHeading"
                                        data-bs-parent="#documentProductionCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Produce Certificate(s)
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Pull List
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Reproduce Certificate(s)
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Check Production Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="checkProductionHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#checkProductionCollapse"
                                            aria-expanded="false"
                                            aria-controls="checkProductionCollapse"
                                        >
                                            Check Production
                                        </button>
                                    </h2>
                                    <div
                                        id="checkProductionCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="checkProductionHeading"
                                        data-bs-parent="#documentProductionCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Add Check
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Assign Check Number(s)
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Contact Reissue Check
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Display Check(s)
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Format Checks
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Modify Check
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Notice of Check
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Reassign Check(s)
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Reformat Checks
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Refund Check(s)
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Reinstate Replaced Check(s)
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Reissue Check(s)
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Replace Check(s)
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Respecify Check Number(s)
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Verify Pay Packet
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Fee Billing Accordion */}
            <div className="accordion" id="feeBillingAccordion">
                <div className="accordion-item bg-transparent border-0">
                    <h2 className="accordion-header" id="feeBillingHeading">
                        <button
                            className="accordion-button collapsed bg-transparent fw-bold p-0 py-2 text-dark pb-3"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#feeBillingCollapse"
                            aria-expanded="false"
                            aria-controls="feeBillingCollapse"
                        >
                            <i className="fas fa-file-invoice-dollar me-2 fa-fw"></i>
                            <span className="d-none d-xxl-block">Fee Billing</span>
                        </button>
                    </h2>
                    <div
                        id="feeBillingCollapse"
                        className="accordion-collapse collapse"
                        aria-labelledby="feeBillingHeading"
                        data-bs-parent="#feeBillingAccordion"
                    >
                        <div className="accordion-body fw-bold p-0 ps-4">
                            <ul className="nav flex-column">
                                {/* Direct Items */}
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Apply Presentor Fee Payment
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Approve Fee
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Calculate Fee
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Charge Presentor Fee
                                    </a>
                                </li>

                                {/* Connect Fees Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="connectFeesHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#connectFeesCollapse"
                                            aria-expanded="false"
                                            aria-controls="connectFeesCollapse"
                                        >
                                            Connect Fees
                                        </button>
                                    </h2>
                                    <div
                                        id="connectFeesCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="connectFeesHeading"
                                        data-bs-parent="#feeBillingCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Add Connection
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Change Connection
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Delete Connection
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Display Connection
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Direct Items */}
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Credit Fee Bill
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Customer Fee Statement
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Delete Overdue
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Extract Fee
                                    </a>
                                </li>

                                {/* Fee Billing Category Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2
                                        className="accordion-header"
                                        id="feeBillingCategoryHeading"
                                    >
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#feeBillingCategoryCollapse"
                                            aria-expanded="false"
                                            aria-controls="feeBillingCategoryCollapse"
                                        >
                                            Fee Billing Category
                                        </button>
                                    </h2>
                                    <div
                                        id="feeBillingCategoryCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="feeBillingCategoryHeading"
                                        data-bs-parent="#feeBillingCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Add Category
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Change Category
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Delete Category
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Display Category
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Direct Items */}
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Fee Detail
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        GL Summary
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Increase Billing
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Increase Expense
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        List Schedule
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Prepare Fee Bill
                                    </a>
                                </li>

                                {/* Receive Payment of Fee Accordion */}
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Bulk Receive Payment of Fee
                                    </a>
                                </li>

                                {/* Direct Items */}
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Report Schedule
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Reverse Fee
                                    </a>
                                </li>

                                {/* Schedule Fee Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="scheduleFeeHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#scheduleFeeCollapse"
                                            aria-expanded="false"
                                            aria-controls="scheduleFeeCollapse"
                                        >
                                            Schedule Fee
                                        </button>
                                    </h2>
                                    <div
                                        id="scheduleFeeCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="scheduleFeeHeading"
                                        data-bs-parent="#feeBillingCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Add Schedule
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Change Schedule
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Copy Schedule
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Delete Schedule
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Display Schedule
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Shareholder Activity Fees Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2
                                        className="accordion-header"
                                        id="shareholderActivityFeesHeading"
                                    >
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#shareholderActivityFeesCollapse"
                                            aria-expanded="false"
                                            aria-controls="shareholderActivityFeesCollapse"
                                        >
                                            Shareholder Activity Fees
                                        </button>
                                    </h2>
                                    <div
                                        id="shareholderActivityFeesCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="shareholderActivityFeesHeading"
                                        data-bs-parent="#feeBillingCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Add Shareholder Fee
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Change Shareholder Fee
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Display Shareholder Fee
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Direct Items */}
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Summary Report
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Unpaid Fee Report
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Upcoming Date of Next Fee Bill
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* File Maintenance Accordion */}
            <div className="accordion" id="fileMaintenanceAccordion">
                <div className="accordion-item bg-transparent border-0">
                    <h2 className="accordion-header" id="fileMaintenanceHeading">
                        <button
                            className="accordion-button collapsed bg-transparent fw-bold p-0 py-2 text-dark pb-3"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#fileMaintenanceCollapse"
                            aria-expanded="false"
                            aria-controls="fileMaintenanceCollapse"
                        >
                            <i className="fas fa-folder-open me-2 fa-fw"></i>
                            <span className="d-none d-xxl-block">File Maintenance</span>
                        </button>
                    </h2>
                    <div
                        id="fileMaintenanceCollapse"
                        className="accordion-collapse collapse"
                        aria-labelledby="fileMaintenanceHeading"
                        data-bs-parent="#fileMaintenanceAccordion"
                    >
                        <div className="accordion-body fw-bold p-0 ps-4">
                            <ul className="nav flex-column">
                                {/* 1099 Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="heading1099">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse1099"
                                            aria-expanded="false"
                                            aria-controls="collapse1099"
                                        >
                                            1099
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse1099"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="heading1099"
                                        data-bs-parent="#fileMaintenanceCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Adjust 1099 Balances
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Change 1099 Information
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Display Year to Date Info (1099)
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Process OID File
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* ABA Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="headingABA">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseABA"
                                            aria-expanded="false"
                                            aria-controls="collapseABA"
                                        >
                                            ABA
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseABA"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingABA"
                                        data-bs-parent="#fileMaintenanceCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Add ABA
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Change ABA
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Delete ABA
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Display ABA
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Activity Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="headingActivity">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseActivity"
                                            aria-expanded="false"
                                            aria-controls="collapseActivity"
                                        >
                                            Activity
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseActivity"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingActivity"
                                        data-bs-parent="#fileMaintenanceCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Add Activity
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Change Activity
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Delete Activity
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Display Activity
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        List Activity
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Administrator Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="headingAdministrator">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseAdministrator"
                                            aria-expanded="false"
                                            aria-controls="collapseAdministrator"
                                        >
                                            Administrator
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseAdministrator"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingAdministrator"
                                        data-bs-parent="#fileMaintenanceCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Add Administrator
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Change Administrator
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Delete Administrator
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Display Administrator
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Benchmark Rate Table Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2
                                        className="accordion-header"
                                        id="headingBenchmarkRateTable"
                                    >
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseBenchmarkRateTable"
                                            aria-expanded="false"
                                            aria-controls="collapseBenchmarkRateTable"
                                        >
                                            Benchmark Rate Table
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseBenchmarkRateTable"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingBenchmarkRateTable"
                                        data-bs-parent="#fileMaintenanceCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Add Benchmark Rate Table
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Change Benchmark Rate Table
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Delete Benchmark Rate Table
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Display Benchmark Rate Table
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Canned Correspondence Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2
                                        className="accordion-header"
                                        id="headingCannedCorrespondence"
                                    >
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseCannedCorrespondence"
                                            aria-expanded="false"
                                            aria-controls="collapseCannedCorrespondence"
                                        >
                                            Canned Correspondence
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseCannedCorrespondence"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingCannedCorrespondence"
                                        data-bs-parent="#fileMaintenanceCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Add Canned Correspondence
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Change Canned Correspondence
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Delete Canned Correspondence
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Display Canned Correspondence
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Casualty Rates Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="headingCasualtyRates">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseCasualtyRates"
                                            aria-expanded="false"
                                            aria-controls="collapseCasualtyRates"
                                        >
                                            Casualty Rates
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseCasualtyRates"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingCasualtyRates"
                                        data-bs-parent="#fileMaintenanceCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Add Casualty Rate
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Change Casualty Rate
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Delete Casualty Rate
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Display Casualty Rate
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Direct Item */}
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Clean Addresses
                                    </a>
                                </li>

                                {/* Code Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="headingCode">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseCode"
                                            aria-expanded="false"
                                            aria-controls="collapseCode"
                                        >
                                            Code
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseCode"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingCode"
                                        data-bs-parent="#fileMaintenanceCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Add Code
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Change Code
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Delete Code
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Display Code
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        List Codes
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Holder Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="headingHolder">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseHolder"
                                            aria-expanded="false"
                                            aria-controls="collapseHolder"
                                        >
                                            Holder
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseHolder"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingHolder"
                                        data-bs-parent="#fileMaintenanceCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Add Holder
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Change Holder
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Display Holder
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Exempt Holder
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Institution Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="headingInstitution">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseInstitution"
                                            aria-expanded="false"
                                            aria-controls="collapseInstitution"
                                        >
                                            Institution
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseInstitution"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingInstitution"
                                        data-bs-parent="#fileMaintenanceCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Add Institution
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Change Institution
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Delete Institution
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Display Institution
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Issue Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="headingIssue">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseIssue"
                                            aria-expanded="false"
                                            aria-controls="collapseIssue"
                                        >
                                            Issue
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseIssue"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingIssue"
                                        data-bs-parent="#fileMaintenanceCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Add Issue
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Change Issue
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Display Issue
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Delete Issue
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Price Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="headingPrice">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapsePrice"
                                            aria-expanded="false"
                                            aria-controls="collapsePrice"
                                        >
                                            Price
                                        </button>
                                    </h2>
                                    <div
                                        id="collapsePrice"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingPrice"
                                        data-bs-parent="#fileMaintenanceCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Display Price
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Update Price
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Registration Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="headingRegistration">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseRegistration"
                                            aria-expanded="false"
                                            aria-controls="collapseRegistration"
                                        >
                                            Registration
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseRegistration"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingRegistration"
                                        data-bs-parent="#fileMaintenanceCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Add Registration
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Change Registration
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Delete Registration
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Display Registration
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Secondary Address Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="headingSecondaryAddress">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseSecondaryAddress"
                                            aria-expanded="false"
                                            aria-controls="collapseSecondaryAddress"
                                        >
                                            Secondary Address
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseSecondaryAddress"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingSecondaryAddress"
                                        data-bs-parent="#fileMaintenanceCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Add Secondary Address
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Change Secondary Address
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Display Secondary Address
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* State Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="headingState">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseState"
                                            aria-expanded="false"
                                            aria-controls="collapseState"
                                        >
                                            State
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseState"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingState"
                                        data-bs-parent="#fileMaintenanceCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Add State
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Change State
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link sidebar-nav-link p-0 pt-1"
                                                        href="#"
                                                    >
                                                        Display State
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Import/Export Data Accordion */}
            <div className="accordion" id="importExportAccordion">
                <div className="accordion-item bg-transparent border-0">
                    <h2 className="accordion-header" id="importExportHeading">
                        <button
                            className="accordion-button collapsed bg-transparent fw-bold p-0 py-2 text-dark pb-3"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#importExportCollapse"
                            aria-expanded="false"
                            aria-controls="importExportCollapse"
                        >
                            <i className="fas fa-exchange-alt me-2 fa-fw"></i>
                            <span className="d-none d-xxl-block">Import/Export Data</span>
                        </button>
                    </h2>
                    <div
                        id="importExportCollapse"
                        className="accordion-collapse collapse"
                        aria-labelledby="importExportHeading"
                        data-bs-parent="#sidebarAccordion"
                    >
                        <div className="accordion-body fw-bold p-0 ps-4">
                            <ul className="nav flex-column">
                                {/* Load Data Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="loadDataHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#loadDataCollapse"
                                            aria-expanded="false"
                                            aria-controls="loadDataCollapse"
                                        >
                                            Load Data
                                        </button>
                                    </h2>
                                    <div
                                        id="loadDataCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="loadDataHeading"
                                        data-bs-parent="#importExportCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        ACH Load
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Book Load
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Keane Load
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Form Load
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Unload Data Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="unloadDataHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#unloadDataCollapse"
                                            aria-expanded="false"
                                            aria-controls="unloadDataCollapse"
                                        >
                                            Unload Data
                                        </button>
                                    </h2>
                                    <div
                                        id="unloadDataCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="unloadDataHeading"
                                        data-bs-parent="#importExportCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Certificate Unload
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Check Unload
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Holder Unload
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Inquiries Accordion */}
            <div className="accordion" id="inquiriesAccordion">
                <div className="accordion-item bg-transparent border-0">
                    <h2 className="accordion-header" id="inquiriesHeading">
                        <button
                            className="accordion-button collapsed bg-transparent fw-bold p-0 py-2 text-dark pb-3"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#inquiriesCollapse"
                            aria-expanded="false"
                            aria-controls="inquiriesCollapse"
                        >
                            <i className="fas fa-search me-2 fa-fw"></i>
                            <span className="d-none d-xxl-block">Inquiries</span>
                        </button>
                    </h2>
                    <div
                        id="inquiriesCollapse"
                        className="accordion-collapse collapse"
                        aria-labelledby="inquiriesHeading"
                        data-bs-parent="#sidebarAccordion"
                    >
                        <div className="accordion-body fw-bold p-0 ps-4">
                            <ul className="nav flex-column">
                                {/* Batch Inquiries Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="batchInquiriesHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#batchInquiriesCollapse"
                                            aria-expanded="false"
                                            aria-controls="batchInquiriesCollapse"
                                        >
                                            Batch Inquiries
                                        </button>
                                    </h2>
                                    <div
                                        id="batchInquiriesCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="batchInquiriesHeading"
                                        data-bs-parent="#inquiriesCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Credit Summary
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Debit Summary
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Total Batch Information
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Book Inquiries Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="bookInquiriesHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#bookInquiriesCollapse"
                                            aria-expanded="false"
                                            aria-controls="bookInquiriesCollapse"
                                        >
                                            Book Inquiries
                                        </button>
                                    </h2>
                                    <div
                                        id="bookInquiriesCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="bookInquiriesHeading"
                                        data-bs-parent="#inquiriesCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Book-Entry List
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Direct Item */}
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Cash Balances Inquiries
                                    </a>
                                </li>

                                {/* Certificate Inquiries Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="certificateInquiriesHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#certificateInquiriesCollapse"
                                            aria-expanded="false"
                                            aria-controls="certificateInquiriesCollapse"
                                        >
                                            Certificate Inquiries
                                        </button>
                                    </h2>
                                    <div
                                        id="certificateInquiriesCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="certificateInquiriesHeading"
                                        data-bs-parent="#inquiriesCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Display Certificate(s)
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        List of Certificates
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Collection Inquiries Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="collectionInquiriesHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collectionInquiriesCollapse"
                                            aria-expanded="false"
                                            aria-controls="collectionInquiriesCollapse"
                                        >
                                            Collection Inquiries
                                        </button>
                                    </h2>
                                    <div
                                        id="collectionInquiriesCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="collectionInquiriesHeading"
                                        data-bs-parent="#inquiriesCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Total Collection Information
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Fee Inquiries Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="feeInquiriesHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#feeInquiriesCollapse"
                                            aria-expanded="false"
                                            aria-controls="feeInquiriesCollapse"
                                        >
                                            Fee Inquiries
                                        </button>
                                    </h2>
                                    <div
                                        id="feeInquiriesCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="feeInquiriesHeading"
                                        data-bs-parent="#inquiriesCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Audit Trail of Fees
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Holder Inquiries Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="holderInquiriesHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#holderInquiriesCollapse"
                                            aria-expanded="false"
                                            aria-controls="holderInquiriesCollapse"
                                        >
                                            Holder Inquiries
                                        </button>
                                    </h2>
                                    <div
                                        id="holderInquiriesCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="holderInquiriesHeading"
                                        data-bs-parent="#inquiriesCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Audit Trail of Holder
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Held Checks for Holder
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Review Contact Dates
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Search for Holder Information
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Total Holder Information
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Inventory Inquiries Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="inventoryInquiriesHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#inventoryInquiriesCollapse"
                                            aria-expanded="false"
                                            aria-controls="inventoryInquiriesCollapse"
                                        >
                                            Inventory Inquiries
                                        </button>
                                    </h2>
                                    <div
                                        id="inventoryInquiriesCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="inventoryInquiriesHeading"
                                        data-bs-parent="#inquiriesCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Movement of Inventory
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Unissued Inventory
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Issue Inquiries Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="issueInquiriesHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#issueInquiriesCollapse"
                                            aria-expanded="false"
                                            aria-controls="issueInquiriesCollapse"
                                        >
                                            Issue Inquiries
                                        </button>
                                    </h2>
                                    <div
                                        id="issueInquiriesCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="issueInquiriesHeading"
                                        data-bs-parent="#inquiriesCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Audit Trail of Issue
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Authorized Shares
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Capital Control Report
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Held Checks for Issue
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        History of Issue
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Issuer Inquiries Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="issuerInquiriesHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#issuerInquiriesCollapse"
                                            aria-expanded="false"
                                            aria-controls="issuerInquiriesCollapse"
                                        >
                                            Issuer Inquiries
                                        </button>
                                    </h2>
                                    <div
                                        id="issuerInquiriesCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="issuerInquiriesHeading"
                                        data-bs-parent="#inquiriesCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Audit Trail of Issuer
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Issuer Authorized
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Obligor Inquiries Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="obligorInquiriesHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#obligorInquiriesCollapse"
                                            aria-expanded="false"
                                            aria-controls="obligorInquiriesCollapse"
                                        >
                                            Obligor Inquiries
                                        </button>
                                    </h2>
                                    <div
                                        id="obligorInquiriesCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="obligorInquiriesHeading"
                                        data-bs-parent="#inquiriesCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Audit Trail of Obligor
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Proxy Inquiries Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="proxyInquiriesHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#proxyInquiriesCollapse"
                                            aria-expanded="false"
                                            aria-controls="proxyInquiriesCollapse"
                                        >
                                            Proxy Inquiries
                                        </button>
                                    </h2>
                                    <div
                                        id="proxyInquiriesCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="proxyInquiriesHeading"
                                        data-bs-parent="#inquiriesCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Summary of Votes Cast
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Interfaces Accordion */}
            <div className="accordion" id="interfacesAccordion">
                <div className="accordion-item bg-transparent border-0">
                    <h2 className="accordion-header" id="interfacesHeading">
                        <button
                            className="accordion-button collapsed bg-transparent fw-bold p-0 py-2 text-dark pb-3"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#interfacesCollapse"
                            aria-expanded="false"
                            aria-controls="interfacesCollapse"
                        >
                            <i className="fas fa-share-nodes me-2 fa-fw"></i>
                            <span className="d-none d-xxl-block">Interfaces</span>
                        </button>
                    </h2>
                    <div
                        id="interfacesCollapse"
                        className="accordion-collapse collapse"
                        aria-labelledby="interfacesHeading"
                        data-bs-parent="#sidebarAccordion"
                    >
                        <div className="accordion-body fw-bold p-0 ps-4">
                            <ul className="nav flex-column">
                                {/* Direct Items */}
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        1099 Internal Revenue Interface
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        ACH Interface
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        ADP Interface
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        ARP Check Reconciliation
                                    </a>
                                </li>

                                {/* CDS Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="cdsHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#cdsCollapse"
                                            aria-expanded="false"
                                            aria-controls="cdsCollapse"
                                        >
                                            CDS
                                        </button>
                                    </h2>
                                    <div
                                        id="cdsCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="cdsHeading"
                                        data-bs-parent="#interfacesCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        CDS Confirmation
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        CDS Withdrawal
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Correct Holders of Record
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Holders of Record
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Holders of Record Report
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Payments Accordion */}
            <div className="accordion" id="paymentsAccordion">
                <div className="accordion-item bg-transparent border-0">
                    <h2 className="accordion-header" id="paymentsHeading">
                        <button
                            className="accordion-button collapsed bg-transparent fw-bold p-0 py-2 text-dark pb-3"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#paymentsCollapse"
                            aria-expanded="false"
                            aria-controls="paymentsCollapse"
                        >
                            <i className="fas fa-money-bill-wave me-2 fa-fw"></i>
                            <span className="d-none d-xxl-block">Payments</span>
                        </button>
                    </h2>
                    <div
                        id="paymentsCollapse"
                        className="accordion-collapse collapse"
                        aria-labelledby="paymentsHeading"
                        data-bs-parent="#sidebarAccordion"
                    >
                        <div className="accordion-body fw-bold p-0 ps-4">
                            <ul className="nav flex-column">
                                {/* Collection Processing (Bearer) Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="collectionProcessingHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collectionProcessingCollapse"
                                            aria-expanded="false"
                                            aria-controls="collectionProcessingCollapse"
                                        >
                                            Collection Processing (Bearer)
                                        </button>
                                    </h2>
                                    <div
                                        id="collectionProcessingCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="collectionProcessingHeading"
                                        data-bs-parent="#paymentsCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Add Collection Instruction
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Balance Collection Instruction
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Change Collection Instruction
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Delete Collection Instruction
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Display Collection Instruction
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Reverse Collection Instruction
                                                    </a>
                                                </li>

                                                {/* Envelope Processing Accordion */}
                                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                                    <h2 className="accordion-header" id="envelopeProcessingHeading">
                                                        <button
                                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#envelopeProcessingCollapse"
                                                            aria-expanded="false"
                                                            aria-controls="envelopeProcessingCollapse"
                                                        >
                                                            Envelope Processing
                                                        </button>
                                                    </h2>
                                                    <div
                                                        id="envelopeProcessingCollapse"
                                                        className="accordion-collapse collapse"
                                                        aria-labelledby="envelopeProcessingHeading"
                                                        data-bs-parent="#collectionProcessingCollapse"
                                                    >
                                                        <div className="accordion-body fw-bold p-0 ps-4">
                                                            <ul className="nav flex-column">
                                                                <li className="nav-item">
                                                                    <a className="nav-link sidebar-nav-link p-0 pt-1"
                                                                       href="#">
                                                                        Add Envelope
                                                                    </a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a className="nav-link sidebar-nav-link p-0 pt-1"
                                                                       href="#">
                                                                        Reverse Envelope
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Direct Item */}
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Escheat Bond Coupons
                                    </a>
                                </li>

                                {/* Update Payments Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="updatePaymentsHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#updatePaymentsCollapse"
                                            aria-expanded="false"
                                            aria-controls="updatePaymentsCollapse"
                                        >
                                            Update Payments
                                        </button>
                                    </h2>
                                    <div
                                        id="updatePaymentsCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="updatePaymentsHeading"
                                        data-bs-parent="#paymentsCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Mark Payments as Cashed
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Remit Escheated Checks
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Return Wire
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Returned Check(s)
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Uncash Payments
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Unescheat Check
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Unreturn Wire
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Unreturned Check(s)
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Void Check(s)
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Vendors Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="vendorsHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#vendorsCollapse"
                                            aria-expanded="false"
                                            aria-controls="vendorsCollapse"
                                        >
                                            Vendors
                                        </button>
                                    </h2>
                                    <div
                                        id="vendorsCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="vendorsHeading"
                                        data-bs-parent="#paymentsCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Pay Vendor
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Plan Processing Accordion */}
            <div className="accordion" id="planProcessingAccordion">
                <div className="accordion-item bg-transparent border-0">
                    <h2 className="accordion-header" id="planProcessingHeading">
                        <button
                            className="accordion-button collapsed bg-transparent fw-bold p-0 py-2 text-dark pb-3"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#planProcessingCollapse"
                            aria-expanded="false"
                            aria-controls="planProcessingCollapse"
                        >
                            <i className="fas fa-chart-line me-2 fa-fw"></i>
                            <span className="d-none d-xxl-block">Plan Processing</span>
                        </button>
                    </h2>
                    <div
                        id="planProcessingCollapse"
                        className="accordion-collapse collapse"
                        aria-labelledby="planProcessingHeading"
                        data-bs-parent="#sidebarAccordion"
                    >
                        <div className="accordion-body fw-bold p-0 ps-4">
                            <ul className="nav flex-column">
                                {/* Direct Item */}
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Accept Cash Infusion
                                    </a>
                                </li>

                                {/* Add Pending Sale Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="addPendingSaleHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#addPendingSaleCollapse"
                                            aria-expanded="false"
                                            aria-controls="addPendingSaleCollapse"
                                        >
                                            Add Pending Sale
                                        </button>
                                    </h2>
                                    <div
                                        id="addPendingSaleCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="addPendingSaleHeading"
                                        data-bs-parent="#planProcessingCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Delete Pending Sale
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Display Pending Sale
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Allocation Processing Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="allocationProcessingHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#allocationProcessingCollapse"
                                            aria-expanded="false"
                                            aria-controls="allocationProcessingCollapse"
                                        >
                                            Allocation Processing
                                        </button>
                                    </h2>
                                    <div
                                        id="allocationProcessingCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="allocationProcessingHeading"
                                        data-bs-parent="#planProcessingCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Add Allocation Transaction
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Modify Allocation Transaction
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Participant Maintenance Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="participantMaintenanceHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#participantMaintenanceCollapse"
                                            aria-expanded="false"
                                            aria-controls="participantMaintenanceCollapse"
                                        >
                                            Participant Maintenance
                                        </button>
                                    </h2>
                                    <div
                                        id="participantMaintenanceCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="participantMaintenanceHeading"
                                        data-bs-parent="#planProcessingCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Add Purchase Plan Participant
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Change Purchase Plan Participant
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Delete Purchase Plan Participant
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Display Purchase Plan Participant
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Plan Maintenance Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="planMaintenanceHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#planMaintenanceCollapse"
                                            aria-expanded="false"
                                            aria-controls="planMaintenanceCollapse"
                                        >
                                            Plan Maintenance
                                        </button>
                                    </h2>
                                    <div
                                        id="planMaintenanceCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="planMaintenanceHeading"
                                        data-bs-parent="#planProcessingCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Add Stock Purchase Plan
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Change Stock Purchase Plan
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Delete Stock Purchase Plan
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Display Stock Purchase Plan
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Direct Items */}
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Refund Cash
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Sell Plan Shares
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Proxy Voting Accordion */}
            <div className="accordion" id="proxyVotingAccordion">
                <div className="accordion-item bg-transparent border-0">
                    <h2 className="accordion-header" id="proxyVotingHeading">
                        <button
                            className="accordion-button collapsed bg-transparent fw-bold p-0 py-2 text-dark pb-3"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#proxyVotingCollapse"
                            aria-expanded="false"
                            aria-controls="proxyVotingCollapse"
                        >
                            <i className="fas fa-vote-yea me-2 fa-fw"></i>
                            <span className="d-none d-xxl-block">Proxy Voting</span>
                        </button>
                    </h2>
                    <div
                        id="proxyVotingCollapse"
                        className="accordion-collapse collapse"
                        aria-labelledby="proxyVotingHeading"
                        data-bs-parent="#sidebarAccordion"
                    >
                        <div className="accordion-body fw-bold p-0 ps-4">
                            <ul className="nav flex-column">
                                {/* Direct Items */}
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Allocate Beneficial Holder Votes
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Appoint Proxy Holder
                                    </a>
                                </li>

                                {/* Breakdown Beneficial Holders Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="breakdownBeneficialHoldersHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#breakdownBeneficialHoldersCollapse"
                                            aria-expanded="false"
                                            aria-controls="breakdownBeneficialHoldersCollapse"
                                        >
                                            Breakdown Beneficial Holders
                                        </button>
                                    </h2>
                                    <div
                                        id="breakdownBeneficialHoldersCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="breakdownBeneficialHoldersHeading"
                                        data-bs-parent="#proxyVotingCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Add Beneficial Holder Breakdown
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Change Beneficial Holder Breakdown
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Delete Beneficial Holder Breakdown
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Display Beneficial Holder Breakdown
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Cumulative Voting Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="cumulativeVotingHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#cumulativeVotingCollapse"
                                            aria-expanded="false"
                                            aria-controls="cumulativeVotingCollapse"
                                        >
                                            Cumulative Voting
                                        </button>
                                    </h2>
                                    <div
                                        id="cumulativeVotingCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="cumulativeVotingHeading"
                                        data-bs-parent="#proxyVotingCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Cast Cumulative Proxy
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Direct Items */}
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Meeting Schedule
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Reallocate Omnibus Proxy Votes
                                    </a>
                                </li>

                                {/* Tabulation of Proxies Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="tabulationOfProxiesHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#tabulationOfProxiesCollapse"
                                            aria-expanded="false"
                                            aria-controls="tabulationOfProxiesCollapse"
                                        >
                                            Tabulation of Proxies
                                        </button>
                                    </h2>
                                    <div
                                        id="tabulationOfProxiesCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="tabulationOfProxiesHeading"
                                        data-bs-parent="#proxyVotingCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Add Tabulation
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Change Tabulation
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Delete Tabulation
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Display Tabulation
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Direct Items */}
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Unvote Proxy
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Vote Proxies
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Reports Accordion */}
            <div className="accordion" id="reportsAccordion">
                <div className="accordion-item bg-transparent border-0">
                    <h2 className="accordion-header" id="reportsHeading">
                        <button
                            className="accordion-button collapsed bg-transparent fw-bold p-0 py-2 text-dark pb-3"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#reportsCollapse"
                            aria-expanded="false"
                            aria-controls="reportsCollapse"
                        >
                            <i className="fas fa-file-alt me-2 fa-fw"></i>
                            <span className="d-none d-xxl-block">Reports</span>
                        </button>
                    </h2>
                    <div
                        id="reportsCollapse"
                        className="accordion-collapse collapse"
                        aria-labelledby="reportsHeading"
                        data-bs-parent="#sidebarAccordion"
                    >
                        <div className="accordion-body fw-bold p-0 ps-4">
                            <ul className="nav flex-column">
                                {/* Direct Items */}
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Book-Entry Statements
                                    </a>
                                </li>

                                {/* Cash Reports Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="cashReportsHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#cashReportsCollapse"
                                            aria-expanded="false"
                                            aria-controls="cashReportsCollapse"
                                        >
                                            Cash Reports
                                        </button>
                                    </h2>
                                    <div
                                        id="cashReportsCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="cashReportsHeading"
                                        data-bs-parent="#reportsCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Compare Cash Balances
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Daily Cash Balancing Report
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Float Analysis
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Statement of Cash Transactions
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Transaction Report
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Collection Reports Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="collectionReportsHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collectionReportsCollapse"
                                            aria-expanded="false"
                                            aria-controls="collectionReportsCollapse"
                                        >
                                            Collection Reports
                                        </button>
                                    </h2>
                                    <div
                                        id="collectionReportsCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="collectionReportsHeading"
                                        data-bs-parent="#reportsCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Funds Receivable Report
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Journal of Collections
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Summary of Collections
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Direct Items */}
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Consolidated Holder Report
                                    </a>
                                </li>

                                {/* Correspondence Reports Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="correspondenceReportsHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#correspondenceReportsCollapse"
                                            aria-expanded="false"
                                            aria-controls="correspondenceReportsCollapse"
                                        >
                                            Correspondence Reports
                                        </button>
                                    </h2>
                                    <div
                                        id="correspondenceReportsCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="correspondenceReportsHeading"
                                        data-bs-parent="#reportsCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Summary of Correspondence
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Turnaround Reporting (of Correspondence)
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Direct Items */}
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Correspondence Ticket
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Debt Service Schedule
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Deleted Report
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Deliverable Log
                                    </a>
                                </li>

                                {/* Dividend Reports Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="dividendReportsHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#dividendReportsCollapse"
                                            aria-expanded="false"
                                            aria-controls="dividendReportsCollapse"
                                        >
                                            Dividend Reports
                                        </button>
                                    </h2>
                                    <div
                                        id="dividendReportsCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="dividendReportsHeading"
                                        data-bs-parent="#reportsCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Dividend Balancing Sheet
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Map of Dividend Payments
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Direct Items */}
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        ERISA Report
                                    </a>
                                </li>

                                {/* Escheatment Reports Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="escheatmentReportsHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#escheatmentReportsCollapse"
                                            aria-expanded="false"
                                            aria-controls="escheatmentReportsCollapse"
                                        >
                                            Escheatment Reports
                                        </button>
                                    </h2>
                                    <div
                                        id="escheatmentReportsCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="escheatmentReportsHeading"
                                        data-bs-parent="#reportsCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Map of Check Escheatment
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Map of Coupon Escheatment
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Map of Share Escheatment
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Direct Items */}
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Fed Examination
                                    </a>
                                </li>

                                {/* Fee Reports Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="feeReportsHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#feeReportsCollapse"
                                            aria-expanded="false"
                                            aria-controls="feeReportsCollapse"
                                        >
                                            Fee Reports
                                        </button>
                                    </h2>
                                    <div
                                        id="feeReportsCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="feeReportsHeading"
                                        data-bs-parent="#reportsCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Accrual Fee Report
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Aged Fee
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Annual Fee Report
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Anticipated Fee Report
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Billable Report
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Connection Report
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Expense Report
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Invoice Summary Report
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Overdue Fee Notice Report
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Direct Items */}
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Found Holder Report
                                    </a>
                                </li>

                                {/* Interest Reports Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="interestReportsHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#interestReportsCollapse"
                                            aria-expanded="false"
                                            aria-controls="interestReportsCollapse"
                                        >
                                            Interest Reports
                                        </button>
                                    </h2>
                                    <div
                                        id="interestReportsCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="interestReportsHeading"
                                        data-bs-parent="#reportsCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Holder Roll-Up
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Map of Interest Payments
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Issue Reports Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="issueReportsHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#issueReportsCollapse"
                                            aria-expanded="false"
                                            aria-controls="issueReportsCollapse"
                                        >
                                            Issue Reports
                                        </button>
                                    </h2>
                                    <div
                                        id="issueReportsCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="issueReportsHeading"
                                        data-bs-parent="#reportsCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Inconsistent CUSIP Report
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        List Issue
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Issuer Reports Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="issuerReportsHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#issuerReportsCollapse"
                                            aria-expanded="false"
                                            aria-controls="issuerReportsCollapse"
                                        >
                                            Issuer Reports
                                        </button>
                                    </h2>
                                    <div
                                        id="issuerReportsCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="issuerReportsHeading"
                                        data-bs-parent="#reportsCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Closed Loan Report
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Issuer Statement
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        List Issuer
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Report of Issuer Detail
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Direct Items */}
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Login Report
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Lost Holder Status Report
                                    </a>
                                </li>

                                {/* Maintenance Transactions Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="maintenanceTransactionsHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#maintenanceTransactionsCollapse"
                                            aria-expanded="false"
                                            aria-controls="maintenanceTransactionsCollapse"
                                        >
                                            Maintenance Transactions
                                        </button>
                                    </h2>
                                    <div
                                        id="maintenanceTransactionsCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="maintenanceTransactionsHeading"
                                        data-bs-parent="#reportsCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Operator Maintenance Report
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Management Reports Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="managementReportsHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#managementReportsCollapse"
                                            aria-expanded="false"
                                            aria-controls="managementReportsCollapse"
                                        >
                                            Management Reports
                                        </button>
                                    </h2>
                                    <div
                                        id="managementReportsCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="managementReportsHeading"
                                        data-bs-parent="#reportsCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Authority of Operator
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Bond Disbursement Report
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Cash Management Report
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Check Production Schedule
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Disbursement Summary
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Form Usage Statistics
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Form-4
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Letter of Credit
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Operator Statistics
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Payment Reconciliation
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Payment Statistics
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Payment Summary
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Production Analysis Report
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Projected Production Report
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Registrar Control
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Requested Reports
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Status Report
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Template List
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Variable Rates Projected Production
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Wire Detail
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Wire Status
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* System Control/Maintenance Accordion */}
            <div className="accordion" id="systemControlAccordion">
                <div className="accordion-item bg-transparent border-0">
                    <h2 className="accordion-header" id="systemControlHeading">
                        <button
                            className="accordion-button collapsed bg-transparent fw-bold p-0 py-2 text-dark pb-3"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#systemControlCollapse"
                            aria-expanded="false"
                            aria-controls="systemControlCollapse"
                        >
                            <i className="fas fa-gear me-2 fa-fw"></i>
                            <span className="d-none d-xxl-block">System Maintenance</span>
                        </button>
                    </h2>
                    <div
                        id="systemControlCollapse"
                        className="accordion-collapse collapse"
                        aria-labelledby="systemControlHeading"
                        data-bs-parent="#systemControlAccordion"
                    >
                        <div className="accordion-body fw-bold p-0 ps-4">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Allow Operator
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Bill Generator
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Change Password
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Data FTP
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Database Expansion
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        File Manager
                                    </a>
                                </li>

                                {/* Grouping of Operators Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="groupingOperatorsHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#groupingOperatorsCollapse"
                                            aria-expanded="false"
                                            aria-controls="groupingOperatorsCollapse"
                                        >
                                            Grouping of Operators
                                        </button>
                                    </h2>
                                    <div
                                        id="groupingOperatorsCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="groupingOperatorsHeading"
                                        data-bs-parent="#systemControlCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Add Operator Group
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Change Operator Group
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Delete Operator Group
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Display Operator Group
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Holiday
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Init AsOf
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Init Cash
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Init Fee
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Init Plan
                                    </a>
                                </li>

                                {/* Linkstar Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="linkstarHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#linkstarCollapse"
                                            aria-expanded="false"
                                            aria-controls="linkstarCollapse"
                                        >
                                            Linkstar
                                        </button>
                                    </h2>
                                    <div
                                        id="linkstarCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="linkstarHeading"
                                        data-bs-parent="#systemControlCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Linkstar Password
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Linkstar Update from Web
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Navigation Bar Settings
                                    </a>
                                </li>

                                {/* Operator Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="operatorHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#operatorCollapse"
                                            aria-expanded="false"
                                            aria-controls="operatorCollapse"
                                        >
                                            Operator
                                        </button>
                                    </h2>
                                    <div
                                        id="operatorCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="operatorHeading"
                                        data-bs-parent="#systemControlCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Add Operator
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Audit Trail of Operator
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Build Operator Restriction Sections
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Change Operator
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Copy Operator
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Delete Operator
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Display Operator
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Initialize Operator Password
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Internet Settings
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        List Operator
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Maintain Favorites
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Proxy Trial
                                    </a>
                                </li>

                                {/* Purge In-Active Information Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="purgeInactiveHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#purgeInactiveCollapse"
                                            aria-expanded="false"
                                            aria-controls="purgeInactiveCollapse"
                                        >
                                            Purge In-Active Information
                                        </button>
                                    </h2>
                                    <div
                                        id="purgeInactiveCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="purgeInactiveHeading"
                                        data-bs-parent="#systemControlCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Holder Information Purge
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Server Administration
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Set Processing Date
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Switch Operator
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        TS Generic Fixit
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Template Editor
                                    </a>
                                </li>

                                {/* Testing Accordion */}
                                <li className="accordion-item bg-transparent border-0 p-0 pt-1">
                                    <h2 className="accordion-header" id="testingHeading">
                                        <button
                                            className="accordion-button p-0 py-1 collapsed bg-transparent fw-bold sidebar-nav-link"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#testingCollapse"
                                            aria-expanded="false"
                                            aria-controls="testingCollapse"
                                        >
                                            Testing
                                        </button>
                                    </h2>
                                    <div
                                        id="testingCollapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="testingHeading"
                                        data-bs-parent="#systemControlCollapse"
                                    >
                                        <div className="accordion-body fw-bold p-0 ps-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                                        Test Management
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Trial Program
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Update Address Cleaner
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        Update License
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link sidebar-nav-link p-0 pt-1" href="#">
                                        YTD Trial
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
