const Quiz = require("../models/Quiz");

// Create quiz
const createQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.create(req.body);
        res.json(quiz);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all quizzes
const getQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.json(quizzes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update quiz
const updateQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(quiz);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete quiz
const deleteQuiz = async (req, res) => {
    try {
        await Quiz.findByIdAndDelete(req.params.id);
        res.json({ message: "Quiz deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createQuiz,
    getQuizzes,
    updateQuiz,
    deleteQuiz
};