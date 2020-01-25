import { useRef, useEffect } from 'react';
import isEqual from 'lodash.isequal';

const useDeepCompareMemoize = val => {
  const ref = useRef();
  if (!isEqual(val, ref.current)) {
    ref.current = val;
  }
  return ref.current;
};

const useDeepCompareEffect = (callback, dependencies) => {
  useEffect(callback, useDeepCompareMemoize(dependencies));
};

export default useDeepCompareEffect;
