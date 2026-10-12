const express = require("express");
const router = express.Router();

const {
    submitResult,
    getMyResults,
    getAllResults
} = require("../controllers/resultController");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

router.post("/submit", authMiddleware, submitResult);
router.get("/my-results", authMiddleware, getMyResults);

router.get(
    "/all",
    authMiddleware,
    adminMiddleware,
    getAllResults
);

module.exports = router;