import React, { Component } from "react";

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

    if (this.state.submitted) {
      return (
        <div>
          <h1>Thank You</h1>
        </div>
      );
    } else {

      return (
        <div>
          <h1>Form</h1>
          <form
            action={this.state.action}
            id="gForm"
            name="gForm"
            target="hidden_iframe"
            onsubmit="submitted=true;"
          >
            <label htmlFor={this.state.name}>Name</label>
            <input type="text" name={this.state.name} id={this.state.name} />

            <label htmlFor={this.state.email}>Email</label>
            <input type="text" name={this.state.email} />

            <label htmlFor={this.state.subject}>Subject</label>
            <input type="text" name={this.state.subject} id={this.state.subject} />

            <label htmlFor={this.state.message}>Message</label>
            <textarea type="text" name={this.state.message} id={this.state.message} />

            <input
              type="submit"
              value="submit"

        onClick={
            // action={this.state.action}
            this.handleFormSubmit
        }
            />
          </form>
          {/* <iframe name="hidden_iframe" id="hidden_iframe" onload="if(submitted){}"></iframe> */}
        </div>
      );
    }
  }
}
