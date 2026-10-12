const express = require("express");
const router = express.Router();

const {
    createQuiz,
    getQuizzes,
    getQuiz,
    updateQuiz,
    deleteQuiz
} = require("../controllers/quizController");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

router.get("/", getQuizzes);
router.get("/:id", getQuiz);

router.post(
    "/",
    authMiddleware,
    adminMiddleware,
    createQuiz
);

router.put(
    "/:id",
    authMiddleware,
    adminMiddleware,
    updateQuiz
);

router.delete(
    "/:id",
    authMiddleware,
    adminMiddleware,
    deleteQuiz
);

module.exports = router;