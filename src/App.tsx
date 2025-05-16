import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import HistoricalPeriods from './components/HistoricalPeriods'
import HistoricalFigures from './components/HistoricalFigures'
import Cantons from './components/Cantons'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <Timeline />
        <HistoricalPeriods />
        <HistoricalFigures />
        <Cantons />
        <Gallery />
      </div>
      <Footer />
    </div>
  )
}

export default App
