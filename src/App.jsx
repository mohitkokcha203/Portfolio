import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Project from './Components/Projects/Project'
import Skills from './Components/Skills/Skills'

function App() {
 
  return (
    <div className='App'>
       <Navbar />
       <Hero />
       <About />
       <Skills />
       <Project />
       <Contact />
    </div>
  )
}

export default App
