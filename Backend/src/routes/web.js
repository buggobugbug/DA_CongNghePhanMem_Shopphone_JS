const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
var appRoot = require('app-root-path');

const {
    getHomePage,
    getUserPage,
    getDetailBill,
} = require('../controllers/homeController');

router.get("/", getHomePage);

router.get("/user-order", getUserPage);


router.get("/bill-order", getDetailBill);

module.exports = router;