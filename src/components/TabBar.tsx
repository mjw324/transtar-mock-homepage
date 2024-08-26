import React, { useState, forwardRef, useImperativeHandle } from "react";
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
              className={classNames("nav-link", { active: activeTab === "home" })}
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
              className={classNames("nav-link", { active: activeTab === index.toString() })}
              href="#"
              onClick={() => toggleTab(index.toString())}
            >
              {tab.title}
              <button
                type="button"
                className="btn-close ms-2"
                aria-label="Close"
                onClick={() => closeTab(index)}
              ></button>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
});

// Add the displayName to the component
TabBar.displayName = "TabBar";

export default TabBar;
