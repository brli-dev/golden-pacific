import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Dishes from './components/Dishes'

export const App = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <div id='home'>
          <Home/>
        </div>

        <div id="Dishes">
          <Dishes/>
        </div>

      </main>
    </div>
  )
}

export default App