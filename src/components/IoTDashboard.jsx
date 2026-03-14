import { useState, useEffect } from 'react';
import './IoTDashboard.css';

const IoTDashboard = () => {
  const [temperature, setTemperature] = useState(650);
  const [co2, setCo2] = useState(410);
  const [power, setPower] = useState(8.5);
  const [mode, setMode] = useState('SOIL');

  // Simulate live data
  useEffect(() => {
    const interval = setInterval(() => {
      // Fluctuations
      setTemperature(prev => prev + (Math.random() * 10 - 5));
      setCo2(prev => {
        const newVal = prev + (Math.random() * 15 - 5);
        return newVal < 400 ? 400 : newVal;
      });
      setPower(prev => prev + (Math.random() * 0.4 - 0.2));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleModeSwitch = () => {
    setMode(prev => prev === 'FEED' ? 'SOIL' : 'FEED');
  };

  return (
    <section className="dashboard-section section-container" id="dashboard">
      <h2 className="section-title">Live Telemetry Dashboard</h2>
      
      <div className="dashboard-layout glass-panel">
        
        {/* Header Strip */}
        <div className="dashboard-header">
          <div className="status-indicator">
            <span className="pulse-dot animate-pulse"></span>
            <span>ESP32 System Online</span>
          </div>
          <div className="batch-id">Batch #RS-1029</div>
        </div>

        <div className="dashboard-grid">
          
          {/* Temperature Monitor */}
          <div className="metric-card glass-panel dark">
            <div className="metric-title">Rotary Drum Temp</div>
            <div className={`metric-value ${temperature > 850 ? 'danger-text' : 'primary-text'}`}>
              {temperature.toFixed(1)}°C
            </div>
            <div className="metric-chart-container">
               <div className="temp-bar" style={{ width: `${(temperature / 900) * 100}%` }}></div>
            </div>
            <div className="metric-footer">Target: {mode === 'FEED' ? '300°C' : '650°C'} | Max: 900°C</div>
          </div>

          {/* CO2 Emissions */}
          <div className="metric-card glass-panel dark">
            <div className="metric-title">MQ-135 CO₂ Level</div>
            <div className={`metric-value ${co2 > 450 ? 'warning-text' : 'primary-text'}`}>
              {co2.toFixed(0)} ppm
            </div>
            <div className="gas-monitor">
               {[...Array(10)].map((_, i) => (
                 <div key={i} className={`gas-pip ${i < (co2 - 380) / 10 ? 'active' : ''}`}></div>
               ))}
            </div>
            <div className="metric-footer">Status: Normal Off-gassing</div>
          </div>

          {/* Power Consumption */}
          <div className="metric-card glass-panel dark">
            <div className="metric-title">Live Power Load</div>
            <div className="metric-value primary-text">
              {power.toFixed(2)} kW
            </div>
            <div className="metric-footer text-right">Limit: 10 kW Capacity</div>
          </div>

          {/* Controller Panel */}
          <div className="control-panel glass-panel dark">
             <div className="metric-title">Product Selector</div>
             <div className="switch-container">
               <span className={mode === 'FEED' ? 'active-mode' : 'inactive-mode'}>Feed Mode (Powder)</span>
               
               <label className="switch">
                 <input type="checkbox" checked={mode === 'SOIL'} onChange={handleModeSwitch} />
                 <span className="slider round"></span>
               </label>
               
               <span className={mode === 'SOIL' ? 'active-mode' : 'inactive-mode'}>Soil Mode (Granule)</span>
             </div>
             
             <button className="btn-emergency">Emergency Stop</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IoTDashboard;
