const mongoose = require("mongoose");
const { string } = require("zod");

mongoose.connect("mongodb://localhost:27017/Paytm");

const userSchema = mongoose.Schema({
    username : {
        type : string,
        required : true,
        unique : true,
        trim : true,
        lowercase : true,
        minLength : 3,
        maxLength : 30
    },
    
    password : {
        type : string,
        required : true,
        minLength : 6
    },

    firstName : {
        type : string,
        required : true,
        trim : true,
        maxLength : 50
    },

    lastName : {
        type : string,
        required : true,
        trim : true,
        maxLength : 50

    }
});

const user = mongoose.model("User", userSchema);

module.exports = {
    User
}


