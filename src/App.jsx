import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import BeerList from './components/beerList/BeerList'
import BeerDetails from './components/beerDetails/BeerDetails'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/beerlist' element={<BeerList />} />
        <Route path='/beerlist/:ichBinEinId' element={<BeerDetails />} />

      </Routes>
    </>
  )
}

export default App
