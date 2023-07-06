const { default : mongoose} = require('mongoose');
const Schema = mongoose.Schema;


const review = new Schema({
    writtenBy : {
        type : String,
        required : true,
    },
    date : {
        type : Date,
        default : Date.now()
    },
    reviewMessage : {
        type : String,
        required : true,
    }
})

module.exports = mongoose.model('Review', review);