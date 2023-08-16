import { Route, Routes } from 'react-router-dom';
import './App.scss'
import AllDrinksListByIngredient from './components/shared/AllDrinksListByIngredient';
import Home from './components/pages/Home/Home'
import CocktailDetails from './components/pages/CocktailDetails/CocktailDetails'
import Test from './components/shared/Test/Test'

function App() {


  return (
    <>
    <CocktailDetails/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cocktaildetails' element={<CocktailDetails/>}/>
        <Route path='/list/:ingredient' element={<AllDrinksListByIngredient/>}/>
      </Routes>
    </>
  )
}

export default App
