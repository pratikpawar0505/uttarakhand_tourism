const express = require("express");
const router = express();

const dataController = require("../controller/dataController");

router.get("/travel_dest/:name", dataController.travel);

module.exports = router;
