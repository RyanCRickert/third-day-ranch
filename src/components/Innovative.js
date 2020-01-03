import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default class Innovate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div><Header />
        <div className="innovative">
        </div>
        <div className="innovative__points">
          <div className="innovative__points-each">Using a combination of CMOS and E-Beam microfabrication techniques, we create high-density silicon probes for recording neural activity in the brains of small animal models.  We currently manufacture silicon probes with 64 – 1024 recording sites in any desired configuration in terms of number and width of shanks and layout of recording sites.</div>
          <div className="innovative__points-each">We are also pushing the frontiers of biocompatibility and flexibility of probe substrates to design devices that can record various types of neural activity in the human body.</div>
          <div className="innovative__points-each">If you want to learn more, or if you are looking for a partner to design new types of neural interfaces, get in touch!</div>
        </div>
      </div>
    )
  }
}