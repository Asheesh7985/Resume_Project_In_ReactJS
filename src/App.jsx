import { Routes,Route } from "react-router-dom"
import Home from "./Components/Home"
import Skill from "./Components/Skill"
import Services from "./Components/Services"
import Contact from "./Components/Contact"
import './Style.css'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/skill" element={<Skill/>} />
        <Route path="/services"element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App
