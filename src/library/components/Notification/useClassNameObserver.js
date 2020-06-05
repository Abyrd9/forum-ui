import { useEffect } from "react";

const useClassNameObserver = (callback, elements) => {
  useEffect(() => {
    const observer = new MutationObserver(callback);
    elements.forEach(element => {
      observer.observe(element, { attributes: true });
    });
    return () => observer.disconnect();
  }, [elements]);
};

export default useClassNameObserver;
