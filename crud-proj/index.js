// Imports
const express = require('express');
const products = require('./models/product');
const sales = require('./models/sale');

// Initial Config
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://fer7_10:lanitro1079@cluster0.3oidn.mongodb.net/seminarioMongo?retryWrites=true&w=majority', {useNewUrlParser: true,useUnifiedTopology: true}); 

const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); 
const port = process.env.PORT || 4000;
// Server
app.listen(port, () =>{console.log(`Listening on port ${port}`)});




app.get('/venta',(req, res)=>{
    console.log('getting all sales');
    sales.find({}).exec((err, sales)=>{
        if(err) {
            res.send('error has occured');
        } else {
            console.log(sales);
            res.json(sales);
        }
    });
});


app.get('/venta/:id', function(req, res){
    console.log('getting one sale');
    sales.findOne({
        _id: req.params.id
    }).exec(function(err, sales){
        if(err) {
            res.send('error has occured');
        } else {
            console.log(sales);
            res.json(sales);
        }
    });
});

app.post('/venta', function(req, res){
    let newSale = new sales();
    newSale.products = req.body.products;
    newSale.precioTotal = req.body.precioTotal;
    newSale.direccion  = req.body.direccion;
    newSale.save((err, sales)=>{
        if(err) {
            console.log(err);
             res.send('error saving sale');
        } else {
            console.log(sales);
            res.send(sales);
        }
    });
});



app.put('/venta/:id', function(req, res){
    sales.findOneAndUpdate({
        _id: req.params.id
    },{
        $set: {
            products: req.body.products,
            precioTotal: req.body.precioTotal,
            direccion: req.body.direccion
        }
    },{
        upsert: true
    },function(err, sales){
        if(err) {
            res.send('error updating sale');
        } else {
            console.log(sales);
            res.send(sales);
        }
    });
});


app.delete('/venta/:id', function(req, res){
    sales.findByIdAndRemove({
        _id: req.params.id
    },function(err,sales){
        if(err) {
            res.send('error deleting sale');
        } else {
            console.log(sales);
            res.send(sales);
        }
    });
});


app.get('/producto',(req, res)=>{
    console.log('getting all products');
    products.find({}).exec((err, products)=>{
        if(err) {
            res.send('error has occured');
        } else {
            console.log(products);
            res.json(products);
        }
    });
});


app.get('/producto/:id', function(req, res){
    console.log('getting one product');
    products.findOne({
        _id: req.params.id
    }).exec(function(err, products){
        if(err) {
            res.send('error has occured');
        } else {
            console.log(products);
            res.json(products);
        }
    });
});

app.post('/producto', function(req, res){
    let newProducto = new products();
    newProducto.nombre = req.body.nombre;
    newProducto.descripcion = req.body.descripcion;
   newProducto.stock = req.body.stock;
   newProducto.precio = req.body.precio;
   newProducto.save((err, products)=>{
        if(err) {
            console.log(err);
             res.send('error saving product');
        } else {
            console.log(products);
            res.send(products);
        }
    });
});



app.put('/producto/:id', function(req, res){
    products.findOneAndUpdate({
        _id: req.params.id
    },{
        $set: {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            stock: req.body.stock
        }
    },{
        upsert: true
    },function(err, products){
        if(err) {
            res.send('error updating product');
        } else {
            console.log(products);
            res.send(products);
        }
    });
});


app.delete('/producto/:id', function(req, res){
    products.findByIdAndRemove({
        _id: req.params.id
    },function(err, products){
        if(err) {
            res.send('error deleting product');
        } else {
            console.log(products);
            res.send(products);
        }
    });
});
