class CartsController {
    constructor() {
        this.carts = [];
        this.currentId = 1;
    }

    createCart(req, res) {
        const newCart = { id: this.currentId++, products: [] };
        this.carts.push(newCart);
        res.status(201).json(newCart);
    }

    getCartProducts(req, res) {
        const cartId = parseInt(req.params.cid);
        const cart = this.carts.find(c => c.id === cartId);
        if (!cart) {
            return res.status(404).json({ message: 'Carrito no encontrado' });
        }
        res.json(cart.products);
    }

    addProductToCart(req, res) {
        const cartId = parseInt(req.params.cid);
        const { productId } = req.body;
        const cart = this.carts.find(c => c.id === cartId);
        if (!cart) {
            return res.status(404).json({ message: 'Carrito no encontrado' });
        }
        cart.products.push(productId);
        res.status(200).json(cart);
    }
}

export default new CartsController();