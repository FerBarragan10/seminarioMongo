let mongoose = require('mongoose');


// ===============
// Database Config
// ===============
//mongoose.connect('mongodb://localhost:27017/Indumentaria', {useNewUrlParser: true}); 
let Schema = mongoose.Schema;

let productSchema = new Schema({
	
	nombre:String, 
	descripcion:String,
	stock:Number,
	precio:Number,
});

module.exports = mongoose.model('products', productSchema);