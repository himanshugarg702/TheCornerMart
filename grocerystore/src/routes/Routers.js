import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import AllFoods from "../pages/AllFoods";
import FoodDetails from "../pages/FoodDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routers = () => {
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));
  console.log(loggedIn)
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      {/* <Route path='/grocery' element={ loggedIn?<AllFoods/>
   :<Navigate to='/login' replace/>}></Route> */}
      <Route path="/grocery" element={<AllFoods />} />
      <Route path="/grocery/:id" element={<FoodDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path='/checkout' element={ loggedIn?<Checkout/>
   :<Navigate to='/login' replace/>}></Route>
      {/* <Route path="/checkout" element={<Checkout />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routers;
