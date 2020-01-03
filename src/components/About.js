import React from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

import Header from "./Header";
import Footer from "./Footer";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div><Header />
        <div className="about">
        </div>
        <div className="about__points">
          <div className="about__points-each">At Neural Dynamics Technologies (NDT), we design and manufacture neural interfaces for a variety of applications, ranging from tools for basic neuroscience research to therapeutic devices.</div>
          <div className="about__points-each">We take an interdisciplinary approach by working closely together with academics and clinicians to develop the best tools for elucidating brain function and for treating neurological disorders.</div>
          <div className="about__points-each">NDT was started in 2018 by a team of neuroscientists and engineers that were working together at MIT and is supported by the NIH.</div>
        </div>
      </div>
    )
  }
};