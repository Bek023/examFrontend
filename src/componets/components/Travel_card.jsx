// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Card, Button } from "antd";
// import { ClockCircleOutlined, DollarOutlined } from "@ant-design/icons";
// import style from '../css/Travel_cards.module.css'

// const Travel_card = ({ tour }) => {
//   const navigate = useNavigate();

//   return (
//     <Card className={style.tour_card}>
//       <img src={tour.image} alt={tour.title} className={style.tour_image}/>
//       <div className="tour-info">
//         <h4 className={style.tour_title}>{tour.title}</h4>
//         <p className="tour-price">
//           <DollarOutlined /> {tour.priceAdult} ₽ (Взрослый) / {tour.priceChild} ₽ (Детский)
//         </p>
//         <p className={style.tour_duration}>
//           <ClockCircleOutlined /> {tour.duration}
//         </p>
//         <p className="tour-description">{tour.description}</p>
//         <Button type="primary" className={style.tour_button} onClick={() => navigate(`/tour/${tour.id}`)}>
//           Подробнее
//         </Button>
//       </div>
//     </Card>
//   );
// };

// export default Travel_card;
