// Sales Dashboard data (from the reference design).

export const salesHeader = {
  title: 'ภาพรวมประมาณการแผนรายผลิตภัณฑ์ ปี 2569',
  subtitle: 'ข้อมูล ณ วันที่ 26 พฤษภาคม 2568',
  dateBtn: 'ข้อมูล ณ วันที่ 26 พ.ค. 2568',
  downloadBtn: 'ดาวน์โหลดรายงาน',
}

export const salesKpis = [
  { label: 'เป้าปี 2569 (รวม)', value: '฿300.00M', unit: '', sub: 'เป้าหมายตลอดปี', tone: 'target', icon: '◎' },
  { label: 'ยอดประมาณการปี 2569', value: '฿210.45M', unit: '', sub: '70.15% ของเป้าหมาย', tone: 'watch', icon: '📈' },
  { label: 'ยอดจริงที่ได้', value: '฿168.85M', unit: '', sub: 'เป้าหมายบรรลุ 70.15%', tone: 'forecast', icon: '◔' },
  { label: 'ยอดที่ต้องหาเพิ่ม', value: '฿89.55M', unit: '', sub: '29.85% ของเป้าหมาย', tone: 'risk', icon: '⚠' },
  { label: 'จำนวนผลิตภัณฑ์ทั้งหมด', value: '32', unit: '', sub: 'ใน ปี 2569', tone: 'count', icon: '💼' },
]

// progress table + Top-6 bar chart share these
// `actual` = ยอดจริงที่ได้ (placeholder figures — adjust to real values)
export const products = [
  { name: 'IPD Paperless', target: 42.0, forecast: 30.35, actual: 25.45, pct: 72.26, color: 'primary' },
  { name: 'Kiosk + Authen', target: 40.0, forecast: 19.2, actual: 15.8, pct: 48.0, color: 'teal' },
  { name: 'Activate', target: 30.0, forecast: 14.85, actual: 11.2, pct: 49.5, color: 'secondary' },
  { name: 'E-Form', target: 20.0, forecast: 13.25, actual: 10.5, pct: 66.25, color: 'orange' },
  { name: 'Cloud Service', target: 15.0, forecast: 9.4, actual: 7.3, pct: 62.67, color: 'blue' },
  { name: 'ทีม IM (HOSxP)', target: 50.0, forecast: 42.0, actual: 34.0, pct: 84.0, color: 'green' },
  { name: 'API / เชื่อมต่อ', target: 30.0, forecast: 24.0, actual: 19.0, pct: 80.0, color: 'red' },
  { name: 'Inventory / MA', target: 28.0, forecast: 22.0, actual: 17.0, pct: 78.57, color: 'gray' },
  { name: 'Smart Innovation', target: 20.0, forecast: 16.0, actual: 13.0, pct: 80.0, color: 'secondary' },
  { name: 'ทีมอบรม', target: 15.0, forecast: 12.0, actual: 9.6, pct: 80.0, color: 'teal' },
  { name: 'Package AI / ใหม่', target: 10.0, forecast: 7.4, actual: 6.0, pct: 74.0, color: 'blue' },
]
export const productsTotal = { target: 300.0, forecast: 210.45, actual: 168.85, pct: 70.15 }

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

export const actions = [
  { name: 'Kiosk + Authen', forecast: 19.2, need: 20.8, pctNeed: 52.0, owner: 'คุณศรัญญา ทองสุข', status: 'เร่งด่วน' },
  { name: 'Activate', forecast: 14.85, need: 15.15, pctNeed: 50.5, owner: 'คุณจิรภักร วงศ์ไพศาล', status: 'เร่งด่วน' },
  { name: 'E-Form', forecast: 13.25, need: 6.75, pctNeed: 33.75, owner: 'คุณกิตติพงษ์ ศรีสุวรรณ', status: 'ปานกลาง' },
  { name: 'Cloud Service', forecast: 9.4, need: 5.6, pctNeed: 37.33, owner: 'คุณพิชรินทร์ บุญมาก', status: 'ปานกลาง' },
  { name: 'ทีม IM (HOSxP)', forecast: 42.0, need: 8.0, pctNeed: 16.0, owner: 'คุณวีระ แก้วมณี', status: 'ติดตาม' },
  { name: 'API / เชื่อมต่อ', forecast: 24.0, need: 6.0, pctNeed: 20.0, owner: 'คุณนภา จันทร์เพ็ญ', status: 'ติดตาม' },
  { name: 'Inventory / MA', forecast: 22.0, need: 5.0, pctNeed: 18.52, owner: 'คุณสมชาย ใจดี', status: 'ติดตาม' },
  { name: 'Smart Innovation', forecast: 16.0, need: 4.0, pctNeed: 20.0, owner: 'คุณปรียา รัตนพงศ์', status: 'ติดตาม' },
  { name: 'ทีมอบรม', forecast: 12.0, need: 4.0, pctNeed: 25.0, owner: 'คุณอรุณ สว่างวงศ์', status: 'ปานกลาง' },
  { name: 'Package AI / ใหม่', forecast: 7.4, need: 2.6, pctNeed: 26.0, owner: 'ทีมขาย ส่วนกลาง', status: 'ปานกลาง' },
]
export const actionsTotal = { forecast: 180.1, need: 77.9, pctNeed: 36.99 }

export const salesFooter =
  'หมายเหตุ: ข้อมูลจากไฟล์ประมาณการแผนรายผลิตภัณฑ์_2569.xlsx | จัดทำโดย Sales Planning Team'
