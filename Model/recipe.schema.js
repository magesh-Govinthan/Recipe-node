import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
    RecipeName: String,
    area: String,
    category: String,
    ingredientAndMeasure: String,
})

const Recipe = mongoose.model("Recipe", recipeSchema);
export default Recipe;