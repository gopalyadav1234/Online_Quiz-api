const Result = require("../models/Result");
const Question = require("../models/Question");

// Submit result
const submitResult = async (req, res) => {
    try {
        const { quizId, answers } = req.body;

        const questions = await Question.find({ quizId });

        let score = 0;

        for (let i = 0; i < questions.length; i++) {
            for (let j = 0; j < answers.length; j++) {
                if (
                    questions[i]._id.toString() === answers[j].questionId &&
                    questions[i].correctAnswer === answers[j].selectedAnswer
                ) {
                    score++;
                }
            }
        }

        const result = await Result.create({
            userId: req.user.id,
            quizId,
            score,
            totalQuestions: questions.length,
            answers
        });

        res.json({
            message: "Quiz submitted",
            score,
            totalQuestions: questions.length,
            result
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get my results
const getMyResults = async (req, res) => {
    try {
        const results = await Result.find({
            userId: req.user.id
        });

        res.json(results);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { submitResult, getMyResults };