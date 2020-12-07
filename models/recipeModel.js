const mongoose = require('mongoose');
const { ObjectId, String } = mongoose.Schema.Types;

const recipeSchema = new mongoose.Schema({
    recipeName: {
        type: String,
        required: true
    },
    likedBy: [{
        type: ObjectId,
        ref: "User"
    }],
    userId: {
        type: ObjectId,
        ref: "User"
    },
    ingredients: [
        String
    ],
    difficultyLevel: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    recipeContnet: {
        type: String,
        requried: true
    },
    createdAt: {
        type: String,
        required: true
    },
    necesseryTime: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Recipe', recipeSchema);
