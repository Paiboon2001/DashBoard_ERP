// Dashboard content. Thai labels were reconstructed from the source file
// (the original was mojibake-corrupted). Adjust any wording as needed.

export const header = {
  title: 'สรุปประมาณการเบิกปี 2569',
  subtitle: 'รายผลิตภัณฑ์ · ข้อมูล ณ 12 พฤษภาคม 2569',
  badge: 'อัปเดตล่าสุด · 5/12 เดือน',
}

export const kpis = [
  { label: 'เป้าหมายปี 2569', value: '฿480M', sub: 'รวมทุกผลิตภัณฑ์' },
  { label: 'ยอด ม.ค.–พ.ค.', value: '฿143.6M', sub: '↑ 29.9% ของเป้า', subClass: 'up' },
  { label: 'ประมาณการทั้งปี', value: '฿392.9M', sub: '81.9% ของเป้า', subClass: 'warn' },
  { label: 'ช่องห่างเพิ่ม', value: '฿36.7M', valueClass: 'danger', sub: 'Gap ปลายปี' },
]

export const categories = [
  { label: 'ทีม IM (HOSxP)', value: '฿78.0M', pill: '43.3% • on-track', pillClass: 'green' },
  { label: 'IPD Paperless', value: '฿27.6M', pill: '32.1% • watching', pillClass: 'orange' },
  { label: 'API / เชื่อมต่อ', value: '฿12.0M', pill: '37.6% • watching', pillClass: 'orange' },
  { label: 'Inventory / MA', value: '฿12.6M', pill: '19.4% • at risk', pillClass: 'red' },
]

export const bullets = {
  title: 'Bullet Chart – ยอดจริง vs เป้า รายผลิตภัณฑ์',
  subtitle: 'แท่งเข้ม = ยอดจริง · เส้นตั้งดำ = เป้าทั้งปี · ขีดดำ = ระดับเป้าเทียบ',
  rows: [
    { name: 'ทีม IM (HOSxP)', pct: 43.3, color: 'green', meta: '฿78M / 180M' },
    { name: 'IPD Paperless', pct: 32.1, color: 'orange', meta: '฿27.6M / 86M' },
    { name: 'API / เชื่อมต่อ', pct: 37.6, color: 'orange', meta: '฿12M / 32M' },
    { name: 'Inventory / MA', pct: 19.4, color: 'red', meta: '฿12.6M / 65M' },
    { name: 'Smart Innovation', pct: 12.7, color: 'red', meta: '฿8.9M / 70M' },
    { name: 'ทีมอบรม', pct: 24.6, color: 'red', meta: '฿3.9M / 16M' },
    { name: 'Package AI / ใหม่', pct: 0, color: 'empty', meta: '฿0 / 45.3M' },
  ],
}

export const progress = {
  head: '% บรรลุเป้า',
  sub: 'Benchmark ม.ค.–พ.ค. = 41.7%',
  items: [
    { name: 'ทีม IM (HOSxP)', pct: 43.3, color: 'green' },
    { name: 'API / เชื่อมต่อ', pct: 37.6, color: 'orange' },
    { name: 'IPD Paperless', pct: 32.1, color: 'orange' },
    { name: 'ทีมอบรม', pct: 24.6, color: 'red' },
    { name: 'Inventory / MA', pct: 19.4, color: 'red' },
    { name: 'Smart Innovation', pct: 12.7, color: 'red' },
    { name: 'Package AI / ใหม่', pct: 0, color: 'red' },
  ],
}

export const gap = {
  head: 'ยอดช่องห่างเพิ่ม (Top 5)',
  sub: 'เรียงจากมาก – น้อย',
  items: [
    { name: 'ทีมอบรม', amount: '฿16.0M', color: 'red' },
    { name: 'ออดิต (Smart Innov + Activate)', amount: '฿13.8M', color: 'red' },
    { name: 'ระบบบัญชี', amount: '฿13.7M', color: 'orange' },
    { name: 'Package AI / แพ็กเกจส่งใหม่', amount: '฿7.2M', color: 'orange' },
    { name: 'Central Monitor', amount: '฿5.0M', color: 'orange' },
  ],
  alert: {
    line1: 'มี 7 หมวด ต่ำกว่า benchmark 41.7%',
    line2: 'ต้องเร่งยอดอีก ฿36.7M เพื่อปิดเป้าปลายปี',
  },
}

export const footer =
  'BMS Revenue Dashboard · ที่มา: สรุปประมาณการเบิกปี 2569 รายผลิตภัณฑ์'
