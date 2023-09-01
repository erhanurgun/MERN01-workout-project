import "dotenv/config";
import express from "express";
import {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout,
} from "../controllers/workoutController.js";
import requireAuth from "../middleware/requireAuth.js";

// require auth for all workout routes
const router = express.Router();

router.use(requireAuth);

// GET all workouts
router.get(process.env.BASE_URL + "/", getWorkouts);

// GET a single workouts
router.get(process.env.BASE_URL + "/:id", getWorkout);

// POST a new workout
router.post(process.env.BASE_URL + "/", createWorkout);

// DELETE a new workout
router.delete(process.env.BASE_URL + "/:id", deleteWorkout);

// UPDATE a new workout
router.patch(process.env.BASE_URL + "/:id", updateWorkout);

export default router;