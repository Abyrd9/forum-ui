import { useLayoutEffect } from 'react';
import matchParentNode from '../../../helpers/matchParentNode';
import debounce from '../../../helpers/debounce';

export const onDocumentClick = (node, toggleVisible) => ({ target }) => {
  const isWithinContainer = matchParentNode(node, target, 8);
  if (!isWithinContainer) {
    toggleVisible(false);
  }
};

export const onDocumentTouch = (node, toggleVisible) => ({ target }) => {
  const isWithinContainer = matchParentNode(node, target, 8);
  if (!isWithinContainer) {
    toggleVisible(false);
  }
};

export const onDocumentHover = (node, toggleVisible) =>
  debounce(({ target }) => {
    const isWithinContainer = matchParentNode(node, target, 8);
    toggleVisible(isWithinContainer);
  }, 100);

export const useWindowEffect = callback => {
  const updateWindowSize = debounce(() => {
    callback();
  }, 200);

  useLayoutEffect(() => {
    window.addEventListener('resize', updateWindowSize);
    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);
};
