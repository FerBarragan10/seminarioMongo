let mongoose = require('mongoose');


// ===============
// Database Config
// ===============
//mongoose.connect('mongodb://localhost:27017/Indumentaria', {useNewUrlParser: true}); 
let Schema = mongoose.Schema;

let saleSchema = new Schema({
	
	products:[String], 
	precioTotal:Number,
	direccion:String,

});

module.exports = mongoose.model('sale', saleSchema);