const express = require("express");
//const connection = require("../config/dataBase");  // Đường dẫn có thể phải được điều chỉnh dựa trên cấu trúc của dự án của bạn
const multer = require("multer");

const getHomePage = async (req, res) => {
    res.render("home.ejs");
};

const getUserPage = async (req, res) => {
    const [results, fields] = await connection.execute("SELECT * FROM KHACHHANG ");
    console.log(results);
    return {
        EM: "xem thoong tin thanh cong",
        EC: 1,
        DT: results,
    };
};

module.exports = {
    getHomePage,
    getUserPage,
};