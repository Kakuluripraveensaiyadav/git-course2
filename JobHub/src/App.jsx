import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Loginpage'
import Home from './Pages/Home'



function App() {
 
  return (
    <>
      <div> 
      <BrowserRouter>
         <Routes>
               <Route index element={<Home />} />
               
               <Route path="/Login" element={<Login />} />
          </Routes>
        </BrowserRouter>
        </div>
    </>
  )
}

export default App
