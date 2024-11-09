import React from 'react'
import Home from './components/Home'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  document.title = "MovieApp | Homepage"
  return (
    <div className='w-screen h-screen bg-[#1F1E24] text-white flex'>
      <Routes>
         <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
