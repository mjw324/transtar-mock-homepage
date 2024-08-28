import React, { useState, useEffect } from "react";

// Define the type for the events
interface Event {
  id: number;
  type: string;
  issue: string;
  details: string;
  time: string;
}

const Today: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Format the current time for display
  const formattedTime = currentTime.toLocaleTimeString();
  const formattedDate = currentTime.toLocaleDateString();

  // Sample events for today
  const todayEvents: Event[] = [
    { id: 1, type: "Maturity", issue: "Issue #12345", details: "", time: formattedDate },
    { id: 2, type: "Proxy", issue: "Issue #67890", details: "Proxy: XYZ Corp", time: formattedDate },
    { id: 3, type: "Dividend Payable", issue: "Issue #54321", details: "Dividend: $2 per share", time: formattedDate },
    { id: 4, type: "Maturity", issue: "Issue #54321", details: "", time: formattedDate },
    { id: 5, type: "Proxy", issue: "Issue #67891", details: "Proxy: ABC Corp", time: formattedDate },
    { id: 6, type: "Dividend Payable", issue: "Issue #98765", details: "Dividend: $1.50 per share", time: formattedDate },
    { id: 7, type: "Maturity", issue: "Issue #13579", details: "", time: formattedDate },
  ];

  // Group events by type
  const groupedEvents = todayEvents.reduce((groups: { [key: string]: Event[] }, event) => {
    if (!groups[event.type]) {
      groups[event.type] = [];
    }
    groups[event.type].push(event);
    return groups;
  }, {});

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="today-section p-4 rounded" style={glassmorphismStyle}>
      <h4 className="mb-3 text-dark fw-bold">Today&apos;s Events</h4>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h5 className="text-dark fw-bold mb-0">{formattedDate}</h5>
          <p className="text-dark mb-0">{formattedTime}</p>
        </div>
      </div>

      <div id="todayCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {Object.keys(groupedEvents).map((type, index) => (
            <div
              key={type}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div
                className="d-flex flex-column align-items-center"
                style={{}}
              >
                <h5 className="fw-bold">{type}</h5>
                <ul className="list-group rounded w-75" style={listGroupPaddingStyle}>
                  {groupedEvents[type].map((event) => (
                    <li
                      key={event.id}
                      className="list-group-item"
                      style={{ ...glassListItemStyle, ...glassButtonStyle }}
                    >
                      <button className="w-100 text-start bg-transparent border-0 p-2">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <p className="mb-1 fw-bold">{event.issue}</p>
                            {event.details && <p className="mb-0 text-muted">{event.details}</p>}
                          </div>
                          <div className="text-end">
                            <p className="mb-0">{event.time}</p>
                          </div>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#todayCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#todayCarousel" data-bs-slide="next">
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
  backdropFilter: "blur(10px)",
  boxShadow: "0 8px 12px rgba(0, 0, 0, 0.1)",
  border: "2px solid rgba(255, 255, 255, 0.15)",
  maxHeight: "400px",
};

const scrollableListGroupStyle = {
  maxHeight: "227px",
  overflowY: "auto",
  overflowX: "hidden",
  paddingRight: "10px",
};

const listGroupPaddingStyle = {
  paddingRight: "10px",
};

const glassListItemStyle = {
  background: "rgba(255, 255, 255, 0.3)",
  borderColor: "rgba(255, 255, 255, 0.2)",
  borderRadius: "10px",
  marginBottom: "10px",
  padding: "0",
};

const glassButtonStyle = {
  transition: "background-color 0.3s ease",
};

export default Today;
