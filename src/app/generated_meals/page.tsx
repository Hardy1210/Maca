'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface Recipe {
  id: number
  name: string
}

const GeneratedMeals: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const router = useRouter()

  useEffect(() => {
    // Recupera las recetas generadas desde Local Storage
    const storedRecipes = localStorage.getItem('generatedRecipes')
    if (storedRecipes) {
      setRecipes(JSON.parse(storedRecipes))
    } else {
      // Redirige a `generate` si no hay recetas generadas
      router.push('/generate')
    }
  }, [router])

  const handleRecipeClick = (id: number) => {
    router.push(`/generated_meals/${id}`)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Recetas Generadas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            onClick={() => handleRecipeClick(recipe.id)}
            className="cursor-pointer bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold">{recipe.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GeneratedMeals
