const express = require("express");
const router = express.Router();

const {
    getAllUser,
} = require("../controllers/apiController");

router.get("/user", getAllUser); // get list of users

module.exports = router;