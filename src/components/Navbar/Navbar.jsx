import React, { Component } from 'react';
import Brand from './Brand';
import Menu from './Menu';
import Dropdown from './Dropdown';
import NavLink from './NavLink';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isActive: false,
    };
  }
  handleClick() {
    console.log('handleClick!');
    this.setState({ isActive: !this.state.isActive });
  }
  render() {
    return (
      <nav className="navbar">
        <Brand handleClick={this.handleClick} isActive={this.state.isActive}>
          Brand
        </Brand>
        <Menu isActive={this.state.isActive}>
          <Dropdown to="/" name="Dropdown" handleClick={this.handleClick}>
            <NavLink to="/" handleClick={this.handleClick}>
              Link
            </NavLink>
            <NavLink to="/" handleClick={this.handleClick}>
              Link
            </NavLink>
            <NavLink to="/" handleClick={this.handleClick}>
              Link
            </NavLink>
          </Dropdown>
          <NavLink to="/" handleClick={this.handleClick}>
            Link
          </NavLink>
          <NavLink to="/" handleClick={this.handleClick}>
            Link
          </NavLink>
        </Menu>
      </nav>
    );
  }
}

export default Navbar;
