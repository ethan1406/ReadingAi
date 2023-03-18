

document.addEventListener('DOMContentLoaded', function() {
  console.log("activiated gucci");

  var button = document.getElementById('my-button');  
  var result = document.getElementById('result');


  chrome.storage.local.get("selectedText", function(data) {
    console.error(data.selectedText);
      if(typeof data.selectedText != "undefined") {
        chrome.storage.local.get("contextText", function(data) {
          console.error(data.contextText);
            if(typeof data.contextText != "undefined") {
              result.innerText = data.contextText;
            } 
        });
      } 
  });


  
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