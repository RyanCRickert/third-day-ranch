import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default class Custom extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div><Header />
        <div className="custom">
        </div>
        <div className="content-container custom__points">
          Our design / our work / publications which would make this a different section?
        </div>
      </div>
    )
  }
}