import React from 'react';
import { AppFooter } from './Footer.style';
import { COLORS } from '../../constants/styles';
import {
  PlusIcon,
  SearchIcon,
  DashboardIcon,
  NotificationsIcon
} from '../ui/icons';

import Navbar, { NavbarItem } from '../ui/navbar';
import { Button } from '../ui/buttons';

export default function Footer() {
  const count = 1;

  const anyNotifications = Boolean(count);
  const iconEmpty = COLORS.darkGray;
  const iconFilled = COLORS.primary;

  const left = (
    <>
      <NavbarItem marginRight="2rem">
        <Button>
          <SearchIcon />
        </Button>
      </NavbarItem>
      
      <NavbarItem marginRight="2rem">
        <Button>
          <DashboardIcon />
        </Button>
      </NavbarItem>

      <NavbarItem>
        <Button>
          <NotificationsIcon fill={anyNotifications ? iconFilled : iconEmpty} />
        </Button>
        {anyNotifications && (
          <span className="notifications__count">{count}</span>
        )}
      </NavbarItem>
    </>
  );

  const right = (
    <Button primary>
      <PlusIcon stroke="#fff" />
    </Button>
  );

  return (
    <AppFooter>
      <Navbar left={left} right={right} />
    </AppFooter>
  );
}