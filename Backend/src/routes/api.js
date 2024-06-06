const express = require("express");
const router = express.Router();

const {
    //product
    getAllProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    getIdProduct,
    //user
    getAllUser,

    Signup,
    confirmOrder,
    handleLogin
} = require("../controllers/apiController");

router.get("/user", getAllUser); // get list of users

//Product
router.get("/product", getAllProduct);
router.post("/create-product", createProduct);
router.put("/update-product", updateProduct);
router.delete("/delete-product/:id", deleteProduct);

router.post('/confirmOrder', confirmOrder);

router.get("/product/:id", getIdProduct);

router.post('/confirmSignup', Signup);

router.post('/login', handleLogin);

module.exports = router;