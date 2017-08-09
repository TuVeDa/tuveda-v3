import React, { Component } from 'react';

class ContactForm extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // };

  render() {
    return (
      <div className="std-land-section" id="contact-form">
        <h3 className='land-title'>CONTACT FORM</h3>
        <form>
          <div className="form-group form-inline row">
            <label className="input-name">Name</label>
            <input type="email" className="form-control input" id="client-name" placeholder="Jordan Doe" />
          </div>
          <div className="form-group form-inline row">
            <label className="input-name">Email</label>
            <input type="email" className="form-control input" id="client-email" placeholder="email@email.com" />
          </div>
          <div className="form-group form-inline row">
            <label className="input-name">Company</label>
            <input type="password" className="form-control input" id="client-company" placeholder="Enterprise Inc." />
          </div>
          <div className="form-group">
            <p>What are you interested in building?</p>
            <div className="radio">
              <label className="radio-inline">
                <input type="radio" name="prospective-project-type" value="website" className="radioBtn"/> Website
              </label>
              <label className="radio-inline">
                <input type="radio" name="prospective-project-type" value="app" className="radioBtn"/> Application
              </label>
              <label className="radio-inline">
                <input type="radio" name="prospective-project-type" value="other" className="radioBtn"/> Other
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    )
  }
}

export default ContactForm;
