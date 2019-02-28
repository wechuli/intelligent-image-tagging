const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const photoSchema = new Schema({
  originalname: String,
  encoding: String,
  mimetype: String,
  blobName: String,
  container: String,
  blob: String,
  blobType: String,
  size: String,
  etag: String,
  url: String
});

module.exports = mongoose.model("photos", photoSchema);