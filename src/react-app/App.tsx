import { useState, useEffect } from 'react';

export default function App() {
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("isAdmin") === "true");
  const [view, setView] = useState("home");

  const loginAdmin = () => {
    localStorage.setItem("isAdmin", "true");
    setIsAdmin(true);
  };

  const logoutAdmin = () => {
    localStorage.removeItem("isAdmin");
    setIsAdmin(false);
  };

  return (
    <div className="main-wrapper">
      <header className="glass-header">
        <div className="logo">✈ FLYTRIP</div>
        <button onClick={isAdmin ? logoutAdmin : loginAdmin}>
          {isAdmin ? "ইউজার মোড" : "অ্যাডমিন লগইন"}
        </button>
      </header>

      {isAdmin ? (
        <AdminPanel />
      ) : (
        <div className="content">
          <h1>স্বাগতম ফ্লাইট্রিপ গ্রুপে</h1>
          <button onClick={() => fetch("/api/admin/data").then(r => r.json()).then(console.log)}>
            ডেটা লোড
          </button>
        </div>
      )}
    </div>
  );
}

function AdminPanel() {
  return (
    <div className="admin-view" style={{display: 'block', padding: '20px'}}>
      <h2>🛠 অ্যাডমিন প্যানেল</h2>
      <div className="admin-section">
        <input className="admin-input" placeholder="নতুন ভিসা এন্ট্রি" />
        <button className="admin-submit-btn">সেভ করুন</button>
      </div>
    </div>
  );
}
