import './App.css'
import NavBar from './components/NavBar'
import CardWIdget from './components/cartWIdget'
import ItemCount from './components/ItemCount'

function App() {
  return(
    <div className='App'>
      <NavBar/>
      <CardWIdget/>
      <ItemCount/>
      
    </div>
  )
}

export default App