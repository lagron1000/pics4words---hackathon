var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//design the two schema below and use populate 
//to define the relationship between Day / Image / Comments


let imageSchema = new Schema({
    
    url: String,
    user: String,
    rating: Number,
    comments: [{type: commentModel.Schema.Types.ObjectId, ref: 'comment'}]
    

});

let Image = mongoose.model('image', imageSchema)


module.exports = Image;

