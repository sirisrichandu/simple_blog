const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
{
    title:{
        type:String,
        required:true,
        trim:true
    },

    author:{
        type:String,
        default:"Anonymous"
    },

    category:{
        type:String,
        default:"Technology"
    },

    content:{
        type:String,
        required:true,
        minlength:5
    }

},
{
    timestamps:true
}
);

module.exports = mongoose.model(
"Blog",
blogSchema
);