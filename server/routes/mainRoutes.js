const express = require("express");
const { uploadPhoto } = require("../controllers/uploadController");
const { getall } = require("../controllers/ImageRetrievalController");

const router = express.Router();

router.post("/upload", uploadPhoto);
router.get("/all", getall);

module.exports = router;
