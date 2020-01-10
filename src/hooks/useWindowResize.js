import { useLayoutEffect } from 'react';
import debounce from '../helpers/debounce';

export const useWindowResize = (callback, time = 200) => {
  const updateWindowSize = debounce(() => {
    callback();
  }, time);

  useLayoutEffect(() => {
    window.addEventListener('resize', updateWindowSize);
    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);
};

export default useWindowResize;
