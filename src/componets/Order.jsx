import React, { useState } from "react";
import data from "../Main.js/main"; 
import style from "./style/Order.module.css"; 
import Filter from "./filter";
import TourFilters from "./Order_cards";
import Tables from "./Tab";
import Tours from "./TravelDetails";

const Order = () => {
  const [selectedCategory, setSelectedCategory] = useState("АВТОБУСНЫЙ ТУР");

  
  const [filteredData, setFilteredData] = useState(
    data.filter(tour => tour.category === "Автобусный тур")
  );

  const [loading1, setLoading] = useState(false);


  const handleTabChange = (category) => {
    setSelectedCategory(category);

    const filtered = data.filter(tour => tour.category === category);
    setFilteredData(filtered);
  };

  return (
    <div className={style.dad}>
      <div className={style.child1}>
        <Tables onTabChange={handleTabChange} />
        <TourFilters setFilteredData={setFilteredData} />
      </div>

      <div className={style.child2}>
        <Filter
        
          onFilter={(filters) => {
            const filteredTours = data.filter(tour => {
              const isWithinPrice =
                tour.priceAdult >= filters.price[0] && tour.priceAdult <= filters.price[1];
              const matchesPeople =
                !filters.people || tour.people === filters.people || (filters.people === 11 && tour.people > 10);
              const matchesLocation =
                !filters.location || tour.country === filters.location;
              const matchesCategory =
                !selectedCategory || tour.category === selectedCategory;

              return isWithinPrice && matchesPeople && matchesLocation && matchesCategory;
            });

            setFilteredData(filteredTours);
          }}
        />

        <Tours
          filteredData={filteredData}
          selectedCategory={selectedCategory}
          loading={loading1}
        />
      </div>
    </div>
  );
};

export default Order;
