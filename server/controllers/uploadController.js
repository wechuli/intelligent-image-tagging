const multer = require("multer");
const path = require("path");
const MulterAzureStorage = require("multer-azure-storage");
const Image = require("../models/Image.model");
const axios = require("axios");

let headers = {
  "Content-Type": "application/json",
  "Ocp-Apim-Subscription-Key": "9f971540da674e738faadd48b3d09199"
};

const upload = multer({
  storage: new MulterAzureStorage({
    azureStorageConnectionString:
      "DefaultEndpointsProtocol=https;AccountName=mywebfiles;AccountKey=+I31TqHyJvsg36ixp0FVLyxTwBIw1PK0baI9LBiyVkfsCpYtaCiZecC5ft/Q7/8/V2+MaJtSEOgY19JGGeSDSw==;EndpointSuffix=core.windows.net",
    containerName: "photos",
    containerSecurity: "blob"
  }),
  limits: { fileSize: 100000000 }
}).single("photo");

module.exports = {
  //To be honest, am not sure I understand what I did below
  async uploadPhoto(req, res) {
    try {
      upload(req, res, err => {
        async function upload() {
          console.log("Request ---", req.body);
          console.log("Request file ---", req.file); //Here you get file.
          /*Now do where ever you want to do*/
          try {
            
            if (!err) {
              const url = req.file.url;
              let body = {
                url
              };
              const result = await axios.post(
                "https://westeurope.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Categories,Tags,Description,Faces,Adult&language=en",
                body,
                {
                  headers
                }
              );
              const allData = { ...req.file };
              allData.adult_content = result.data.adult.isAdultContent;
              allData.tags = result.data.description.tags;
              allData.description = result.data.description.captions[0].text;
              allData.description_confidence = result.data.description.captions[0].confidence;

              allData.width = result.data.metadata.width;
              allData.height = result.data.metadata.height;
              allData.format = result.data.metadata.format;
    
              const image = new Image(allData);
    // console.log(result.data.description.captions[0].text)
              await image.save();
            }
          } catch (error) {
            res.status(500).json(error);
          }        
  
          return res.sendStatus(200).end();
        }
        upload();
      });
    } catch (error) {
      res.status(500).json(error)
    }

  
  }
};
