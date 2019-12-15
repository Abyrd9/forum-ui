const matchParentNode = (parentNode, clickedNode, limiter = 5) => {
  // clickedNode is the element that was clicked, parentNode is the possible
  // parent element. We are checking to see if the source node is a child
  // of the target node (return true), or outside of it (return false).
  if (!!parentNode && !!clickedNode) {
    let isSameDomNode = false;
    let index = 0;
    let domNode = clickedNode;

    // if isSameDomNode is still false and the index value is less than
    // the limiter number, then continue to traverse up the dom tree
    // note: the limiter is so we don't traverse up the entire dom tree
    // every time, but only up to a certain number of dom elements
    while (!isSameDomNode && index < limiter) {
      index++;
      if (domNode === parentNode) {
        isSameDomNode = true;
      } else if (domNode.parentNode === null) {
        // If null, it means we've reached the top of the dom tree,
        // the parent is not matched
        break;
      } else {
        // if there's still no match, set the dom node to the
        // parent dom node to continue toclear traverse the dom tree
        domNode = domNode.parentNode;
      }
    }
    // if the eventual domNode matches the parentNode, it means
    // the source node is a child of the parentNode, so return true.
    // if it's not a child of it, return false.
    return isSameDomNode;
  }
  return false;
};

export default matchParentNode;
