const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    userName : String,
    password : String,
    imagePath : String  
});

const user = mongoose.model("User", UserSchema);

module.exports = user;