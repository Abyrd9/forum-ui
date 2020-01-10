const debounce = (func, wait, immediate) => {
  let timeout;
  const execution = args => {
    const later = () => {
      timeout = null;
      if (!immediate) func(args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(args);
  };
  return execution;
};

export default debounce;
