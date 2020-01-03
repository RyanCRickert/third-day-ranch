import React from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import axios from "axios";

import Header from "./Header";
import Footer from "./footer";
import ThankYouModal from "./ThankYouModal";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      submitted: false,
      refs: {
        About: null,
        Large: null,
        Design: null,
        Contact: null
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeThankYouModal = this.closeThankYouModal.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = this.state;
    this.setState({ submitted: true, message: "" });
    e.target.message = "";

    const form = await axios.post("/api/form", {
      name,
      email,
      message
    })
  }

  closeThankYouModal() {
    this.setState({ submitted: false });
  }

  render() {
    return (
      <div>
        <Header refs={this.state.refs}/>
        <div className="homepage" ref={(section) => { this.state.refs.Top = section; }}>

          <ThankYouModal closeThankYouModal={this.closeThankYouModal} submitted={this.state.submitted} />
          <div className="homepage__about" ref={(section) => { this.state.refs.About = section; }}>
            <div className="content-container">
              <div className="homepage-inside">
                Neural Dynamics Technologies
              </div>
            </div>
          </div>
          <div className="homepage__inventing">
            <h1>Re-Inventing Neuroscience</h1>
            <p>We are an early stage spin-out from technologies invented in the Boyden lab at MIT, focusing on a new approach to record and analyze large-scale data of neural activity in the brain.</p>
          </div>
          <div className="homepage__large" ref={(section) => { this.state.refs.Large = section; }}>
            <div className="content-container">
              <div className="homepage-inside">
                Large-Scale Precision Electrophysiology
              </div>
            </div>
          </div>
          <div className="homepage__technologies">
            <p>Our technologies are designed for scalability and automation: to allow big data applications, our physical design approach facilitates automated data analysis techniques - a key requirement for large scale brain recording.</p>
          </div>
          <div className="homepage__design" ref={(section) => { this.state.refs.Design = section; }}>
            <div className="content-container">
              <div className="homepage-inside">
                Designed for Your Needs
              </div>
            </div>
        </div>
          <div className="homepage__proprietary">
            Our proprietary design automation allows us to build custom probes, targeted to your specification. Contact us about our fast turn-around custom designs.
        </div>
          <div className="homepage__contact" ref={(section) => { this.state.refs.Contact = section; }}>
            <div className="homepage-inside">
              Contact Us
            </div>
            <div className="homepage__contact-form">
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label for="name" className="form__label">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    className="homepage__contact-form-name"
                    onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                  <Label for="email" className="form__label">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    className="homepage__contact-form-email"
                    onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                  <Label for="message" className="form__label">Message</Label>
                  <Input
                    type="textarea"
                    name="message"
                    className="homepage__contact-form-message"
                    value={this.state.message}
                    onChange={this.handleChange} />
                </FormGroup>
                <Button disabled={this.state.name == 0 || this.state.email == 0 || this.state.message == 0} className="homepage__contact-form-button">
                  {this.state.name == 0 || this.state.email == 0 || this.state.message == 0 ? "Please fill out each form" : "Submit"}
                </Button>
              </Form>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
};