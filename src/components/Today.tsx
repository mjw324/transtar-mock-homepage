"use client";

import React, {useState} from "react";
import Clock from "react-live-clock";
import {addWeeks, format, isSameMonth, isSameYear} from "date-fns";

// Event interfaces
type EventType = "Proxy" | "Dividend" | "Interest";

interface Event {
    issueName: string;
    eventType: EventType;
    date: string; // Use a string format like "YYYY-MM-DD"
}

interface DividendEvent extends Event {
    eventType: "Dividend";
    paymentRate: string; // e.g., "$0.89 per share"
}

interface InterestEvent extends Event {
    eventType: "Interest";
    paymentRate: string; // e.g., "$0.89 per share"
}

interface ProxyEvent extends Event {
    eventType: "Proxy";
    proxyDescription: string; // e.g., "Annual Meeting 2024"
}

type FinancialEvent = DividendEvent | InterestEvent | ProxyEvent;

// Mock event data
const events: FinancialEvent[] = [
    {
        issueName: "T&M Holdings",
        eventType: "Proxy",
        date: format(new Date(new Date().getTime() - 24 * 60 * 60 * 1000), "yyyy-MM-dd"),
        proxyDescription: "T&M Holdings Annual Meeting 2024",
    },
    {
        issueName: "Techshare Corp",
        eventType: "Dividend",
        date: format(new Date(), "yyyy-MM-dd"),
        paymentRate: "$0.89 per share",
    },
    {
        issueName: "Samson Pharmaceuticals Inc",
        eventType: "Interest",
        date: format(new Date(), "yyyy-MM-dd"),
        paymentRate: "$1.25 per share",
    },
    {
        issueName: "GreenTech Innovations",
        eventType: "Dividend",
        date: format(new Date(), "yyyy-MM-dd"),
        paymentRate: "$0.75 per share",
    },
    {
        issueName: "EcoPharma Corp",
        eventType: "Interest",
        date: format(new Date(new Date().getTime() + 24 * 60 * 60 * 1000), "yyyy-MM-dd"),
        paymentRate: "$1.10 per share",
    },
    {
        issueName: "Northwind Traders",
        eventType: "Proxy",
        date: format(new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000), "yyyy-MM-dd"),
        proxyDescription: "Northwind Traders Annual Meeting 2024",
    },
    {
        issueName: "BrightVision Ltd.",
        eventType: "Dividend",
        date: format(new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000), "yyyy-MM-dd"),
        paymentRate: "$0.50 per share",
    },
    {
        issueName: "Quantum Holdings",
        eventType: "Interest",
        date: format(new Date(new Date().getTime() + 6 * 24 * 60 * 60 * 1000), "yyyy-MM-dd"),
        paymentRate: "$1.30 per share",
    },
    {
        issueName: "Oceanic Ventures",
        eventType: "Proxy",
        date: format(new Date(new Date().getTime() + 6 * 24 * 60 * 60 * 1000), "yyyy-MM-dd"),
        proxyDescription: "Oceanic Ventures Annual Meeting 2024",
    },
    {
        issueName: "Vista Enterprises",
        eventType: "Dividend",
        date: format(new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000), "yyyy-MM-dd"),
        paymentRate: "$0.90 per share",
    },
    {
        issueName: "AlphaCore Technologies",
        eventType: "Interest",
        date: format(new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000), "yyyy-MM-dd"),
        paymentRate: "$1.20 per share",
    },
    {
        issueName: "Solaris Solutions",
        eventType: "Proxy",
        date: format(new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000), "yyyy-MM-dd"),
        proxyDescription: "Solaris Solutions Annual Meeting 2024",
    },
    {
        issueName: "BlueSky Industries",
        eventType: "Dividend",
        date: format(new Date(new Date().getTime() + 12 * 24 * 60 * 60 * 1000), "yyyy-MM-dd"),
        paymentRate: "$0.65 per share",
    },
    {
        issueName: "EverGreen Investments",
        eventType: "Interest",
        date: format(new Date(new Date().getTime() + 12 * 24 * 60 * 60 * 1000), "yyyy-MM-dd"),
        paymentRate: "$1.15 per share",
    },
    {
        issueName: "Summit Global",
        eventType: "Proxy",
        date: format(new Date(new Date().getTime() + 13 * 24 * 60 * 60 * 1000), "yyyy-MM-dd"),
        proxyDescription: "Summit Global Annual Meeting 2024",
    },
    {
        issueName: "Peak Performance Co.",
        eventType: "Dividend",
        date: format(new Date(new Date().getTime() + 15 * 24 * 60 * 60 * 1000), "yyyy-MM-dd"),
        paymentRate: "$0.78 per share",
    },
    {
        issueName: "Fusion Corp",
        eventType: "Interest",
        date: format(new Date(new Date().getTime() + 15 * 24 * 60 * 60 * 1000), "yyyy-MM-dd"),
        paymentRate: "$1.05 per share",
    },
    {
        issueName: "InnoTech Group",
        eventType: "Proxy",
        date: format(new Date(new Date().getTime() + 15 * 24 * 60 * 60 * 1000), "yyyy-MM-dd"),
        proxyDescription: "InnoTech Group Annual Meeting 2024",
    },
    {
        issueName: "NextGen Solutions",
        eventType: "Dividend",
        date: format(new Date(new Date().getTime() + 16 * 24 * 60 * 60 * 1000), "yyyy-MM-dd"),
        paymentRate: "$0.88 per share",
    },
    {
        issueName: "Horizon Capital",
        eventType: "Interest",
        date: format(new Date(new Date().getTime() + 18 * 24 * 60 * 60 * 1000), "yyyy-MM-dd"),
        paymentRate: "$1.35 per share",
    },
    {
        issueName: "PrimeWave Inc.",
        eventType: "Proxy",
        date: format(new Date(new Date().getTime() + 18 * 24 * 60 * 60 * 1000), "yyyy-MM-dd"),
        proxyDescription: "PrimeWave Inc. Annual Meeting 2024",
    },
    {
        issueName: "Optima Resources",
        eventType: "Dividend",
        date: format(new Date(new Date().getTime() + 24 * 60 * 60 * 1000), "yyyy-MM-dd"),
        paymentRate: "$0.95 per share",
    },
    {
        issueName: "SilverLine Enterprises",
        eventType: "Interest",
        date: format(new Date(new Date().getTime() + 19 * 24 * 60 * 60 * 1000), "yyyy-MM-dd"),
        paymentRate: "$1.40 per share",
    },
];

// Main Today component
const Today: React.FC = () => {
    const currentDate = new Date();
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // State for flipping the card, selected date, and selected view
    const [isFlipped, setIsFlipped] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedView, setSelectedView] = useState<"day" | "month" | "year" | null>(null);

    // Function to get events for a specific date
    const getEventsForDate = (date: Date) => {
        const formattedDate = format(date, "yyyy-MM-dd");
        return events.filter((event) => event.date === formattedDate);
    };

    // Function to get events for a specific month
    const getEventsForMonth = (date: Date) => {
        return events.filter((event) => isSameMonth(new Date(event.date), date));
    };

    // Function to get events for a specific year
    const getEventsForYear = (date: Date) => {
        return events.filter((event) => isSameYear(new Date(event.date), date));
    };

    // Function to generate a week of dates starting from a certain offset
    const generateWeek = (weekOffset: number) => {
        return Array.from({length: 7}, (_, i) => {
            const date = addWeeks(new Date(currentDate), weekOffset);
            date.setDate(date.getDate() - date.getDay() + i);
            return date;
        });
    };

    const currentWeek = generateWeek(0);
    const nextWeek = generateWeek(1);
    const twoWeeksAhead = generateWeek(2);

    // Handle date click for flipping animation
    const handleDateClick = (date: Date, view: "day" | "month" | "year") => {
        setSelectedDate(date);
        setSelectedView(view);
        setIsFlipped(true);
    };

    // Handle back button click
    const handleBackClick = () => {
        setIsFlipped(false);
    };

    return (
        <div className="card-3d-container h-100">
            <div className={`card-3d-wrapper h-100 ${isFlipped ? "flipped" : ""}`}>
                {/* Front Side */}
                <div className="rounded glass-pane p-4 h-100">
                    {/* Date */}
                    <div className="d-flex justify-content-start">
                        <button
                            className="btn btn-dark fs-1 fw-bold px-1"
                            onClick={() => handleDateClick(currentDate, "month")}
                        >
                            {format(currentDate, "MMM")}
                        </button>
                        <button
                            className="btn btn-dark fs-1 fw-bold px-1"
                            onClick={() => handleDateClick(currentDate, "day")}
                        >
                            {format(currentDate, "d")}
                        </button>
                        <button
                            className="btn btn-dark fs-1 fw-bold px-1"
                            onClick={() => handleDateClick(currentDate, "year")}
                        >
                            {format(currentDate, "yyyy")}
                        </button>
                    </div>

                    {/* Time */}
                    <p className="text-muted fs-5 ms-1 mb-2">
                        <Clock format={"h:mm A"} ticking={true} timezone={"US/Eastern"}/>
                    </p>

                    {/* Calendar Table */}
                    <div className="d-flex">
                        <table className="table table-borderless text-center">
                            <thead>
                            <tr>
                                {daysOfWeek.map((day, index) => (
                                    <th
                                        key={day}
                                        className={`bg-transparent ${
                                            index === currentDate.getDay() ? "text-dark" : "text-muted"
                                        }`}
                                    >
                                        {day}
                                    </th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            {/* Current Week */}
                            <tr>
                                {currentWeek.map((date, index) => (
                                    <td className="bg-transparent" key={index}>
                                        <button
                                            className={`btn rounded-2 fw-bold position-relative ${
                                                date.getDate() === currentDate.getDate()
                                                    ? "bg-dark bg-opacity-50 text-light fw-bold"
                                                    : "btn-dark"
                                            }`}
                                            onClick={() => handleDateClick(date, "day")}
                                        >
                                            {date.getDate()}
                                            {/* Badge for events */}
                                            {getEventsForDate(date).length > 0 && (
                                                <span
                                                    className="position-absolute top-100 start-50 translate-middle p-1 rounded-circle bg-primary">
                            <span className="visually-hidden">Events Today</span>
                          </span>
                                            )}
                                        </button>
                                    </td>
                                ))}
                            </tr>

                            {/* Next Week */}
                            <tr>
                                {nextWeek.map((date, index) => (
                                    <td className="bg-transparent" key={index}>
                                        <button
                                            className="btn btn-dark rounded-2 fw-semibold position-relative"
                                            onClick={() => handleDateClick(date, "day")}
                                        >
                                            {date.getDate()}
                                            {/* Badge for events */}
                                            {getEventsForDate(date).length > 0 && (
                                                <span
                                                    className="position-absolute top-100 start-50 translate-middle p-1 rounded-circle bg-primary">
                            <span className="visually-hidden">Events Today</span>
                          </span>
                                            )}
                                        </button>
                                    </td>
                                ))}
                            </tr>

                            {/* Two Weeks Ahead */}
                            <tr>
                                {twoWeeksAhead.map((date, index) => (
                                    <td className="bg-transparent" key={index}>
                                        <button
                                            className="btn btn-dark rounded-2 position-relative"
                                            onClick={() => handleDateClick(date, "day")}
                                        >
                                            {date.getDate()}
                                            {/* Badge for events */}
                                            {getEventsForDate(date).length > 0 && (
                                                <span
                                                    className="position-absolute top-100 start-50 translate-middle p-1 rounded-circle bg-primary">
                            <span className="visually-hidden">Events Today</span>
                          </span>
                                            )}
                                        </button>
                                    </td>
                                ))}
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Back Side */}
                <div className="card-back rounded glass-pane p-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <h3 className="fw-bold">
                            {selectedDate
                                ? selectedView === "day"
                                    ? format(selectedDate, "EEEE, MMM d, yyyy")
                                    : selectedView === "month"
                                        ? format(selectedDate, "MMMM yyyy")
                                        : format(selectedDate, "yyyy")
                                : ""}
                        </h3>
                        <button className="btn btn-dark" onClick={handleBackClick}>
                            Back
                        </button>
                    </div>
                    <div className="p-3">
                        <ul className="list-unstyled">
                            {selectedDate && selectedView === "day" && (
                                <>
                                    {getEventsForDate(selectedDate).map((event, index) => (
                                        <li key={index} className="btn-glass p-3 mb-3 rounded-3">
                                            {/* Event content similar to day view */}
                                            {/* ... (Existing event rendering code) */}
                                            {/* Top: Task Type */}
                                            <div
                                                className="d-flex justify-content-between align-items-center mb-2 ms-1">
                                                <span
                                                    className="text-uppercase fw-bold text-muted">{event.eventType}</span>

                                                {/* Right-side dropdown */}
                                                <div className="dropdown">
                                                    <button
                                                        className="btn btn-light btn-sm dropdown-toggle"
                                                        type="button"
                                                        id={`dropdown-${index}`}
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        Edit
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby={`dropdown-${index}`}>
                                                        {event.eventType === "Proxy" ? (
                                                            <>
                                                                <li>
                                                                    <button className="dropdown-item">Change
                                                                        Description
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="dropdown-item">Change Date
                                                                    </button>
                                                                </li>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <li>
                                                                    <button className="dropdown-item">Change Rate
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="dropdown-item">Change Date
                                                                    </button>
                                                                </li>
                                                            </>
                                                        )}
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* Middle: Issue name and rate/description with icons */}
                                            <div className="d-flex align-items-start mb-2 ms-1">
                                                {/* Left-aligned icon */}
                                                <i className="fas fa-building me-2 text-muted"></i>
                                                <div>
                                                    <div
                                                        className="event-title fw-bold text-dark">{event.issueName}</div>
                                                    <div className="event-description text-muted">
                                                        <i className="fas fa-info-circle me-2"></i>
                                                        {event.eventType === "Proxy"
                                                            ? event.proxyDescription
                                                            : event.paymentRate}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Bottom: Date with icon */}
                                            <div className="d-flex align-items-center text-muted ms-1">
                                                <i className="fas fa-calendar-alt me-2"></i>
                                                <span>{format(new Date(event.date + "T00:00:00"), "MMM d, yyyy")}</span>
                                            </div>
                                        </li>
                                    ))}
                                    {getEventsForDate(selectedDate).length === 0 && (
                                        <li className="btn-glass p-3 mb-3 rounded-3">
                                            <div className="event-title fw-bold text-white">
                                                No events for this date.
                                            </div>
                                        </li>
                                    )}
                                </>
                            )}

                            {selectedDate && selectedView === "month" && (
                                <>
                                    {getEventsForMonth(selectedDate).map((event, index) => (
                                        <li key={index} className="btn-glass p-3 mb-3 rounded-3">
                                            {/* Event content similar to day view */}
                                            {/* ... (Reuse the same rendering code) */}
                                            {/* Top: Task Type */}
                                            <div
                                                className="d-flex justify-content-between align-items-center mb-2 ms-1">
                                                <span
                                                    className="text-uppercase fw-bold text-muted">{event.eventType}</span>

                                                {/* Right-side dropdown */}
                                                <div className="dropdown">
                                                    <button
                                                        className="btn btn-light btn-sm dropdown-toggle"
                                                        type="button"
                                                        id={`dropdown-${index}`}
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        Edit
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby={`dropdown-${index}`}>
                                                        {event.eventType === "Proxy" ? (
                                                            <>
                                                                <li>
                                                                    <button className="dropdown-item">Change
                                                                        Description
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="dropdown-item">Change Date
                                                                    </button>
                                                                </li>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <li>
                                                                    <button className="dropdown-item">Change Rate
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="dropdown-item">Change Date
                                                                    </button>
                                                                </li>
                                                            </>
                                                        )}
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* Middle: Issue name and rate/description with icons */}
                                            <div className="d-flex align-items-start mb-2 ms-1">
                                                {/* Left-aligned icon */}
                                                <i className="fas fa-building me-2 text-muted"></i>
                                                <div>
                                                    <div
                                                        className="event-title fw-bold text-dark">{event.issueName}</div>
                                                    <div className="event-description text-muted">
                                                        <i className="fas fa-info-circle me-2"></i>
                                                        {event.eventType === "Proxy"
                                                            ? event.proxyDescription
                                                            : event.paymentRate}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Bottom: Date with icon */}
                                            <div className="d-flex align-items-center text-muted ms-1">
                                                <i className="fas fa-calendar-alt me-2"></i>
                                                <span>{format(new Date(event.date + "T00:00:00"), "MMM d, yyyy")}</span>
                                            </div>
                                        </li>
                                    ))}
                                    {getEventsForMonth(selectedDate).length === 0 && (
                                        <li className="btn-glass p-3 mb-3 rounded-3">
                                            <div className="event-title fw-bold text-white">
                                                No events for this month.
                                            </div>
                                        </li>
                                    )}
                                </>
                            )}

                            {selectedDate && selectedView === "year" && (
                                <>
                                    {getEventsForYear(selectedDate).map((event, index) => (
                                        <li key={index} className="btn-glass p-3 mb-3 rounded-3">
                                            {/* Event content similar to day view */}
                                            {/* Top: Task Type */}
                                            <div
                                                className="d-flex justify-content-between align-items-center mb-2 ms-1">
                                                <span
                                                    className="text-uppercase fw-bold text-muted">{event.eventType}</span>

                                                {/* Right-side dropdown */}
                                                <div className="dropdown">
                                                    <button
                                                        className="btn btn-light btn-sm dropdown-toggle"
                                                        type="button"
                                                        id={`dropdown-${index}`}
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        Edit
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby={`dropdown-${index}`}>
                                                        {event.eventType === "Proxy" ? (
                                                            <>
                                                                <li>
                                                                    <button className="dropdown-item">Change
                                                                        Description
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="dropdown-item">Change Date
                                                                    </button>
                                                                </li>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <li>
                                                                    <button className="dropdown-item">Change Rate
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="dropdown-item">Change Date
                                                                    </button>
                                                                </li>
                                                            </>
                                                        )}
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* Middle: Issue name and rate/description with icons */}
                                            <div className="d-flex align-items-start mb-2 ms-1">
                                                {/* Left-aligned icon */}
                                                <i className="fas fa-building me-2 text-muted"></i>
                                                <div>
                                                    <div
                                                        className="event-title fw-bold text-dark">{event.issueName}</div>
                                                    <div className="event-description text-muted">
                                                        <i className="fas fa-info-circle me-2"></i>
                                                        {event.eventType === "Proxy"
                                                            ? event.proxyDescription
                                                            : event.paymentRate}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Bottom: Date with icon */}
                                            <div className="d-flex align-items-center text-muted ms-1">
                                                <i className="fas fa-calendar-alt me-2"></i>
                                                <span>{format(new Date(event.date + "T00:00:00"), "MMM d, yyyy")}</span>
                                            </div>
                                        </li>
                                    ))}
                                    {getEventsForYear(selectedDate).length === 0 && (
                                        <li className="btn-glass p-3 mb-3 rounded-3">
                                            <div className="event-title fw-bold text-white">
                                                No events for this year.
                                            </div>
                                        </li>
                                    )}
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Today;
