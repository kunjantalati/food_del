import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/footer"; // Fixed import
import AppDownload from "./components/AppDownload/AppDownload";
import LogInpop from "./components/LogInpopup/LogInpop";

const App = () => {

const[showLogin,setShowLogin]=useState(false)

  return (
    <>
    {showLogin?<LogInpop  setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <AppDownload/>
      <Footer /> {/* Fixed usage */}
    </>
  );
};

export default App;
