const axios = require("axios");

let headers = {
  "Content-Type": "application/json",
  "Ocp-Apim-Subscription-Key": "9f971540da674e738faadd48b3d09199"
};
let body = {
  url:
    "https://buzzghana.com/wp-content/uploads/2014/10/funny-jokes-e1427988815664.jpg"
};

axios
  .post(
    "https://westeurope.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Categories,Tags,Description,Faces,Adult&language=en",
    body,
    {
      headers
    }
  )
  .then(result =>{
console.log(result.data)
console.log(result.data.description.captions)
  }) 
  .catch(error => console.log(error));
