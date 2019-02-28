const multer = require("multer");
const path = require("path");
const MulterAzureStorage = require("multer-azure-storage");
const Image = require("../models/Image.model");

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
  async uploadPhoto(req, res) {
    upload(req, res, err => {
      async function upload() {
        console.log("Request ---", req.body);
        console.log("Request file ---", req.file); //Here you get file.
        /*Now do where ever you want to do*/
        if (!err) {
          const image = new Image(req.file);
          await image.save();
        }

        return res.sendStatus(200).end();
      }
      upload();
    });
  }
};
