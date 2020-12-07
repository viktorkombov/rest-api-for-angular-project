const { recipeModel } = require('../models');

function getRecipes(req, res, next) {
    recipeModel.find()
        .populate('userId')
        .then(recipes => res.json(recipes))
        .catch(next);
}

function getRecipe(req, res, next) {
    const { recipeId } = req.params;

    recipeModel.findById(recipeId)
        
        .then(recipe => res.json(recipe))
        .catch(next);
}

function createRecipe(req, res, next) {
    console.log(req.user)
    const { recipeName, necesseryTime, createdAt, imageUrl, difficultyLevel, ingredients } = req.body;
    const { _id: userId } = req.user;

    recipeModel.create({ recipeName, necesseryTime, createdAt, imageUrl, difficultyLevel, ingredients, userId })
                .then((createdRecipe) => res.status(200)
                                            .send(createdRecipe))
        .catch(next);
}

function subscribe(req, res, next) {
    const recipeId = req.params.recipeId;
    const { _id: userId } = req.user;
    recipeModel.findByIdAndUpdate({ _id: recipeId }, { $addToSet: { likedBy: userId } }, { new: true })
        .then(updatedRecipe => {
            res.status(200).json(updatedRecipe)
        })
        .catch(next);
}

module.exports = {
    getRecipes,
    createRecipe,
    getRecipe,
    subscribe,
}
