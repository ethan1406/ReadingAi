

document.addEventListener('DOMContentLoaded', function() {
  console.log("activiated gucci");
  const result = document.getElementById('result');
  const title = document.getElementById('title');

  chrome.storage.local.get("selectedText", function(data) {
      if(typeof data.selectedText != "undefined") {
        title.innerText = data.selectedText;
        chrome.storage.local.get("contextText", function(data2) {
            if(typeof data2.contextText != "undefined") {
              const jsonBody = {
                prompt: data.selectedText,
                context: data2.contextText
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
            } 
        });
      } 
  });
});