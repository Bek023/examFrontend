import React from "react";
import { Tabs } from "antd";

const tabItems = [
  { label: "АВТОБУСНЫЙ ТУР", key: "АВТОБУСНЫЙ ТУР" },
  { label: "ДЖИППИНГ", key: "ДЖИППИНГ" },
  { label: "ЯХТИНГ", key: "ЯХТИНГ" },
  { label: "КАНЬОНИНГ", key: "КАНЬОНИНГ" },
];

const Tables = ({ onTabChange }) => {
  return (
    <Tabs
      defaultActiveKey="АВТОБУСНЫЙ ТУР"
      centered
      onChange={onTabChange}
      items={tabItems.map(tab => ({ label: tab.label, key: tab.key }))}
    />
  );
};

export default Tables;
