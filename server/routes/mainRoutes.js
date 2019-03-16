const express = require("express"),
 { uploadPhoto } = require("../controllers/uploadController"),
 { getall } = require("../controllers/ImageRetrievalController"),
 router = express.Router();

 

router.post("/upload", uploadPhoto);
router.get("/all", getall);

module.exports = router;
