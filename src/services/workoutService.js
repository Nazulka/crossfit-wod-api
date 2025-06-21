const Workouts = require('../models/Workout');

const getAllWorkouts = async () => {
    return;
};
    return await Workouts.find();

const getOneWorkout = async () => {
    return await Workouts.find();
};

const createNewWorkout =async () => {
    return await Workouts.create();
};

const updateOneWorkout = async () => {
    return await Workouts.update();
};

const deleteOneWorkout = async () => {
    return await Workouts.update();
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
};