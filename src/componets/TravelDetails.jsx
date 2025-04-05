import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../store/data"; 
import styles from './style/Travel_cards.module.css';
import { FaHeart } from "react-icons/fa6";
import { Spin, Pagination } from "antd";
import Filter from "./filter";

const maxSize = 4; 

const Tours = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState(new Map());
  const [filteredData, setFilteredData] = useState(data); 
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

 

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const newFavorites = new Map(prev);
      newFavorites.set(id, !newFavorites.get(id));
      return newFavorites;
    });
  };
  
  const handleFilter = ({ price, people, location }) => {
    setLoading(true);
  
    const filteredTours = data.filter((tour) => {
      const isWithinPrice = tour.priceAdult >= price[0] && tour.priceAdult <= price[1];
      const matchesPeople = !people || tour.people === people || (people === 11 && tour.people > 10);
      const matchesLocation = !location || tour.location === location;
  
      return isWithinPrice && matchesPeople && matchesLocation;
    });
  
    setTimeout(() => {
      setFilteredData(filteredTours);
      setCurrentPage(1);
      setLoading(false);
    }, 500);
  };
  

  const totalPages = Math.ceil(filteredData.length / maxSize);
  const startIndex = (currentPage - 1) * maxSize;
  const displayedTours = filteredData.slice(startIndex, startIndex + maxSize);

  return (
    <>
      <Filter onFilter={handleFilter} /> 

      <div className={styles.container}>
        <div className={styles.grid}>
          {loading ? (
            <Spin size="large" className={styles.spin} /> 
          ) : displayedTours.length > 0 ? (
            displayedTours.map((tour) => (
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
                    <button 
                      className={styles.button} 
                      onClick={() => navigate(`/${tour.id}`)}
                    >
                      Подробнее
                    </button>
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
            <p className={styles.noResults}>Нет туров по вашему запросу</p> 
          )}
          <Pagination 
            className={styles.pagination}
            current={currentPage} 
            total={filteredData.length} 
            pageSize={maxSize}
            onChange={(page) => setCurrentPage(page)} 
            showSizeChanger={false} 
          />
        </div>
      </div>
    </>
  );
};

export default Tours;
