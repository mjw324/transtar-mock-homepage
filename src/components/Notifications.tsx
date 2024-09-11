"use client";
import React, {useState} from "react";

const Notifications: React.FC = () => {
    // Sample notifications data
    const [notifications] = useState([
        {id: 1, type: "info", message: "Cash Report generated", time: "2h ago"},
        {id: 2, type: "warning", message: "Note added on holder Jane Smith #67890", time: "5h ago"},
        {id: 3, type: "info", message: "Holder Robert Brown #33445 added", time: "1d ago"},
        {id: 4, type: "warning", message: "Nothing qualified for Funds Receivable", time: "1d ago"},
        {id: 5, type: "error", message: " Transaction Report - Failed to write rows for report", time: "3d ago"},
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
        <div className="glass-pane p-3 rounded w-100">
            <h4 className="fw-bold">Notifications</h4>
            <table className="table table-hover">
                <tbody>
                {notifications.map((notification, index) => (
                    <tr key={notification.id} style={{backgroundColor: "transparent", cursor: "pointer"}}>
                        <td style={{backgroundColor: "transparent"}}>
                            {getIcon(notification.type)} {notification.message}
                        </td>
                        <td style={{backgroundColor: "transparent"}}>
                            <span className="badge bg-light bg-opacity-75 text-muted">{notification.time}</span>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>


    );
};

export default Notifications;
