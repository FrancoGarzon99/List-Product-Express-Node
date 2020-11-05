//Create Server in port 3000
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//Require Routers
const routers = require('./Routers');

//Template engine
app.set('view engine', 'ejs');

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));

//Routers
app.get('/', routers);
app.post('/agregarproducts', routers);
app.post('/removeproduct', routers);
//Server port
app.listen(3000, () => {
	console.log('Server in port 3000');
});
