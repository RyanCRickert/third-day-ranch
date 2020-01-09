import React from "react";
import {ForSaleList} from "./ForSaleList";

const testData = [
  {
    product: "Barry the Bull",
    price: "$750",
    image: "https://images.unsplash.com/photo-1562360742-318972306207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    desc: "This is a great bull, the best"
  },
  {
    product: "Charlie the Horse",
    price: "$500",
    image: "https://images.unsplash.com/flagged/photo-1557296126-ae91316e5746?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    desc: "Such a nice horse, the fastest"
  },
  {
    product: "Carrots",
    price: "$2 per pound",
    image: "https://images.unsplash.com/photo-1472653525502-fc569e405a74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    desc: "Fresh plucked from the earth"
  },
  {
    product: "Longhorn steak",
    price: "$12.50 per pound",
    image: "https://images.unsplash.com/photo-1560781290-7dc94c0f8f4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
    desc: "Much leaner than beef"
  },
  {
    product: "Sharron the Cow",
    price: "$1000",
    image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    desc: "This here a milkin' cow"
  }
]

const ForSalePage = () => (
  <div className="for-sale">
    <ForSaleList data={testData} />
  </div>
);

export default ForSalePage;