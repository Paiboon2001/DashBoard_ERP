// Sales Dashboard data (from the reference design).

export const salesHeader = {
  title: 'ภาพรวมประมาณการแผนรายผลิตภัณฑ์ ปี 2569',
  subtitle: 'ข้อมูล ณ วันที่ 26 พฤษภาคม 2568',
  dateBtn: 'ข้อมูล ณ วันที่ 26 พ.ค. 2568',
  downloadBtn: 'ดาวน์โหลดรายงาน',
}

// salesKpis ถูกคำนวณจาก productsTotal ด้านล่าง (ดู export const salesKpis)

// progress table + Top-6 bar chart share these
// ชื่อผลิตภัณฑ์ตรงกับกลุ่มจริงในไฟล์ Excel (หมวด 1–9)
// target=เป้าปี2569, forecast=ประมาณการ, actual=ยอด ม.ค.-พ.ค. (ยอดจริงที่ได้)
// % บรรลุเป้า = ยอดจริงที่ได้ (actual) ÷ เป้าปี 2569 (target)
const _rawProducts = [
  { name: 'activate', target: 30.0, forecast: 30.0, actual: 0.0, color: 'primary' },
  { name: 'อุปกรณ์ Smart innovation', target: 40.0, forecast: 26.16, actual: 8.92, color: 'teal' },
  { name: 'การพัฒนาระบบแลกเปลี่ยนข้อมูลกับบริษัทภายนอก', target: 32.0, forecast: 31.29, actual: 12.04, color: 'secondary' },
  { name: 'ทีมอบรม', target: 16.0, forecast: 10.09, actual: 3.93, color: 'orange' },
  { name: 'ทีม IPD Paperless', target: 86.0, forecast: 61.56, actual: 27.64, color: 'blue' },
  { name: 'ทีม INVENTORY / MA', target: 0.0, forecast: 42.55, actual: 12.56, color: 'green' },
  { name: 'ทีม IM', target: 180.0, forecast: 188.76, actual: 78.02, color: 'red' },
  { name: 'พัฒนา และอื่นๆ', target: 0.0, forecast: 2.52, actual: 0.51, color: 'gray' },
  { name: 'โปรดักส์ใหม่', target: 0.0, forecast: 0.0, actual: 0.0, color: 'primary' },
]
const _achv = (actual, target) =>
  target ? Math.round((actual / target) * 10000) / 100 : 0
export const products = _rawProducts.map((p) => ({
  ...p,
  pct: _achv(p.actual, p.target),
}))
const _pt = products.reduce((s, p) => s + p.target, 0)
const _pf = products.reduce((s, p) => s + p.forecast, 0)
const _pa = products.reduce((s, p) => s + p.actual, 0)
export const productsTotal = {
  target: _pt,
  forecast: _pf,
  actual: _pa,
  pct: _achv(_pa, _pt),
}

// KPI การ์ด — คำนวณจากยอดรวมจริง ให้สอดคล้องกับตารางผลิตภัณฑ์ทั้งหน้า
const _m = (n) => `฿${n.toFixed(2)}M`
const _gap = Math.max(_pt - _pa, 0)
const _gapPct = _pt ? Math.round((_gap / _pt) * 10000) / 100 : 0
export const salesKpis = [
  { label: 'เป้าปี 2569 (รวม)', value: _m(_pt), unit: '', sub: 'เป้าหมายตลอดปี', tone: 'target', icon: '◎' },
  { label: 'ยอดประมาณการปี 2569', value: _m(_pf), unit: '', sub: `${_achv(_pf, _pt)}% ของเป้าหมาย`, tone: 'watch', icon: '📈' },
  { label: 'ยอดจริงที่ได้', value: _m(_pa), unit: '', sub: `เป้าหมายบรรลุ ${_achv(_pa, _pt)}%`, tone: 'forecast', icon: '◔' },
  { label: 'ยอดที่ต้องหาเพิ่ม', value: _m(_gap), unit: '', sub: `${_gapPct}% ของเป้าหมาย`, tone: 'risk', icon: '⚠' },
  { label: 'จำนวนผลิตภัณฑ์ทั้งหมด', value: String(products.length), unit: '', sub: 'ใน ปี 2569', tone: 'count', icon: '💼' },
]

export const yearCompare = [
  { label: 'เป้าปี 2569', value: 300.0, color: 'blue' },
  { label: 'ประมาณการ', value: 210.45, color: 'green' },
  { label: 'ยอดที่ต้องหาเพิ่ม', value: 89.55, color: 'red' },
]

export const months = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.']
export const monthly = {
  target: [18, 19, 20, 22, 23, 24, 25, 25, 27, 28, 32, 40],
  forecast: [12.5, 14.2, 16.1, 17.8, 18.95, 19.6, 20.1, 21.3, 21.3, 22.4, 24.6, 28.3],
  pct: [69, 75, 81, 81, 82, 82, 82, 82, 80, 79, 77, 71],
}

// ข้อมูลจริงจากไฟล์ Excel: สรุปประมาณการแผนปี2569 (ข้อมูล ณ 12 พ.ค. 2569)
// หน่วย: ล้านบาท · โครงสร้าง: ผลิตภัณฑ์หลัก -> หัวข้อย่อย · ผู้รับผิดชอบยังไม่ระบุในไฟล์
const rawActionGroups = [
  {
    name: "activate", forecast: 30.0, need: 0.0, pctNeed: 0.0, status: "ติดตาม",
    items: [
    ],
  },
  {
    name: "อุปกรณ์ Smart innovation", forecast: 26.1555, need: 13.8445, pctNeed: 34.61, status: "ปานกลาง",
    items: [
      { name: "ตู้ kiosk ส่งตรวจ +authen", forecast: 19.0, need: 13.8445, pctNeed: 42.15 },
      { name: "ตู้ kiosk ตู้เก็บเงิน, QR Code, Non", forecast: 1.5, need: 0.0, pctNeed: 0.0 },
      { name: "ตู้ mini kiosk + license", forecast: 2.8, need: 0.0, pctNeed: 0.0 },
      { name: "ชุด Consent I-Claim", forecast: 0.0, need: 0.0, pctNeed: 0.0 },
      { name: "ชุด Consent IDP", forecast: 0.0, need: 0.0, pctNeed: 0.0 },
      { name: "ชุด Authen เพิ่มเติม+อุปกรณ์ซ่อม kiosk", forecast: 0.0, need: 0.0, pctNeed: 0.0 },
      { name: "license kiosk windows", forecast: 1.6, need: 0.0, pctNeed: 0.0 },
      { name: "ชุด Consent paperless", forecast: 0.0, need: 0.0, pctNeed: 0.0 },
      { name: "อุปกรณ์ IPD Paperless เพิ่มเติม", forecast: 0.0, need: 0.0, pctNeed: 0.0 },
      { name: "อุปกรณ์อื่นๆ", forecast: 0.0, need: 0.0, pctNeed: 0.0 },
      { name: "รถเข็นแพทย์ start smart", forecast: 0.6555, need: 0.0, pctNeed: 0.0 },
      { name: "รถเข็นแพทย์ start smart พร้อม ipd ppl ขึ้นเอง", forecast: 0.6, need: 0.0, pctNeed: 0.0 },
      { name: "remote kiosk", forecast: 0.0, need: 0.0, pctNeed: 0.0 },
    ],
  },
  {
    name: "การพัฒนาระบบแลกเปลี่ยนข้อมูลกับบริษัทภายนอก", forecast: 31.2873, need: 0.0, pctNeed: 0.0, status: "ติดตาม",
    items: [
      { name: "ติดตั้งระบบเชื่อมต่อ LIS+PACs (ทีมจิ๊บ)", forecast: 17.0, need: 0.0, pctNeed: 0.0 },
      { name: "เชื่อมเครื่องนับเม็ดยา (ทีมจิ๊บ)", forecast: 0.642, need: 0.0, pctNeed: 0.0 },
      { name: "ติดตั้งระบบเชื่อมอื่นๆ API Rest - ทีมจิ๊บ", forecast: 1.0, need: 0.0, pctNeed: 0.0 },
      { name: "ติดตั้งระบบเชื่อมอื่นๆ API Rest - ทีมพี่ถา", forecast: 10.0, need: 0.0, pctNeed: 0.0 },
      { name: "ติดตั้งระบบเชื่อมอื่นๆ API Rest - ทีมเอี๋ยม", forecast: 0.4, need: 0.0, pctNeed: 0.0 },
      { name: "พัฒนาเชื่อมต่อ API Rest - ทีมจิ๊บ", forecast: 0.9, need: 0.0, pctNeed: 0.0 },
      { name: "พัฒนาเชื่อมต่อ API Rest - ทีมพี่ถา", forecast: 0.9, need: 0.0, pctNeed: 0.0 },
      { name: "พัฒนาเชื่อมต่อ API Rest - ทีมพี่เอี๋ยม", forecast: 0.0, need: 0.0, pctNeed: 0.0 },
      { name: "license การเชื่อมข้อมูล/AI (inet, EDN)", forecast: 0.4453, need: 0.0, pctNeed: 0.0 },
      { name: "เชื่อมต่อเป๋าตังค์", forecast: 0.0, need: 0.0, pctNeed: 0.0 },
    ],
  },
  {
    name: "ทีมอบรม", forecast: 10.0924, need: 0.0, pctNeed: 0.0, status: "ติดตาม",
    items: [
      { name: "อบรม (Report Designer, ภาพจังหวัด ฯลฯ)", forecast: 1.2724, need: 0.0, pctNeed: 0.0 },
      { name: "อบรม HIE", forecast: 8.82, need: 0.0, pctNeed: 0.0 },
      { name: "อบรม HOSxP PCU XE ระดับ cup", forecast: 0.0, need: 0.0, pctNeed: 0.0 },
      { name: "HOSxP ภาพจังหวัด", forecast: 0.0, need: 0.0, pctNeed: 0.0 },
    ],
  },
  {
    name: "ทีม IPD Paperless", forecast: 61.5589, need: 0.0, pctNeed: 0.0, status: "ติดตาม",
    items: [
      { name: "ติดตั้ง IPD Paperless", forecast: 57.3371, need: 0.0, pctNeed: 0.0 },
      { name: "Hardware IPD Paperless", forecast: 0.0, need: 0.0, pctNeed: 0.0 },
      { name: "license ipd paperless", forecast: 3.6008, need: 0.0, pctNeed: 0.0 },
      { name: "Package license ipd paperless ด้วยตนเอง", forecast: 0.0, need: 0.0, pctNeed: 0.0 },
      { name: "อบรม Package license ipd paperless ด้วยตนเอง", forecast: 0.0, need: 0.0, pctNeed: 0.0 },
      { name: "MA IPD Paperless", forecast: 0.621, need: 0.0, pctNeed: 0.0 },
    ],
  },
  {
    name: "ทีม INVENTORY / MA", forecast: 42.552, need: 22.3544, pctNeed: 34.44, status: "ปานกลาง",
    items: [
      { name: "Back ent (ครุภัณฑ์)", forecast: 2.992, need: 4.1984, pctNeed: 58.39 },
      { name: "ระบบ Inventory ไซต์เล็ก", forecast: 8.96, need: 0.0, pctNeed: 0.0 },
      { name: "ระบบ Inventory ไซต์ใหญ่", forecast: 7.216, need: 0.0, pctNeed: 0.0 },
      { name: "ระบบบัญชี", forecast: 7.84, need: 13.7, pctNeed: 63.6 },
      { name: "MA HOSxP", forecast: 13.044, need: 4.456, pctNeed: 25.46 },
      { name: "MA Server", forecast: 2.5, need: 0.0, pctNeed: 0.0 },
    ],
  },
  {
    name: "ทีม IM", forecast: 188.761, need: 0.0, pctNeed: 0.0, status: "ติดตาม",
    items: [
      { name: "ติดตั้งโปรแกรม HOSxP", forecast: 111.5192, need: 0.0, pctNeed: 0.0 },
      { name: "ปรับปรุง HOSxP V3 เป็น XE", forecast: 76.9208, need: 0.0, pctNeed: 0.0 },
      { name: "ระบบคิว", forecast: 0.321, need: 0.0, pctNeed: 0.0 },
    ],
  },
  {
    name: "พัฒนา และอื่นๆ", forecast: 2.52, need: 0.0, pctNeed: 0.0, status: "ติดตาม",
    items: [
    ],
  },
  {
    name: "โปรดักส์ใหม่", forecast: 0.0, need: 45.3, pctNeed: 100.0, status: "เร่งด่วน",
    items: [
      { name: "Package AI", forecast: 0.0, need: 5.0, pctNeed: 100.0 },
      { name: "Package HOSxP Plus + ER Paperless + ดัชบอร์ด ER", forecast: 0.0, need: 7.2, pctNeed: 100.0 },
      { name: "Package เชื่อมส่งตรวจ OVST Key", forecast: 0.0, need: 0.5, pctNeed: 100.0 },
      { name: "ระบบตรวจสอบสิทธิ์ประกัน+อุปกรณ์", forecast: 0.0, need: 5.6, pctNeed: 100.0 },
      { name: "Cloud สำหรับออกหน่วย โดย EHP HIS", forecast: 0.0, need: 5.0, pctNeed: 100.0 },
      { name: "HR", forecast: 0.0, need: 0.0, pctNeed: 0.0 },
      { name: "การสำรอง server สำรองภาวะฉุกเฉินของ รพ.", forecast: 0.0, need: 0.0, pctNeed: 0.0 },
      { name: "Central Monitor", forecast: 0.0, need: 5.0, pctNeed: 100.0 },
      { name: "ตรวจสอบข้อมูลพื้นฐาน+ดัชบอร์ดส่งออก", forecast: 0.0, need: 5.0, pctNeed: 100.0 },
      { name: "meta base", forecast: 0.0, need: 6.0, pctNeed: 100.0 },
      { name: "lab online", forecast: 0.0, need: 6.0, pctNeed: 100.0 },
      { name: "ระบบยามะเร็ง", forecast: 0.0, need: 0.0, pctNeed: 0.0 },
      { name: "ระบบงาน IC", forecast: 0.0, need: 0.0, pctNeed: 0.0 },
      { name: "ภาระงานพยาบาล+เวรพยาบาล", forecast: 0.0, need: 0.0, pctNeed: 0.0 },
    ],
  },
]

// --- ข้อมูลสมมุติ (assumed) เพื่อความสมบูรณ์ของตาราง ---
// ผู้รับผิดชอบ/จำนวนเงินบางส่วน/สถานะ เป็นค่าสมมุติ (ไฟล์จริงไม่ได้ระบุ)
const OWNERS = [
  'คุณศรัญญา ทองสุข', 'คุณจิรภักร วงศ์ไพศาล', 'คุณกิตติพงษ์ ศรีสุวรรณ',
  'คุณพิชรินทร์ บุญมาก', 'คุณวีระ แก้วมณี', 'คุณนภา จันทร์เพ็ญ',
  'คุณสมชาย ใจดี', 'คุณปรียา รัตนพงศ์', 'คุณอรุณ สว่างวงศ์',
  'คุณธนพล เกียรติคุณ', 'คุณมณีรัตน์ พูนผล', 'คุณเอกชัย ตั้งมั่น',
  'คุณสุนิสา อิ่มเอม', 'คุณภาคิน รุ่งเรือง', 'คุณกานดา ทรัพย์เจริญ',
]
// pseudo-random แบบ deterministic (seed คงที่ → ผลลัพธ์เสถียรทุกครั้ง)
const rng = (seed) => {
  const x = Math.sin(seed * 99.13 + 7.7) * 43758.5453
  return x - Math.floor(x)
}
const r2 = (n) => Math.round(n * 100) / 100
const statusOf = (p) => (p >= 66 ? 'เร่งด่วน' : p >= 33 ? 'ปานกลาง' : 'ติดตาม')
const teamFrom = (name) => {
  const m = String(name).match(/\((ทีม[^)]+)\)/)
  return m ? m[1].trim() : ''
}

let _seed = 0
const enrichItem = (it) => {
  _seed += 1
  let forecast = it.forecast
  let need = it.need
  if (forecast === 0 && need === 0) {
    forecast = r2(0.5 + rng(_seed) * 6) // สมมุติ 0.5–6.5M
    need = r2(forecast * (0.1 + rng(_seed + 1) * 0.5)) // 10–60%
  }
  const pctNeed = forecast + need ? r2((need / (forecast + need)) * 100) : 0
  const owner = teamFrom(it.name) || OWNERS[(_seed * 3) % OWNERS.length]
  return { ...it, forecast, need, pctNeed, owner, status: statusOf(pctNeed) }
}

export const actionGroups = rawActionGroups.map((g, gi) => {
  const items = g.items.map(enrichItem)
  let forecast = g.forecast
  let need = g.need
  if (items.length) {
    forecast = r2(items.reduce((s, i) => s + i.forecast, 0))
    need = r2(items.reduce((s, i) => s + i.need, 0))
  }
  const pctNeed = forecast + need ? r2((need / (forecast + need)) * 100) : 0
  return {
    ...g,
    forecast,
    need,
    pctNeed,
    status: statusOf(pctNeed),
    owner: OWNERS[gi % OWNERS.length],
    items,
  }
})

const _af = r2(actionGroups.reduce((s, g) => s + g.forecast, 0))
const _an = r2(actionGroups.reduce((s, g) => s + g.need, 0))
export const actionsTotal = {
  forecast: _af,
  need: _an,
  pctNeed: _af + _an ? (_an / (_af + _an)) * 100 : 0,
}

export const salesFooter =
  'หมายเหตุ: ข้อมูลจากไฟล์ประมาณการแผนรายผลิตภัณฑ์_2569.xlsx | จัดทำโดย Sales Planning Team'
