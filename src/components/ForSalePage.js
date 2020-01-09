import React from "react";
import {ForSaleList} from "./ForSaleList";

const testData = [
  {
    product: "Barry the Bull",
    price: "$750",
    image: "https://dummyimage.com/600x1600/000/fff",
    desc: "This is a great bull, the best"
  },
  {
    product: "Charlie the Horse",
    price: "$500",
    image: "https://dummyimage.com/400x600/000/fff",
    desc: "Such a nice horse, the fastest"
  },
  {
    product: "Carrots",
    price: "$2 per pound",
    image: "https://dummyimage.com/400x600/000/fff",
    desc: "Fresh plucked from the earth"
  },
  {
    product: "Longhorn beef",
    price: "$7.50 per pound",
    image: "https://dummyimage.com/400x600/000/fff",
    desc: "Much leaner than ground beef"
  },
  {
    product: "Sharron the Cow",
    price: "$1000",
    image: "https://dummyimage.com/400x600/000/fff",
    desc: "This here a milkin' cow"
  }
]

const ForSalePage = () => (
  <div className="for-sale">
    <ForSaleList data={testData} />
  </div>
);

export default ForSalePage;