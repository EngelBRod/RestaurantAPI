const mongoose= require('mongoose');
const Schema= mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const dishSchema = new Schema({
    
    name:{
        type:String,
        require:true
    },
    price:{
        type:Currency,
        require:true
    },
    category:{
        type:String,
        required:true
    },
},{
    timestamps:true
});

const Dishes= mongoose.model('Dish',dishSchema)

module.exports = Dishes