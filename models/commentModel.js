var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//design the two schema below and use populate 
//to define the relationship between Day / Image / Comments


let commentSchema = new Schema({
    text: String,
    user: String,
    
});

let Comment = mongoose.model('comment', commentSchema)


module.exports = Image;

