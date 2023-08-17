import { Route, Routes } from 'react-router-dom';
import './App.scss'
import AllDrinksListByIngredient from './components/shared/AllDrinksListByIngredient';
import Home from './components/pages/Home/Home'
import CocktailDetails from './components/pages/CocktailDetails/CocktailDetails'
import Header from './components/shared/Header/Header';
import { useState } from 'react';

function App() {


  const [searchInput, setSearchInput] = useState("")

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value)
    }



  return (
    <>
      <Routes>
        <Route element={<Header searchInput={searchInput} setSearchInput={setSearchInput}/>}>
        {/* <Route element={<UI/>}> */}
        <Route path='/' element={<Home setSearchInput={setSearchInput}/>}/>
        <Route path='/list/:ingredient' element={<AllDrinksListByIngredient/>}/>
        </Route>
        <Route path={`/alldrinkslist/:id`} element={<CocktailDetails/>}/>
      </Routes>
    </>
  )
}

export default App
