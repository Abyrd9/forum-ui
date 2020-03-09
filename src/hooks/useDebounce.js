import { useRef } from 'react';
import useDeepCompareEffect from './useDeepCompareEffect';

const useDebounce = (callback, value, delay) => {
  const CallbackRef = useRef();

  useDeepCompareEffect(() => {
    CallbackRef.current = callback;
    clearTimeout();
    const timeout = setTimeout(() => {
      CallbackRef.current();
    }, delay);
    return () => clearTimeout(timeout);
  }, [value]);
};

export default useDebounce;
