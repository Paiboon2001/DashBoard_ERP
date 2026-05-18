import { Fragment, useEffect, useRef, useState } from 'react'
import '../sales.css'
import {
  salesHeader,
  salesKpis,
  products,
  productsTotal,
  actionGroups,
  actionsTotal,
} from '../salesData.js'

const pctClass = (p) => (p >= 60 ? 'green' : p >= 40 ? 'orange' : 'red')
const statusClass = (s) =>
  s === 'เร่งด่วน' ? 'red' : s === 'ปานกลาง' ? 'orange' : 'blue'
const fmt = (n) => n.toFixed(2)

function CardIcon({ type = 'chart' }) {
  return (
    <span className="s-card-icon" aria-hidden="true">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        {type === 'doc' ? (
          <>
            <path
              d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"
              stroke="white"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path
              d="M14 3v5h5M8.5 13h7M8.5 16.5h7"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        ) : (
          <>
            <path
              d="M4 4v15a1 1 0 0 0 1 1h15"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect x="7.5" y="11" width="2.6" height="6" rx="1" fill="white" />
            <rect x="12" y="8" width="2.6" height="9" rx="1" fill="white" />
            <rect x="16.5" y="5" width="2.6" height="12" rx="1" fill="white" />
          </>
        )}
      </svg>
    </span>
  )
}

function KpiIcon({ k }) {
  if (k.tone === 'target') {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path
          d="M16 8V5L19 2L20 4L22 5L19 8H16ZM16 8L12 11.9999M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
  if (k.tone === 'watch') {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path
          d="M9.08997 8.99999C9.32507 8.33166 9.78912 7.7681 10.3999 7.40912C11.0107 7.05015 11.7289 6.91893 12.4271 7.0387C13.1254 7.15848 13.7588 7.52151 14.215 8.06352C14.6713 8.60552 14.921 9.29151 14.92 9.99999C14.92 12 11.92 13 11.92 13M12 17H12.01M2 8.52274V15.4773C2 15.7218 2 15.8441 2.02763 15.9592C2.05213 16.0613 2.09253 16.1588 2.14736 16.2483C2.2092 16.3492 2.29568 16.4357 2.46863 16.6086L7.39137 21.5314C7.56432 21.7043 7.6508 21.7908 7.75172 21.8526C7.84119 21.9075 7.93873 21.9479 8.04077 21.9724C8.15586 22 8.27815 22 8.52274 22H15.4773C15.7218 22 15.8441 22 15.9592 21.9724C16.0613 21.9479 16.1588 21.9075 16.2483 21.8526C16.3492 21.7908 16.4357 21.7043 16.6086 21.5314L21.5314 16.6086C21.7043 16.4357 21.7908 16.3492 21.8526 16.2483C21.9075 16.1588 21.9479 16.0613 21.9724 15.9592C22 15.8441 22 15.7218 22 15.4773V8.52274C22 8.27815 22 8.15586 21.9724 8.04077C21.9479 7.93873 21.9075 7.84119 21.8526 7.75172C21.7908 7.6508 21.7043 7.56432 21.5314 7.39137L16.6086 2.46863C16.4357 2.29568 16.3492 2.2092 16.2483 2.14736C16.1588 2.09253 16.0613 2.05213 15.9592 2.02763C15.8441 2 15.7218 2 15.4773 2H8.52274C8.27815 2 8.15586 2 8.04077 2.02763C7.93873 2.05213 7.84119 2.09253 7.75172 2.14736C7.6508 2.2092 7.56432 2.29568 7.39137 2.46863L2.46863 7.39137C2.29568 7.56432 2.2092 7.6508 2.14736 7.75172C2.09253 7.84119 2.05213 7.93873 2.02763 8.04077C2 8.15586 2 8.27815 2 8.52274Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
  if (k.tone === 'forecast') {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path
          d="M9.5 7.5H13.75C14.9926 7.5 16 8.50736 16 9.75C16 10.9926 14.9926 12 13.75 12H9.5H14.25C15.4926 12 16.5 13.0074 16.5 14.25C16.5 15.4926 15.4926 16.5 14.25 16.5H9.5M9.5 7.5H8M9.5 7.5V16.5M9.5 16.5H8M10 6V7.5M10 16.5V18M13 6V7.5M13 16.5V18M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
  if (k.tone === 'risk') {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
  if (k.tone === 'count') {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 7.9966C3.83599 7.99236 3.7169 7.98287 3.60982 7.96157C2.81644 7.80376 2.19624 7.18356 2.03843 6.39018C2 6.19698 2 5.96466 2 5.5C2 5.03534 2 4.80302 2.03843 4.60982C2.19624 3.81644 2.81644 3.19624 3.60982 3.03843C3.80302 3 4.03534 3 4.5 3H19.5C19.9647 3 20.197 3 20.3902 3.03843C21.1836 3.19624 21.8038 3.81644 21.9616 4.60982C22 4.80302 22 5.03534 22 5.5C22 5.96466 22 6.19698 21.9616 6.39018C21.8038 7.18356 21.1836 7.80376 20.3902 7.96157C20.2831 7.98287 20.164 7.99236 20 7.9966M10 13H14M4 8H20V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V8Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
  return <>{k.icon}</>
}

function Kpis() {
  return (
    <div className="s-kpi-row">
      {salesKpis.map((k) => (
        <div className={`s-kpi tone-${k.tone}`} key={k.label}>
          <div className="s-kpi-body">
            <div className="s-kpi-label">{k.label}</div>
            <div className="s-kpi-value">{k.value}</div>
            {k.unit && <div className="s-kpi-unit">{k.unit}</div>}
            <div className="s-kpi-sub">{k.sub}</div>
          </div>
          <div className="s-kpi-icon">
            <KpiIcon k={k} />
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
        <span className="s-title-l">
          <CardIcon />
          ความก้าวหน้า เป้าและประมาณการรายผลิตภัณฑ์
        </span>
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
  const [open, setOpen] = useState(() => new Set())
  const toggle = (i) =>
    setOpen((prev) => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })
  return (
    <div className="s-card">
      <div className="s-card-title">
        <span className="s-title-l">
          <CardIcon type="doc" />
          รายการที่ต้องเร่งดำเนินการ (ยอดที่ต้องหาเพิ่ม)
        </span>
      </div>
      <table className="s-table fixed">
        <colgroup>
          <col style={{ width: '350px' }} />
          <col />
          <col />
          <col />
          <col />
          <col />
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
          {actionGroups.map((g, gi) => {
            const isOpen = open.has(gi)
            const hasItems = g.items.length > 0
            return (
              <Fragment key={g.name}>
                <tr
                  className={`s-group${hasItems ? ' s-group-btn' : ''}${
                    isOpen ? ' open' : ''
                  }`}
                  onClick={hasItems ? () => toggle(gi) : undefined}
                >
                  <td>
                    {gi + 1}. {g.name}
                  </td>
                  <td className="num">{fmt(g.forecast)}M</td>
                  <td className="num">{fmt(g.need)}M</td>
                  <td className="num">{fmt(g.pctNeed)}%</td>
                  <td className="ctr">{g.owner || '-'}</td>
                  <td className="ctr s-status-cell">
                    <span className={`s-status ${statusClass(g.status)}`}>
                      {g.status}
                    </span>
                    {hasItems && (
                      <svg
                        className="s-caret"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </td>
                </tr>
                {isOpen &&
                  g.items.map((it, ii) => (
                    <tr className="s-sub" key={g.name + it.name + ii}>
                      <td>
                        <span className="s-subno">
                          {gi + 1}.{ii + 1}
                        </span>
                        {it.name}
                      </td>
                      <td className="num">{fmt(it.forecast)}M</td>
                      <td className="num">{fmt(it.need)}M</td>
                      <td className="num">{fmt(it.pctNeed)}%</td>
                      <td className="ctr">{it.owner || '-'}</td>
                      <td className="ctr">
                        <span className={`s-status ${statusClass(it.status)}`}>
                          {it.status}
                        </span>
                      </td>
                    </tr>
                  ))}
              </Fragment>
            )
          })}
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

function YearSelect({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [])
  return (
    <div className="s-dd" ref={ref}>
      <button
        type="button"
        className="s-btn s-dd-btn"
        onClick={() => setOpen((o) => !o)}
      >
        <span>ปี {value}</span>
        <svg
          className={`s-dd-caret${open ? ' open' : ''}`}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open && (
        <ul className="s-dd-menu" role="listbox">
          {YEARS.map((y) => (
            <li
              key={y}
              role="option"
              aria-selected={y === value}
              className={`s-dd-opt${y === value ? ' sel' : ''}`}
              onClick={() => {
                onChange(y)
                setOpen(false)
              }}
            >
              <span>ปี {y}</span>
              {y === value && (
                <svg
                  className="s-dd-check"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

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
            <YearSelect value={year} onChange={setYear} />
            <button className="s-btn primary">
              <svg
                className="s-btn-ic"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 15V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V15M7 10L12 15L17 10M12 15V3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {salesHeader.downloadBtn}
            </button>
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
