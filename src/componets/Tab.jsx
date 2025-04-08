import React from "react";
import { Tabs } from "antd";
import style from "./style/Order_cards.module.css";

const tabItems = [
  { label: "Автобусный тур", key: "Автобусный тур" },
  { label: "Джиппинг", key: "Джиппинг" },
  { label: "Яхтинг", key: "Яхтинг" },
{ label: "Каньонинг", key: "Каньонинг" },
];

const Tables = ({ onTabChange }) => {
  return (
    <Tabs
      defaultActiveKey="Автобусный тур"
      centered
      className={style.tabStyle}
      onChange={onTabChange}
      items={tabItems.map(tab => ({ label: tab.label, key: tab.key }))}
    />
  );
};

export default Tables;
