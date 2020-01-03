import React from "react";
import { Collapse, Button, CardBody, Card } from 'reactstrap';

import Header from "./Header";
import Footer from "./Footer";
import EmailFormPHP from "./EmailFormPHP";
import FontAwesome from "react-fontawesome";

const contactMessage = "Thank you for taking the time to send us a message, we will view it as soon as we can and respond to you quickly.";

const applyMessage = "Thank you for your interest in Neural Dynamics Technologies.  We will review you application and should you be a good match we will contact you.";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapseContact: true
    }

    this.toggleContact = this.toggleContact.bind(this);
    this.toggleMicrofab = this.toggleMicrofab.bind(this);
  }

  toggleContact() {
    this.setState({ collapseContact: !this.state.collapseContact });
  }

  toggleMicrofab() {
    this.setState({ collapseMicroFab: !this.state.collapseMicroFab });
  }

  render() {
    return (
      <div><Header />
        <div className="career-container career__points">
          <Button onClick={this.toggleContact} className="career__button-contact"><div className="career__button-90">Contact Us</div><div className="career__button-10"><FontAwesome className={this.state.collapseContact ? "career__flipped" : "career__noflip"} name="caret-down"/></div></Button>
          <Collapse isOpen={this.state.collapseContact}>
            <Card>
              <CardBody>
                <div className="career__explain">
                Please feel free to get in touch with questions on our products or on partnering, or if you are interested in career opportunities.<br/>
                <div className="career__separator" />
                </div>
                <EmailFormPHP message={contactMessage}/>
              </CardBody>
            </Card>
          </Collapse>
        </div>
      </div>
    )
  }
};