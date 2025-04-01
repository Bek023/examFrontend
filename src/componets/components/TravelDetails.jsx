import React, { useState } from "react";
import data from "../Main.js/main"; 
import styles from '../css/Travel_cards.module.css';
import { FaHeart } from "react-icons/fa6";
import { Spin } from "antd";
import Filter from "../components/filter";

const Tours = ({ selectedCategory }) => {
  const [favorites, setFavorites] = useState({});
  const [filteredData, setFilteredData] = useState(data); // Filterlangan ma'lumotlar
  const [loading, setLoading] = useState(false);

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleFilter = ({ price, people, location }) => {
    setLoading(true); // Loading boshlanadi

    let filteredTours = data.filter((tour) => {
      const forPrice = tour.priceAdult >= price[0] && tour.priceAdult <= price[1];

      const forPeople = people ? (tour.people !== undefined && tour.people >= people) : true;

      const forLocation = location ? (tour.country.toLowerCase() === location.toLowerCase()) : true;

      return forPrice && forPeople && forLocation;
    });

    setTimeout(() => {
      setFilteredData(filteredTours); 
      setLoading(false); 
    }, 500); 
  };

  return (
    <>
      <Filter onFilter={handleFilter} />

      <div className={styles.container}>
        <div className={styles.grid}>
          {loading ? (
            <Spin size="large" className={styles.spin} /> 
          ) : filteredData.length > 0 ? (
            filteredData.map((tour) => (
              <div key={tour.id} className={styles.card}>
                <img alt={tour.title} src={tour.image} />
                <div className={styles.cardContent}>
                  <p className={styles.category}>{tour.category}</p>
                  <h3 className={styles.title}>{tour.title}</h3>
                  <div className={styles.price}>
                    <span>💰 {tour.priceAdult} ₽</span>
                    <span> {tour.priceChild} ₽</span>
                  </div>
                  <p className={styles.duration}>⏳ {tour.duration}</p>
                  <p className={styles.description}>{tour.description}</p>
                  <div className={styles.actions}>
                    <button className={styles.button}>Подробнее</button>
                    <FaHeart
                      className={styles.heart}
                      style={{ color: favorites[tour.id] ? "red" : "gray" }}
                      onClick={() => toggleFavorite(tour.id)}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className={styles.noResults}>Нет туров по вашему запросу</p> // Hech narsa topilmasa
          )}
        </div>
      </div>
    </>
  );
};

export default Tours;
