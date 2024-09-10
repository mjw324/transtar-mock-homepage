"use client";

import React, {useState} from "react";

const Issue: React.FC = () => {
    const issues = [
        {
            name: "Netflix Inc.",
            stockId: "NFLX456",
            unissued: 725000,
            totalAuthorized: 1000000,
            outstanding: 275000,
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
        {
            name: "Microsoft Corp.",
            stockId: "MSFT789",
            unissued: 1500000,
            totalAuthorized: 2500000,
            outstanding: 1000000,
            shareholders: 150000,
        },
        {
            name: "Amazon Inc.",
            stockId: "AMZN654",
            unissued: 3000000,
            totalAuthorized: 5000000,
            outstanding: 2000000,
            shareholders: 125000,
        },
        {
            name: "Tesla Inc.",
            stockId: "TSLA321",
            unissued: 1000000,
            totalAuthorized: 1500000,
            outstanding: 500000,
            shareholders: 70000,
        },
        {
            name: "Facebook Inc.",
            stockId: "FB987",
            unissued: 2500000,
            totalAuthorized: 4000000,
            outstanding: 1500000,
            shareholders: 98000,
        },
        {
            name: "IBM Corp.",
            stockId: "IBM456",
            unissued: 200000,
            totalAuthorized: 1200000,
            outstanding: 1000000,
            shareholders: 65000,
        },
        {
            name: "Intel Corp.",
            stockId: "INTC852",
            unissued: 1750000,
            totalAuthorized: 3000000,
            outstanding: 1250000,
            shareholders: 102000,
        },
        {
            name: "Adobe Inc.",
            stockId: "ADBE963",
            unissued: 950000,
            totalAuthorized: 2000000,
            outstanding: 1050000,
            shareholders: 75200,
        },
        {
            name: "Nvidia Corp.",
            stockId: "NVDA741",
            unissued: 2200000,
            totalAuthorized: 5000000,
            outstanding: 2800000,
            shareholders: 142000,
        },
        {
            name: "Samsung Electronics",
            stockId: "SSNLF321",
            unissued: 3500000,
            totalAuthorized: 7000000,
            outstanding: 3500000,
            shareholders: 250000,
        },
        {
            name: "Oracle Corp.",
            stockId: "ORCL123",
            unissued: 1800000,
            totalAuthorized: 3000000,
            outstanding: 1200000,
            shareholders: 105300,
        },
        {
            name: "PayPal Holdings",
            stockId: "PYPL654",
            unissued: 1350000,
            totalAuthorized: 2500000,
            outstanding: 1150000,
            shareholders: 69000,
        },
        {
            name: "Square Inc.",
            stockId: "SQ852",
            unissued: 750000,
            totalAuthorized: 2000000,
            outstanding: 1250000,
            shareholders: 68000,
        },
        {
            name: "Uber Technologies",
            stockId: "UBER963",
            unissued: 2100000,
            totalAuthorized: 4500000,
            outstanding: 2400000,
            shareholders: 130000,
        },
        {
            name: "Zoom Video Communications",
            stockId: "ZM741",
            unissued: 900000,
            totalAuthorized: 1500000,
            outstanding: 600000,
            shareholders: 85000,
        },
        {
            name: "Spotify Technology",
            stockId: "SPOT963",
            unissued: 1200000,
            totalAuthorized: 2500000,
            outstanding: 1300000,
            shareholders: 90000,
        }
    ];


    const [selectedIssue, setSelectedIssue] = useState(issues[0]);
    const [searchQuery, setSearchQuery] = useState("");
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);
        setDropdownOpen(query.length > 0);
    };

    const filteredItems = issues.filter((issue) => {
        const searchTerms = searchQuery.split(" ").filter(Boolean);
        const regex = new RegExp(searchTerms.map((term) => `(?=.*\\b${term})`).join(""), "i");
        return regex.test(issue.name) || regex.test(issue.stockId);
    });

    return (
        <div className="p-4 rounded h-100" style={glassmorphismStyle}>
            <h4 className="fw-bold mb-0">Issue Overview</h4>
            <p className="mb-2">Find issue information</p>

            {/* Search Input for Issue */}
            <div className="form-group position-relative flex-md-grow-0 flex-grow-1">
                <div className="input-group w-100">
                    <div className="form-floating">
                        <input
                            type="search"
                            className="form-control glass-input"
                            id="floatingIssueInput"
                            placeholder="Issue Name or Stock ID"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            onBlur={() => {
                                setTimeout(() => setDropdownOpen(false), 150);
                            }}
                            onFocus={() => setDropdownOpen(searchQuery.length > 0)}
                        />
                        <label htmlFor="floatingIssueInput">Issue Name or Stock ID</label>
                    </div>
                </div>
                {isDropdownOpen && (
                    <ul className="dropdown-menu show w-100">
                        {filteredItems.length > 0 ? (
                            filteredItems.map((issue) => (
                                <li key={issue.stockId}>
                                    <a
                                        className="dropdown-item"
                                        href="#"
                                        onClick={() => {
                                            setSelectedIssue(issue);
                                            setSearchQuery("");
                                            setDropdownOpen(false);
                                        }}
                                    >
                                        {`${issue.name} (${issue.stockId})`}
                                    </a>
                                </li>
                            ))
                        ) : (
                            <li>
                                <a className="dropdown-item disabled" href="#">
                                    No results found
                                </a>
                            </li>
                        )}
                    </ul>
                )}
            </div>

            {/* Issue Details */}
            <div className="d-flex align-items-center mb-4 pt-4">
                <i className="fas fa-certificate fa-2x me-3"></i>
                <div>
                    {/* Holder Name Clickable with Tooltip */}
                    <h5 className="fw-bold mb-1"
                    >
                                    <span className="fw-bold mb-1"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="right"
                                          title="Display Issue"
                                          data-bs-custom-class="custom-tooltip"
                                          style={{cursor: "pointer"}}>
                                        {selectedIssue.name}
                                    </span>
                    </h5>
                    <span className="badge bg-dark text-light">Stock ID: {selectedIssue.stockId}</span>
                </div>
            </div>
            <hr className="m-1"/>
            <div className="px-3 pt-3 rounded">
                <div className="d-flex justify-content-between">
                    <div>
                        <strong>Outstanding:</strong> {selectedIssue.outstanding.toLocaleString()}
                    </div>
                    <div>
                        <strong>Unissued:</strong> {selectedIssue.unissued.toLocaleString()}
                    </div>
                </div>
                <div className="mt-3 mb-4">
                    <div className="progress-stacked" style={{height: "25px"}}>
                        <div
                            className="progress"
                            role="progressbar"
                            aria-label="Outstanding"
                            style={{
                                width: (selectedIssue.outstanding / selectedIssue.totalAuthorized) * 100 + "%",
                                height: "25px"
                            }}
                        >
                            <div className="progress-bar bg-primary fw-bold">
                                {((selectedIssue.outstanding / selectedIssue.totalAuthorized) * 100).toFixed(1)}%
                            </div>
                        </div>
                        <div
                            className="progress"
                            role="progressbar"
                            aria-label="Unissued"
                            style={{
                                width: (selectedIssue.unissued / selectedIssue.totalAuthorized) * 100 + "%",
                                height: "25px"
                            }}
                        >
                            <div className="progress-bar bg-success fw-bold">
                                {((selectedIssue.unissued / selectedIssue.totalAuthorized) * 100).toFixed(1)}%
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <strong>Total Authorized: </strong> {selectedIssue.totalAuthorized.toLocaleString()}
                </div>
                <div>
                    <strong>Active Shareholders: </strong> {selectedIssue.shareholders.toLocaleString()}
                </div>
            </div>
        </div>
    );
};

// Glassmorphism style for the component container
const glassmorphismStyle = {
    background: "rgba(255, 255, 255, 0.3)",
    borderRadius: "15px",
    backdropFilter: "blur(80px)",
    boxShadow: "0 8px 12px rgba(0, 0, 0, 0.1)",
    border: "2px solid rgba(255, 255, 255, 0.15)",
};

export default Issue;
