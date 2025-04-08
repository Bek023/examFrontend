import React, { useState } from "react";
import { Slider, Button, Radio } from "antd";
import styles from "./style/Filter.module.css";
import H from "./H";

const Filter = ({ onFilter }) => {
  const [price, setPrice] = useState([1600, 4000]);
  const [people, setPeople] = useState(null);
  const [location, setLocation] = useState("");


  const handleFilter = () => {
    console.log("Filter parameters:", { price, people, location });
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
      <H tagName="h1" cn={styles.title}>Фильтры</H>

      <div className={styles.filterSection}>
        <H tagName="h1">Стоимость</H>
        <div className={styles.priceP}>
          <div>{price[0]}</div>
          <div>{price[1]}</div>

        </div>
        <Slider
          range
          min={1600}
          max={4000}
          value={price}
          onChange={setPrice}
        />
       
      </div>

      <div className={styles.filterSection}>
        <H tagName="h1">Количество человек</H>
        <div >
          {[...Array(10)].map((_, index) => (
            <Button
            className={styles.peopleOptions}
              key={index}
              type={people === index + 1 ? "primary" : "default"}
              onClick={() => setPeople(index + 1)}
            >
              {index + 1} чел.
            </Button>
          ))}
          <Button
          className={styles.peopleOptions}
            type={people === 11 ? "primary" : "default"}
            onClick={() => setPeople(11)}
          >
            Больше 10 чел.
          </Button>
        </div>
      </div>

      <div className={styles.filterSection}>
        <H tagName="h1">Место</H>
        <Radio.Group className={styles.metroRadio} value={location} onChange={(e) => setLocation(e.target.value)}>
          {["Абхазия", "Россия", "Грузия", "Турция", "Азербайджан", "Узбекистан"].map((place) => (
            <Radio key={place} value={place}>{place}</Radio>
          ))}
        </Radio.Group>
      </div>


      <Button type="primary" block className={styles.showButton} onClick={handleFilter}>
        Показать
      </Button>
      <Button type="link" block className={styles.resetButton} onClick={handleReset}>
        <span className={styles.X}>X</span>Сбросить фильтры
      </Button>
    </div>
  );
};

export default Filter;
