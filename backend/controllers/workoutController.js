import Workout from "../models/workoutModel.js";
import mongoose from "mongoose";

// get all workout
const getWorkouts = async (req, res) => {
    const userId = req.user._id;
    const workouts = await Workout.find({userId}).sort({createdAt: -1});

    res.status(200).json(workouts);
};

// get single a workout
const getWorkout = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Egzersiz bulunamadı!"});
    }

    const workout = await Workout.findById(id);

    if (!workout) {
        return res.status(404).json({error: "Egzersiz bulunamadı!"});
    }

    res.status(200).json(workout);
};

// create new workout
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body;

    let emptyFields = [];

    if (!title) {
        emptyFields.push("title");
    }
    if (!load) {
        emptyFields.push("load");
    }
    if (!reps) {
        emptyFields.push("reps");
    }
    if (emptyFields.length > 0) {
        return res
            .status(400)
            .json({error: "Lütfen tüm alanları doldurunuz!", emptyFields});
    }

    // add doc to db
    try {
        const userId = req.user._id;
        const workout = await Workout.create({title, load, reps, userId});
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

// delete a workout
const deleteWorkout = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Egzersiz bulunamadı!"});
    }

    const workout = await Workout.findOneAndDelete({_id: id});

    if (!workout) {
        return res.status(404).json({error: "Egzersiz bulunamadı!"});
    }

    res.status(200).json({message: "Egzersiz başarıyla silindi!"});
};
// update a workout
const updateWorkout = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Egzersiz bulunamadı!"});
    }

    const workout = await Workout.findOneAndUpdate(
        {_id: id},
        {
            ...req.body,
        }
    );

    if (!workout) {
        return res.status(404).json({error: "Egzersiz bulunamadı!"});
    }

    const updatedWorkout = {...workout._doc, ...req.body};
    updatedWorkout.load = Number(updatedWorkout.load);
    updatedWorkout.reps = Number(updatedWorkout.reps);

    res.status(200).json(updatedWorkout);
};

export {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout,
};
