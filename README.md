# SWG Security Tester

A single‑file Cloudflare Worker that performs multi‑method checks against a curated set of destinations and renders a dark, lightweight UI to review results and export a PDF report.

This Worker serves a self‑contained web app (no backend state) and a health endpoint.

---

## Features

* Multi‑method probing per site (Image, Script, Prefetch — as implemented in the final code)
* Consensus‑based verdicts (High / Medium / Unclear) to reduce CORS/CSP false readings
* Manual Verify flow for Unclear results (opens target in a new tab and lets you mark the outcome)
* PDF export (summary + per‑test details) generated client‑side
* Health check at `/healthz`
* URLs are hidden in the visible UI (targets live only in code)

---

## Architecture

```
Cloudflare Worker
├─ GET /            → HTML single‑page app (UI + client‑side detection)
├─ GET /healthz     → { ok, version, ts }
└─ (No external APIs required)
```

The browser executes probes and decisioning. The Worker serves static HTML/CSS/JS and the health JSON.

---

## Requirements

* Cloudflare account with Workers enabled
* Node.js (for Wrangler CLI)

---

## Quick Start (Wrangler)

1. Install and log in:

```bash
npm i -g wrangler
wrangler login
```

2. Initialize a Worker project (or use an existing one):

```bash
wrangler init swg-tester
```

3. Place your final Worker script at:

```
./swg-tester/src/index.js
```

> If you use the `functions/` directory routing style, update `main` accordingly.

4. Minimal `wrangler.toml`:

```toml
name = "swg-tester"
main = "src/index.js"
compatibility_date = "2024-10-01"
```

5. Deploy:

```bash
wrangler deploy
```

6. Smoke test the health endpoint:

```bash
curl -s https://<your-worker>/healthz
# { "ok": true, "version": "<your-version>", "ts": 1690000000000 }
```

Open the root URL in a browser to use the UI.

---

## How It Works

Each test runs multiple lightweight probes from the browser:

* **Image Load** (`<img>`)
* **Script Load** (`<script>`)
* **Link Prefetch** (`<link rel="prefetch">`)

Each probe yields one of: **allowed**, **blocked**, or **unclear** (to account for CORS/CSP/MIME quirks). A voting/consensus step converts the signals into a final verdict:

* 3/3 allowed → **Allowed (High)**
* 3/3 blocked → **Blocked (High)**
* 2/3 with no opposite vote → **Allowed/Blocked (Medium)**
* Anything else → **Unclear (Low)** → use **Verify** to manually confirm

The app also provides a **Tab Test** (open target in a new tab), **retry/backoff**, and timing safeguards to avoid flapping when policies are toggled.

---

## Configuration

Open the Worker file and find the `TESTS` array. Example entry:

```js
{
  id: "social",
  type: "category",   // e.g., av | bot | category | etc.
  name: "Social Media (Instagram)",
  desc: "On-device partial block detection",
  url: "https://www.instagram.com/"
  // optional fields depending on your build (e.g., fav, robots, exe)
}
```

You can:

* Add / remove tests
* Adjust timeouts, retries, and delays (constants like `TIMEOUT`, `RETRIES`, `DELAY`)
* Tweak decision rules if you want stricter or looser consensus

> The UI hides raw URLs. They remain in code and may appear in the PDF depending on your columns.

---

## Using the App

* **Start Scan**: runs all tests with short gaps
* **Reset**: returns all cards to *Pending*
* **Export PDF**: prompts for analyst details (if implemented), then downloads a report
* **Verify** (for Unclear): opens a new tab to manually confirm allowed/blocked and mark the card

Global counters (Blocked / Allowed / Unclear) update live.

---

## PDF Export

* Generated entirely client‑side with jsPDF
* Includes high‑level summary and per‑test outcomes
* If the jsPDF CDN is blocked, host it locally or bundle it

---

## Troubleshooting

* **Everything shows “Unclear”**: Try alternative resource endpoints on the same domain (e.g., a tiny PNG/JS). Some sites block script/image loads by CSP/CORS even when allowed by policy.
* **Pop‑ups blocked**: Allow pop‑ups for your Worker domain so **Verify** can open tabs.
* **Healthcheck fails**: Ensure your route points to this Worker and deployment succeeded.
* **PDF won’t download**: Confirm the jsPDF library is reachable or bundle it directly.

---

## Security Notes

* No server‑side storage; all detection and logging run in the browser.
* Keep test targets to safe resources; this tool is intended for policy validation only.
* For precise tests, consider hosting canary assets with permissive CORS and stable MIME types.

---
