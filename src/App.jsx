import { useState } from 'react'
import Header from './components/Header.jsx'
import Meta from './components/Meta.jsx'
import Ingredients from './components/Ingredients.jsx'
import Steps from './components/Steps.jsx'
import Footer from './components/Footer.jsx'
// BUG (issue #11): unused import left in the file
import { useMemo } from 'react'

const recipe = {
  title: 'Spaghetti Aglio e Olio',
  baseServings: 4,
  prepMinutes: 10,
  cookMinutes: 15,
  image: '/dish.png',
  ingredients: [
    { name: 'Spaghetti', qty: 400, unit: 'g' },
    { name: 'Garlic cloves, thinly sliced', qty: 6, unit: '' },
    { name: 'Extra-virgin olive oil', qty: 60, unit: 'ml' },
    { name: 'Red pepper flakes', qty: 1, unit: 'tsp' },
    { name: 'Fresh parsley, chopped', qty: 1, unit: 'handful' },
  ],
  steps: [
    'Boil the spaghetti in salted water until al dente.',
    'Warm the olive oil and gently fry the sliced garlic.',
    'Add red pepper flakes, then toss the drained pasta.',
    'Finish with parsley and a splash of pasta water.',
  ],
}

export default function App() {
  const [servings, setServings] = useState(recipe.baseServings)
  // BUG (issue #7): leftover debug console.log
  console.log('debug: App rendered with servings', servings)

  // BUG (issue #3): scaler uses "+" instead of "*", so quantities never scale correctly.
  // BUG (issue #4): when servings is 0 this divides by zero and shows NaN/Infinity (no guard).
  const scale = (qty) => (qty + servings) / recipe.baseServings

  return (
    <main className="card">
      <Header title={recipe.title} image={recipe.image} />
      <Meta
        prep={recipe.prepMinutes}
        cook={recipe.cookMinutes}
        servings={servings}
        onServings={setServings}
      />
      <Ingredients items={recipe.ingredients} scale={scale} />
      <Steps steps={recipe.steps} />
      <Footer />
    </main>
  )
}
