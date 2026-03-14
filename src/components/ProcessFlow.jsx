import './ProcessFlow.css';

const ProcessFlow = () => {
  const stages = [
    {
      id: "01",
      title: "Pre-Processing",
      desc: "Raw shells are crushed via Hammer Mill to 2-5mm granules and fed via Screw Conveyor.",
      icon: "⚙️"
    },
    {
      id: "02",
      title: "Thermal Processing",
      desc: "Microwave-assisted calcination at 200-900°C in a massive rotary drum.",
      icon: "🔥"
    },
    {
      id: "03",
      title: "Nutrient Blending",
      desc: "Vitamin D3 blending and product bifurcation via pneumatic diverter switch.",
      icon: "🧪"
    },
    {
      id: "04A",
      title: "Bio-Calcium Packing",
      desc: "Auto-packer filling 1kg pouches with premium feed-grade bio-calcium.",
      icon: "📦"
    },
    {
      id: "04B",
      title: "Soil Conditioner",
      desc: "Hydration and granulation converting powder to 2-6mm granules for soil application.",
      icon: "🌱"
    }
  ];

  return (
    <section className="process-section section-container" id="process">
      <h2 className="section-title">End-to-End Processing Architecture</h2>
      <p className="process-subtitle">From raw marine waste to multi-grade bio-calcium products in a continuous flow.</p>
      
      <div className="process-grid">
        {stages.map((stage, idx) => (
          <div className="process-card glass-panel animate-fade-in" key={idx} style={{ animationDelay: `${idx * 0.15}s` }}>
            <div className="process-header">
              <span className="process-id">{stage.id}</span>
              <span className="process-icon">{stage.icon}</span>
            </div>
            <h3 className="process-title">{stage.title}</h3>
            <p className="process-desc">{stage.desc}</p>
            
            {idx < stages.length - 2 && (
              <div className="process-connector"></div>
            )}
          </div>
        ))}
      </div>
      
      <div className="machine-showcase glass-panel">
        <div className="machine-info">
          <h3>Rotary Calcination Drum</h3>
          <p>The core of RadiaShell MAC v1.0, featuring uniform microwave heat distribution and MQ-135 CO2 emissions monitoring.</p>
        </div>
        <div className="machine-image-container">
           <img src="/machine-accent.png" alt="Rotary Calcination Drum" className="machine-img" />
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
