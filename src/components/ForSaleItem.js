import React from "react";

export const ForSaleItem = props => (
  <div className="list-item">
      <h3 className="list-item__title">{props.product}</h3>
      <span className="list-item__sub-title">Price: {props.price}</span>
      <span className="list-item__sub-title">Description: {props.desc}</span>
  </div>
)