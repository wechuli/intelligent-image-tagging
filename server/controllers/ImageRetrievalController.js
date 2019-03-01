//Reatrieve all images
const Images = require("../models/Image.model");

module.exports = {
  async getall(req, res) {
    try {
      const images = await Images.find({});
      res.status(200).json(images);
    } catch (error) {
      res.status(500).json(error);
    }
  }
};
