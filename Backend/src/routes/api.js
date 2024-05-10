const express = require("express");
const router = express.Router();

const {
    //product
    getAllProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    //user
    getAllUser,
} = require("../controllers/apiController");

router.get("/user", getAllUser); // get list of users

//Product
router.get("/product", getAllProduct);
router.post("/create-product", createProduct);
router.put("/update-product", updateProduct);
router.delete("/delete-product/:id", deleteProduct);

module.exports = router;