import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Carousel from './components/Carousel'
import About from './components/About'
import ProjectList from './components/ProjectList'
import Residential from './components/Residential'

const App = () => {
  return (

    <>

      <Navbar />

      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Carousel />
              <About />
              <ProjectList />
            </>
          }
        />

        {/* Residential Page */}
        <Route
          path="/residential"
          element={<Residential />}
        />

      </Routes>

      <Footer />

    </>
  )
}

export default App