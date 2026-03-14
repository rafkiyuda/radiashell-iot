import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import IoTDashboard from './components/IoTDashboard'
import ProcessFlow from './components/ProcessFlow'

function App() {
  return (
    <div className="app-container">
      {/* <Navbar /> */}
      <main>
        <Hero />
        <ProcessFlow />
        <IoTDashboard />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default App
