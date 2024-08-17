const express = require("express");
const { getAllCards, postACard, getAllCardByTitle } = require("../controllers/cardController");

const router = express.Router();


router.route("/cards").post(postACard);
router.route("/cards").get(getAllCards);
router.route("/cards/:title").get(getAllCardByTitle);

module.exports = router;