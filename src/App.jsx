import { Route, Routes } from 'react-router-dom';
import './App.scss'
import Home from './components/pages/Home/Home';
import AllDrinksListByIngredient from './components/shared/AllDrinksListByIngredient';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/alldrinkslist' element={<AllDrinksListByIngredient/>}/>
      </Routes>
    </>
  )
}

export default App
