
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role:{type:String,required:true,default:"teacher"},
    address: { type: String, default:"" },
    phone: { type: String, default:"" },

}, { timestamps: true });
const User=mongoose.models.User || mongoose.model("User", UserSchema)
export default User
