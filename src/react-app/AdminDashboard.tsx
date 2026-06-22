import React, { useState, useEffect } from 'react';

const AdminDashboard: React.FC = () => {
    // স্টেট ম্যানেজমেন্ট
    const [visaApps, setVisaApps] = useState([]);
    const [flights, setFlights] = useState([]);
    const [hotels, setHotels] = useState([]);

    // ডেটা লোড লজিক
    useEffect(() => {
        const loadAdminData = () => {
            const storedVisas = JSON.parse(localStorage.getItem('fly_apps') || '[]');
            setVisaApps(storedVisas);
        };
        loadAdminData();
    }, []);

    // অনুমোদন/বাতিল লজিক
    const handleStatusUpdate = (id: string, status: string) => {
        const updatedApps = visaApps.map((app: any) => 
            app.id === id ? { ...app, status } : app
        );
        setVisaApps(updatedApps);
        localStorage.setItem('fly_apps', JSON.stringify(updatedApps));
    };

    return (
        <div className="admin-view">
            <h2>🛠 অ্যাডমিন প্যানেল</h2>
            {/* এখানে আপনার অ্যাডমিন সেকশন এবং লুপগুলো বসবে */}
            <div className="admin-section">
                <h4 className="admin-section-title">📋 ভিসা আবেদন লিস্ট</h4>
                {visaApps.map((app: any) => (
                    <div key={app.id} className="data-item">
                        <div>{app.country} - {app.status}</div>
                        <button onClick={() => handleStatusUpdate(app.id, 'Approved')}>✅</button>
                        <button onClick={() => handleStatusUpdate(app.id, 'Rejected')}>❌</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminDashboard;
