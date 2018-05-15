var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//design the two schema below and use populate 
//to define the relationship between Day / Image / Comments


let daySchema = new Schema({
    day: Date,
    word: String,
    images: [{type: Schema.Types.ObjectId, ref: 'image'}]
    

});

let Day = mongoose.model('day', daySchema)


module.exports = Day;

