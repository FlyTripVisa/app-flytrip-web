import { useState, useEffect } from 'react';
export default function App() {
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("isAdmin") === "true");
  const [visaData, setVisaData] = useState([{ id: 1, country: "দুবাই", price: "৯,৫০০ ৳" }]);

  const toggleMode = () => {
    const nextMode = !isAdmin;
    setIsAdmin(nextMode);
    localStorage.setItem("isAdmin", nextMode.toString());
  };

  return (
    <div className="main-wrapper">
      {/* Header */}
      <header className="glass-header">
        <div className="logo">✈ FLYTRIP</div>
        <button onClick={toggleMode} style={{background: '#ff5500', padding: '5px 10px', borderRadius: '20px'}}>
          {isAdmin ? "ইউজার মোড" : "অ্যাডমিন মোড"}
        </button>
      </header>

      {isAdmin ? (
        // অ্যাডমিন ড্যাশবোর্ড
        <div className="admin-view" style={{display: 'block', padding: '20px'}}>
          <h2>🛠 অ্যাডমিন প্যানেল</h2>
          <div className="admin-section">
            <input className="admin-input" id="countryInput" placeholder="দেশের নাম" />
            <button className="admin-submit-btn" onClick={() => {
              const val = (document.getElementById('countryInput') as HTMLInputElement).value;
              setVisaData([...visaData, { id: Date.now(), country: val, price: "০ ৳" }]);
            }}>পাবলিশ করুন</button>
          </div>
        </div>
      ) : (
        // ইউজার হোম পেজ
        <div id="tabContentHome" style={{padding: '20px'}}>
          <div className="hero-glow"><h2>ফ্লাই & স্টে স্মার্ট</h2><p>আপনার গন্তব্য এখন হাতের মুঠোয়</p></div>
          <div className="section-grid">
            {visaData.map(v => (
              <div key={v.id} className="offer-card">
                <div className="offer-title">{v.country}</div>
                <div className="offer-price">{v.price}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
