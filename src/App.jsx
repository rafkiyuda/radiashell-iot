import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import IoTDashboard from './components/IoTDashboard'
import ProcessFlow from './components/ProcessFlow'
import SellShells from './components/SellShells'
import ProductCatalog from './components/ProductCatalog'

function App() {
  return (
    <div className="app-container">
      {/* <Navbar /> */}
      <main>
        <Hero />
        <ProcessFlow />
        <IoTDashboard />
        <SellShells />
        <ProductCatalog />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default App
