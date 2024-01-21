import Footer from './components/Footer'
import Header from './components/Header'
import './App.css'
import Ejercicio1 from './components/Ejercicio1'
import Ejercicio2 from './components/Ejercicio2'
import Ejercicio3 from './components/Ejercicio3'

function App() {
  

  return (
    <div className='body'>
      <div className='main'>
        <Header/>
        <Ejercicio1/>
        <Ejercicio2 oracion='My Friend'/>
        <Ejercicio3/>
      </div>
        <Footer/>
    </div>
  )
}

export default App
