import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'
import Carousel from './components/Carousel'
import About from './components/About'
import ProjectList from './components/ProjectList'

const App = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <About />
      <ProjectList />
      {/* <Card /> */}
      <Footer />
    </>
  )
}

export default App
