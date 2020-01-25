import { useEffect, useRef } from 'react';

const useDebounce = (callback, delay) => {
  const CallbackRef = useRef();

  useEffect(() => {
    CallbackRef.current = callback;
    clearTimeout();
    const timeout = setTimeout(() => {
      CallbackRef.current();
    }, delay);
    return () => clearTimeout(timeout);
  }, [callback]);
};

export default useDebounce;
