import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './Register'
import Home from './Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
