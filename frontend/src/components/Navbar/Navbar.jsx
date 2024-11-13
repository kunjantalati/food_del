import React, { useState } from 'react';
import './Navbar.css';
import {assets} from '../../assets/assets'

const Navbar = () => {

const [menu,setMenu]=useState("menu");

  return (

    // logo
    <div className='navbar'> 
      <img src={assets.logo} alt="" className="logo" />

{/* list */}

      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li>
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</li>
        <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>contact</li>
        <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>mobile-app</li>
      </ul>

{/* search icon */}
<div className="navbar-right">
    <img src={assets.search_icon} alt="" />

    <div className="navbar-search-icon">
    <img src={assets.basket_icon} alt="" />
    <div className="dot"></div>    
    </div>
    <button>sign in</button>
</div>


    </div>
  )
}

export default Navbar
