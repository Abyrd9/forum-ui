import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SelectContainer } from './Select.styles';
import { selectClickEvent, onKeyDownEvent } from './helpers';
import ChevronDown from '../../../components/Utilities/Icons/ChevronDown';

const Select = ({
  autoComplete,
  disabled,
  form,
  name,
  readOnly,
  required,
  placeholder,
  pattern,
  value,
  className,
  infoShow,
  infoMssg,
  list,
  handleOnChange,
  handleOnFocus,
  handleOnBlur,
  ...props
}) => {
  /* Element Refs */
  const ContainerRef = useRef(null);
  const ListRef = useRef(null);
  const InputRef = useRef(null);

  /* States */
  const [listRefCollection, setListRefCollection] = useState([]);
  const [active, toggleActive] = useState(false); // Maintains activeness of select component

  // We need the reference to each rendered list item. As they
  // are rendered out, add them to the `listRefCollection` array
  const addToListRefCollection = itemRef => {
    if (itemRef && !listRefCollection.includes(itemRef)) {
      listRefCollection.push(itemRef);
      setListRefCollection(listRefCollection);
    }
  };

  /* Handlers */

  // When item is clicked set the value, close the dropdown list and unfocus the input.
  const handleOnItemClick = val => {
    handleOnChange(val);
    toggleActive(false);
    InputRef.current.blur();
  };

  const handleOnInputChange = ({ target }) => {
    // get the filtered item, IF the input value matches
    // an item in the list array.
    const filteredItem = listRefCollection.find(item => {
      const { innerText = '' } = item;
      return innerText.toLowerCase().includes(target.value.toLowerCase());
    });

    // Make sure the list item that matches the search
    // is scrolled to the top of the list container
    if (filteredItem) {
      const itemOffsetTop = filteredItem.offsetTop;
      ListRef.current.scrollTop = itemOffsetTop;
    }
    handleOnChange(target.value);
  };

  // When input is focused, open the dropdown and run handleOnFocus prop
  const handleOnInputFocus = () => {
    toggleActive(true);
    handleOnFocus();
  };

  /* List Scrolling */

  // When traversing up and down the list with arrow keys, we want to
  // make sure the scroll position in the container is at the right spot.
  const handleScroll = (item, flow) => {
    const listItemElement = listRefCollection.find(listItem => listItem.innerText === item);
    const { current } = ListRef;

    const listItemTop = listItemElement.offsetTop;
    const listItemBottom = listItemTop + listItemElement.clientHeight;
    const listBottom = current.scrollTop + current.clientHeight;
    if (flow === 'down') {
      if (listItemBottom > listBottom) {
        current.scrollTop = listItemBottom - current.clientHeight;
      }
      if (listItemTop - current.scrollTop < 0) {
        current.scrollTop = listItemTop;
      }
    }
    if (flow === 'up') {
      if (listItemTop < current.scrollTop) {
        current.scrollTop = listItemTop;
      }
      if (listItemTop - current.scrollTop > 255) {
        current.scrollTop = listItemTop;
      }
    }
  };

  const keyDownCallback = payload => {
    switch (payload.type) {
      case 'ArrowDown':
        handleOnChange(payload.value);
        handleScroll(payload.value, 'down');
        break;
      case 'ArrowUp':
        handleOnChange(payload.value);
        handleScroll(payload.value, 'up');
        break;
      case 'Enter':
        toggleActive(false);
        handleOnChange(payload.value);
        InputRef.current.blur();
        break;
      case 'Tab':
        toggleActive(false);
        InputRef.current.blur();
        break;
      default:
        break;
    }
  };

  // On mount and unmount, add and remove event listeners
  useEffect(() => {
    document.addEventListener('keydown', onKeyDownEvent(list, InputRef.current, keyDownCallback));
    document.addEventListener('click', selectClickEvent(ContainerRef.current, toggleActive));
    return () => {
      document.removeEventListener('keydown', onKeyDownEvent);
      document.removeEventListener('click', selectClickEvent);
    };
  }, []);

  /* class variables */
  const classNames = {
    label: 'forum-ui-select-label',
    input: 'forum-ui-select-input',
    arrow: 'forum-ui-select-arrow',
    placeholder: 'forum-ui-select-placeholder',
    info: 'forum-ui-select-info',
    list: 'forum-ui-select-list',
  };

  // building class names based on props
  if (disabled) {
    Object.entries(classNames).forEach(([key, classNameValue]) => {
      classNames[key] += ` ${classNameValue}--is-disabled`;
    });
  }

  if (!disabled && active) {
    Object.entries(classNames).forEach(([key, classNameValue]) => {
      classNames[key] += ` ${classNameValue}--is-active`;
    });
  }
  if (!disabled && value.length > 0) {
    classNames.placeholder += ` ${classNames.placeholder}--is-active`;
  }

  if (readOnly) {
    Object.entries(classNames).forEach(([key, classNameValue]) => {
      classNames[key] += ` ${classNameValue}--read-only`;
    });
  }

  return (
    <>
      <SelectContainer
        ref={ContainerRef}
        className={className}
        info={disabled ? {} : { show: infoShow, color: infoMssg.color }}
        {...props}
      >
        <label className={classNames.label}>
          <input
            autoComplete={autoComplete}
            disabled={disabled}
            form={form}
            name={name}
            readOnly={readOnly}
            required={required}
            pattern={pattern}
            value={value}
            ref={InputRef}
            type="text"
            className={classNames.input}
            onChange={handleOnInputChange}
            onFocus={handleOnInputFocus}
          />
          <span className={classNames.arrow}>
            <ChevronDown />
          </span>
          <span className={classNames.placeholder}>{placeholder}</span>
        </label>
        <ul className={classNames.list} ref={ListRef}>
          {list.map(item => {
            let listItemClassName = 'forum-ui-select-list-item';
            if (value.toLowerCase() === item.value.toLowerCase())
              listItemClassName += ' forum-ui-select-list-item--is-selected';
            return (
              <li
                className={listItemClassName}
                key={item.value}
                onClick={() => handleOnItemClick(item.value)}
                ref={itemRef => addToListRefCollection(itemRef)}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </SelectContainer>
      {!disabled && infoShow && <p className={classNames.info}>{infoMssg.message}</p>}
    </>
  );
};

Select.defaultProps = {
  autoComplete: true,
  disabled: false,
  form: null,
  name: 'select',
  readOnly: false,
  required: false,
  placeholder: '',
  pattern: '',
  value: '',
  className: '',
  infoShow: false,
  infoMssg: {
    message: '',
    color: '',
  },
  list: [{ value: '', name: '' }],
  handleOnChange: () => {},
  handleOnFocus: () => {},
  handleOnBlur: () => {},
};

Select.propTypes = {
  autoComplete: PropTypes.bool,
  disabled: PropTypes.bool,
  form: PropTypes.string,
  name: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  pattern: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  infoShow: PropTypes.bool,
  infoMssg: PropTypes.shape({
    message: PropTypes.string,
    color: PropTypes.string,
  }),
  list: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  handleOnChange: PropTypes.func,
  handleOnFocus: PropTypes.func,
  handleOnBlur: PropTypes.func,
};

export default Select;
