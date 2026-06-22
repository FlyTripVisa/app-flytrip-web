import React, { useEffect, useState } from 'react';
import './App.css'; // আপনার সিএসএস এখানে রাখুন
import { flyTripService } from './FlyTripService';

const App: React.FC = () => {
    // এখানে আপনার লজিক এবং স্টেট ম্যানেজমেন্ট হবে
    useEffect(() => {
        // প্রজেক্ট ইনিশিয়াল লজিক এখানে কল করুন
        console.log("Dashboard Loaded");
    }, []);

    return (
        <div className="main-wrapper">
            {/* User View */}
            <div id="userView">
                <header className="glass-header">
                    <div className="logo">✈ FLYTRIP</div>
                    <div className="header-actions">
                        <select id="languageSelector" className="lang-select">
                            <option value="en">EN</option>
                            <option value="bn">BN</option>
                            <option value="zh">ZH</option>
                        </select>
                        <div className="user-badge" id="globalUserBtn">👤</div>
                    </div>
                </header>

                <main id="tabContentHome">
                    <div className="search-area">
                        <div className="search-glass">
                            <span>🔍</span>
                            <input type="text" id="globalSearchInput" placeholder="ভিসা, ফ্লাইট, হোটেল অনুসন্ধান..." />
                        </div>
                    </div>
                    
                    <div className="hero-glow">
                        <h2>ফ্লাই & স্টে স্মার্ট</h2>
                        <p>ফ্লাইট · হোটেল · ভিসা — ডিজিটাল প্ল্যাটফর্ম | রিয়েল-টাইম ট্র্যাকিং ও অ্যাডমিন কন্ট্রোল</p>
                    </div>

                    <div className="icon-menu">
                        <div className="menu-item"><div className="menu-icon">✈️</div><span>ফ্লাইট</span></div>
                        <div className="menu-item"><div className="menu-icon">🏨</div><span>হোটেল</span></div>
                        <div className="menu-item"><div className="menu-icon">🛂</div><span>ভিসা</span></div>
                        <div className="menu-item"><div className="menu-icon">🌍</div><span>এক্সপ্লোর</span></div>
                    </div>

                    <div className="trend-header"><h3>✈ ফ্লাইট ডিলস</h3><a href="#">সব দেখুন →</a></div>
                    <div id="flightOffersGrid" className="section-grid"></div>

                    <div className="trend-header"><h3>🏨 প্রিমিয়াম হোটেল</h3><a href="#">সব দেখুন →</a></div>
                    <div id="hotelOffersGrid" className="section-grid"></div>

                    <div className="trend-header"><h3>🔥 ট্রেন্ডিং ভিসা</h3><a href="#">সব দেখুন →</a></div>
                    <div id="visaContainer" className="section-grid"></div>
                </main>

                <footer className="app-footer">
                    <div className="footer-logo">✈ FLYTRIP GROUP</div>
                    <p className="footer-desc">আধুনিক ফ্লাইট, হোটেল ও ভিসা সমাধান। ২৪/৭ কাস্টমার সাপোর্ট।</p>
                    <p className="footer-copyright">© ২০২৫ ফ্লাইট্রিপ গ্রুপ । সর্বস্বত্ব সংরক্ষিত।</p>
                </footer>
            </div>
            
            {/* Bottom Nav */}
            <div className="bottom-tab" id="bottomTabNavigation">
                <a href="#" className="tab-icon active">🏠</a>
                <a href="#" className="tab-icon">📍</a>
                <a href="#" className="tab-icon">💼</a>
                <a href="#" className="tab-icon">👤</a>
            </div>
        </div>
    );
};

export default App;
