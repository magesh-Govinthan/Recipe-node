import express from "express";
import dotenv from "dotenv";
import connectDB from "./Database/Config.js";
import recipe from "./Routers/recipe.route.js";
import cors from "cors";

dotenv.config();
const app = express();
// const cors =require('cors')
app.use(express.json());
app.use(cors())
const PORT = process.env.PORT;
connectDB();

 app.use('/api', recipe)

app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`);
})