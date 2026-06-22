import { useEffect, useState } from 'react';

interface VisaApp { id: number; email: string; country: string; status: string; }

export default function AdminDashboard() {
  const [data, setData] = useState<VisaApp[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/data')
      .then(res => res.json())
      .then(json => {
        setData(Array.isArray(json) ? json : []);
        setLoading(false);
      })
      .catch(err => { console.error(err); setLoading(false); });
  }, []);

  return (
    <div className="admin-container" style={{ padding: '20px' }}>
      <h1>🛠 অ্যাডমিন ড্যাশবোর্ড</h1>
      {loading ? <p>লোড হচ্ছে...</p> : (
        <table border={1} style={{ width: '100%' }}>
          <thead><tr><th>ID</th><th>ইমেইল</th><th>দেশ</th><th>স্ট্যাটাস</th></tr></thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td><td>{item.email}</td><td>{item.country}</td><td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
