import React, { useState } from "react";
import style from "./style/Order.module.css"; 
import Div from "./Div";
import Tables from "./Tab";
import TourFilters from "./Order_cards";
import Tours from "./TravelDetails";

const Order = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleTabChange = (category) => {
    setSelectedCategory(category);
  };

  return ( 
    <>
      <Div cn={style.dad}>
        <Div cn={style.child1}>
          <Tables onTabChange={handleTabChange} />
          <TourFilters />
        </Div>
        <Div cn={style.child2}>
          <Tours selectedCategory={selectedCategory} />
        </Div>
      </Div>
    </>
  );
};

export default Order;
