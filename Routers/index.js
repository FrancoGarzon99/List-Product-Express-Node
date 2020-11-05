//Create Routing
const express = require('express');
const router = express.Router();

//Create "DB"
let Productos = [];
let ProductosComprados = [];

//Routers
router.get('/', (req, res) => {
	res.render('index', {
		Productos: Productos,
		ProductosComprados: ProductosComprados,
	});
});

router.post('/agregarproducts', (req, res) => {
	let NuevoProducto = req.body.NewProducto;
	if (NuevoProducto === '') {
		console.log('no ingresaste datos');
	}
	if (NuevoProducto) {
		Productos.push(NuevoProducto);
		res.redirect('/');
	}
});

router.post('/removeproduct', function (req, res) {
	let ProductoComprado = req.body.check;

	if (typeof ProductoComprado === 'string') {
		ProductosComprados.push(ProductoComprado);

		Productos.splice(Productos.indexOf(ProductoComprado), 1);
	} else if (typeof ProductoComprado === 'object') {
		for (let i = 0; i < ProductoComprado.length; i++) {
			ProductosComprados.push(ProductoComprado[i]);
			Productos.splice(Productos.indexOf(ProductoComprado[i]), 1);
		}
	}
	res.redirect('/');
});

module.exports = router;
