import React, { useState } from "react";
import { Card, Space, Select, DatePicker, InputNumber, Button } from "antd";
import { EnvironmentOutlined, CalendarOutlined, TeamOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import style from "./style/Order_cards.module.css";
import data from "../store/data";
import Div from "./Div"

const { Option } = Select;
const cities = ["Грузия", "Россия", "Абхазия", "Турция", "Азербайджан", "Узбекистан"];

const TourFilters = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState(cities[0]);
  const [date, setDate] = useState(null);
  const [people, setPeople] = useState(null);
  const [location, setLocation] = useState("");
  const[filter, setFilter] = useState(data)

  const handleFilter = () => {
    let filteredTours = data.filter((tour) => {
      const forPeople = people ? tour.people >= people : true;
      const forLocation = location ? tour.country.toLowerCase() === location.toLowerCase() : true;

      return forPeople && forLocation;
    });

    console.log("Filter natijasi:", filteredTours);
    setFilter(filteredTours)
  };



  return (
    <Div cn={style.filter_container}>
      
      <Space size="middle">
        
        <Card className={style.filter_card}>
          <Space>
            <Select
              defaultValue={city}
              style={{ width: 120 }}
              onChange={(value) => {
                setCity(value);
                setLocation(value);
              }}
            >
              {cities.map((city) => (
                <Option key={city} value={city}>
                  {city}
                </Option>
              ))}
            </Select>
            <EnvironmentOutlined className={style.filter_icon} />
          </Space>
        </Card>

       
        <Card className={style.filter_card}>
          <Space>
            <DatePicker onChange={(date) => setDate(date)} />
            <CalendarOutlined className={style.filter_icon} />
          </Space>
        </Card>

        
        <Card className={style.filter_card}>
          <Space>
            <InputNumber min={1} max={10} value={people} onChange={setPeople} />
            <TeamOutlined className={style.filter_icon} />
          </Space>
        </Card>
      </Space>

      
      <Button   className={style.show_button} onClick={handleFilter}>
        Подробнее
      </Button>
    </Div>
  );
};

export default TourFilters;
