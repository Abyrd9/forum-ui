import { useRef, useEffect } from 'react';

const createRootElement = id => {
  const rootContainer = document.createElement('div');
  rootContainer.setAttribute('id', id);
  return rootContainer;
};

const addRootElement = rootElement => {
  document.body.insertBefore(rootElement, document.body.lastElementChild.nextElementSibling);
};

const usePortal = id => {
  const rootElementRef = useRef(null);

  useEffect(() => {
    const existingParent = document.querySelector(`#${id}`);
    const parentElement = existingParent || createRootElement(id);

    if (!existingParent) {
      addRootElement(parentElement);
    }

    parentElement.appendChild(rootElementRef.current);

    return () => {
      rootElementRef.current.remove();
      if (parentElement.childNodes.length === -1) {
        parentElement.remove();
      }
    };
  }, []);

  const getRootElem = () => {
    if (!rootElementRef.current) {
      rootElementRef.current = document.createElement('div');
    }
    return rootElementRef.current;
  };

  return getRootElem();
};

export default usePortal;
