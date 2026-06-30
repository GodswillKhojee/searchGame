import React from 'react'
import NavBar from './components/NavBar'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import WishList from './pages/WishList'
import  GameProvider  from './contexts/GameContext'


const App = () => {
  return (
    <GameProvider> 
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/wishlist' element={<WishList/>} />
        </Routes>
      </main>
    </GameProvider>

  )
}

export default App