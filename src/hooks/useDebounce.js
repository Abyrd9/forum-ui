import { useRef } from "react";
import useDeepCompareEffect from "./useDeepCompareEffect";

const useDebounce = (callback = () => {}, dependencies = [], delay = 0) => {
  const CallbackRef = useRef();

  useDeepCompareEffect(() => {
    CallbackRef.current = callback;
    clearTimeout();
    const timeout = setTimeout(() => {
      CallbackRef.current();
    }, delay);
    return () => clearTimeout(timeout);
  }, [...dependencies]);
};

export default useDebounce;
