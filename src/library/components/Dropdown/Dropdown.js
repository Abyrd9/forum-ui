import React, { useState } from "react";
import PropTypes from "prop-types";
import { DropdownStyled } from "./Dropdown.styles";
import Chevron from "./Chevron";

const Dropdown = ({ handleOnClick, ...props }) => {
  const [active, setActive] = useState(false);
  return (
    <DropdownStyled
      active={active}
      onClick={() => setActive(!active)}
      {...props}
    >
      <button className="dropdown-button">
        Click Me
        <Chevron />
      </button>
      <ul className="">
        Hello
      </ul>
    </DropdownStyled>
  );
};

Dropdown.defaultProps = {
  value: "",
  list: [
    { name: "Option 1", value: "Option 1" },
    { name: "Option 2", value: "Option 2" }
  ]
};

Dropdown.propTypes = {
  value: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string
  }),
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string
    })
  )
};

export default Dropdown;
