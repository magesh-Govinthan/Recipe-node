import Recipe from "../Model/recipe.schema.js";

export const createRecipe = async (req, res) => {
    try {
       
        const newRecipe = new Recipe(req.body);
        await newRecipe.save();
        res.status(200).json({ message: "Recipe Added Successfully!", data: newRecipe });
    } catch (error) {
        console.log(error);
    }
}

export const getRecipeDetail = async (req, res) => {
    try {
        const recipe = await Recipe.find()
        res.status(200).json({data: recipe})
    } catch (error) {
        console.log(error);
        
    }
}
export const getRecipeById = async (req,res) => {
    try {
        const recipeId = req.params.id;
          console.log(recipeId,"recipeid",req.params);
        const recipe = await Recipe.findById(recipeId);
      
        
        if (!recipe) {
            return res.status(404).json({message:"Recipe Not Found!"})
        }
        res.status(200).json({message:'Recipe Found', data: recipe})
    } catch (error) {
        console.log(error);
        
    }
}
export const updateRecipeDetail = async(req, res,next) => {
    
      try {
        const { recipeId } = req.params;
   console.log(recipeId,"id");
   
    const {RecipeName, area, category, ingredientAndMeasure } = req.body;
   
    

    const updatedRecipe = await Recipe.findByIdAndUpdate(
      recipeId,
      { RecipeName,area, category, ingredientAndMeasure },
  
    );

    if (updatedRecipe.matchedCount === 0) {
      return res.status(404).json({ message: "Recipe Not Found" });
    }

    res.status(200).json({
      message: "Updated successfully",
      data: updatedRecipe,
    });
    next();
    } catch (error) {
     console.log(error);
    }

}
export const deleteRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);

    if (!recipe) {
      return res.status(404).json({message: "Recipe not found"});
    }

    res.status(200).json({message: "Recipe deleted successfully"});
    next();
  } catch (error) {
    console.log(error);
    
  }
};
