import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-background" style={{ backgroundImage: "url('/hero-bg.png')" }}>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content animate-fade-in">
        <div className="badge">MAC v1.0</div>
        <h1 className="hero-title">
          Smart Green <br/>
          <span className="text-gradient">Biorefinery Platform</span>
        </h1>
        <p className="hero-subtitle">
          End-to-end portable processing unit integrating mechanical processing & IoT monitoring 
          for sustainable marine waste management.
        </p>
        
        <div className="hero-stats">
          <div className="stat-card glass-panel">
            <span className="stat-value">10kW</span>
            <span className="stat-label">Power Consumption</span>
          </div>
          <div className="stat-card glass-panel">
            <span className="stat-value">+50%</span>
            <span className="stat-label">Energy Efficiency</span>
          </div>
          <div className="stat-card glass-panel">
            <span className="stat-value">2x1.5m</span>
            <span className="stat-label">Line Footprint</span>
          </div>
        </div>

        <div className="hero-actions">
          <button className="btn-primary">Explore Architecture</button>
          <button className="btn-secondary">View IoT Dashboard</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
