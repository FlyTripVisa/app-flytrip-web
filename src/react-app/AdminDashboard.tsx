import { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // এপিআই থেকে ডেটা আনা
  useEffect(() => {
    fetch('/api/admin/data')
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="admin-container" style={{ padding: '20px', color: '#fff' }}>
      <h1>অ্যাডমিন ড্যাশবোর্ড</h1>
      {loading ? <p>লোড হচ্ছে...</p> : (
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
            {data.map((item: any) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.email}</td>
                <td>{item.country}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
