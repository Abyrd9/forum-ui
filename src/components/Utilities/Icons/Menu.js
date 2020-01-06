import React from 'react';

function Menu(props) {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="ellipsis-v"
      className="prefix__svg-inline--fa prefix__fa-ellipsis-v prefix__fa-w-6"
      viewBox="0 0 192 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"
      />
    </svg>
  );
}

export default Menu;
