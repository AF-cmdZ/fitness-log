const express = require("express");
const db = require("../models");
const router = express.Router();
const mongoose = require("mongoose");

router.get("/api/workouts", (req, res) => {
    db.Workout.find().then(dbData => {
        res.json(dbData);
    })
    .catch(err => {
        res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find().then(dbData => {
        res.json(dbData);
    })
    .catch(err => {
        res.json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
        { _id: req.params.id },
        { $push: { exercises: req.body } },
        { new: true }
        )
    .then(dbData => {
        res.json(dbData);
    })
    .catch(err => {
        res.json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body).then(dbData => {
        res.json(dbData);
    })
    .catch(err => {
        res.json(err);
    });
});

module.exports = router;