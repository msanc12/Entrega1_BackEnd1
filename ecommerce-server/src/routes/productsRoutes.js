const express = require('express');
const ProductsController = require('../controllers/productsController');

const router = express.Router();
const productsController = new ProductsController();

// Rutas para productos
router.get('/', productsController.getAllProducts.bind(productsController));
router.get('/:pid', productsController.getProductById.bind(productsController));
router.post('/', productsController.addProduct.bind(productsController));
router.put('/:pid', productsController.updateProduct.bind(productsController));
router.delete('/:pid', productsController.deleteProduct.bind(productsController));

module.exports = router;