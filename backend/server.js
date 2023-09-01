import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import workoutRoutes from "./routes/workouts.js";
import userRoutes from "./routes/user.js";

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.use(process.env.BASE_URL + "/api/v1/workouts", workoutRoutes);
app.use(process.env.BASE_URL + "/api/v1/user", userRoutes);

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
    // console.log(`Sunucu http://localhost:${process.env.PORT} adresinde çalışıyor.`);
    console.log(`Sunucu ${process.env.BASE_URL} adresinde çalışıyor.`);
});
