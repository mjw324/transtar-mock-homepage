"use client";

import React, {useEffect, useState} from "react";

const Holder: React.FC = () => {
    const holders = [
        {
            id: "12345",
            firstName: "John",
            lastName: "Doe",
            address: "123 Main St, Springfield, IL 62704",
            dob: "05/14/1995",
            phone: "555-123-4567",
            email: "john.doe@example.com",
            taxId: "123-45-6789",
            positions: [
                {
                    issueName: "Netflix Inc.",
                    shares: [
                        {
                            type: "Certificate",
                            certNumber: "AR.3022",
                            issueDate: "01/15/2023",
                            denomination: "100",
                        },
                    ],
                    stops: ["Restricted Cert"],
                },
                {
                    issueName: "Apple Inc.",
                    shares: [
                        {
                            type: "Book",
                            issueDate: "11/05/2022",
                            denomination: "150",
                        },
                    ],
                    stops: ["Restricted Book"],
                },
            ],
        },
        {
            id: "67890",
            firstName: "Jane",
            lastName: "Smith",
            address: "456 Elm St, Chicago, IL 60616",
            dob: "08/22/1978",
            phone: "555-987-6543",
            email: "jane.smith@example.com",
            taxId: "987-65-4321",
            positions: [
                {
                    issueName: "Google LLC",
                    shares: [
                        {
                            type: "Certificate",
                            certNumber: "GR.4023",
                            issueDate: "01/23/2023",
                            denomination: "300",
                        },
                    ],
                    stops: ["Lost Holder"],
                },
                {
                    issueName: "Microsoft Corp.",
                    shares: [
                        {
                            type: "Book",
                            issueDate: "02/22/2022",
                            denomination: "400",
                        },
                    ],
                    stops: [],
                },
            ],
        },
        {
            id: "11223",
            firstName: "Alice",
            lastName: "Johnson",
            address: "789 Oak St, Naperville, IL 60540",
            dob: "09/12/1983",
            phone: "555-321-0987",
            email: "alice.johnson@example.com",
            taxId: "321-54-9876",
            positions: [
                {
                    issueName: "Amazon Inc.",
                    shares: [
                        {
                            type: "Certificate",
                            certNumber: "AM.1023",
                            issueDate: "05/09/2022",
                            denomination: "200",
                        },
                    ],
                    stops: ["Legal Hold"],
                },
                {
                    issueName: "Tesla Inc.",
                    shares: [
                        {
                            type: "Book",
                            issueDate: "07/21/2021",
                            denomination: "500",
                        },
                    ],
                    stops: ["Transfer Pending"],
                },
            ],
        },
        {
            id: "33445",
            firstName: "Robert",
            lastName: "Brown",
            address: "654 Pine St, Peoria, IL 61602",
            dob: "03/28/1966",
            phone: "555-654-1239",
            email: "robert.brown@example.com",
            taxId: "654-32-1098",
            positions: [
                {
                    issueName: "Facebook Inc.",
                    shares: [
                        {
                            type: "Certificate",
                            certNumber: "FB.2046",
                            issueDate: "12/14/2020",
                            denomination: "350",
                        },
                    ],
                    stops: ["Reported Stolen"],
                },
                {
                    issueName: "IBM Corp.",
                    shares: [
                        {
                            type: "Book",
                            issueDate: "03/05/2019",
                            denomination: "250",
                        },
                    ],
                    stops: [],
                },
            ],
        },
        {
            id: "55667",
            firstName: "Linda",
            lastName: "Garcia",
            address: "321 Birch St, Aurora, IL 60502",
            dob: "01/20/1980",
            phone: "555-789-6541",
            email: "linda.garcia@example.com",
            taxId: "789-10-4321",
            positions: [
                {
                    issueName: "Adobe Inc.",
                    shares: [
                        {
                            type: "Certificate",
                            certNumber: "AD.4012",
                            issueDate: "08/17/2022",
                            denomination: "150",
                        },
                    ],
                    stops: ["Escheated Cert"],
                },
                {
                    issueName: "Intel Corp.",
                    shares: [
                        {
                            type: "Book",
                            issueDate: "06/25/2021",
                            denomination: "300",
                        },
                    ],
                    stops: ["Stopped Payment"],
                },
            ],
        },
        // New holders added below
        {
            id: "77889",
            firstName: "Charles",
            lastName: "Lee",
            address: "123 Willow St, Miami, FL 33101",
            dob: "10/05/1975",
            phone: "555-654-9876",
            email: "charles.lee@example.com",
            taxId: "432-65-9870",
            positions: [
                {
                    issueName: "Nvidia Corp.",
                    shares: [
                        {
                            type: "Certificate",
                            certNumber: "NV.1103",
                            issueDate: "02/15/2021",
                            denomination: "100",
                        },
                    ],
                    stops: ["Restricted Cert"],
                },
                {
                    issueName: "Amazon Inc.",
                    shares: [
                        {
                            type: "Book",
                            issueDate: "08/03/2021",
                            denomination: "300",
                        },
                    ],
                    stops: [],
                },
            ],
        },
        {
            id: "88990",
            firstName: "Sophia",
            lastName: "Taylor",
            address: "789 Cedar St, San Diego, CA 92103",
            dob: "07/22/1990",
            phone: "555-321-7890",
            email: "sophia.taylor@example.com",
            taxId: "987-23-6541",
            positions: [
                {
                    issueName: "Tesla Inc.",
                    shares: [
                        {
                            type: "Certificate",
                            certNumber: "TS.4098",
                            issueDate: "03/25/2022",
                            denomination: "200",
                        },
                    ],
                    stops: [],
                },
                {
                    issueName: "Facebook Inc.",
                    shares: [
                        {
                            type: "Book",
                            issueDate: "09/19/2022",
                            denomination: "250",
                        },
                    ],
                    stops: [],
                },
            ],
        },
        {
            id: "99100",
            firstName: "James",
            lastName: "White",
            address: "123 Redwood Dr, Portland, OR 97210",
            dob: "06/30/1985",
            phone: "555-879-6541",
            email: "james.white@example.com",
            taxId: "432-98-7650",
            positions: [
                {
                    issueName: "Google LLC",
                    shares: [
                        {
                            type: "Certificate",
                            certNumber: "GO.2309",
                            issueDate: "11/12/2021",
                            denomination: "300",
                        },
                    ],
                    stops: ["Legal Hold"],
                },
                {
                    issueName: "Microsoft Corp.",
                    shares: [
                        {
                            type: "Book",
                            issueDate: "05/16/2020",
                            denomination: "450",
                        },
                    ],
                    stops: [],
                },
            ],
        },
        {
            id: "66778",
            firstName: "Isabella",
            lastName: "Martinez",
            address: "456 Maple Dr, Seattle, WA 98101",
            dob: "02/14/1994",
            phone: "555-432-8790",
            email: "isabella.martinez@example.com",
            taxId: "543-21-6789",
            positions: [
                {
                    issueName: "Oracle Corp.",
                    shares: [
                        {
                            type: "Certificate",
                            certNumber: "OR.5401",
                            issueDate: "01/09/2020",
                            denomination: "400",
                        },
                    ],
                    stops: ["Transfer Pending"],
                },
                {
                    issueName: "IBM Corp.",
                    shares: [
                        {
                            type: "Book",
                            issueDate: "11/20/2022",
                            denomination: "350",
                        },
                    ],
                    stops: [],
                },
            ],
        },
        {
            id: "44556",
            firstName: "Lucas",
            lastName: "Anderson",
            address: "789 Pine St, Denver, CO 80203",
            dob: "11/17/1988",
            phone: "555-654-4321",
            email: "lucas.anderson@example.com",
            taxId: "876-54-3210",
            positions: [
                {
                    issueName: "Adobe Inc.",
                    shares: [
                        {
                            type: "Certificate",
                            certNumber: "AD.9032",
                            issueDate: "07/22/2021",
                            denomination: "250",
                        },
                    ],
                    stops: ["Escheated Cert"],
                },
                {
                    issueName: "Intel Corp.",
                    shares: [
                        {
                            type: "Book",
                            issueDate: "12/10/2020",
                            denomination: "150",
                        },
                    ],
                    stops: [],
                },
            ],
        },
        {
            id: "99887",
            firstName: "Emma",
            lastName: "Harris",
            address: "123 Oak Ave, Austin, TX 73301",
            dob: "04/11/1991",
            phone: "555-789-9876",
            email: "emma.harris@example.com",
            taxId: "543-76-1987",
            positions: [
                {
                    issueName: "Zoom Video Communications",
                    shares: [
                        {
                            type: "Certificate",
                            certNumber: "ZO.1047",
                            issueDate: "03/09/2022",
                            denomination: "100",
                        },
                    ],
                    stops: [],
                },
                {
                    issueName: "Apple Inc.",
                    shares: [
                        {
                            type: "Book",
                            issueDate: "06/22/2020",
                            denomination: "200",
                        },
                    ],
                    stops: [],
                },
            ],
        }
    ];

    const [selectedHolder, setSelectedHolder] = useState(holders[0]);
    const [searchQuery, setSearchQuery] = useState("");
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    // Initialize tooltips
    useEffect(() => {
        if (typeof document !== "undefined") {
            import("bootstrap").then(({Tooltip}) => {
                const tooltipTriggerList = [].slice.call(
                    document.querySelectorAll('[data-bs-toggle="tooltip"]')
                );
                tooltipTriggerList.map(
                    (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
                );
            });
        }
    }, []);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);
        setDropdownOpen(query.length > 0);
    };

    const dropdownSelectHolder = (id: string) => {
        const holder = holders.find((holder) => holder.id === id);
        if (holder) {
            console.log(`Selected Holder: ${holder.firstName} ${holder.lastName}`);
            setSelectedHolder(holder);
        }
    };

    const filteredItems = holders.filter((holder) => {
        const searchTerms = searchQuery.split(" ").filter(Boolean);
        const regex = new RegExp(searchTerms.map((term) => `(?=.*\\b${term})`).join(""), "i");
        return regex.test(holder.firstName) || regex.test(holder.lastName) || regex.test(holder.id);
    });

    return (
        <div className="p-4 rounded h-100" style={glassmorphismStyle}>
            <h4 className="fw-bold mb-0">Holder Overview</h4>
            <p className="mb-2">Find holder information</p>
            <div className="form-group position-relative flex-md-grow-0 flex-grow-1">
                <div className="input-group w-100">
                    <div className="form-floating">
                        <input
                            type="search"
                            className="form-control glass-input"
                            id="floatingInput"
                            placeholder="Holder Name, Tax ID, or Account #"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            onBlur={() => {
                                setTimeout(() => setDropdownOpen(false), 200);
                            }}
                            onFocus={() => setDropdownOpen(searchQuery.length > 0)}
                        />
                        <label htmlFor="floatingInput">Holder Name, Tax ID, or Account #</label>
                    </div>
                </div>
                {isDropdownOpen && (
                    <ul className="dropdown-menu show w-100">
                        {filteredItems.length > 0 ? (
                            filteredItems.map((holder) => (
                                <li key={holder.id}>
                                    <a
                                        className="dropdown-item"
                                        href="#"
                                        onClick={() => {
                                            dropdownSelectHolder(holder.id);
                                            setSearchQuery("");
                                            setDropdownOpen(false);
                                        }}
                                    >
                                        {`${holder.lastName}, ${holder.firstName} #${holder.id}`}
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

            {/* Carousel for Holder Information and Positions */}
            <div id="holderCarousel" className="carousel slide pt-4" style={{height: "270px"}}>
                <div className="carousel-inner">
                    {/* Slide 1: Holder Information */}
                    <div className="carousel-item active">
                        <div className="d-flex align-items-center mb-4 mx-5">
                            <div>
                                {/* Holder Name Clickable with Tooltip */}
                                <h5
                                >
                                    <span className="fw-bold mb-1"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="right"
                                          title="View Total Holder Information"
                                          data-bs-custom-class="custom-tooltip"
                                          style={{cursor: "pointer"}}>
                                        {selectedHolder.firstName} {selectedHolder.lastName}
                                    </span>
                                </h5>
                                <i className="fas fa-id-card fa-2x me-3"></i>
                                <p className="mb-1">
                                    <strong>OFAC:</strong> {selectedHolder.id}
                                </p>
                                <p className="mb-1">
                                    <strong>Address:</strong> {selectedHolder.address}
                                </p>
                                <p className="mb-1">
                                    <strong>DOB:</strong> {selectedHolder.dob}
                                </p>
                                <p className="mb-1">
                                    <strong>Phone:</strong> {selectedHolder.phone}
                                </p>
                                <p className="mb-1">
                                    <strong>Email:</strong> {selectedHolder.email}
                                </p>
                                <p className="mb-1">
                                    <strong>Tax ID:</strong> {selectedHolder.taxId}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Slide 2-x: Positions */}
                    {selectedHolder.positions.map((position, index) => (
                        <div key={index} className="carousel-item">
                            <div className="px-3 mx-5 pt-3 rounded glass-card">
                                <h6 className="fw-bold mb-3">
                                    <i className="fas fa-chart-line me-2"></i>
                                    {position.issueName}
                                </h6>
                                {position.shares.map((share, shareIndex) => (
                                    <div key={shareIndex} className="mb-3">
                                        <p className="mb-1">
                                            <strong>{share.type}:</strong>
                                        </p>
                                        {share.type === "Certificate" && (
                                            <div className="ms-3">
                                                <p className="mb-1">
                                                    <strong>Cert #:</strong>{" "}
                                                    {share.certNumber ? share.certNumber : ""}
                                                </p>
                                                <p className="mb-1">
                                                    <strong>Issue Date:</strong> {share.issueDate}
                                                </p>
                                                <p className="mb-1">
                                                    <strong>Denomination:</strong>{" "}
                                                    {share.denomination}
                                                </p>
                                            </div>
                                        )}
                                        {share.type === "Book" && (
                                            <div className="ms-3">
                                                <p className="mb-1">
                                                    <strong>Issue Date:</strong> {share.issueDate}
                                                </p>
                                                <p className="mb-1">
                                                    <strong>Denomination:</strong>{" "}
                                                    {share.denomination}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                                {position.stops.length > 0 && (
                                    <div className="mt-2">
                                        <strong>Stops:</strong>
                                        <ul className="ms-3">
                                            {position.stops.map((stop, stopIndex) => (
                                                <li key={stopIndex}>{stop}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Carousel Controls */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#holderCarousel"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#holderCarousel"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
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

export default Holder;