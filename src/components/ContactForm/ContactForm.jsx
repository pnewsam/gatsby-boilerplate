import React, { Component } from 'react';
import axios from 'axios';
import TextInput from './TextInput';
import TextArea from './TextArea';
import Response from './Response';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: '',
      email: '',
      message: '',
      response: ''
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.getAttribute('name')]: e.target.value
    });
  }

  validateEmail(value) {
    const errors = [];
    const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!re.test(value)) {
      errors.push('Must be a valid email.');
    }
    if (value === '') {
      errors.push('Cannot be blank.');
    }
    return errors;
  }

  validateText(value) {
    const errors = [];
    if (value === '') {
      errors.push('Cannot be blank.');
    }
    return errors;
  }

  validateForm() {
    const errors = []
      .concat(this.validateText(this.state.name))
      .concat(this.validateEmail(this.state.email))
      .concat(this.validateText(this.state.message));
    return errors.length === 0;
  }

  timeoutResponse() {
    setTimeout(() => {
      this.setState({ response: '' });
    }, 10000);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('submit!');
    if (this.validateForm()) {
      console.log('valid!');
      const data = new FormData(e.target);
      axios
        .post('', data)
        .then(r => {
          this.setState({
            response: 'success'
          });
          this.timeoutResponse();
        })
        .catch(e => {
          this.setState({
            response: 'error'
          });
          this.timeoutResponse();
        });
    }
  }

  render() {
    return (
      <div id="contact">
        <h1 className="title is-1">Contact Us</h1>
        <form onSubmit={this.handleSubmit}>
          <TextInput
            name="name"
            value={this.state.name}
            handleChange={this.handleChange}
            errors={this.validateText(this.state.name)}
          />
          <TextInput
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            errors={this.validateEmail(this.state.email)}
          />
          <TextArea
            name="message"
            value={this.state.message}
            handleChange={this.handleChange}
            errors={this.validateText(this.state.message)}
          />
          <button className="button is-primary" type="submit">
            Submit
          </button>
        </form>
        <br />
        <Response response={this.state.response} />
      </div>
    );
  }
}

export default ContactForm;
