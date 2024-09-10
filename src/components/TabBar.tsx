"use client";

import React, {forwardRef, useImperativeHandle, useState} from "react";
import classNames from "classnames";

export interface TabBarHandle {
    addTab: (title: string) => void;
}

const TabBar = forwardRef<TabBarHandle>((_, ref) => {
    const [activeTab, setActiveTab] = useState<number | string>("0");
    const [tabs, setTabs] = useState<Array<{ title: string }>>([]);

    useImperativeHandle(ref, () => ({
        addTab(title: string) {
            const newTab = {
                title: title,
            };
            setTabs((prevTabs) => [...prevTabs, newTab]);
            setActiveTab(tabs.length.toString());
        },
    }));

    const toggleTab = (tabId: number | string) => {
        if (activeTab !== tabId) setActiveTab(tabId);
    };

    const closeTab = (index: number) => {
        const newTabs = tabs.filter((_, i) => i !== index);
        setTabs(newTabs);

        if (newTabs.length > 0) {
            setActiveTab((index - 1).toString());
        } else {
            setActiveTab("0");
        }
    };

    if (tabs.length === 0) {
        return null; // Don't render anything if there are no tabs open
    }

    return (
        <>
            <ul className="nav nav-tabs">
                {/* Only show "Home" tab if there is at least one other tab */}
                {tabs.length > 0 && (
                    <li className="nav-item">
                        <a
                            className={classNames("nav-link", {
                                active: activeTab === "home",
                            })}
                            href="#"
                            onClick={() => toggleTab("home")}
                        >
                            Home
                        </a>
                    </li>
                )}
                {tabs.map((tab, index) => (
                    <li key={index} className="nav-item">
                        <a
                            className={classNames("nav-link", {
                                active: activeTab === index.toString(),
                            })}
                            href="#"
                            onClick={() => toggleTab(index.toString())}
                        >
                            {tab.title}
                            <button
                                type="button"
                                className="btn ms-2 p-0 px-2"
                                aria-label="Close"
                                onClick={() => closeTab(index)}
                            >
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </a>
                    </li>
                ))}
            </ul>

            {/* Full-screen overlay for non-home tabs */}
            {activeTab !== "home" && (
                <div
                    className="overlay"
                    style={{
                        position: "fixed",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "91%",
                        backgroundColor: "rgba(255, 255, 255, 1)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 9000,
                        color: "#333",
                        fontSize: "1.5rem",
                        textAlign: "center",
                    }}
                >
                    <div>
                        <p>You have the &quot;{tabs[parseInt(activeTab as string, 10)]?.title || 'Unknown'}&quot; tab
                            open.</p>
                    </div>
                </div>
            )}
        </>
    );
});

// Add the displayName to the component
TabBar.displayName = "TabBar";

export default TabBar;
