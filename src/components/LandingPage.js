import React from "react";
import LandingHeader from "./LandingHeader"

const LandingPage = () => (
  <div className="landing">
    <LandingHeader />
    <img className="landing__image" src="/images/logo.png" />
  </div>
);

export default LandingPage;