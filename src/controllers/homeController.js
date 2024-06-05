const express = require("express");
//const connection = require("../config/dataBase");  // Đường dẫn có thể phải được điều chỉnh dựa trên cấu trúc của dự án của bạn
const multer = require("multer");

const getHomePage = async (req, res) => {
    res.render("home.ejs");
};

module.exports = {
    getHomePage,
};