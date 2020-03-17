import React from 'react';

const Img = ({ src, alt, ...restProps }) => (
  <img src={src} alt={alt} {...restProps} />
);

export { Img };
export default Img;