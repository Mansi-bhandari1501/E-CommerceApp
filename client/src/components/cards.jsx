import React from "react";
import "./cards.css";
import { Rating } from "@mui/material";

function Cards(props) {
  return (
    <>
   
    <div className="cards-container">
      <div className="cards">
        <div className="product-img">
          <img className="item-url" src={props.url} alt="" />
        </div>
        <div className="cards-content">
          <div className="product-name">{props.name}</div>
          <div className="product-rating">
            <Rating name="read-only" value={props.rate} readOnly />
            <div className="product-price">{props.price}</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );

}
export default Cards;
