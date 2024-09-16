import React from "react";

const SideBar = ({isVisible}: { isVisible: boolean }) => {
    if (!isVisible) {
        return null;
    }

    const buttons = [
        {label: "Administrators", icon: "fas fa-user-shield"},
        {label: "Call", icon: "fas fa-phone-alt"},
        {label: "Cash Accounting", icon: "fas fa-coins"},
        {label: "Correspondence", icon: "fas fa-envelope"},
        {label: "Dashboards", icon: "fas fa-chart-pie"},
        {label: "Dividends", icon: "fas fa-chart-line"},
        {label: "Escheatment", icon: "fas fa-university"},
        {label: "Exchange", icon: "fas fa-exchange-alt"},
        {label: "Fee Billing", icon: "fas fa-file-invoice-dollar"},
        {label: "Inquiries & Reports", icon: "fas fa-file-alt"},
        {label: "Interest", icon: "fas fa-percentage"},
        {label: "Proxies", icon: "fas fa-vote-yea"},
        {label: "Redemptions", icon: "fas fa-hand-holding-usd"},
        {label: "Reinvestment", icon: "fas fa-sync"},
        {label: "Set-up New Business", icon: "fas fa-briefcase"},
        {label: "Stock Dividend & Split", icon: "fas fa-chart-bar"},
        {label: "Tax Reporting", icon: "fas fa-file-contract"},
        {label: "Transfers", icon: "fas fa-exchange-alt"},
        {label: "Tender", icon: "fas fa-gavel"},
        {label: "LinkStar", icon: "fas fa-link"},
    ];

    return (
        <div className="sidebar-container d-flex flex-column p-2">
            {buttons.map((button, index) => (
                <button key={index} className="btn text-start text-dark mb-2 fw-bold">
                    <i className={`${button.icon} me-2`}></i>
                    {button.label}
                </button>
            ))}
        </div>
    );
};

export default SideBar;
