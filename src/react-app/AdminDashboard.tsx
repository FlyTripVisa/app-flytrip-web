import { useEffect, useState } from 'react';

// ডেটার টাইপ ডিফাইন করলাম এরর এড়াতে
interface VisaApp {
  id: number;
  email: string;
  country: string;
  status: string;
}

export default function AdminDashboard() {
  const [data, setData] = useState<VisaApp[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/data')
      .then(res => res.json())
      .then(json => {
        // নিশ্চিত করছি যে json একটি অ্যারে
        setData(Array.isArray(json) ? json : []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="admin-container" style={{ padding: '20px', color: '#fff' }}>
      <h1>অ্যাডমিন ড্যাশবোর্ড</h1>
      {loading ? (
        <p>লোড হচ্ছে...</p>
      ) : (
        <table border={1} style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>ইমেইল</th>
              <th>দেশ</th>
              <th>স্ট্যাটাস</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item: VisaApp) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.country}</td>
                  <td>{item.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} style={{ textAlign: 'center' }}>কোনো ডেটা পাওয়া যায়নি</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
