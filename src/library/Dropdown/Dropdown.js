import React, { useState } from "react";
import PropTypes from "prop-types";
import { DropdownStyled } from "./Dropdown.styles";
import Chevron from "./Chevron";

const Dropdown = ({ list, children, ...props }) => {
  const [active, setActive] = useState(false);
  return (
    <DropdownStyled
      active={active}
      onClick={() => setActive(!active)}
      {...props}
    >
      {children}
      <Chevron />
    </DropdownStyled>
  );
};

Dropdown.defaultProps = {
  children: "",
  list: [
    { name: "Option 1", value: "Option 1" },
    { name: "Option 2", value: "Option 2" }
  ]
};

Dropdown.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]),
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string
    })
  )
};

export default Dropdown;
