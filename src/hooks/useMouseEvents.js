import React from 'react';

export const useMouseEvents = status => {
  const [active, setActive] = React.useState(status);

  const handleMouseEvents = React.useCallback(() => {
    setActive(!active);
  }, [active, setActive]);

  return [active, handleMouseEvents];
}
