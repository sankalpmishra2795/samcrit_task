const mongoose = require('mongoose');

const UserNote = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please add email"],
        trim: true,
        // unique: false,
    },

    name: {
        type: String,
        required: [true, "Please add note name"],
        trim: true,
    },
    slug: String,
    
    description: {
        type: String,
        required: [true, "Please add a description"],
        maxlength: [500, "Description can not be more than 500 characters"]
    },
},
    {timestamps:true}
)
module.exports = mongoose.model("note",UserNote)