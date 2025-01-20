//recipes.json
interface Recipe {
  id: number
  name: string
}
//ingredients.json
interface Ingredient {
  id: number
  name: string
  quantity?: number
  unit?: string
}
//images.json
interface Image {
  id: number
  url: string
  alt: string
  type: string
}
//merge of datas json
interface CompleteRecipe {
  id: number
  name: string
  ingredients: Ingredient[]
  image: { url: string; alt: string; type: string }
}

export const mergeRecipeData = (
  recipes: Recipe[],
  ingredients: Ingredient[],
  images: Image[],
): CompleteRecipe[] => {
  return recipes.map((recipe) => {
    const recipeIngredients = ingredients.filter(
      (ingredient) => ingredient.id === recipe.id,
    )
    const recipeImage = images.find(
      (image) => image.id === recipe.id && image.type === 'main',
    )

    return {
      id: recipe.id,
      name: recipe.name,
      ingredients: recipeIngredients,
      image: recipeImage || {
        url: '',
        alt: 'No image available',
        type: 'main',
      },
    }
  })
}
