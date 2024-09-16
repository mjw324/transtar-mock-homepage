"use client";
import React, {useState} from "react";

interface Report {
    id: number;
    name: string;
    lastGenerated: string;
}

const Reports: React.FC = () => {
    const today = new Date();
    const reports: Report[] = [
        {id: 1, name: "Cash Reports", lastGenerated: new Date().toLocaleDateString()},
        {
            id: 2,
            name: "Daily Cash Balancing Report",
            lastGenerated: new Date(today.setDate(today.getDate() - 1)).toLocaleDateString()
        },
        {
            id: 3,
            name: "Transaction Report",
            lastGenerated: new Date(today.setDate(today.getDate() - 3)).toLocaleDateString()
        },
        {
            id: 4,
            name: "Funds Receivable Report",
            lastGenerated: new Date(today.setDate(today.getDate() - 3)).toLocaleDateString()
        },
        {
            id: 5,
            name: "Dividend Reports",
            lastGenerated: new Date(today.setDate(today.getDate() - 4)).toLocaleDateString()
        },
        {
            id: 6,
            name: "Issue Reports",
            lastGenerated: new Date(today.setDate(today.getDate() - 10)).toLocaleDateString()
        },
    ];

    const [selectedReport, setSelectedReport] = useState<Report | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);
        setDropdownOpen(query.length > 0);
    };

    const filteredReports = reports.filter((report) => {
        const searchTerms = searchQuery.split(" ").filter(Boolean);
        const regex = new RegExp(searchTerms.map((term) => `(?=.*\\b${term})`).join(""), "i");
        return regex.test(report.name);
    });

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
        <div className="glass-pane p-4 rounded h-100">
            <h4 className="fw-bold mb-0">Reports Overview</h4>
            <p className="mb-2">Find report information</p>

            {/* Search Input for Reports */}
            <div className="form-group position-relative flex-md-grow-0 flex-grow-1">
                <div className="input-group w-100">
                    <div className="form-floating">
                        <input
                            type="search"
                            className="form-control glass-input"
                            id="floatingReportInput"
                            placeholder="Report Name"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            onBlur={() => {
                                setTimeout(() => setDropdownOpen(false), 150);
                            }}
                            onFocus={() => setDropdownOpen(searchQuery.length > 0)}
                        />
                        <label htmlFor="floatingReportInput">Report Name</label>
                    </div>
                </div>
                {isDropdownOpen && (
                    <ul className="dropdown-menu show w-100">
                        {filteredReports.length > 0 ? (
                            filteredReports.map((report) => (
                                <li key={report.id}>
                                    <a
                                        className="dropdown-item"
                                        href="#"
                                        onClick={() => {
                                            setSelectedReport(report);
                                            setSearchQuery("");
                                            setDropdownOpen(false);
                                        }}
                                    >
                                        {report.name}
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

            {/* Selected Report Details */}
            {selectedReport && (
                <div className="d-flex align-items-center mb-4 pt-4">
                    <i className={`${reportIcons[selectedReport.name]} fa-2x me-3`}></i>
                    <div>
                        <h5 className="fw-bold mb-1">{selectedReport.name}</h5>
                        <span className="badge bg-dark text-light">Last Generated: {selectedReport.lastGenerated}</span>
                    </div>
                </div>
            )}

            {/* Recently Run Reports */}
            <hr className="mt-4"/>
            <h4 className="mb-4 text-dark fw-bold">Recently Run Reports</h4>
            <ul className="list-group">
                {reports.map((report) => (
                    <li key={report.id} className="list-group-item btn-glass mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <button className="btn btn-dark btn-icon p-1">
                                    <i className={`${reportIcons[report.name]} fa-2x fa-fw`}></i>
                                </button>
                                <div className="ps-2">
                                    <h6 className="fw-bold mb-1">{report.name}</h6>
                                    <p className="mb-1 text-muted">
                                        Last Generated: {report.lastGenerated}
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <button id="pdf" className="btn btn-dark btn-icon" style={{}}>
                                    <i className="fas fa-file-pdf fa-lg"></i>
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Reports;
