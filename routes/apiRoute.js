const express = require("express");
const { db } = require("../models/workout.js");
const router = express.Router();
const Workout = require("../models/workout.js");

router.get("/api/workouts", (req, res) => {
    db.find().then((dbData) => {
        res.json(dbData);
    })
    .catch((err) => {
        res.json(err);
    });
});