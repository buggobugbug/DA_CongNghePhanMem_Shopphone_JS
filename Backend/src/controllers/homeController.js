const express = require("express");
const connection = require("../config/dataBase");  // Đường dẫn có thể phải được điều chỉnh dựa trên cấu trúc của dự án của bạn
const multer = require("multer");

const getHomePage = async (req, res) => {
    res.render("home.ejs");
};

const getUserPage = async (req, res) => {
    const [results, fields] = await connection.execute("SELECT * FROM KHACHHANG ");

    return res.render("user.ejs", { dataUsers: results });
};

const getUser = async (req, res) => {
    const [results, fields] = await connection.execute("SELECT * FROM KHACHHANG ");
    console.log(results);
    return {
        EM: "xem thông tin thành công",
        EC: 1,
        DT: results,
    };
};

module.exports = {
    getHomePage,
    getUserPage,
    getUser
};