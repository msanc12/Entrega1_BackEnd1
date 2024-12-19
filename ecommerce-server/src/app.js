const express = require('express');
const app = express();
const productsRoutes = require('./routes/productsRoutes');
const cartsRoutes = require('./routes/cartsRoutes');

app.use(express.json());

app.use('/api/products', productsRoutes);
app.use('/api/carts', cartsRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});