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
    const { recipeName, necesseryTime, createdAt, imageUrl, difficultyLevel, ingredients, quantity, category, recipeContent, creator } = req.body;
    console.log(req.body)
    const { _id: userId } = req.user;

    recipeModel.create({ recipeName, necesseryTime, createdAt, imageUrl, difficultyLevel, ingredients, quantity, category, recipeContent, creator, userId })
        .then((createdRecipe) => res.status(200)
            .send(createdRecipe))
        .catch(next);
}

function getEditRecipe(req, res, next) {
    const recipeId = req.params.id;
    recipeModel.findOne({ _id: recipeId }).lean().then((recipe) => {
        res.status(200).send(recipe);
    }).catch(next)
}

function postEditRecipe(req, res, next) {
    const recipeId = req.params.id;
    Course.updateOne({ _id: recipeId }, { $set: { ...req.body } }).then((updatedRecipe) => {
        res.status(200).send(updatedRecipe);
    }).catch(next)
}

function deleteRecipe(req, res, next) {
    const recipeId = req.params.id;
    Course.deleteOne({ _id: recipeId }).then(() => {
        res.status(200);
    })
}

function likeRecipe(req, res, next) {
    const recipeId = req.params.recipeId;
    const { _id: userId } = req.user;
    recipeModel.findByIdAndUpdate({ _id: recipeId }, { $push: { likedBy: userId } }, { new: true })
        .then(updatedRecipe => {
            res.status(200).json(updatedRecipe)
        })
        .catch(next);
}


module.exports = {
    getRecipes,
    createRecipe,
    getRecipe,
    likeRecipe,
    getEditRecipe,
    postEditRecipe,
    deleteRecipe
}
