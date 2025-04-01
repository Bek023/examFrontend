import React, { useState } from "react";
import { Slider, Button, Radio } from "antd";
import styles from "../css/Filter.module.css";

const Filter = ({ onFilter }) => {
  const [price, setPrice] = useState([1600, 4000]);
  const [people, setPeople] = useState(null);
  const [location, setLocation] = useState("");

  const handleFilter = () => {
    console.log("Filter parametrlari:", { price, people, location });
    onFilter({ price, people, location });
  };

  const handleReset = () => {
    setPrice([1600, 4000]);
    setPeople(null);
    setLocation("");
    onFilter({ price: [1600, 4000], people: null, location: "" });
  };

  return (
    <div className={styles.filterPanel}>
      <h3 className={styles.title}>Фильтры</h3>

  
      <div className={styles.filterSection}>
        <h4>Стоимость</h4>
        <Slider
          range
          min={1600}
          max={4000}
          value={price}
          onChange={setPrice}
        />
        <div>{price[0]} - {price[1]} ₽</div>
      </div>

      {/* Odamlar soni bo‘yicha filter */}
      <div className={styles.filterSection}>
        <h4>Количество человек</h4>
        <div className={styles.peopleOptions}>
          {[...Array(10)].map((_, index) => (
            <Button
              key={index}
              type={people === index + 1 ? "primary" : "default"}
              onClick={() => setPeople(index + 1)}
            >
              {index + 1} чел.
            </Button>
          ))}
          <Button
            type={people === 11 ? "primary" : "default"}
            onClick={() => setPeople(11)}
          >
            Больше 10 чел.
          </Button>
        </div>
      </div>

      {/* Joylashuv bo‘yicha filter */}
      <div className={styles.filterSection}>
        <h4>Место</h4>
        <Radio.Group value={location} onChange={(e) => setLocation(e.target.value)}>
          {["Абхазия", "Красная поляна", "Сочи", "Адлер"].map((place) => (
            <Radio key={place} value={place}>{place}</Radio>
          ))}
        </Radio.Group>
      </div>

      {/* Filter tugmalari */}
      <Button type="primary" block className={styles.showButton} onClick={handleFilter}>
        Показать туры
      </Button>
      <Button type="link" block className={styles.resetButton} onClick={handleReset}>
        <span className={styles.X}>X</span> Сбросить фильтры
      </Button>
    </div>
  );
};

export default Filter;