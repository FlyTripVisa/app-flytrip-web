import { useState, useEffect } from 'react';
import Header from './components/Header';
import VisaList from './components/VisaList';
import AdminDashboard from './components/AdminDashboard';
import './App.css';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [view, setView] = useState('home');

  return (
    <div className="main-wrapper">
      <Header setView={setView} setIsAdmin={setIsAdmin} />
      
      {isAdmin ? (
        <AdminDashboard />
      ) : (
        <main>
          {view === 'home' && <VisaList />}
          {/* অন্য ট্যাবগুলো এখানে কন্ডিশনালি রেন্ডার হবে */}
        </main>
      )}
    </div>
  );
}
export default App;
