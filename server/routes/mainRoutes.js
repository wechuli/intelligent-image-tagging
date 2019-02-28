const express = require("express");
const { uploadPhoto } = require("../controllers/uploadController");

const router = express.Router();

router.post("/upload", uploadPhoto);

module.exports = router;
