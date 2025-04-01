import React, { useState } from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
const ExploreMenu = ({category,setcategory}) => {
  return (
    <div className="menu">
      <div className="menu-head">
        <h1>Explore our menu</h1>
        <p>
          Choose from diverse men featuring a delectable array of dishes.our
          mission is to provide you good variety of food with good quality and
          best taste
        </p>
      </div>
      <div className="menu-items">
        {menu_list.map((item, index) => {
          return (
            <div className="menu-list" key={index}  onClick={()=> {
            setcategory(prev=>prev===item.menu_name?'All':item.menu_name)}}>
              <img
                src={item.menu_image}
              
                className={category === item.menu_name ? "active-item" : ""}
              
              />
              
              <p>{item.menu_name}</p>
            </div>
          );
        })
      }
      </div>
      <hr />

    </div>
  );
  
};

export default ExploreMenu;
