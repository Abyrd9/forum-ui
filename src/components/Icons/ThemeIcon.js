import React from 'react';
import PropTypes from 'prop-types';

const ThemeIcon = ({ className }) => {
  return (
    <svg
      width="26"
      height="25"
      viewBox="0 0 26 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M21.1648 17.8394C20.1608 15.1934 18.4787 14.2344 16.5783 13.9497L24.0861 6.44189C25.3064 5.22168 25.3064 3.24268 24.0857 2.02246L22.9782 0.915039C22.3679 0.305176 21.5681 0 20.7688 0C19.969 0 19.1691 0.305176 18.5593 0.915039L11.7302 7.74268L7.72334 1.75098C6.85371 0.510254 5.70772 0.000488281 4.56563 0.000488281C1.40352 0.000488281 -1.7293 3.90771 1.11641 7.03418L6.50801 12.9644L0.932813 18.5381L0.0172856 23.7842C-0.0955074 24.4302 0.408399 25 1.03535 25C1.09541 25 1.15596 24.9946 1.21797 24.9839L6.46455 24.064L11.0407 19.4878C11.3337 21.6807 12.7092 25 17.9699 25C22.9177 25 25.0012 21.0244 25.0012 16.5005C24.4636 16.8677 22.5764 18.3877 21.9665 18.3877C21.6042 18.3877 21.2941 18.1807 21.1648 17.8394V17.8394ZM20.216 2.57227C20.5002 2.28809 20.9963 2.24805 21.321 2.57227L22.4284 3.67969C22.7121 3.96289 22.7536 4.45947 22.4284 4.78467L19.9045 7.30859L17.6921 5.09619L20.216 2.57227ZM2.84932 5.45654C2.33125 4.8877 2.21748 4.36963 2.4792 3.77734C2.82832 2.9873 3.76436 2.34424 4.56514 2.34424C4.8708 2.34424 5.33174 2.42236 5.7751 3.05371L10.0402 9.43213L8.1667 11.3052L2.84932 5.45654V5.45654ZM5.33028 21.8833L2.64619 22.354L3.11445 19.6714L16.0354 6.75342L18.2478 8.96582L5.33028 21.8833V21.8833ZM17.9699 22.6562C16.2834 22.6562 15.05 22.2373 14.3049 21.4106C13.3317 20.3311 13.2653 18.6821 13.322 18.1377L13.4299 17.0977L14.403 16.1245L15.6755 16.2065C17.2092 16.3052 18.2409 16.7402 18.9729 18.6694C19.4138 19.8335 20.4597 20.6143 21.6838 20.7192C20.9987 21.8325 19.8547 22.6562 17.9699 22.6562Z"
        fill="#0C0C0C"
      />
    </svg>
  );
};

ThemeIcon.defaultProps = {
  className: '',
};

ThemeIcon.propTypes = {
  className: PropTypes.string,
};

export default ThemeIcon;
