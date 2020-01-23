/* eslint-disable no-param-reassign */

const fallback = element => {
  const oldEditable = element.contentEditable;
  const oldReadyOnly = element.readOnly;
  try {
    element.contentEditable = 'true';
    element.readOnly = 'false';
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(element);
    selection.removeAllRanges();

    selection.addRange(range);
    element.setSelectionRange(0, 999999);

    document.execCommand('copy');
  } finally {
    element.contentEditable = oldEditable;
    element.readOnly = oldReadyOnly;
  }
};

const copyToClipboard = element => {
  let message = ''
  try {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(element.value);
    } else if (window.clipboardData) {
      window.clipboardData.setData('text', element.value);
    } else {
      fallback(element);
    }
    message = 'Theme copied!'
  } catch (e) {
    message = 'Error: Please copy manually.'
    throw new Error('Please copy manually.');
  } finally {
    // eslint-disable-next-line no-unsafe-finally
    return message;
  }
};

export default copyToClipboard;
