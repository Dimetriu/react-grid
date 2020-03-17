import React from 'react';
import { useMouseEvents } from '../../hooks/useMouseEvents';
import { AppHeader } from './Header.style';
import { COLORS } from '../../constants/styles';
import { Button } from '../ui/buttons';
import Navbar, { NavbarItem } from '../ui/navbar';
import Img from '../ui/images';
/** Avatars */
import mask_1 from '../../assets/avatars/mask_1.png';
import mask_2 from '../../assets/avatars/mask_2.png';
import mask_3 from '../../assets/avatars/mask_3.png';

import {
  ChevronLeftIcon,
  MeatBallsIcon,
  UploadIcon,
  PersonAddIcon,
  FilterListIcon
} from '../ui/icons';

export default function Header() {
  const [active, changeActive] = useMouseEvents(false);

  const isActive = active ? COLORS.primary : COLORS.darkGray;

  const NavbarButton = ({ children }) => (
    <Button
      handleMouseEnter={changeActive}
      handleMouseLeave={changeActive}
    >
      {children}
    </Button>
  );

  const leftPanel = (
    <NavbarItem>
      <Button>
        <ChevronLeftIcon />
      </Button>
    </NavbarItem>
  );

  const navbarItems = (
    <>
      <NavbarItem marginRight="1.5rem">
        <NavbarButton>
          <FilterListIcon fill={isActive} />
        </NavbarButton>
      </NavbarItem>
      <NavbarItem marginRight=".5rem">
        <Img src={mask_3} />
      </NavbarItem>
      <NavbarItem marginRight=".5rem">
        <Img src={mask_2} />
      </NavbarItem>
      <NavbarItem marginRight=".5rem">
        <Img src={mask_1} />
      </NavbarItem>
      <NavbarItem marginRight="1.5rem">
        <NavbarButton>
          <PersonAddIcon fill={isActive} />
        </NavbarButton>
      </NavbarItem>
      <NavbarItem marginRight="1.5rem">
        <NavbarButton>
          <UploadIcon fill={isActive} />
        </NavbarButton>
      </NavbarItem>
      <NavbarItem>
        <NavbarButton>
          <MeatBallsIcon fill={isActive} />
        </NavbarButton>
      </NavbarItem>
    </>
  );

  return (
    <AppHeader>
      <Navbar
        left={leftPanel}
        right={navbarItems}
      />
    </AppHeader>
  );
}