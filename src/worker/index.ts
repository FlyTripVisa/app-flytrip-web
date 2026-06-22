import { Hono } from 'hono';
import { serveStatic } from 'hono/cloudflare-workers';

type Bindings = { flytripvisa_db: D1Database; ASSETS: Fetcher; };
const app = new Hono<{ Bindings: Bindings }>();

// API এন্ডপয়েন্ট
app.get('/api/admin/data', async (c) => {
  const { results } = await c.env.flytripvisa_db.prepare("SELECT * FROM applications").all();
  return c.json(results);
});

// স্ট্যাটিক ফাইল ও ফ্রন্টএন্ড রুট
app.get('/*', serveStatic({ root: './' }));

export default app;
