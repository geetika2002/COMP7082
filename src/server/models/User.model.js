import mongoose from "mongoose";
// import { required } from "nodemon/lib/config";
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    email:  {type: String, required: true},
    topics: {type: Array}, 
    skills: {type: Array},
    resume: {type: Buffer}

});

const User = mongoose.model('User', userSchema);

module.exports = User;