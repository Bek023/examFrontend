import React from "react";
import { Routes, Route } from "react-router-dom";
import Order from "../componets/Order";
import Footer from "../componets/footer";
import Header from "../componets/Header";
import style from './style/Excursy.module.css';

const Excursy = () => {
  return (<>
      <div className={style.block}>
      <Header/>
      <h1>НАШИ ЭКСКУРСИИ</h1>
      </div>
      <Order />
      <Footer/>
      </>
  );
};

export default Excursy;

