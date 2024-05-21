const mongoose = require('mongoose');

const EachTest = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    options: {
        type: [String],
        required: true
    }
})

const QuizSchema = new mongoose.Schema({
    course: {
        type: String,
        required: true
    },
    uploader: {
        type: String,
        required: true
    },
    Quiz: {
        type: [EachTest],
        required: true
    },
})

const Quiz = mongoose.model('QuizTest', QuizSchema);

module.exports = Quiz;