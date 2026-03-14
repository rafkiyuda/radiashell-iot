import './ProductCatalog.css';

const ProductCatalog = () => {
  const products = [
    {
      id: "PROD-01",
      name: "Bio-Calcium Powder",
      tagline: "High-Purity Bio-Calcium Alami",
      image: "/product-bio-calcium.png",
      description: "Serbuk kalsium premium hasil kalsinasi mikrogelombang. Diperkaya nutrisi untuk kesehatan hewan ternak dan kepastian kualitas feed grade.",
      features: ["1kg Sack / Pouch", "Animal Feed Grade", "Tinggi CaCO3 / CaO"],
      price: "Rp 15.000 / kg",
      color: "var(--accent-primary)"
    },
    {
      id: "PROD-02",
      name: "Soil Conditioner",
      tagline: "Nutrient Enhancer for Soil",
      image: "/product-soil-conditioner.png",
      description: "Pembenah tanah organik dalam bentuk granul. Efektif menetralkan pH tanah asam dan memberikan pelepasan nutrisi yang stabil.",
      features: ["1kg & 5kg Sack", "Organic Soil Enhancer", "Slow Release Granule"],
      price: "Rp 8.500 / kg",
      color: "#84cc16"
    }
  ];

  return (
    <section className="products-section section-container" id="products">
      <h2 className="section-title">Product Solutions</h2>
      <p className="products-subtitle">Hasil olahan limbah cangkang menjadi produk bernilai tinggi untuk Agribisnis.</p>

      <div className="products-grid">
        {products.map((product, idx) => (
          <div className="product-card glass-panel animate-fade-in" key={idx} style={{ animationDelay: `${idx * 0.2}s` }}>
            <div className="product-image-container">
              <img src={product.image} alt={product.name} className="product-img" />
              <div className="product-id">{product.id}</div>
            </div>
            
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-tagline" style={{ color: product.color }}>{product.tagline}</p>
              <p className="product-desc">{product.description}</p>
              
              <div className="product-features">
                {product.features.map((f, i) => (
                  <span key={i} className="badge-small">{f}</span>
                ))}
              </div>

              <div className="product-footer">
                <div className="product-price">{product.price}</div>
                <button className="btn-buy">Beli Sekarang</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCatalog;
