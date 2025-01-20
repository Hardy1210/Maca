'use client'
import { useRouter } from 'next/navigation'

import { useState } from 'react'

interface Recipe {
  id: number
  name: string
}
const Generate: React.FC = () => {
  const router = useRouter()
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(false)
  //function generate

  const handleGenerate = async () => {
    if (loading) return //evita multiples clicks
    setLoading(true)
    try {
      //carga desed json
      const response = await fetch('/data/recipesComplete.json')
      if (!response.ok) {
        throw new Error('error to charge recipes')
      }
      const data = await response.json()

      const recipes: Recipe[] = data.recipes

      //selection random recipe
      const randomRecipes: Recipe[] = []
      while (randomRecipes.length < quantity) {
        const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)]
        if (!randomRecipes.some((recipe) => recipe.id === randomRecipe.id)) {
          randomRecipes.push(randomRecipe)
        }
      }
      //stock recipe local storage
      localStorage.setItem('generatedRecipes', JSON.stringify(randomRecipes))

      //redirection
      router.push('/generated_meals')
    } catch (error) {
      console.error('error to generated recipes:', error)
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-6">Generar Recetas Aleatorias</h1>

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          {loading ? 'generando...' : 'Generar Recetas'}
        </button>
        <label className="mb-4">
          Selecciona la cantidad de recetas (1-7):
          <input
            type="number"
            min="1"
            max="7"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="ml-2 border rounded px-2 py-1 w-16"
          />
        </label>
      </div>
    </>
  )
}

export default Generate
