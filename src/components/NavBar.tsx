import React, { useState } from "react";
import TabBar from "./TabBar";

const NavBar = ({ addTab }: { addTab: any }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [asOfDate, setAsOfDate] = useState(new Date().toISOString().split('T')[0]);

  const handleSearchChange = (e: { target: { value: string } }) => {
    var query = e.target.value;
    setSearchQuery(query);
    setDropdownOpen(query.length > 0);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAsOfDate(e.target.value);
  };

  const dropdownItems = [
    "Adjust Cash Balance",
    "Bulk Collect",
    // ... (rest of the items)
  ];

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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 flex-lg-nowrap">
        <a className="navbar-brand d-flex align-items-center" href="#">
          {/* TS Icon */}
          <img
            src="/TS_Icon.svg"
            alt="TS Icon"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
          />
          {/* TS Name */}
          <img
            src="/TS_Name.svg"
            alt="Transtar Name"
            width="170"
            height="40"
            className="d-inline-block align-top"
          />
        </a>

        {/* Search Bar */}
        <div className="form-group position-relative mx-3 flex-md-grow-0 flex-grow-1 col-xl-2 col-lg-3 col-5">
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
            <ul className="dropdown-menu show" style={{ width: "100%" }}>
              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                  <li key={index}>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => {
                        addTab(item);
                        setDropdownOpen(false);
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

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                  {/* As Of Date Button */}
        <div className="form-group d-flex position-relative px-3 align-items-center">
          <p className="text-light mx-3">As Of:</p>
          <input
            type="date"
            className="form-control form-control-sm bg-light text-dark"
            value={asOfDate}
            onChange={handleDateChange}
            style={{ width: 'auto' }}
          />
        </div>
          <ul className="navbar-nav">
            <li className="nav-item rounded">
              <a className="nav-link text-light fs-6 " href="#">
                <i className="fas fa-book me-1 fa-lg"></i> Wiki
              </a>
            </li>
            <li className="nav-item rounded">
              <a className="nav-link text-light fs-6" href="#">
                <i className="fas fa-address-book me-1 fa-lg"></i> Contact
              </a>
            </li>
            <li className="nav-item rounded">
              <a className="nav-link text-light fs-6" href="#">
                <i className="fas fa-bell me-1 fa-lg"></i> What&rsquo;s New
              </a>
            </li>
            <li className="nav-item dropdown rounded">
              <a
                className="nav-link dropdown-toggle d-flex align-items-center text-light fs-6"
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
                    Settings
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
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
      <TabBar />
    </>
  );
};

export default NavBar;
