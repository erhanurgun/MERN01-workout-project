import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import workoutRoutes from "./routes/workouts.js";
import userRoutes from "./routes/user.js";

// express app
const app = express();

// middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.use("/api/v1/workouts", workoutRoutes);
app.use("/api/v1/user", userRoutes);

// connet to db
mongoose
    .connect(process.env.DB_URL)
    .then(() => {
    })
    .catch((error) => {
        console.log(error);
    });

// listen for requests
app.listen(process.env.PORT, () => {
    console.log(`Sunucu http://localhost:${process.env.PORT} adresinde çalışıyor.`);
});
