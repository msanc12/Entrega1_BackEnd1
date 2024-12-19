class ProductsController {
    constructor() {
        this.products = [];
        this.currentId = 1;
    }

    getAllProducts(req, res) {
        res.json(this.products);
    }

    getProductById(req, res) {
        const productId = parseInt(req.params.pid);
        const product = this.products.find(p => p.id === productId);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    }

    addProduct(req, res) {
        const newProduct = { id: this.currentId++, ...req.body };
        this.products.push(newProduct);
        res.status(201).json(newProduct);
    }

    updateProduct(req, res) {
        const productId = parseInt(req.params.pid);
        const productIndex = this.products.findIndex(p => p.id === productId);
        if (productIndex !== -1) {
            this.products[productIndex] = { id: productId, ...req.body };
            res.json(this.products[productIndex]);
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    }

    deleteProduct(req, res) {
        const productId = parseInt(req.params.pid);
        const productIndex = this.products.findIndex(p => p.id === productId);
        if (productIndex !== -1) {
            this.products.splice(productIndex, 1);
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    }
}

module.exports = new ProductsController();