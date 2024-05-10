const express = require("express");
const connection = require("../config/dataBase");
const fs = require("fs");
const {
    getUser,
} = require('../controllers/homeController');
//hien thi data thong qua api


const getAllProduct = async (req, res) => {
    try {
        const [results, fields] = await connection.execute(
            "SELECT * FROM SANPHAM"
        );

        //Thêm đường dẫn đầy đủ cho mỗi sản phẩm
        const productsWithImageUrls = results.map((product) => {
            return {
                ...product,
                imageUrl: `http://localhost:8080/api/v1/img/${product.mota}`,
            };
        });

        return res.status(200).json({
            //message: "ok",
            data: productsWithImageUrls,
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: "Internal server error!!!",
            error: error.message,
        });
    }
};

const createProduct = async (req, res) => {
    let id = req.body.id;
    let tenSP = req.body.tenSP;
    let tenloaiSP = req.body.loaisp;
    let soluong = req.body.soluong;
    let dungluong = req.body.dungluong;
    let ram = req.body.ram;
    let manhinh = req.body.manhinh;
    let pin = req.body.pin;
    let giatien = req.body.giatien;
    let ghichu = req.body.ghichu;
    let tenNSX = req.body.tenNSX;
    if (!id || !tenSP || !tenloaiSP || !soluong || !dungluong || !ram || !giatien || !manhinh || !pin || !tenNSX) {
        return res.status(200).json({
            message: "missing ",
        });
    }
    await connection.execute(
        "insert into SANPHAM(id, tenSP, tenloaiSP, tenNSX, soluong, dungluong, ram, giatien, ghichu) values (?,?,?,?,?,?,?,?,?)",
        [id, tenSP, tenloaiSP, tenNSX, soluong, giatien, dungluong, ram, ghichu]
    );
    return res.status(200).json({
        message: "ok",
    });
};

//Xóa dữ liệu
const deleteProduct = async (req, res) => {
    const productId = req.params.id;
    if (!productId) {
        return res.status(200).json({
            message: "missing ",
        });
    }
    await connection.execute("delete from SANPHAM where id = ?", [productId]);
    return res.status(200).json({
        message: "ok",
    });
};

const updateProduct = async (req, res) => {
    let id = req.body.id;
    let tenSP = req.body.tenSP;
    let tenloaiSP = req.body.tenloaiSP;
    let dungluong = req.body.dungluong;
    let ram = req.body.ram;
    let soluong = req.body.soluong;
    let giatien = req.body.giatien;
    let manhinh = req.body.manhinh;
    let pin = req.body.pin;
    let ghichu = req.body.ghichu;
    let tenNSX = req.body.tenNSX;
    if (!id || !tenSP || !tenloaiSP || !soluong || !dungluong || !ram || !giatien || !manhinh || !pin || !tenNSX) {
        return res.status(200).json({
            message: "missing ",
        });
    }
    await connection.execute(
        "update SANPHAM set tenSP = ?, tenloaiSP = ?, tenNSX = ?, dungluong = ?, soluong = ?, giatien = ?, ghichu = ? where id = ?",
        [tenSP, tenloaiSP, tenNSX, dungluong, soluong, giatien, ghichu, id]
    );
    return res.status(200).json({
        message: "ok",
    });
};


const getAllUser = async (req, res) => {
    const results = await getUser();
    return res.status(200).json({
        EM: results.EM,
        EC: results.EC,
        DT: results.DT,
    });
};

module.exports = {
    getAllUser,
    getAllProduct,
    updateProduct,
    createProduct,
    deleteProduct,

};