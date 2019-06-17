const mongoose = require('mongoose')
const Schema = mongoose.Schema
const QuizSchema = new Schema({
    size:{
        type: Number
    },
    field: {
        type:String
    },
    question: [
        {
            type: String,
            //required: [true, 'question field is required']
        }
    ],
    choices: [
        [
            {
                type: String,
                required: [true, 'choices field is required']
            }
        ]
    ],
    answer: [
        {
            type: Number,
            required: [true, 'answer field is required']
        }
    ]
});
const modelClass = mongoose.model('quiz', QuizSchema)
module.exports = modelClass