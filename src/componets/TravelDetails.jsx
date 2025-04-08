import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import { Spin, Pagination } from "antd";
import styles from './style/Travel_cards.module.css';

const maxSize = 4;

const Tours = ({ filteredData }) => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedTours, setDisplayedTours] = useState([]);



  const handlePageChange = (page) => {
    setLoading(true);
    setCurrentPage(page);
  };

  useEffect(() => {
    setLoading(true);
    const startIndex = (currentPage - 1) * maxSize;
    const slice = filteredData.slice(startIndex, startIndex + maxSize);


    const timeout = setTimeout(() => {
      setDisplayedTours(slice);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [currentPage, filteredData]);

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
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
                      onClick={() =>
                        navigate(`/${tour.id}`)
                      }
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
            <p className={styles.errorP}>Нет туров по вашему запросу</p>
          )}
        </div>

        <Pagination
          className={styles.pagination}
          current={currentPage}
          total={filteredData.length}
          onChange={handlePageChange}
          pageSize={maxSize}
          showSizeChanger={false}
        />
      </div>
    </>
  );
};

export default Tours;
