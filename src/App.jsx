import {
  header,
  kpis,
  categories,
  bullets,
  progress,
  gap,
  footer,
} from './data.js'

function PageHeader() {
  return (
    <div className="page-header">
      <div>
        <div className="page-title">{header.title}</div>
        <div className="page-subtitle">{header.subtitle}</div>
      </div>
      <div className="header-badge">
        <span className="header-badge-dot" />
        {header.badge}
      </div>
    </div>
  )
}

function KpiRow() {
  return (
    <div className="kpi-row">
      {kpis.map((k) => (
        <div className="kpi-card" key={k.label}>
          <div className="kpi-label">{k.label}</div>
          <div className={`kpi-value${k.valueClass ? ' ' + k.valueClass : ''}`}>
            {k.value}
          </div>
          <div className={`kpi-sub${k.subClass ? ' ' + k.subClass : ''}`}>
            {k.sub}
          </div>
        </div>
      ))}
    </div>
  )
}

function CategoryGrid() {
  return (
    <div className="cat-grid">
      {categories.map((c) => (
        <div className="cat-card" key={c.label}>
          <div className="cat-label">{c.label}</div>
          <div className="cat-value">{c.value}</div>
          <span className={`cat-pill ${c.pillClass}`}>{c.pill}</span>
        </div>
      ))}
    </div>
  )
}

function BulletChart() {
  return (
    <div className="card">
      <div className="card-title">{bullets.title}</div>
      <div className="card-subtitle">{bullets.subtitle}</div>
      <div className="bullet-list">
        {bullets.rows.map((r) => (
          <div className="bullet-row" key={r.name}>
            <div className="bullet-name">{r.name}</div>
            <div className="bullet-track">
              <div
                className={`bullet-fill ${r.color}`}
                style={{ width: `${r.pct}%` }}
              />
              <div className="bullet-target" style={{ left: '100%' }} />
            </div>
            <div className="bullet-meta">{r.meta}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProgressCard() {
  return (
    <div className="card">
      <div className="section-head">{progress.head}</div>
      <div className="section-sub">{progress.sub}</div>
      <div className="progress-list">
        {progress.items.map((p) => (
          <div className="progress-item" key={p.name}>
            <div className="progress-top">
              <span className="progress-name">{p.name}</span>
              <span className={`progress-pct ${p.color}`}>{p.pct}%</span>
            </div>
            <div className="progress-bar">
              <div
                className={`progress-bar-fill ${p.color}`}
                style={{ width: `${p.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function GapCard() {
  return (
    <div className="card">
      <div className="section-head">{gap.head}</div>
      <div className="section-sub">{gap.sub}</div>
      <div className="gap-list">
        {gap.items.map((g) => (
          <div className="gap-item" key={g.name}>
            <span className="gap-name">{g.name}</span>
            <span className={`gap-amount ${g.color}`}>{g.amount}</span>
          </div>
        ))}
      </div>
      <div className="alert-box" style={{ marginTop: 18 }}>
        <div className="alert-icon">!</div>
        <div className="alert-text">
          <strong>{gap.alert.line1}</strong>
          <br />
          {gap.alert.line2}
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="container">
      <PageHeader />
      <KpiRow />
      <CategoryGrid />
      <BulletChart />
      <div className="two-col">
        <ProgressCard />
        <GapCard />
      </div>
      <div className="footer-note">{footer}</div>
    </div>
  )
}
