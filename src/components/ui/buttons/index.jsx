import React from 'react';
import { Button as Btn } from './Button.style';
import { classNames } from './utils';

export const Button = ({
  type = null,
  primary = '',
  secondary = '',
  variant,
  children,
  handleClick,
  handleMouseEnter,
  handleMouseLeave
}) => (
  <Btn
    type={type || 'button'}
    className={
      classNames({
        variant,
        primary,
        secondary
      })
    }
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    onClick={e => {
      e.preventDefault();
      return handleClick;
    }}
  >
    {children}
  </Btn>
);
