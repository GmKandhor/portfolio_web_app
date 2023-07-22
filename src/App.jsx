import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'


const App = ()=>{
 const [darkMode,setDarkMode] = useState(true);
  return(
    <>
  <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
  <Hero darkMode={darkMode} />
  </>
    )
}
export default App
