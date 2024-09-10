"use client";
import React, {useState} from "react";

const Notifications: React.FC = () => {
    // Sample notifications data
    const [notifications] = useState([
        {id: 1, type: "info", message: "Cash Report generated", time: "2h ago"},
        {id: 2, type: "warning", message: "Note added on holder Jane Smith #67890", time: "5h ago"},
        {id: 3, type: "error", message: " Transaction Report - Failed to write rows for report", time: "1d ago"},
        {id: 4, type: "info", message: "Cash Report generated", time: "2d ago"},
        {id: 5, type: "warning", message: "Note added on holder Jane Smith #67890", time: "3d ago"},
        {id: 6, type: "error", message: " Transaction Report - Failed to write rows for report", time: "4d ago"},
    ]);

    const getIcon = (type: string) => {
        switch (type) {
            case "info":
                return <i className="fas fa-info-circle text-primary"></i>;
            case "warning":
                return <i className="fas fa-exclamation-triangle text-warning"></i>;
            case "error":
                return <i className="fas fa-times-circle text-danger"></i>;
            default:
                return <i className="fas fa-info-circle text-secondary"></i>;
        }
    };

    return (
        <div className="p-3 rounded mh-100" style={{...glassmorphismStyle}}>
            <h5 className="fw-bold">Notifications</h5>
            <table className="table table-hover">
                <tbody>
                {notifications.map((notification, index) => (
                    <tr key={notification.id} style={{backgroundColor: "transparent", cursor: "pointer"}}>
                        <td style={{backgroundColor: "transparent"}}>
                            {getIcon(notification.type)} {notification.message}
                        </td>
                        <td style={{backgroundColor: "transparent"}}>
                            <span className="badge bg-light text-muted">{notification.time}</span>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
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

export default Notifications;
