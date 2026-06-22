import { Hono } from 'hono';
import { serveStatic } from 'hono/cloudflare-workers';

type Bindings = { 
  flytripvisa_db: D1Database; 
  ASSETS: Fetcher; 
};

const app = new Hono<{ Bindings: Bindings }>();

// API এন্ডপয়েন্ট
app.get('/api/admin/data', async (c) => {
  try {
    const { results } = await c.env.flytripvisa_db.prepare("SELECT * FROM applications").all();
    return c.json(results);
  } catch (e) {
    return c.json({ error: "Database query failed" }, 500);
  }
});

// স্ট্যাটিক ফাইল হ্যান্ডলার
app.get('/*', async (c, next) => {
  return serveStatic({ 
    root: './',
    manifest: (await import('__STATIC_CONTENT_MANIFEST')).default 
  })(c, next);
});

export default app;
