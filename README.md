# CarBreezy

## Local Development

```bash
npm install
npm run dev
```

## Vercel Deployment — EXACT SETTINGS

When you push to GitHub and connect to Vercel, use these EXACT settings in the Vercel dashboard:

| Setting | Value |
|---|---|
| **Framework Preset** | Vite |
| **Root Directory** | `carbreezy_fixed` |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` |

> ⚠️ The Root Directory MUST be set to `carbreezy_fixed` if your GitHub repo is `e-project--main`.
> If you move the contents of `carbreezy_fixed` to the repo root, set Root Directory to `./`

## File Structure

```
carbreezy_fixed/
├── public/
│   └── offers.xml          ← XML served at runtime
├── src/
│   ├── assets/             ← logo + placeholder
│   ├── components/         ← Navbar, Footer, Ticker, CarCard, CarModal
│   ├── data/
│   │   └── cars.json       ← 72 cars with Unsplash image URLs
│   ├── pages/              ← 8 pages
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── vercel.json             ← handles React Router 404s
```

## Team Photos (Contact Page)

1. Drop your photos in `src/assets/team/`
2. Open `src/pages/Contact.jsx`
3. At the top, import each photo:
   ```js
   import img1 from '../assets/team/yourname.jpg'
   ```
4. In the TEAM_MEMBERS array, set `image: img1`
