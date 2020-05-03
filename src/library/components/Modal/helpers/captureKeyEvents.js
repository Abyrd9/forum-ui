const getNewIndex = (elements, active) => type => {
  const index = elements.findIndex(element => element === active);
  const { length } = elements;
  if (type === "prev") {
    return index - 1 < 0 ? length - 1 : index - 1;
  }
  if (type === "next") {
    return index + 1 === length ? 0 : index + 1;
  }
  return null;
};

const captureKeyEvents = (node, handleOnClose) => event => {
  const { code, shiftKey } = event;
  const isTab = code === "Tab";

  // get the focusable elements within the container if the ref exists
  let focusElements = [];
  let visible = false;
  if (node) {
    const elementsList =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    focusElements = node.querySelectorAll(elementsList);
    visible = node.classList.contains("is-visible");
  }

  // If there are no focusElements, or the modal isn't visible, don't run
  if (focusElements.length <= 0 || !visible) return;

  // get variables
  focusElements = Array.from(focusElements);
  const { activeElement } = document;
  const hasElement = focusElements.some(element => element === activeElement);

  // get the findIndex function
  const findIndex = getNewIndex(focusElements, activeElement);

  // If shift+tab is pressed, and one of the focuseable elements is
  // the current active element. Focus the previous focuseable element.
  if (shiftKey && isTab && hasElement) {
    event.preventDefault();
    const nextIndex = findIndex("prev");
    if (typeof nextIndex === "number") focusElements[nextIndex].focus();
    return;
  }

  // If tab is pressed, and one of the focuseable elements is
  // the current active element. Focus the next focuseable element.
  if (isTab && hasElement) {
    event.preventDefault();
    const nextIndex = findIndex("next");
    if (typeof nextIndex === "number") focusElements[nextIndex].focus();
    return;
  }

  // If tab is pressed, and none of the focuseable elements is
  // the current active element. Focus the first focuseable element.
  if (isTab) {
    event.preventDefault();
    focusElements[0].focus();
    return;
  }

  // If escape is pressed, close the modal
  if (code === "Escape") {
    event.preventDefault();
    handleOnClose(false);
  }
};

export default captureKeyEvents;
