import { Hono } from "hono";
import { serveStatic } from "hono/cloudflare-workers";

// Env টাইপ ডেফিনিশন (আপনার প্রজেক্ট অনুযায়ী)
type Bindings = {
  ASSETS: Fetcher;
}

const app = new Hono<{ Bindings: Bindings }>();

// API রাউট
app.get("/api/", (c) => c.json({ name: "FlyTripAdmin" }));

// কনফিগারেশন: রুট ইউআরএল এ ইনডেক্স ফাইল সার্ভ করা
app.get("/*", serveStatic({ root: "./" }));

export default app;
