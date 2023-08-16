import { Route, Routes } from 'react-router-dom';
import './App.scss'
import AllDrinksListByIngredient from './components/shared/AllDrinksListByIngredient';
import Home from './components/pages/Home/Home'
import CocktailDetails from './components/pages/CocktailDetails/CocktailDetails'
import UI from './components/pages/UI/UI';

function App() {

  return (
    <>
      <Routes>
        <Route element={<UI/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/list/:ingredient' element={<AllDrinksListByIngredient/>}/>
        </Route>
        <Route path={`/alldrinkslist/:id`} element={<CocktailDetails/>}/>
      </Routes>
    </>
  )
}

export default App
