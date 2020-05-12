import { useEffect, useState } from "react";
import isEmpty from "lodash.isempty";

// A useEffect may run on first render, but a value it's using is not populated yet
// we don't want to run every time it changes, only run once a value is populated
// but not before or after
const useMountValueEffect = (callback = () => {}, dependencies = []) => {
  const [depReady, setDepReady] = useState(null);
  useEffect(() => {
    const depsHaveValues = deps =>
      deps.every(dep => dep !== null && dep !== undefined && !isEmpty(dep));

    if (depReady === null && depsHaveValues(dependencies)) {
      setDepReady(dependencies);
    }
  }, [dependencies]);

  useEffect(() => {
    if (depReady !== null) {
      callback();
    }
  }, [depReady]);
};

export default useMountValueEffect;
