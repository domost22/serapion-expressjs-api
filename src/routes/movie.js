const express = require('express');
const router = express.Router();
const searchController = require("../controllers/searchController");
const searchByIdController = require("../controllers/searchByIdController");

router.get("/", searchController.searchMovie);
router.get("/:id", searchByIdController.searchSingleMovie);


module.exports = router;
