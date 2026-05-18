import { useState } from 'react'
import '../sales.css'
import {
  salesHeader,
  salesKpis,
  products,
  productsTotal,
  actions,
  actionsTotal,
} from '../salesData.js'

const pctClass = (p) => (p >= 60 ? 'green' : p >= 40 ? 'orange' : 'red')
const statusClass = (s) =>
  s === 'เร่งด่วน' ? 'red' : s === 'ปานกลาง' ? 'orange' : 'blue'
const fmt = (n) => n.toFixed(2)

function Kpis() {
  return (
    <div className="s-kpi-row">
      {salesKpis.map((k) => (
        <div className={`s-kpi tone-${k.tone}`} key={k.label}>
          <div className="s-kpi-icon">{k.icon}</div>
          <div className="s-kpi-body">
            <div className="s-kpi-label">{k.label}</div>
            <div className="s-kpi-value">{k.value}</div>
            {k.unit && <div className="s-kpi-unit">{k.unit}</div>}
            <div className="s-kpi-sub">{k.sub}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

// Figma: "ความก้าวหน้า เป้าและประมาณการรายผลิตภัณฑ์"
function ProductCard() {
  const max = 160
  const ticks = [0, 40, 80, 120, 160]
  return (
    <div className="s-card pp-card">
      <div className="s-card-title">
        ความก้าวหน้า เป้าและประมาณการรายผลิตภัณฑ์
        <span className="s-unit">หน่วย : ล้านบาท</span>
      </div>

      <div className="pp-head">
        <div className="pp-name">ผลิตภัณฑ์</div>
        <div className="pp-bar">
          <div className="pp-axis">
            {ticks.map((t) => (
              <span key={t}>{t}M</span>
            ))}
          </div>
        </div>
        <div className="pp-num">เป้าปี 2569</div>
        <div className="pp-num">ประมาณการ</div>
        <div className="pp-num">ยอดจริงที่ได้</div>
        <div className="pp-num">% บรรลุเป้า</div>
      </div>

      <div className="pp-scroll">
        {products.map((p) => (
          <div className="pp-row" key={p.name}>
            <div className="pp-name">
              <span className={`s-dot ${p.color}`} />
              {p.name}
            </div>
            <div className="pp-bar">
              <div className="pp-track">
                <div
                  className={`pp-fill ${p.color}`}
                  style={{
                    width: `${Math.min((p.actual / max) * 100, 100)}%`,
                  }}
                >
                  <span className="pp-pct">{fmt(p.pct)}%</span>
                </div>
              </div>
            </div>
            <div className="pp-num val">{fmt(p.target)}M</div>
            <div className="pp-num val">{fmt(p.forecast)}M</div>
            <div className="pp-num val">{fmt(p.actual)}M</div>
            <div className={`pp-num val pct ${pctClass(p.pct)}`}>
              {fmt(p.pct)}%
            </div>
          </div>
        ))}
      </div>

      <div className="pp-row pp-total">
        <div className="pp-name">รวม</div>
        <div className="pp-bar" />
        <div className="pp-num val">{fmt(productsTotal.target)}M</div>
        <div className="pp-num val">{fmt(productsTotal.forecast)}M</div>
        <div className="pp-num val">{fmt(productsTotal.actual)}M</div>
        <div className="pp-num val">{fmt(productsTotal.pct)}%</div>
      </div>
    </div>
  )
}

function ActionTable() {
  return (
    <div className="s-card">
      <div className="s-card-title">รายการที่ต้องเร่งดำเนินการ (ยอดที่ต้องหาเพิ่ม)</div>
      <table className="s-table fixed">
        <colgroup>
          <col style={{ width: '16.66%' }} />
          <col style={{ width: '16.66%' }} />
          <col style={{ width: '16.66%' }} />
          <col style={{ width: '16.66%' }} />
          <col style={{ width: '16.66%' }} />
          <col style={{ width: '16.66%' }} />
        </colgroup>
        <thead>
          <tr>
            <th>ผลิตภัณฑ์</th>
            <th className="num">ประมาณการ<br />(ล้านบาท)</th>
            <th className="num">ยอดที่ต้องหาเพิ่ม<br />(ล้านบาท)</th>
            <th className="num">% ที่ต้องหาเพิ่ม</th>
            <th className="ctr">ผู้รับผิดชอบ</th>
            <th className="ctr">สถานะ</th>
          </tr>
        </thead>
        <tbody>
          {actions.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td className="num">{fmt(a.forecast)}M</td>
              <td className="num">{fmt(a.need)}M</td>
              <td className="num">{fmt(a.pctNeed)}%</td>
              <td className="ctr">{a.owner}</td>
              <td className="ctr">
                <span className={`s-status ${statusClass(a.status)}`}>
                  {a.status}
                </span>
              </td>
            </tr>
          ))}
          <tr className="s-total">
            <td>รวม</td>
            <td className="num">{fmt(actionsTotal.forecast)}M</td>
            <td className="num">{fmt(actionsTotal.need)}M</td>
            <td className="num">{fmt(actionsTotal.pctNeed)}%</td>
            <td className="ctr">-</td>
            <td className="ctr">-</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const YEARS = [2566, 2567, 2568, 2569, 2570]

export default function SalesDashboard() {
  const [year, setYear] = useState(2569)
  return (
    <div className="s-wrap">
      <div className="s-screen">
        <div className="s-headrow">
          <div>
            <div className="s-title">{salesHeader.title}</div>
            <div className="s-subtitle">{salesHeader.subtitle}</div>
          </div>
          <div className="s-head-actions">
            <select
              className="s-btn s-year"
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
            >
              {YEARS.map((y) => (
                <option key={y} value={y}>
                  ปี {y}
                </option>
              ))}
            </select>
            <button className="s-btn primary">⭳ {salesHeader.downloadBtn}</button>
          </div>
        </div>

        <Kpis />

        <div className="s-row3">
          <ProductCard />
        </div>

        <div className="s-row2">
          <ActionTable />
        </div>
      </div>
    </div>
  )
}
