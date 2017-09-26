import React, { Component } from 'react';
import axios from 'axios';
import string from 'lodash/string';
import object from 'lodash/object';
import TextInput from './TextInput';
import TextArea from './TextArea';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
    this.state = {
      values: {
        name: '',
        email: '',
        message: '',
      },
      errors: {
        name: [],
        email: [],
        message: [],
      },
      responses: [],
    };
  }

  handleChange(e) {
    const field = e.target.getAttribute('name');
    this.setState({
      values: Object.assign({}, this.state.values, {
        [field]: e.target.value,
      }),
    });
    // this.validateEmail();
  }

  // validateEmail() {
  //   const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  //   if (this.state.email !== '' && !re.test(this.state.email)) {
  //     if (this.state.errors.indexOf('You must enter a valid email') === -1) {
  //       this.setState({
  //         errors: this.state.errors.concat(['You must enter a valid email']),
  //       });
  //     }
  //   } else {
  //     this.setState({
  //       errors: this.state.errors.filter(
  //         i => i !== 'You must enter a valid email',
  //       ),
  //     });
  //   }
  // }

  validate() {
    console.log('in validate!');
    const errors = this.state.errors;
    object.forIn(this.state.values, (val, prop) => {
      if (val === '') {
        if (
          errors[prop].indexOf(`${string.capitalize(prop)} cannot be empty!`) <
          0
        ) {
          this.setState({
            errors: {
              ...errors,
              [prop]: errors[prop].concat(
                `${string.capitalize(prop)} cannot be empty!`,
              ),
            },
          });
        }
      } else {
        this.setState({
          errors: {
            ...errors,
            [prop]: errors[prop].filter(
              e => e !== `${string.capitalize(prop)} cannot be empty!`,
            ),
          },
        });
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.validate();
    // if (this.validatePresence()) {
    //   const data = new FormData(e.target);
    //   console.log('in conditional!');
    //   axios
    //     .post(
    //       '',
    //       data
    //     )
    //     .then(r => {
    //       console.log(r);
    //       this.setState({
    //         responses: this.state.responses.concat(
    //           'Your message was successfully sent'
    //         )
    //       });
    //       setTimeout(() => {
    //         this.setState({ responses: [] });
    //       }, 10000);
    //     })
    //     .catch(e => {
    //       console.log(e);
    //       this.setState({
    //         errors: [e]
    //       });
    //       setTimeout(() => {
    //         this.setState({ errors: [] });
    //       }, 10000);
    //     });
    // }
  }

  render() {
    return (
      <div id="contact">
        <h1 className="title is-1">Contact Us</h1>
        <form onSubmit={this.handleSubmit}>
          <TextInput
            name="name"
            value={this.state.values.name}
            handleChange={this.handleChange}
            errors={this.state.errors.name}
          />
          <TextInput
            name="email"
            value={this.state.values.email}
            handleChange={this.handleChange}
            errors={this.state.errors.email}
          />
          <TextArea
            name="message"
            value={this.state.values.message}
            handleChange={this.handleChange}
            errors={this.state.errors.message}
          />
          <button className="button is-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
