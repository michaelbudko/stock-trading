const express = require("express");
const router = express.Router();

//Comments Model
const Comments = require("../../models/Comment");

// @route GET api/comments
// @desc Get All Comments
// @access Public
router.get('/', (req, res) => {
    Comments.find()
        .then(comments => res.json(comments));
});

// @route GET api/comments/tsla
// @desc Get Comments for Tsla Stock
// @access Public
router.get('/tsla', (req, res) => {
    Comments.find({ticker: "tsla"})
        .then(comments => res.json(comments));
});

// @route GET api/comments/aapl
// @desc Get Comments for Apple Stock
// @access Public
router.get('/aapl', (req, res) => {
    Comments.find({ticker: "aapl"})
        .then(comments => res.json(comments));
});

// @route POST api/comments/tsla
// @desc Post Comments for Tsla Stock
// @access Public
router.post("/tsla", (req, res) => {
    const comment = new Comment({
        username: req.body.username,
        ticker: "tsla",
        comment: req.body.comment
    });
    comment.save()
        .then(comment => res.json(comment));
});

// @route POST api/comments/aapl
// @desc Post Comments for Apple Stock
// @access Public
router.post("/aapl", (req, res) => {
    const comment = new Comment({
        username: req.body.username,
        ticker: "aapl",
        comment: req.body.comment
    });
    comment.save()
        .then(comment => res.json(comment));
});


module.exports = router;