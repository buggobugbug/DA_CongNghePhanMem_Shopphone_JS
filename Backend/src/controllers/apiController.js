const express = require("express");
const connection = require("../config/dataBase");
const fs = require("fs");
const {
    getUser,
} = require('../controllers/homeController');
//hien thi data thong qua api

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
};