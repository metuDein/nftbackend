const { default : mongoose} = require('mongoose');
const Schema = mongoose.Schema;

const blog = new Schema ({
    writtenBy : {
        type : String,
        required : true,
    },
    date : {
        type : Date,
        default : Date.now()
    },
    title : {
        type : String,
        required : true,
    },
    body : {
        type : String,
        required : true,
    }
})


module.exports = mongoose.model('Blog', blog);