
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Myskills from './components/myskills/Myskills'
import Myexp from './components/myexperience/Myexp'
import Aboutme from './components/about-me/Aboutme'
import Myprojects from './components/myprojects/Myprojects'

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Myskills />
        <Myexp />
        <Aboutme />
        <Myprojects />
      </main>

    </>
  )
}

export default App
