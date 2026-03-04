import express from "express";
import { createRecipe, deleteRecipe, getRecipeById, getRecipeDetail, updateRecipeDetail } from "../Controller/recipe.controller.js";

const router = express.Router();

router.post("/create-recipe", createRecipe);
router.get("/get-recdetails", getRecipeDetail);
router.get("/get-recdetails/:id", getRecipeById);
router.put("/editrecipes/:recipeId", updateRecipeDetail);
router.delete("/del-rec/:id", deleteRecipe)

export default router;