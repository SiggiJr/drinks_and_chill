import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './components/pages/Home/Home'
import Test from './components/shared/Test/Test'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/list/:ingredient' element={<Test/>}/>
      </Routes>
    </>
  )
}

export default App
