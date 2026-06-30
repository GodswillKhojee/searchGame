import React from 'react'
import NavBar from './components/NavBar'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import WishList from './pages/WishList'

const App = () => {
  return (
    <div> 
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/wishlist' element={<WishList/>} />
        </Routes>
      </main>
    </div>

  )
}

export default App