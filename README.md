# DashBoard_ERP — BMS Revenue Dashboard 2569

React (Vite) port of the BMS Revenue Dashboard.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Structure

- `src/App.jsx` — layout + presentational components (header, KPIs, bullet chart, progress, gap).
- `src/data.js` — all dashboard content/numbers (edit here to update figures).
- `src/styles.css` — original dashboard CSS, unchanged.

## Note on Thai text

The source HTML was mojibake-corrupted (UTF-8 read as Latin-1). Thai labels in
`src/data.js` were reconstructed from context — review and tweak wording there.
