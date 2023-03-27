const express = require("express");
const { createPay, getPay } = require("../controllers-Pet/MercadoPago");

const router = express.Router();


router.get("/",getPay)
router.post("/",createPay)

module.exports = router;