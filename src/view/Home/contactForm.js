import React, { Component } from "react";

class contactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      message: "",
      mailSent: false
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  async handleFormSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div className="aboutUS-contact-container">
            <div className="aboutUs-title">
              <h2>Kontakt oss</h2>
            </div>
            <input
              type="text"
              placeholder="Din epostadresse*"
              className="aboutUS-contact-form"
              label="email"
              id="email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            ></input>
          </div>
          <div className="aboutUS-contact-container2">
            <input
              type="text"
              placeholder="Fornavn*"
              className="aboutUS-contact-form"
              label="fornavn"
              id="fname"
              value={this.state.fname}
              onChange={e => this.setState({ fname: e.target.value })}
            ></input>
            <input
              type="text"
              placeholder="Etternavn*"
              className="aboutUS-contact-form"
              label="etternavn"
              id="lname"
              value={this.state.lname}
              onChange={e => this.setState({ lname: e.target.value })}
            ></input>
          </div>
          <div className="aboutUS-contact-container">
            <textarea
              type="text"
              placeholder="Din melding"
              className="aboutUS-contact-txt"
              label="email"
              id="subject"
              value={this.state.message}
              onChange={e => this.setState({ message: e.target.value })}
            ></textarea>
          </div>
          <div className="aboutUS-contact-btn-section">
            <button
              className="contact-btn-grunnskole"
              type="submit"
              value="Submit"
              onClick={this.handleFormSubmit}
            >
              Send
            </button>
          </div>
          <div>
            {this.state.mailSent && <div>Thank you for contcting us.</div>}
          </div>
        </form>
      </div>
    );
  }
}

export default contactForm;
