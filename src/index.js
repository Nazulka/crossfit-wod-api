const express = require("express");
const connectDB = require('./config/database');
require('dotenv').config();

const v1WorkoutRouter = require("./v1/routes/workoutRoute");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/v1/workouts", v1WorkoutRouter);

connectDB();

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});