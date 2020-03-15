import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { DropdownStyled } from "./Dropdown.styles";
import Chevron from "./Chevron";

import matchParentNode from "../../../helpers/matchParentNode";

const Dropdown = ({
  optionValue,
  optionList,
  handleOnClick,
  handleOnChange,
  placeholder,
  ...props
}) => {
  const [active, setActive] = useState(false);
  const { name = "", value = "" } = optionValue;

  const ContainerRef = useRef(null);
  useEffect(() => {
    document.addEventListener("click", ({ target }) => {
      const isWithinContainer = matchParentNode(ContainerRef.current, target);
      if (!isWithinContainer) setActive(false);
    });
  }, []);

  const handleOnDropdownClick = e => {
    setActive(!active);
    handleOnClick(e);
  };

  const handleOnOptionClick = e => {
    handleOnChange(e);
  };

  return (
    <DropdownStyled ref={ContainerRef} {...props}>
      <button
        type="button"
        className="dropdown-button"
        onClick={handleOnDropdownClick}
      >
        {name || placeholder}
        <Chevron />
      </button>
      {active && (
        <ul>
          {optionList.map(item => {
            let listItemClass = "dropdown-list-item";
            if (item.value === optionValue.value) {
              listItemClass += " dropdown-list-item--is-selected";
            }
            return (
              <li className={listItemClass}>
                <button
                  type="button"
                  value={item}
                  onClick={handleOnOptionClick}
                >
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </DropdownStyled>
  );
};

Dropdown.defaultProps = {
  optionValue: { name: "Option 1", value: "Option 1" },
  optionList: [
    { name: "Option 1", value: "Option 1" },
    { name: "Option 2", value: "Option 2" }
  ],
  handleOnClick: () => null,
  placeholder: "Click me"
};

Dropdown.propTypes = {
  optionValue: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string
  }),
  optionList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string
    })
  ),
  handleOnClick: PropTypes.func,
  placeholder: PropTypes.string
};

export default Dropdown;
