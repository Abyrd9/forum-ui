import { useLayoutEffect } from 'react';
import debounce from '../helpers/debounce'

export const useWindowEffect = callback => {
  const updateWindowSize = debounce(() => {
    callback();
  }, 200);

  useLayoutEffect(() => {
    window.addEventListener('resize', updateWindowSize);
    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);
};

export default useWindowEffect;