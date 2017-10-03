import React, { Component } from 'react';
import Link from 'gatsby-link';
import Brand from './Brand';
import Menu from './Menu';
import Scroller from './Scroller';
import Dropdown from './Dropdown';
import NavLink from './NavLink';

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
          <Brand toggleMenu={this.toggleMenu} isActive={this.state.isActive}>
            Brand
          </Brand>
          <Menu isActive={this.state.isActive}>
            <Dropdown to="/" name="Dropdown">
              <NavLink to="/" className="navbar-item">
                Link
              </NavLink>
              <Link to="/" className="navbar-item">
                Link
              </Link>
              <Link to="/" className="navbar-item">
                Link
              </Link>
            </Dropdown>
            <Link to="/" className="navbar-item">
              Link
            </Link>
            <Link to="/" className="navbar-item">
              Link
            </Link>
          </Menu>
        </nav>
      </Scroller>
    );
  }
}

export default Navbar;
