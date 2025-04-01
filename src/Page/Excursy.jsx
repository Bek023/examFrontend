import React from "react";
import { Routes, Route } from "react-router-dom";
import Order from "../components/Order";
import TravelDetails from "./TravelDetails";

const Excursy = () => {
  return (
    <Routes>
      <Route path="/" element={<Order />} />
      <Route path="/details" element={<TravelDetails />} />
    </Routes>
  );
};

export default Excursy;
