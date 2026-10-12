const Question = require("../models/Question");

// Add question
const addQuestion = async (req, res) => {
    try {
        const question = await Question.create(req.body);
        res.json(question);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get questions
const getQuestions = async (req, res) => {
    try {
        const questions = await Question.find({
            quizId: req.params.quizId
        }).select("-correctAnswer");

        res.json(questions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete question
const deleteQuestion = async (req, res) => {
    try {
        await Question.findByIdAndDelete(req.params.id);
        res.json({ message: "Question deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    addQuestion,
    getQuestions,
    deleteQuestion
};