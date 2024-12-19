# Ecommerce Server

Este proyecto es un servidor de e-commerce desarrollado con Node.js y Express. Permite gestionar productos y carritos de compra a través de una API RESTful.

## Estructura del Proyecto


ecommerce-server
├── src
│   ├── app.js                  # Punto de entrada de la aplicación
│   ├── controllers             # Controladores para manejar la lógica de negocio
│   │   ├── cartsController.js   # Controlador para carritos
│   │   └── productsController.js # Controlador para productos
│   ├── routes                  # Rutas de la API
│   │   ├── cartsRoutes.js       # Rutas para carritos
│   │   └── productsRoutes.js     # Rutas para productos
│   └── models                  # Modelos de datos
│       ├── cartModel.js         # Modelo de carrito
│       └── productModel.js      # Modelo de producto
├── package.json                # Configuración de npm
├── .env                        # Variables de entorno
└── README.md                   # Documentación del proyecto

## Endpoints

### Productos

- `GET /api/products/` - Listar todos los productos.
- `GET /api/products/:pid` - Obtener un producto específico.
- `POST /api/products/` - Agregar un nuevo producto.
- `PUT /api/products/:pid` - Actualizar un producto existente.
- `DELETE /api/products/:pid` - Eliminar un producto.

### Carritos

- `POST /api/carts/` - Crear un nuevo carrito.
- `GET /api/carts/:cid` - Listar los productos de un carrito específico.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request para discutir cambios.# Entrega1_BackEnd1
