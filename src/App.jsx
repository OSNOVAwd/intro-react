import React from 'react'
import {HomePage, Navbar, Footer} from './components';

const App = () => {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <HomePage/>
      <Footer/>
    </div>
  )
}

export default App