'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

interface Recipe {
  id: number
  name: string
  description: string
  ingredients: {
    title: string
    items: { id: number; name: string; quantity?: number; unit?: string }[]
  }[]
  instructions: { step: number; title: string; description: string }[]
  images: { url: string; type: string }[]
}

const RecipeDetails: React.FC = () => {
  const { id } = useParams() // Obtén el ID desde los parámetros dinámicos
  const [recipe, setRecipe] = useState<Recipe | null>(null)

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch('/data/recipesComplete.json') // Cambia la ruta si es necesario
        const data = await response.json()

        const foundRecipe = data.recipes.find(
          (r: Recipe) => r.id === Number(id),
        )
        setRecipe(foundRecipe || null)
      } catch (error) {
        console.error('Error al cargar la receta:', error)
      }
    }

    if (id) {
      fetchRecipe()
    }
  }, [id])

  if (!recipe) return <p>Cargando receta...</p>

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">{recipe.name}</h1>
        <p className="mb-6">{recipe.description}</p>

        <h2 className="text-xl font-semibold mb-2">Ingredientes:</h2>
        {recipe.ingredients.map((group) => (
          <div key={group.title} className="mb-4">
            <h3 className="font-medium">{group.title}:</h3>
            <ul className="list-disc ml-5">
              {group.items.map((item) => (
                <li key={item.id}>
                  {item.quantity ? `${item.quantity} ${item.unit || ''} ` : ''}
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <h2 className="text-xl font-semibold mb-2">Instrucciones:</h2>
        {recipe.instructions.map((step) => (
          <div key={step.step} className="mb-4">
            <h3 className="font-medium">
              Paso {step.step}: {step.title}
            </h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecipeDetails
