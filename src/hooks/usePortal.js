import { useRef, useEffect } from 'react';

const usePortal = id => {
  const rootElementRef = useRef();

  const getRootElement = () => {
    if (!rootElementRef.current) {
      rootElementRef.current = document.createElement('div');
    }
    return rootElementRef.current;
  };

  useEffect(() => {
    const ref = getRootElement();
    // Look for existing target dom element to append to
    const parentElem = document.querySelector(`#${id}`);
    // Add the detached element to the parent
    parentElem.appendChild(ref);
    // This function is run on unmount
    return () => ref.remove();
  }, []);

  return getRootElement();
};

export default usePortal;
