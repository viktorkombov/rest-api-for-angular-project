const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { recipeController } = require('../controllers');



router.get('/', recipeController.getRecipes);
router.post('/', recipeController.createRecipe);

router.get('/:recipeId', recipeController.getRecipe);
router.put('/:recipeId', auth(), recipeController.subscribe);


module.exports = router