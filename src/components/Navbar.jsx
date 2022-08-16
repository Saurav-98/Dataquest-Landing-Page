import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

const navLinks = [
  { name: 'Home', url: '/' },
  { name: 'Pricing', url: '/pricing' },
  { name: 'FAQ', url: '/faq' },
  { name: 'Contact', url: '/contact' },
];

const Navbar = () => {
  return (
    <NavHeader>
      <NavContainer>
        <LogoContainer>
          <Link to="/">
            <img src={Logo} alt="site-logo" />
          </Link>
        </LogoContainer>
        <NavMenu>
          {navLinks.map((item) => {
            return (
              <li>
                <NavLink to={`${item.url}`}>{item.name}</NavLink>
              </li>
            );
          })}
        </NavMenu>
      </NavContainer>
    </NavHeader>
  );
};

export default Navbar;

const NavHeader = styled.header`
  width: 100%;
  height: 100px;
  background-color: var(--darkgrey);
`;
const NavContainer = styled.nav`
  max-width: 1240px;
  height: 100%;
  padding: 0 1rem;
  margin: auto;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 80px;
    height: auto;
  }
`;
const NavMenu = styled.ul``;
