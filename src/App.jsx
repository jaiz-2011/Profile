import './App.css'
import Hero from './Componenets/Hero.jsx'
import Navbar from './Componenets/Navbar.jsx'
import About from './Componenets/About.jsx'
import Technologies from './Componenets/Technologies.jsx'
import Experience from './Componenets/Experience.jsx'
import Project from './Componenets/Project.jsx'
import Contact from './Componenets/Contact.jsx'

const App = () => {
  return (
   <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
    <div className="fixed top-0 left-0 right-0 bottom-0 -z-10 h-full w-full">
     <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
     </div> 
     <div className="container mx-auto py-8">
    <Navbar/>
    <Hero />
    <About />
    <Technologies />
    <Experience />
    <Project />
    <Contact />
    </div>
  
   </div> 
  )
}

export default App  
