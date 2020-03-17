import React from 'react';
import { Navbar as StyledNavbar } from './Navbar.style';
import NavbarItem from './NavbarItem';

export default function Navbar({
  left = null,
  right = null,
  children,
  loader
}) {
  return (
    <StyledNavbar>
      <div className="left">{left}</div>
      <div className="right">{right}</div>
      {children || loader}
    </StyledNavbar>
  );
}

export { NavbarItem };
