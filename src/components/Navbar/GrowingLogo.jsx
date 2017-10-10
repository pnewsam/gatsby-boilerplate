import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import raf from 'raf';
import Brand from './Brand';
import Menu from './Menu';
import Scroller from './Scroller';
import Dropdown from './Dropdown';
import NavLink from './NavLink';

const StyledNav = styled.nav`box-shadow: 0 1px 1px grey;`;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      isActive: false,
      logoWidth: Math.max(146 - this.getScrollY(), 70),
      hidden: true
    };
    this.handlingScrollUpdate = false;
    this.scrollInHeight = props.scrollInHeight || 0;
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  handleScroll = () => {
    if (!this.handlingScrollUpdate) {
      this.handlingScrollUpdate = true;
      raf(this.update);
    }
  };

  update = () => {
    let currentScrollY = this.getScrollY();
    console.log(currentScrollY < this.scrollInHeight);
    this.setState({
      logoWidth: Math.max(146 - currentScrollY, 70),
      hidden: currentScrollY < this.props.scrollInHeight
    });

    this.handlingScrollUpdate = false;
  };

  getScrollY = () => {
    if (typeof window !== 'undefined') {
      if (window.pageYOffset !== undefined) {
        return window.pageYOffset;
      } else if (window.scrollTop !== undefined) {
        return window.scrollTop;
      } else {
        return (document.documentElement ||
          document.body.parentNode ||
          document.body
        ).scrollTop;
      }
    }
  };

  toggleMenu() {
    this.setState({ isActive: !this.state.isActive });
  }

  render() {
    return (
      <Scroller hidden={this.state.hidden}>
        <StyledNav className="navbar">
          <Brand
            toggleMenu={this.toggleMenu}
            width={this.state.logoWidth}
            burgerActive={this.state.isActive}
          />
          <Menu isActive={this.state.isActive}>
            <Dropdown to="/team" name="Team" handleClick={this.toggleMenu}>
              <NavLink to="/team" handleClick={this.toggleMenu}>
                Management
              </NavLink>
              <NavLink to="/team/board" handleClick={this.toggleMenu}>
                Board
              </NavLink>
              <NavLink to="/team/founders" handleClick={this.toggleMenu}>
                Founders
              </NavLink>
            </Dropdown>
            <NavLink to="/product-pipeline" handleClick={this.toggleMenu}>
              Product Pipeline
            </NavLink>
            <Dropdown to="/news" name="News" handleClick={this.toggleMenu}>
              <NavLink to="/news/press-releases" handleClick={this.toggleMenu}>
                Press Releases
              </NavLink>
            </Dropdown>
            <NavLink to="/contact" handleClick={this.toggleMenu}>
              Contact
            </NavLink>
          </Menu>
        </StyledNav>
      </Scroller>
    );
  }
}

export default Navbar;
