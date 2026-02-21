import React from 'react'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import MainRoutes from './routes/MainRoutes'

function App() {
  return (
    <div className='bg-[#0F0F0F]'>
      <Navbar/>
      <MainRoutes/>
    </div>
  )
}

export default App