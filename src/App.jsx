import { BrowserRouter, Routes, Route } from "react-router-dom"
import './assets/styles/Reset.css'
import './assets/styles/style.css'
import Home from "./pages/Home"
import Produtos from "./pages/Produtos"
import Flor from "./pages/Flor"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/produtos" element={<Produtos/>}/>
          {/* <Route path="/flor" element={<Flor/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
