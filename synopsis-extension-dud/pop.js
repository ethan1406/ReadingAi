document.addEventListener('DOMContentLoaded', function() {
  console.log("activiated gucci mucci");
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
                  'Accept': '*/*',
                  'Content-Type': 'application/json',
                  'Connection': 'keep-alive',
                },
                body: JSON.stringify(jsonBody)
              }
        )
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          // Update the popup content with the result
          console.log(data);
          result.innerText = data.message;
        })
        .catch(function(error) {
          console.error(error);
        });
    });
  });
  