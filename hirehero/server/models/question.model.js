import mongoose from "mongoose";
const { Schema } = mongoose;

const questionSchema = new Schema({
    number: {type: Number}, //TODO auto?
    question: {type: String, required: true},
    type: {type: String, required: true},
    difficulty: {type: String, required: true},
    answer: {type: String, required: true},
    completed:  {type: Boolean, default: false},
    datedAdded: {type: Date, default: Date.now}
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;