import './SellShells.css';

const SellShells = () => {
  return (
    <section className="shells-section section-container" id="sell-shells">
      <div className="shells-content">
        <div className="shells-text animate-fade-in">
          <div className="badge">FARMER PARTNERSHIP</div>
          <h2 className="section-title text-left">Ubah Limbah Jadi <span className="text-gradient">Rupiah</span></h2>
          <p className="shells-description">
            Kami membeli cangkang kerang mentah (Mussels, Oysters) langsung dari sentra pengupasan Anda. 
            Bergabunglah dalam rantai pasok berkelanjutan RadiaShell dan tingkatkan pendapatan dari limbah pesisir.
          </p>
          
          <ul className="shells-features">
            <li>
              <span className="feature-icon">💰</span>
              <div>
                <h4>Harga Kompetitif</h4>
                <p>Pembelian dengan harga terbaik berdasarkan kualitas dan berat cangkang.</p>
              </div>
            </li>
            <li>
              <span className="feature-icon">📍</span>
              <div>
                <h4>Collection Point Luas</h4>
                <p>Tersedia titik pengumpulan di area pesisir Cirebon dan sekitarnya.</p>
              </div>
            </li>
            <li>
              <span className="feature-icon">🛡️</span>
              <div>
                <h4>Pembayaran Instan</h4>
                <p>Sistem pembayaran transparan dan cepat setelah verifikasi berat (Load Cell).</p>
              </div>
            </li>
          </ul>

          <div className="shells-actions">
            <button className="btn-primary">Daftar Jadi Mitra</button>
            <button className="btn-secondary">Cek Lokasi Drop-off</button>
          </div>
        </div>

        <div className="shells-visual glass-panel animate-fade-in">
          <img src="/farmer-partnership.png" alt="Farmer Partnership" className="farmer-img" />
          <div className="visual-overlay">
             <div className="live-tag">LOKASI AKTIF: CIREBON</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellShells;
