const express = require('express');
const { getProducts } = require('../controllers/products.controller');
const { auth } = require('../middleware/auth.middleware');

const productRouter = express.Router();
productRouter.get('/products', auth, getProducts);

module.exports = {
    productRouter
}