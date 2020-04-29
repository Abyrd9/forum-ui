import { useEffect, useRef } from "react";
import isEmpty from "lodash.isempty";

// A useEffect may run on first render, but a value it's using is not populated yet
// we don't want to run every time it changes, only run once a value is populated
// but not before or after
const useMountedValueEffect = (callback = () => {}, dependencies = []) => {
  const ValueRef = useRef(null);
  useEffect(() => {
    const depsHaveValues = deps =>
      deps.every(dep => dep !== null && dep !== undefined && !isEmpty(dep));

    if (ValueRef.current === null && depsHaveValues(dependencies)) {
      ValueRef.current = dependencies;
    }
  }, [dependencies]);

  useEffect(() => {
    if (ValueRef.current !== null) {
      callback();
    }
  }, [ValueRef.current]);
};

export default useMountedValueEffect;
