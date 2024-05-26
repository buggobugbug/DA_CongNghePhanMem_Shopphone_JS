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

const getDetailBill = async (req, res) => {
    try {
        const [results, fields] = await connection.execute(`
            SELECT
                HOADON.maHD,
                KHACHHANG.maKH,
                SANPHAM.tenSP,
                KHACHHANG.hotenKH,
                KHACHHANG.sdt,
                KHACHHANG.diachi,
                CHITIETHOADON.soluongdat,
                CHITIETHOADON.tongtien,
                HOADON.thoigiandat
            FROM
                HOADON
            JOIN
                KHACHHANG ON HOADON.maKH = KHACHHANG.maKH
            JOIN
                CHITIETHOADON ON HOADON.maHD = CHITIETHOADON.maHD
            JOIN
                SANPHAM ON CHITIETHOADON.id = SANPHAM.id
        `);

        return res.render("detailbill.ejs", { dataBills: results });
    } catch (error) {
        console.error("Error fetching data:", error);
        return res.status(500).send("Internal Server Error");
    }
};

module.exports = {
    getHomePage,
    getUserPage,
    getUser,
    getDetailBill,

};