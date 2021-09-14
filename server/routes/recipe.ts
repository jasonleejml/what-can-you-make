import { Request, Response, NextFunction } from "express"
import { RecipeModel, Ingredient } from "../models"

interface Query {
  id?: string;
}

export const recipeMiddleware = async (req: Request, res: Response) : Promise<void> => {
  // TODO fetch and return a recipe
  const {id} = req.params

  const query : Query = {}
  if (id) {
    query['_id'] = id
  }

  const foundRecipe = await RecipeModel.find(query)
  res.send(foundRecipe)
}
