import React from "react";
import { connect } from "react-redux";
import {ForSaleItem} from "./ForSaleItem";

export const ForSaleList = props => (
  <div className="content-container">
    <div className="list-body">
  {
    props.data.length === 0 ? (
      <div className="list-item list-item--message">
        <span>No recipes found</span>
      </div>
    ) : (
      props.data.map(data => (
      <ForSaleItem key={data.product} {...data}/>
    ))
    )
  }
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    recipes: state
  };
}

export default connect(mapStateToProps)(ForSaleList);