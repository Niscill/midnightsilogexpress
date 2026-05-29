import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './component/Header'
import Hero from './component/Hero'
import Sec1 from './component/Sec1'
import Sec2 from './component/Sec2'
import Sec3 from './component/Sec3'
import Footer from './component/Footer'
import Sec4 from './component/Sec4'


function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='font-[Poppins] bg-black'>
     <Header></Header>
     <Hero></Hero>
     <Sec1></Sec1>
     <Sec2></Sec2>
     <Sec3></Sec3>
     <Sec4></Sec4>
    {/* Footer always at the bottom */}
    <Footer />
     
    </main>
  )
}

export default App
