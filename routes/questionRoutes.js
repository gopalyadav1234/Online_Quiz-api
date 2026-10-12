const express = require("express");
const router = express.Router();

const {
    addQuestion,
    getQuestions,
    deleteQuestion
} = require("../controllers/questionController");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

router.get("/quiz/:quizId", getQuestions);

router.post(
    "/",
    authMiddleware,
    adminMiddleware,
    addQuestion
);

router.delete(
    "/:id",
    authMiddleware,
    adminMiddleware,
    deleteQuestion
);

module.exports = router;