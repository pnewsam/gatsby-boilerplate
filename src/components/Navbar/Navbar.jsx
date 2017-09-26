import React, { Component } from 'react';
import Brand from './Brand';
import Menu from './Menu';
import Scroller from './Scroller';

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
      <Scroller>
        <nav className="navbar">
          <Brand toggleMenu={this.toggleMenu}>Brand</Brand>
          <Menu isActive={this.state.isActive}>{this.props.children}</Menu>
        </nav>
      </Scroller>
    );
  }
}

export default Navbar;
