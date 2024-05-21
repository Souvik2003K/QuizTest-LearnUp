const Quiz = require('../models/QuizModel');

const addQuiz = (req, res) => {
    try {
        const ques = new Quiz(req.body);
        ques.save().then(() => {
            res.status(201).json({ message: 'Question added successfully' });
        });
    } catch (error) {
        console.log(error);
    }
}

const showQuiz = (req, res) => {
    try {
        Quiz.find().then((data) => {
            res.status(200).json({ data: data });
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = { addQuiz, showQuiz };