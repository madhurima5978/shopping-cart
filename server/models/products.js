const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
        name: String,
        price: Number,
        image:Buffer,
});
const UserModel = mongoose.model("products", UserSchema);
module.exports = UserModel