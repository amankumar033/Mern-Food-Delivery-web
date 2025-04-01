import React, { useState,useContext } from "react";
import "./FoodItem.css";
import { StoreContext } from "../../Context/StoreContext";
import { assets } from "../../assets/assets";
const FoodItem = ({  id, name, description, price, image }) => {
  const[itemcount, setitemcount] = useState(0);
  
  const {addtocart,removefromcart,cartitems}=useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-image-container">
        {}<img className="food-item-image" src={image} alt="" />
        {!cartitems[id] ? 
          <img src={assets.add_icon_white} onClick={()=>{addtocart(id)}} alt="" className="add-icon" />
        : 
          <div className="food-item-counter">
             <img src={assets.remove_icon_red} onClick={()=>{removefromcart(id)}} alt="" />      
            <p>{cartitems[id]}</p>
            <img src={assets.add_icon_green} onClick={()=>{addtocart(id)}} alt="" />
          </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
