import React from 'react';
import { NavbarItem as StyledNavbarItem } from './Navbar.style';

export const NavbarItem = ({ children, ...restProps }) => (
  <StyledNavbarItem {...restProps}>
    {children}
  </StyledNavbarItem>
);

export default NavbarItem;