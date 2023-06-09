


document.onmouseup = getText;
function getText(e) {
  const selection = document.getSelection ? document.getSelection() : document.selection.createRange();

  if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const beforeText = range.startContainer.textContent.slice(0, range.startOffset);
    const afterText = range.endContainer.textContent.slice(range.endOffset);
    const surroundText = range.startContainer.textContent;

    chrome.storage.local.set({'selectedText': selection.toString()});  
    chrome.storage.local.set({'contextText': surroundText});
  }
}