import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
