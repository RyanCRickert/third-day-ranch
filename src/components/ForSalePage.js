import React from "react";
import {ForSaleList} from "./ForSaleList";

const testData = [
  {
    product: "Barry the Bull",
    price: "$750",
    image: null,
    desc: "This is a great bull, the best"
  },
  {
    product: "Charlie the Horse",
    price: "$500",
    image: null,
    desc: "Such a nice horse, the fastest"
  },
  {
    product: "Carrots",
    price: "$2 per pound",
    image: null,
    desc: "Fresh plucked from the earth"
  },
  {
    product: "Longhorn beef",
    price: "$7.50 per pound",
    image: null,
    desc: "Much leaner than ground beef"
  },
  {
    product: "Sharron the Cow",
    price: "$1000",
    image: null,
    desc: "This here a milk cow"
  }
]

const ForSalePage = () => (
  <div className="landing">
    <ForSaleList data={testData} />
  </div>
);

export default ForSalePage;