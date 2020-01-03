import React from "react";
import { Form, FormGroup, FormText, Input, Label, Button } from "reactstrap";
import { post } from "axios";

import ThankYouModal from "./ThankYouModal";
import Header from "./Header";
import Footer from "./Footer";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      file: undefined,
      submitted: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeThankYouModal = this.closeThankYouModal.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleFileChange(e) {
    this.setState({ file: e.target.files[0] })
  }

  handleSubmit(e) {
    e.preventDefault();
    var formData = new FormData();
    this.setState({ submitted: true, message: "" });
    e.target.message = "";

    if (this.state.file != undefined) {
      formData.append('file', this.state.file);
    }
    formData.append("name", this.state.name);
    formData.append("email", this.state.email);
    formData.append("message", this.state.message);
    const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }
    }

    return post("http://neuraldynamicstechnologies.com/phpmailer.php", formData, config).then(function (response) {
      console.log(response)
    });
  }

  closeThankYouModal() {
    this.setState({ submitted: false });
  }

  render() {
    return (
      <div className="form">
        <ThankYouModal message={this.props.message} closeThankYouModal={this.closeThankYouModal} submitted={this.state.submitted} />
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="name" className="form__label">Name</Label>
            <Input
              type="text"
              name="name"
              className="form__name"
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="email" className="form__label">Email</Label>
            <Input
              type="email"
              name="email"
              className="form__email"
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="message" className="form__label">Message</Label>
            <Input
              type="textarea"
              name="message"
              className="form__message"
              value={this.state.message}
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="file" className="form__label">File</Label>
            <Input
              type="file"
              name="file"
              onChange={this.handleFileChange} 
              className="form__file-input"/>
            <FormText color="muted" className="form__text">
              File must be sent as PDF, DOCX or TXT.
            </FormText>
          </FormGroup>
          <Button disabled={this.state.name == 0 || this.state.email == 0 || this.state.message == 0 } className="form__button">
            {this.state.name == 0 || this.state.email == 0 || this.state.message == 0 ? "Please fill out each field" : "Submit"}
          </Button>
        </Form>
      </div>
    )
  }
};