import { Hono } from 'hono';
import { cors } from 'hono/cors';

const app = new Hono<{ Bindings: Env }>();

// CORS এনাবল করুন যাতে আপনার ফ্রন্টএন্ড থেকে API হিট করা যায়
app.use('/*', cors());

// স্ট্যাটাস চেক
app.get('/api/status', (c) => c.json({ status: 'online', version: '1.0.0' }));

// ভিসা আবেদন রিসিভ করার এন্ডপয়েন্ট
app.post('/api/visa/apply', async (c) => {
  const body = await c.req.json();
  // এখানে আপনি KV বা D1 ডেটাবেজে ডেটা সেভ করার লজিক লিখবেন
  console.log("New Application:", body);
  return c.json({ success: true, message: 'আবেদন সফলভাবে গৃহীত হয়েছে' });
});

// অ্যাডমিন ড্যাশবোর্ড ডেটা ফেচ করার এন্ডপয়েন্ট
app.get('/api/admin/data', (c) => {
  // এখানে আপনার ডেটাবেজ থেকে ডেটা কুয়েরি করে পাঠাবেন
  const mockData = {
    totalApps: 15,
    flights: 5,
    hotels: 3
  };
  return c.json(mockData);
});

export default app;
