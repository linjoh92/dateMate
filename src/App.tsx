//import { useState } from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/AboutPage'
import FilenotFound from './pages/FileNotFound'

function App() {

  return (
    <>
      <Routes>
       <Route path="/" element={<Layout />}>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
       </Route>
         <Route path="/*" element={<FilenotFound />} />
      </Routes> 
    </>
  )
}

export default App


