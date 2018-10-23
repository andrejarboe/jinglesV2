import React, { Component } from "react";
import Layout from "../components/layout";

export default class Form extends Component {

  state = {
    submitted: false,
    action:
      "https://docs.google.com/forms/d/e/1FAIpQLSesA7HL5e2OSybPdhbjYKBao3sXyQ5tgGeOyyHxxqIGc_0rPw/formResponse?",

    name: "entry.1718035081",
    email: "entry.130024216",
    subject: "entry.1129070954",
    message: "entry.969548444"
  };

  handleFormSubmit() {
    this.setState({
      submitted: true
    });
  };
  render() {
      return(
          <Layout>
              about
          </Layout>
      );

  }
}