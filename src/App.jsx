import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Dishes from './components/Dishes'
import About from './components/About'
import Review from './components/Review'

export const App = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <div id='home'>
          <Home/>
        </div>

        <div id="dishes">
          <Dishes/>
        </div>

        <div id="about">
          <About/>
        </div>

        <div id="review">
          <Review/>
        </div>

      </main>
    </div>
  )
}

export default App