const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
var appRoot = require('app-root-path');

const {
    getHomePage,
    getUserPage,
} = require('../controllers/homeController');

router.get("/", getHomePage);

router.get("/user-order", getUserPage);

module.exports = router;