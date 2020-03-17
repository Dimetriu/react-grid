import React from 'react';

function Icon({ fill }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" fill="none">
      <path
        fill={fill}
        d="M9 0C7.927 0 6.672 1.165 6 1.915 5.328 1.165 4.073 0 3 0 1.1 0 0 1.419 0 3.224c0 3 6 6.353 6 6.353s6-3.352 6-6.225C12 1.546 10.9 0 9 0z"
      ></path>
    </svg>
  );
}

export default Icon;