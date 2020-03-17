import React from 'react';

function PlusIcon({ stroke }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M12 5v14m-7-7h14"></path>
    </svg>
  );
}

export default PlusIcon;