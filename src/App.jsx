import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Saved from './pages/Saved'
import Mixed from './pages/Mixed'
import Search from './pages/Search'

function App() {
  return (
    <div className='text-white'>
      <MainLayout>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/saved' element={<Saved />} />
          <Route path='/mixed' element={<Mixed />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </MainLayout>
    </div>
  )
}

export default App