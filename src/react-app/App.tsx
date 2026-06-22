import { useState } from 'react';
import AdminDashboard from './AdminDashboard';

export default function App() {
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("isAdmin") === "true");

  const toggleMode = () => {
    const nextMode = !isAdmin;
    setIsAdmin(nextMode);
    localStorage.setItem("isAdmin", nextMode.toString());
  };

  return (
    <div className="main-wrapper">
      <header className="glass-header">
        <div className="logo">✈ FLYTRIP</div>
        <button onClick={toggleMode}>{isAdmin ? "ইউজার মোড" : "অ্যাডমিন মোড"}</button>
      </header>

      {isAdmin ? <AdminDashboard /> : (
        <div className="hero-section">
          <h2>ফ্লাই & স্টে স্মার্ট</h2>
        </div>
      )}
    </div>
  );
}
