# MoneyLens v2.1 — Setup Guide

A mobile-first PWA that reads PDF bank statements with Claude AI, categorises your spending, and saves everything to a named Google Sheet.

---

## What's new in v2.1
- **PDF upload** — drag and drop your PDF bank statement directly; Claude reads it visually
- **True Apple design** — iOS system aesthetic with animated spending ring, SF Pro, system colours, dark mode
- **Google Sheets sync** — all data saves automatically to a sheet you name; syncs live as you make changes
- **Dynamic updates** — add upcoming expenses and every number updates instantly across all tabs

---

## Setup (one-time, ~10 minutes)

### Step 1 — Anthropic API key
1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Sign in → **API Keys** → **Create key**
3. Copy the key (starts with `sk-ant-`)

### Step 2 — Google Apps Script backend
This connects MoneyLens to your Google Sheets.

1. Go to [script.google.com](https://script.google.com) and click **New project**
2. Delete the default code, paste the contents of **`apps-script.js`** (included in this folder)
3. Click **Deploy → New deployment**
4. Type: **Web app** | Execute as: **Me** | Access: **Anyone** → click **Deploy**
5. Copy the **Web App URL** (looks like `https://script.google.com/macros/s/ABC.../exec`)

### Step 3 — Host on GitHub Pages (free)
1. Create a free account at [github.com](https://github.com)
2. Click **New repository** → name it `moneylens` → **Public** → Create
3. Upload these files: `index.html`, `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png`
4. Go to **Settings → Pages → Source → Deploy from branch → main → / (root)** → Save
5. Your URL: `https://YOUR-USERNAME.github.io/moneylens`

### Step 4 — Install on iPhone
1. Open **Safari** on your iPhone (must be Safari, not Chrome)
2. Go to your GitHub Pages URL
3. Tap the **Share** button → **Add to Home Screen** → **Add**
4. MoneyLens is now installed as a native-feeling app

### Step 5 — First run
1. Open MoneyLens from your home screen
2. Enter your **Anthropic API key**, a **sheet name** (e.g. "My Budget 2025"), and your **Apps Script URL**
3. Tap **Get started**

---

## Using MoneyLens

### Uploading a PDF statement
1. Log into your bank's internet banking
2. Find **Statements** or **Transaction history** → download as **PDF**
3. In MoneyLens → tap **Upload** tab → drag or tap to select your PDF
4. Tap **Analyse statement** — Claude reads every page and categorises every transaction

### Understanding the Overview
- The **spending ring** shows your category breakdown at a glance — it updates live
- **Income / Spending / Spare** stats update whenever you add expenses
- Tap any category to filter the Transactions tab

### Adding upcoming expenses
- Use the **Add spend** tab to factor in future costs (car rego, holiday, insurance renewal)
- Every metric updates instantly — spare money, goal progress, the ring
- All added expenses sync to your Google Sheet automatically

### Savings goal
- Set a monthly target on the **Savings** tab
- The progress bar shows where you stand in real time
- If you're short, the savings tips show exactly where to cut

---

## Supported PDF formats
MoneyLens uses Claude's vision to read PDFs visually — it handles virtually any Australian bank:
- **CommBank** (NetBank PDF export)
- **ANZ** (internet banking statement PDF)
- **NAB** (statement PDF)
- **Westpac** (eStatement PDF)
- **Suncorp** (any statement PDF)
- Any bank where the PDF shows dates, descriptions, and amounts

---

## Troubleshooting

| Problem | Fix |
|---|---|
| "Analysis failed" | Check API key in Settings; ensure you have API credits |
| Sync not working | Check Script URL in Settings; re-deploy Apps Script if needed |
| PDF not reading | Try a different export — text-based PDFs work best |
| App not installing | Must use Safari on iPhone, not Chrome |
| No data after reload | Tap Settings → Force sync; check Apps Script is deployed |

---

## Security
- Your API key is stored in your browser's localStorage (device only, never uploaded)
- PDF data is sent to Anthropic's API over HTTPS for analysis only — not stored
- Budget data saves to **your** Google Sheet via **your** Apps Script — Anthropic never sees it
- Don't share your GitHub repo URL publicly if you want the app private
