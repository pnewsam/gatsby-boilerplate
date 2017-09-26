import React, { Component } from 'react';
import NavbarBrand from './NavbarBrand';
import NavbarMenu from './NavbarMenu';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      isActive: false,
    };
  }
  toggleMenu() {
    console.log('toggleMenu!');
    this.setState({ isActive: !this.state.isActive });
    console.log(this.state);
  }
  render() {
    return (
      <nav className="navbar">
        <NavbarBrand toggleMenu={this.toggleMenu}>Brand</NavbarBrand>
        <NavbarMenu isActive={this.state.isActive}>
          {this.props.children}
        </NavbarMenu>
      </nav>
    );
  }
}

export default Navbar;
