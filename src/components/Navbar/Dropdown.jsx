import React, { Component } from 'react';
import Link from 'gatsby-link';
import NavLink from './NavLink';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.toggleActive = this.toggleActive.bind(this);
    this.state = {
      classes: 'navbar-item has-dropdown',
    };
  }

  toggleActive(e) {
    if (!this.state.classes.includes('is-active')) {
      this.setState({
        classes: 'navbar-item has-dropdown is-active',
      });
    } else {
      this.setState({
        classes: 'navbar-item has-dropdown',
      });
    }
  }

  render() {
    return (
      <div
        className={this.state.classes}
        onMouseOver={this.toggleActive}
        onMouseOut={this.toggleActive}
      >
        <NavLink
          to={this.props.to}
          className="navbar-link"
          handleClick={this.props.handleClick}
        >
          {this.props.name}
        </NavLink>
        <div className="navbar-dropdown">{this.props.children}</div>
      </div>
    );
  }
}

export default Dropdown;
