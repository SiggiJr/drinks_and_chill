import { Route, Routes } from 'react-router-dom';
import './App.scss'
import AllDrinksListByIngredient from './components/shared/AllDrinksListByIngredient';
import Home from './components/pages/Home/Home'
import CocktailDetails from './components/pages/CocktailDetails/CocktailDetails'
import Header from './components/shared/Header/Header';
import { useState } from 'react';
import AddYourDrink from './components/pages/AddYourDrink/AddYourDrink';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Header/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/list/:ingredient' element={<AllDrinksListByIngredient/>}/>
        <Route path='/add_a_drink' element={<AddYourDrink/>}/>
        </Route>
        <Route path={`/alldrinkslist/:id`} element={<CocktailDetails/>}/>
      </Routes>
    </>
  )
}

export default App
