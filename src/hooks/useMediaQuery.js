import { useEffect, useState } from 'react';

export const useMediaQuery = matchMedia => {
  const [isMediaMatch, setIsMediaMatch] = useState(false);

  const setMatch = media => setIsMediaMatch(media.matches);

  useEffect(() => {
    setMatch(matchMedia);
    matchMedia.addListener(setMatch);
    return () => matchMedia.addListener(setMatch);
  }, []);

  return isMediaMatch;
};

export default useMediaQuery;
