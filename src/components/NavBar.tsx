"use client";

import React, {useEffect, useRef, useState} from "react";
import Image from 'next/image';
import AirDatepicker from "air-datepicker";
import en from "air-datepicker/locale/en";
import "air-datepicker/air-datepicker.css";


const dropdownItems = [
    "Adjust Cash Balance",
    "Bulk Collect",
    "Collect Cash Receivable",
    "Delete Cash Transaction",
    "Display Cash Transaction",
    "Modify Cash Transaction",
    "Reverse Cash Transaction",
    "Batch Processing Instructions",
    "Add Batch Instructions",
    "Change Batch Instructions",
    "Continue Batch",
    "Delete Batch Instructions",
    "Display Batch Instructions",
    "Insure Batch",
    "Record Batch Completion Status",
    "Reject Batch",
    "Track Batch",
    "Verify Batch",
    "Call Certificate(S)",
    "Cancel Certificate(S)",
    "Certificates To Cancel",
    "Plan Shares To Cancel",
    "Rapid Redemption",
    "Inventory Management",
    "Create Inventory",
    "Move Inventory",
    "Remove Inventory",
    "Issue Certificate(S)",
    "Plan Shares To Issue",
    "Rapid Issue",
    "Select Next Certificate(S) To Issue",
    "Specify Certificate(S) To Issue",
    "Modify Certificate(S)",
    "Replace Certificate(S)",
    "Reverse Batch",
    "Stop Placement",
    "Add Stop",
    "Affidavit Of Loss",
    "Change Stop",
    "Delete Stop",
    "Display Stop",
    "List Stop",
    "Release Stop",
    "Transfer Certificate(S)",
    "Plan Shares To Transfer",
    "Select Next Certificate To Transfer",
    "Specify Certificates To Transfer",
    "Accrued Interest",
    "Process Accrued Interest",
    "Call",
    "Add Call",
    "Change Call",
    "Delete Call",
    "Display Call",
    "Process Call",
    "Release Call",
    "Sinking Fund Set-Up",
    "Verify Calls",
    "Close Loan",
    "Dividend",
    "Add Dividend",
    "Change Dividend",
    "Delete Dividend",
    "Display Dividend",
    "Process Dividend",
    "Release Dividend",
    "Exchange",
    "Add Exchange",
    "Change Exchange",
    "Delete Exchange",
    "Display Exchange",
    "Interest",
    "Add Interest",
    "Change Interest",
    "Delete Interest",
    "Display Interest",
    "Process Interest",
    "Release Interest",
    "Liquidation Of Plan Shares",
    "Add Liquidation Of Plan Shares",
    "Change Liquidation Of Plan Shares",
    "Delete Liquidation Of Plan Shares",
    "Display Liquidation Of Plan Shares",
    "Process Liquidation Of Plan Shares",
    "Maturity",
    "Add Maturity",
    "Change Maturity",
    "Delete Maturity",
    "Display Maturity",
    "Process Maturity",
    "Release Maturity",
    "Principal Reduction Payment",
    "Add Principal Reduction Payment",
    "Change Principal Reduction Payment",
    "Delete Principal Reduction Payment",
    "Display Principal Reduction Payment",
    "Process Principal Reduction Payment",
    "Release Principal Reduction Payment",
    "Proxy",
    "Add Proxy",
    "Change Proxy",
    "Delete Proxy",
    "Display Proxy",
    "Email Proxy",
    "Process Proxy",
    "Sequence Proxy Numbers",
    "Reverse Corporate Action",
    "Reverse Split",
    "Add Reverse Split",
    "Change Reverse Split",
    "Delete Reverse Split",
    "Display Reverse Split",
    "Process Reverse Split",
    "Schedule Corporate Actions",
    "Spin-Off",
    "Add Spin-Off",
    "Change Spin-Off",
    "Delete Spin-Off",
    "Display Spin-Off",
    "Process Spin-Off",
    "Stock Dividend/Split",
    "Add Stock Dividend/Split",
    "Change Stock Dividend/Split",
    "Delete Stock Dividend/Split",
    "Display Stock Dividend/Split",
    "Process Stock Dividend/Split",
    "Sweep Cash",
    "Add Sweep",
    "Change Sweep",
    "Delete Sweep",
    "Display Sweep",
    "Process Sweep",
    "Tender",
    "Add Tender",
    "Change Tender",
    "Delete Tender",
    "Display Tender",
    "Process Tender",
    "Unschedule Corporate Actions",
    "Add Correspondence",
    "Assign Correspondence",
    "Change Correspondence",
    "Complete Correspondence",
    "Delegate Account Rep",
    "Delete Correspondence",
    "Display Correspondence",
    "Document Tracking",
    "Add Document",
    "Change Document",
    "Delete Document",
    "Display Document",
    "Return Document",
    "List Correspondence",
    "Total Correspondence",
    "Payment Status Dashboard",
    "Personal Workspace",
    "Total Relationship Dashboard",
    "Workflow Inbox",
    "Workflow Status Dashboard",
    "Cremate Envelopes/Certificates",
    "Destruction List",
    "Escheatment",
    "Data Point Extract",
    "Make Check Escheated",
    "Process Escheatment",
    "Test Escheat",
    "Test Escheat Coupon",
    "Unescheat Cert",
    "Report Collections/Batches",
    "1099 Production",
    "Generate 1099 Documents",
    "Statements For 1099",
    "Ach Production",
    "Backup Withholding (W-9)",
    "Bill Preparation",
    "Distribution Bill Preparation",
    "Maturity Bill Preparation",
    "Verify Bill",
    "Canadian Tax Production",
    "Canadian Interface",
    "Generate Canadian Tax Documents",
    "List Canadian Tax",
    "Statements For Canadian Tax",
    "Certificate Production",
    "Produce Certificate(S)",
    "Pull List",
    "Reproduce Certificate(S)",
    "Check Production",
    "Add Check",
    "Assign Check Number(S)",
    "Contact Reissue Check",
    "Display Check(S)",
    "Format Checks",
    "Modify Check",
    "Notice Of Check",
    "Reassign Check(S)",
    "Reformat Checks",
    "Refund Check(S)",
    "Reinstate Replaced Check(S)",
    "Reissue Check(S)",
    "Replace Check(S)",
    "Respecify Check Number(S)",
    "Verify Pay Packet",
    "Confirms",
    "Ach Confirms",
    "Address Confirmation",
    "Audit Confirms",
    "Book-Entry Confirms",
    "Instruction Confirms",
    "Wire Confirms",
    "Consolidation Instructions",
    "Add Consolidation Instructions",
    "Change Consolidation Instructions",
    "Delete Consolidation Instructions",
    "Display Consolidation Instructions",
    "Cost Basis Information Request",
    "Foreign Withholding (W-8)",
    "Issuer Documents",
    "Labels For Mailings",
    "Notice Documents",
    "Notice Of Call",
    "Notice Of Destruction",
    "Notice Of Unpresented",
    "Payment Production",
    "Single Payment",
    "Single Ach",
    "Single Check",
    "Single Wire",
    "Reminders",
    "Manage Notes",
    "Reminder Report",
    "Report Print Activities",
    "Email Reports",
    "Print Report",
    "Reprint Report",
    "View Report",
    "Ticket Preparation",
    "Transfer Statement",
    "Transmittal Letters",
    "W8 Withholding",
    "Wire Production",
    "Apply Presentor Fee Payment",
    "Approve Fee",
    "Calculate Fee",
    "Charge Presentor Fee",
    "Connect Fees",
    "Add Connection",
    "Change Connection",
    "Delete Connection",
    "Display Connection",
    "Credit Fee Bill",
    "Customer Fee Statement",
    "Delete Overdue",
    "Extract Fee",
    "Fee Billing Category",
    "Add Category",
    "Change Category",
    "Delete Category",
    "Display Category",
    "Fee Detail",
    "Gl Summary",
    "Increase Billing",
    "Increase Expense",
    "List Schedule",
    "Prepare Fee Bill",
    "Receive Payment Of Fee",
    "Bulk Receive Payment Of Fee",
    "Report Schedule",
    "Reverse Fee",
    "Schedule Fee",
    "Add Schedule",
    "Change Schedule",
    "Copy Schedule",
    "Delete Schedule",
    "Display Schedule",
    "Shareholder Activity Fees",
    "Add Shareholder Fee",
    "Change Shareholder Fee",
    "Display Shareholder Fee",
    "Summary Report",
    "Unpaid Fee Report",
    "Upcoming Date Of Next Fee Bill",
    "Adjust 1099 Balances",
    "Change 1099 Information",
    "Display Year To Date Info (1099)",
    "Process Oid File",
    "Aba",
    "Add Aba",
    "Change Aba",
    "Delete Aba",
    "Display Aba",
    "Activity",
    "Add Activity",
    "Change Activity",
    "Delete Activity",
    "Display Activity",
    "List Activity",
    "Administrator",
    "Add Administrator",
    "Change Administrator",
    "Delete Administrator",
    "Display Administrator",
    "Benchmark Rate Table",
    "Add Benchmark Rate Table",
    "Change Benchmark Rate Table",
    "Delete Benchmark Rate Table",
    "Display Benchmark Rate Table",
    "Canned Correspondence",
    "Add Canned Correspondence",
    "Change Canned Correspondence",
    "Compose Canned Correspondence",
    "Delete Canned Correspondence",
    "Display Canned Correspondence",
    "Send Canned Correspondence",
    "Casualty Rates",
    "Add Casualty Rate",
    "Change Casualty Rate",
    "Delete Casualty Rate",
    "Display Casualty Rate",
    "Checklists",
    "Bond Checklist",
    "Payment Production Checklist",
    "Clean Addresses",
    "Add Code",
    "Change Code",
    "Delete Code",
    "Display Code",
    "List Codes",
    "Add Country",
    "Change Country",
    "Delete Country",
    "Display Country",
    "List Country",
    "Add Depot",
    "Change Depot",
    "Delete Depot",
    "Display Depot",
    "Family Members",
    "Add Family Member",
    "Change Family Member",
    "Delete Family Member",
    "Display Family Member",
    "List Family Members",
    "Add Form",
    "Change Form",
    "Correct Dda",
    "Delete Form",
    "Display Form",
    "Add Holder",
    "Change Holder",
    "Conduct Search",
    "Consolidate Holder",
    "Contact Date",
    "Display Holder",
    "Exempt Holder",
    "Found Holder (Resume Mailings)",
    "Lost Holder (Stop Mailings)",
    "Name Change (Of Holder)",
    "Change Name (Of Holder)",
    "Inventory Change",
    "Ofac Restriction",
    "Add Ofac",
    "Change Ofac",
    "Delete Ofac",
    "Display Ofac",
    "Release Ofac",
    "Unconsolidate Holder",
    "Institution",
    "Add Institution",
    "Change Institution",
    "Delete Institution",
    "Display Institution",
    "Issue",
    "Add Issue",
    "Adjust For Dtc Balance",
    "Bond Issue",
    "Cds Eligible",
    "Calculate Oid",
    "Capacity Of Transfer Agent (To Issue)",
    "Change Issue",
    "Currency Of Issue",
    "Defeased Status Of Issue",
    "Delete Issue",
    "Display Issue",
    "Exclude Issue From Tax Reporting",
    "Exercise Issue",
    "Fast Eligible",
    "Issue Stated Outstanding",
    "Oid Creation",
    "Page Correct",
    "Remarket Issue",
    "Verify Stated",
    "Issuer",
    "Amt (Alternate Minimum Tax)",
    "Add Issuer",
    "Change Issuer",
    "Delete Issuer",
    "Display Issuer",
    "Issuer Stated",
    "Maintain Cede",
    "Multiple Currency",
    "Change Currency",
    "Conversion Rate",
    "Currency Factor",
    "Display Currency",
    "Note Functionality",
    "Obligor",
    "Add Obligor",
    "Change Obligor",
    "Consolidate Obligor",
    "Delete Obligor",
    "Display Obligor",
    "List Obligor",
    "Optional Codes",
    "Codes (Optional)",
    "Price",
    "Display Price",
    "Search Price",
    "Update Price",
    "Rate Table",
    "Add Rate Table",
    "Change Rate Table",
    "Delete Rate Table",
    "Display Rate Table",
    "List Rate Table",
    "Plug Amount For Issue",
    "Readjust Principal Paydown",
    "Validate Rate For Issue",
    "Registration",
    "Add Registration",
    "Change Registration",
    "Delete Registration",
    "Display Registration",
    "List Registration",
    "Relationship",
    "Display Relationship",
    "List Relationship",
    "Maintain Relationship",
    "Request Report",
    "Add Request",
    "Change Request",
    "Delete Request",
    "Display Request",
    "Run Requests",
    "Reserve",
    "Add Reserve",
    "Change Reserve",
    "Delete Reserve",
    "Display Reserve",
    "Restriction",
    "Add Restriction",
    "Change Restriction",
    "Delete Restriction",
    "Display Restriction",
    "Secondary Address",
    "Add Secondary Address",
    "Change Secondary Address",
    "Delete Secondary Address",
    "Display Secondary Address",
    "Tax Secondary Address",
    "State",
    "Add State",
    "Change State",
    "Delete State",
    "Display State",
    "Escheatment Requirements",
    "List State",
    "Tax Lot",
    "Allocate Spin-Off Cost Basis",
    "Apply Cost Basis",
    "Display Tcn",
    "Elect Cost Basis Method",
    "Modify Tax Lot",
    "Reverse Allocate Spin-Off Cost Basis",
    "Tcn Breakdown",
    "Transfer Control Number",
    "Wire Instructions",
    "Add Wire Instructions",
    "Change Wire Instructions",
    "Delete Wire Instructions",
    "Display Wire Instructions",
    "Instruction Verify",
    "Unverify Wire",
    "Verify Wire Instructions",
    "Load Data",
    "Ach Load",
    "Book Load",
    "Broadridge Load",
    "Cash On Hand Load",
    "Certificate Load",
    "Conversion Tools",
    "Coupon Load",
    "Dwac Loader",
    "Fee Load",
    "Form Load",
    "Gs Load",
    "Holder Load",
    "Keane Load",
    "Load Aba",
    "Load Affiliation",
    "Load Benchmark Rates",
    "Load Call",
    "Load Casualty Rate",
    "Load Distribution",
    "Load Fee Expense",
    "Load Issue",
    "Load Issuer",
    "Load Lost Holder",
    "Load Mmi",
    "Load Obligor",
    "Load Rate",
    "Load Search",
    "Load Tax Certification",
    "Miscellaneous Load",
    "Nobo Load",
    "Optional Code Load",
    "Reload Tax Lot",
    "Secondary Address Load",
    "Stop Load",
    "Tax Lot Loader",
    "Ytd Load",
    "Unload Data",
    "Certificate Unload",
    "Check Unload",
    "Holder Unload",
    "Ofac Unload",
    "Stock Unload",
    "Stop Unload",
    "Tax Lot Unload",
    "",
    "Batch Inquiries",
    "Credit Summary",
    "Debit Summary",
    "Total Batch Information",
    "Transfer Summary",
    "Book Inquiries",
    "Book-Entry List",
    "Cash Balances Inquiries",
    "Certificate Inquiries",
    "Display Certificate(S)",
    "List Of Certificates",
    "Collection Inquiries",
    "Total Collection Information",
    "Fee Inquiries",
    "Audit Trail Of Fees",
    "Holder Inquiries",
    "Audit Trail Of Holder",
    "Held Checks For Holder",
    "Review Contact Dates",
    "Search For Holder Information",
    "Total Holder Information",
    "Inventory Inquiries",
    "Movement Of Inventory",
    "Unissued Inventory",
    "Issue Inquiries",
    "Audit Trail Of Issue",
    "Authorized Shares",
    "Capital Control Report",
    "Held Checks For Issue",
    "History Of Issue",
    "Issuer Inquiries",
    "Audit Trail Of Issuer",
    "Issuer Authorized",
    "Obligor Inquiries",
    "Audit Trail Of Obligor",
    "Proxy Inquiries",
    "Summary Of Votes Cast",
    "1099 Internal Revenue Interface",
    "Ach Interface",
    "Adp Interface",
    "Arp Check Reconciliation Interface",
    "Cds",
    "Cds Confirmation",
    "Cds Withdrawal",
    "Correct Holders Of Record",
    "Holders Of Record",
    "Holders Of Record Report",
    "Called Bond Information File",
    "Custodian Ledger Reconciliation",
    "Dcn5 Processing",
    "Drs Processing",
    "Add Drs Record",
    "Dtc Activities",
    "Dtc Cbrs",
    "Dtc Fast Inventory",
    "Dtc Rpsr",
    "Dtc Rapid Coupon Interface",
    "Dtc Variable Rate Processing",
    "Debit Ach",
    "Esop Interface",
    "Fast Balancing",
    "Fast Processing",
    "Fast Proxy",
    "Gnma Balance",
    "Keane Interface",
    "Keane Address",
    "Msrb Rates",
    "Nyse Outstanding",
    "Phoenix Balance",
    "Proxy Meeting Interface",
    "Registar Function",
    "Reporting To Exchanges",
    "Sftp",
    "Wire Interface",
    "X-17 Interface",
    "Collection Processing (Bearer)",
    "Add Collection Instruction",
    "Balance Collection Instruction",
    "Change Collection Instruction",
    "Delete Collection Instruction",
    "Display Collection Instruction",
    "Envelope Processing",
    "Add Envelope",
    "Reverse Envelope",
    "Reverse Collection Instruction",
    "Escheat Bond Coupons",
    "Update Payments",
    "Mark Payments As Cashed",
    "Remit Escheated Checks",
    "Return Wire",
    "Returned Check(S)",
    "Uncash Payments",
    "Unescheat Check",
    "Unreturn Wire",
    "Unreturned Check(S)",
    "Void Check(S)",
    "Vendors",
    "Pay Vendor",
    "Accept Cash Infusion",
    "Add Pending Sale",
    "Delete Pending Sale",
    "Display Pending Sale",
    "Allocation Processing",
    "Add Allocation Transaction",
    "Modify Allocation Transaction",
    "Participant Maintenance",
    "Add Purchase Plan Participant",
    "Change Purchase Plan Participant",
    "Delete Purchase Plan Participant",
    "Display Purchase Plan Participant",
    "Plan Maintenance",
    "Add Stock Purchase Plan",
    "Change Stock Purchase Plan",
    "Delete Stock Purchase Plan",
    "Display Stock Purchase Plan",
    "Refund Cash",
    "Sell Plan Shares",
    "Allocate Beneficial Holder Votes",
    "Appoint Proxy Holder",
    "Breakdown Beneficial Holders",
    "Add Beneficial Holder Breakdown",
    "Change Beneficial Holder Breakdown",
    "Delete Beneficial Holder Breakdown",
    "Display Beneficial Holder Breakdown",
    "Cumulative Voting",
    "Cast Cumulative Proxy",
    "Meeting Schedule",
    "Reallocate Omnibus Proxy Votes",
    "Tabulation Of Proxies",
    "Add Tabulation",
    "Change Tabulation",
    "Delete Tabulation",
    "Display Tabulation",
    "Unvote Proxy",
    "Vote Proxies",
    "Book-Entry Statements",
    "Cash Reports",
    "Compare Cash Balances",
    "Daily Cash Balancing Report",
    "Float Analysis",
    "Statement Of Cash Transactions",
    "Transaction Report",
    "Collection Reports",
    "Funds Receivable Report",
    "Journal Of Collections",
    "Summary Of Collections",
    "Consolidated Holder Report",
    "Correspondence Reports",
    "Summary Of Correspondence",
    "Turnaround Reporting (Of Correspondence)",
    "Correspondence Ticket",
    "Debt Service Schedule",
    "Deleted Report",
    "Deliverable Log",
    "Dividend Reports",
    "Dividend Balancing Sheet",
    "Map Of Dividend Payments",
    "Erisa Report",
    "Escheatment Reports",
    "Map Of Check Escheatment",
    "Map Of Coupon Escheatment",
    "Map Of Share Escheatment",
    "Fed Examination",
    "Fee Reports",
    "Accrual Fee Report",
    "Aged Fee",
    "Annual Fee Report",
    "Anticipated Fee Report",
    "Billable Report",
    "Connection Report",
    "Expense Report",
    "Invoice Summary Report",
    "Overdue Fee Notice Report",
    "Found Holder Report",
    "Interest Reports",
    "Holder Roll-Up",
    "Map Of Interest Payments",
    "Issue Reports",
    "Inconsistent Cusip Report",
    "List Issue",
    "Issuer Reports",
    "Closed Loan Report",
    "Issuer Statement",
    "List Issuer",
    "Report Of Issuer Detail",
    "Login Report",
    "Lost Holder Status Report",
    "Maintenance Transactions",
    "Operator Maintenance Report",
    "Management Reports",
    "Authority Of Operator",
    "Bond Disbursement Report",
    "Cash Management Report",
    "Check Production Schedule",
    "Disbursement Summary",
    "Form Usage Statistics",
    "Form-4",
    "Letter Of Credit",
    "Operator Statistics",
    "Payment Reconciliation",
    "Payment Statistics",
    "Payment Summary",
    "Production Analysis Report",
    "Projected Production Report",
    "Registrar Control",
    "Requested Reports",
    "Status Report",
    "Template List",
    "Variable Rates Projected Production",
    "Wire Detail",
    "Wire Status",
    "Paydown List",
    "Payment Reports",
    "Payment Report",
    "Pending Report",
    "Plan Reports",
    "Bluesky Plan Analysis",
    "Cash Available For Investment",
    "Employee Stock Statement",
    "Liquidation Map",
    "List Of Plans",
    "List Pending",
    "Map Of Sweep Transactions",
    "Participant List",
    "Statements For Participants",
    "Transactions Of Plan Investments",
    "Proxy Reports",
    "Certified Proxy List",
    "List Of Voting Detail",
    "Omnibus Proxy List",
    "Report Of Cumulative Voting",
    "Redemption Reports",
    "Map Of Redemption Payments",
    "Paid Item Statement",
    "Rate Statement",
    "Summary Of Redemption Payments",
    "Registers",
    "Ach Register",
    "Check Register",
    "Dividend Register",
    "Instruction Register",
    "Interest Register",
    "Redemption Register",
    "Undeliverable Check Register",
    "Wire Register",
    "Withholding Register",
    "Rejected Batch Report",
    "Removed Reports",
    "Batch Ticket",
    "Report Of Optional Codes",
    "Reserve Report",
    "Restricted Book Detail Report",
    "Returned Document Report",
    "Reverse Split Reports",
    "Map Of Reverse Split",
    "Review Transfer",
    "Swep",
    "Secondary Address List",
    "Securities Log",
    "Securities Transaction Reports",
    "Called Securities Report",
    "Certificates Called Numerically",
    "Share Statement",
    "Shareholder Register",
    "Shareholder Reports",
    "Address Listing",
    "Certified Shareholder List",
    "Detailed Holder List",
    "Exact Holder Report",
    "Geographic Breakdown",
    "Holding Size Breakdown",
    "List Of Shareholders",
    "Look-Alike Shareholder Report",
    "Ownership Registration Breakdown",
    "Zip Code Breakdown",
    "Show Section Restrictions",
    "Spin-Off Reports",
    "Map Of Spin-Off Reports",
    "Stated Outstanding Report",
    "Stock Dividend/Split Reports",
    "Map Of Stock Dividend/Split",
    "Tic Report",
    "Tax Reports",
    "1099 Reports",
    "List 1099 Information",
    "Totals Of 1099 Balances",
    "Out Of Balance Tax Lot Report",
    "Schedule-Rc-T",
    "Ta-2 Form",
    "Year End Summary",
    "Tender Reports",
    "Map Of Tender",
    "Tender Summary",
    "Track Cost Basis",
    "Transfer Journal",
    "Turnaround Statistics",
    "Unauthorized Activity Report",
    "Unbalanced Batch Report",
    "Unpaid Coupons",
    "Unpresented Securities",
    "Variable Rates Report",
    "Verify Report",
    "W8 Expiration",
    "Allow Operator",
    "Bill Generator",
    "Change Password",
    "Data Ftp",
    "Database Expansion",
    "File Manager",
    "Grouping Of Operators",
    "Add Operator Group",
    "Change Operator Group",
    "Delete Operator Group",
    "Display Operator Group",
    "Holiday",
    "Init Asof",
    "Init Cash",
    "Init Fee",
    "Init Plan",
    "Linkstar",
    "Linkstar Password",
    "Linkstar Update From Web",
    "Navigation Bar Settings",
    "Operator",
    "Add Operator",
    "Audit Trail Of Operator",
    "Build Operator Restriction Sections",
    "Change Operator",
    "Copy Operator",
    "Delete Operator",
    "Display Operator",
    "Initialize Operator Password",
    "Internet Settings",
    "List Operator",
    "Maintain Favorites",
    "Proxy Trial",
    "Purge In-Active Information",
    "Holder Information Purge",
    "Server Administration",
    "Set Processing Date",
    "Switch Operator",
    "Ts Generic Fixit",
    "Template Editor",
    "Testing",
    "Test Management",
    "Trial Program",
    "Update Address Cleaner",
    "Update License",
    "Ytd Trial",
];

const NavBar = ({
                    addTab,
                    toggleSidebar,
                }: {
    addTab: any;
    toggleSidebar: () => void;
}) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [asOfDate, setAsOfDate] = useState(
        new Date().toISOString().split("T")[0]
    );
    const datepickerRef = useRef(null);
    const datepickerInstanceRef = useRef(null);

    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to manage sidebar open/close
    const [isFullscreen, setIsFullscreen] = useState(false); // State to manage fullscreen mode

    const handleSearchChange = (e: { target: { value: string } }) => {
        var query = e.target.value;
        setSearchQuery(query);
        setDropdownOpen(query.length > 0);
    };

    const handleSidebarToggle = () => {
        toggleSidebar();
        setIsSidebarOpen(!isSidebarOpen); // Toggle the sidebar open state
    };

    useEffect(() => {
        if (datepickerRef.current) {
            // @ts-ignore
            datepickerInstanceRef.current = new AirDatepicker(datepickerRef.current, {
                dateFormat: "yyyy-MM-dd",
                selectedDates: [new Date(asOfDate)],
                autoClose: true,
                locale: en,
                onSelect({formattedDate}) {
                    // @ts-ignore
                    setAsOfDate(formattedDate);
                },
            });
        }
    }, []);

    const handleFullscreenToggle = () => {
        if (typeof document !== "undefined") {
            if (!isFullscreen) {
                document.documentElement.requestFullscreen?.();
            } else {
                document.exitFullscreen?.();
            }
            setIsFullscreen(!isFullscreen);
        }
    };

    const filteredItems = dropdownItems.filter((item) => {
        const searchTerms = searchQuery.split(" ").filter(Boolean);
        const regex = new RegExp(
            searchTerms.map((term) => `(?=.*\\b${term})`).join(""),
            "i"
        );
        return regex.test(item);
    });

    return (
        <>
            <nav className="navbar border-bottom border-2 navbar-expand-lg navbar-light bg-light px-3 flex-lg-nowrap">
                <button
                    className={`navbar-brand-button d-none d-lg-block ${isSidebarOpen ? "" : "rotate"}`}
                    onClick={handleSidebarToggle}
                >
                    <Image
                        src="/TS_Icon.svg"
                        alt="TS Icon"
                        width={40}
                        height={40}
                        className="d-inline-block align-top me-2"
                    />
                </button>

                <Image
                    src="/TS_Name_Dark.svg"
                    alt="Transtar Name"
                    width={200}
                    height={40}
                    className="d-inline-block align-top"
                />

                <div
                    className="form-group position-relative ms-4 flex-md-grow-0 col-xl-2 col-lg-3 col-sm-4 col-5">
                    <input
                        type="search"
                        className="form-control"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
                        onFocus={() => setDropdownOpen(searchQuery.length > 0)}
                    />
                    {isDropdownOpen && (
                        <ul className="dropdown-menu show w-100" style={{zIndex: 9050}}>
                            {filteredItems.length > 0 ? (
                                filteredItems.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            className="dropdown-item"
                                            href="#"
                                            onClick={() => {
                                                addTab(item);
                                                setDropdownOpen(false);
                                                setSearchQuery("")
                                            }}
                                        >
                                            {item}
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

                <button
                    className="navbar-toggler ms-auto"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarNav"
                >
                    <div className="form-group d-flex justify-content-end position-relative mx-lg-3 align-items-center">
                        <div
                            className="form-group d-flex justify-content-end position-relative align-items-center">
                            <p className="text-dark fw-bold mx-3 mb-0 d-flex align-items-center">As Of:</p>
                            <input
                                ref={datepickerRef}
                                type="text"
                                className="form-control form-control-sm bg-light text-dark fw-bold w-50"
                                readOnly
                            />
                        </div>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item rounded d-flex justify-content-end">
                            <a
                                href="#"
                                className="nav-link text-dark"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                data-bs-container="body"
                                data-bs-custom-class="custom-tooltip"
                                title="View the Wiki for documentation and guidelines."
                            >
                                <i className="fas fa-globe mx-1 fa-lg"></i>
                            </a>
                        </li>
                        <li className="nav-item rounded d-flex justify-content-end">
                            <a
                                href="#"
                                className="nav-link text-dark"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                data-bs-container="body"
                                data-bs-custom-class="custom-tooltip"
                                title="Contact Us for support and inquiries."
                            >
                                <i className="fas fa-phone mx-1 fa-lg"></i>
                            </a>
                        </li>
                        <li className="nav-item rounded d-flex justify-content-end">
                            <a
                                href="#"
                                className="nav-link text-dark"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                data-bs-container="body"
                                data-bs-custom-class="custom-tooltip"
                                title="See What’s New in the latest updates."
                            >
                                <i className="fas fa-bell mx-1 fa-lg"></i>
                            </a>
                        </li>
                        <li className="nav-item rounded d-flex justify-content-end">
                            <a
                                href="#"
                                className="nav-link mx-1 text-dark"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                data-bs-container="body"
                                data-bs-custom-class="custom-tooltip"
                                title="Toggle Fullscreen"
                                onClick={handleFullscreenToggle}
                            >
                                <i
                                    className={`fas ${
                                        isFullscreen ? "fa-compress" : "fa-expand"
                                    } fa-lg`}
                                ></i>
                            </a>
                        </li>
                        <li className="nav-item dropdown rounded d-flex justify-content-end">
                            <a
                                className="nav-link dropdown-toggle d-flex align-items-center text-dark fw-bold"
                                href="#"
                                id="userDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="fas fa-user-circle me-1 fa-lg"></i> TSP 1
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="userDropdown"
                            >
                                <li>
                                    <a className="dropdown-item" href="#">
                                        My Account
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Favorites
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Personalization
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Settings
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
