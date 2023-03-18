document.onmouseup = getText;
function getText(e) {
  const selection = document.getSelection ? document.getSelection() : document.selection.createRange();

  if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const beforeText = range.startContainer.textContent.slice(0, range.startOffset);
    const afterText = range.endContainer.textContent.slice(range.endOffset);
    const surroundText = range.startContainer.textContent;

    console.error(surroundText);
  
  }
}

document.addEventListener('DOMContentLoaded', function() {
  console.log("activiated gucci")


  var button = document.getElementById('my-button');  
  var result = document.getElementById('result');
  
    button.addEventListener('click', function() {
      
      const jsonBody = {
        prompt: "follow the money",
        context: "follow the money and you will end up in heaven"
      }
      console.log(jsonBody);
      fetch(
            'https://eqgrz3rfud.execute-api.us-west-1.amazonaws.com/default/ReadingComprehensionFunciton',
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                  'Content-Type': 'text/plain',
                },
                body: JSON.stringify(jsonBody)
              }
        )
        .then(function(response) {
          return response.text();
        })
        .then(function(data) {
          // Update the popup content with the result
          console.log(data);
          result.innerText = data;
        })
        .catch(function(error) {
          console.error(error);
        });
    });
  });
  