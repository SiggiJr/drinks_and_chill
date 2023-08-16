import { Route, Routes } from 'react-router-dom';
import './App.scss'
import AllDrinksListByIngredient from './components/shared/AllDrinksListByIngredient';
import Home from './components/pages/Home/Home'
import CocktailDetails from './components/pages/CocktailDetails/CocktailDetails'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cocktaildetails' element={<CocktailDetails/>}/>
        <Route path='/list/:ingredient' element={<AllDrinksListByIngredient/>}/>
        <Route path={`/alldrinkslist/:id`} element={<CocktailDetails/>}/>
      </Routes>
    </>
  )
}

export default App
