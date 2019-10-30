import matchParentNode from '../../helpers/matchParentNode';

export const onKeyDownEvent = (list, inputNode, callback) => ({ code }) => {
  // Before we check whether the select is active or not,
  // capture and run the tab event
  if (code === 'Tab') {
    callback({ type: 'Tab' });
  }

  // if the select is not the active element, break out of function
  const isActive = inputNode === document.activeElement;
  if (!isActive) return;

  // check if the select input has a value from the list
  const value = inputNode.value || '';
  const listHasValue = list.some(item => item.value === value);

  // On ArrowDown if the input value is an item in the list, then select the next
  // item in the list and handle the scroll. if it's the last index, do nothing.
  // If the value is not in the list, then select the first item from the list.
  if (code === 'ArrowDown') {
    if (listHasValue) {
      const listIndex = list.findIndex(item => item.value === value);
      const isNotLastIndex = listIndex !== list.length - 1;
      if (isNotLastIndex) {
        const nextItem = list[listIndex + 1].value;
        callback({ type: 'ArrowDown', value: nextItem });
      }
    } else {
      console.log(list);
      const nextItem = list[0].value;
      callback({ type: 'ArrowDown', value: nextItem });
    }
  }

  if (!listHasValue) return;

  // On ArrowUp if the input value is an item in the list, then select the previous
  // item in the list and handle the scroll. If it's the first index, do nothing.
  // If the value is not in the list, do nothing.
  if (code === 'ArrowUp') {
    const listIndex = list.findIndex(item => item.value === value);
    const isNotFirstIndex = listIndex !== 0;
    if (isNotFirstIndex) {
      const nextItem = list[listIndex - 1].value;
      callback({ type: 'ArrowUp', value: nextItem });
    }
  }

  // On Enter set the input value
  if (code === 'Enter') {
    callback({ type: 'Enter', value });
  }
};

// Close the dropdown if you click outside of the SelectContainer container
export const selectClickEvent = (containerNode, toggleActive) => ({ target }) => {
  const isWithinContainer = matchParentNode(containerNode, target);
  if (!isWithinContainer) {
    toggleActive(false);
  }
};
