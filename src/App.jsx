import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './components/pages/Home/Home'
import CocktailDetails from './components/pages/CocktailDetails/CocktailDetails'

function App() {


  return (
    <>
    <CocktailDetails/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cocktaildetails' element={<CocktailDetails/>}/>
      </Routes>
    </>
  )
}

export default App
