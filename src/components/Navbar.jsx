import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

const navLinks = [
  { name: 'Home', url: '/' },
  { name: 'Pricing', url: '/pricing' },
  { name: 'FAQ', url: '/faq' },
  { name: 'Contact', url: '/contact' },
];

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleClick = () => setShowNav((prevNav) => !prevNav);
  return (
    <NavHeader>
      <NavContainer>
        <LogoContainer>
          <Link to="/">
            <img src={Logo} alt="site-logo" />
          </Link>
        </LogoContainer>
        <NavMenu className={showNav ? 'active' : ''}>
          {navLinks.map((item) => {
            return (
              <li>
                <NavLink style={{ color: '#fff' }} to={`${item.url}`}>
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </NavMenu>
        <MenuButton onClick={handleClick}>
          {showNav ? (
            <FaTimes style={{ color: '#fff' }} size={30} />
          ) : (
            <FaBars style={{ color: '#fff' }} size={30} />
          )}
        </MenuButton>
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
const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-self: start;

  li {
    padding: 0 1.5rem;
  }

  @media screen and (max-width: 960px) {
    position: fixed;
    left: -100%;
    flex-direction: column;
    justify-content: center;
    background-color: var(--darkgrey);
    width: 100%;
    text-align: center;
    height: 100%;
    transition: 0.4s;

    .active {
      left: 0;
    }
    li {
      margin: 1.5rem 0;
      font-size: 1.8rem;
    }
  }
`;
const MenuButton = styled.div`
  display: none;
  position: absolute;
  top: 2.5rem;
  right: 2.5rem;

  @media screen and (max-width: 960px) {
    display: flex;
  }
`;
