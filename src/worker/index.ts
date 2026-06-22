import { Hono } from 'hono';

// ডেটাবেজ বাইন্ডিং টাইপ
type Bindings = {
  flytripvisa_db: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>();

// অ্যাডমিন ড্যাশবোর্ডে ভিসা অ্যাপ্লিকেশনের লিস্ট দেখার API
app.get('/api/admin/applications', async (c) => {
  try {
    const { results } = await c.env.flytripvisa_db
      .prepare("SELECT * FROM applications ORDER BY id DESC")
      .all();
    return c.json(results);
  } catch (err) {
    return c.json({ error: "Database error" }, 500);
  }
});

// ভিসা আবেদন জমা দেওয়া
app.post('/api/visa/apply', async (c) => {
  const body = await c.req.json();
  const { email, country, status } = body;

  await c.env.flytripvisa_db
    .prepare("INSERT INTO applications (email, country, status) VALUES (?, ?, ?)")
    .bind(email, country, status)
    .run();

  return c.json({ success: true });
});

export default app;
