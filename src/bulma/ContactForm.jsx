import React, { Component } from 'react';
import FormField from './FormField';
import TextInput from './TextInput';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleChange(e) {
    const field = e.target.getAttribute('name');
    this.setState({
      [field]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h1 className="title is-1">Contact Us</h1>
        <form action="" onSubmit={this.handleSubmit}>
          <FormField label="Name">
            <TextInput
              name="name"
              handleChange={this.handleChange}
              value={this.state.name}
            />
          </FormField>
          <FormField label="Email">
            <TextInput
              name="email"
              handleChange={this.handleChange}
              value={this.state.email}
            />
          </FormField>
          <FormField label="Message">
            <textarea
              className="textarea"
              name="message"
              onChange={this.handleChange}
              value={this.state.message}
            />
          </FormField>
          <button type="submit" className="button is-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
