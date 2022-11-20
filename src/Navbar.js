import React, { useState } from "react";
 export const Navbar =({isVisible})=>{

return(
 
    <nav>
   
    <ul className={!isVisible?"header__navbar ": "header__small-navbar"}>
      <li className="header__navbar_item">
        {" "}
        <a className="header__navbar_link" href="#contact">
          צור קשר
        </a>
      </li>
      <li className="header__navbar_item">
        {" "}
        <a className="header__navbar_link" href="#donation">
          תרומה
        </a>
      </li>
      <li className="header__navbar_item">
        <a className="header__navbar_link" href="#shiurei-Tora">
          שיעורי תורה
        </a>
      </li>
      <li className="header__navbar_item">
        <a className="header__navbar_link" href="#zmani-tefila">
          זמני תפילה
        </a>
      </li>
      <li className="header__navbar_item">
        {" "}
        <a className="header__navbar_link" href="#header-menu">
          ראשי
        </a>
      </li>
    </ul>
  </nav>

)

}