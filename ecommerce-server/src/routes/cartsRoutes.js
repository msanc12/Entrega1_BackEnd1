const express = require('express');
const router = express.Router();
const CartsController = require('../controllers/cartsController');

const cartsController = new CartsController();

// Ruta para crear un nuevo carrito
router.post('/', cartsController.createCart.bind(cartsController));

// Ruta para obtener los productos de un carrito específico
router.get('/:cid', cartsController.getCartProducts.bind(cartsController));

// Ruta para agregar un producto a un carrito específico
router.post('/:cid/products', cartsController.addProductToCart.bind(cartsController));

module.exports = router;