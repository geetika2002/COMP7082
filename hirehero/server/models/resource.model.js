import mongoose from "mongoose";
const { Schema } = mongoose;

const articleSchema = new Schema({
//TODO
});

const Article = mongoose.model('Question', articleSchema);

module.exports = Article;