// Dựng trang tĩnh cho từng ngôn ngữ: src/index.html (khuôn) + lang/<mã>.json → dist/
// Chạy: node build.mjs   (Node thuần, không cần cài gói nào)

import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'

const SITE = 'https://vuthanhbayit.github.io/'
// Ngôn ngữ đứng đầu nằm ở gốc trang; thêm ngôn ngữ = thêm một dòng ở đây + một file lang/<mã>.json
const LANGS = [
  { code: 'vi', dir: '', label: 'VI' },
  { code: 'en', dir: 'en/', label: 'EN' },
]
const OUT = 'dist'

const template = readFileSync('src/index.html', 'utf8')
const strings = Object.fromEntries(LANGS.map((l) => [l.code, JSON.parse(readFileSync(`lang/${l.code}.json`, 'utf8'))]))

function flatKeys(obj, prefix = '') {
  return Object.entries(obj).flatMap(([k, v]) =>
    v !== null && typeof v === 'object' ? flatKeys(v, `${prefix}${k}.`) : [`${prefix}${k}`],
  )
}

function lookup(obj, path) {
  return path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj)
}

// Mọi ngôn ngữ phải có đúng cùng bộ khoá, thiếu hay thừa một câu là dừng
const baseKeys = flatKeys(strings[LANGS[0].code]).sort()
for (const { code } of LANGS.slice(1)) {
  const keys = new Set(flatKeys(strings[code]))
  const missing = baseKeys.filter((k) => !keys.has(k))
  const extra = [...keys].filter((k) => !baseKeys.includes(k))
  if (missing.length || extra.length) {
    throw new Error(`lang/${code}.json lệch với lang/${LANGS[0].code}.json — thiếu: [${missing}] thừa: [${extra}]`)
  }
}

const relative = (from, to) => '../'.repeat(from.dir.split('/').filter(Boolean).length) + to.dir || './'

function pageContext(lang) {
  const hreflang = [
    ...LANGS.map((l) => `<link rel="alternate" hreflang="${l.code}" href="${SITE}${l.dir}" />`),
    `<link rel="alternate" hreflang="x-default" href="${SITE}${LANGS[0].dir}" />`,
  ].join('\n')
  const items = LANGS.map((l) =>
    l.code === lang.code
      ? `<span class="on" aria-current="true">${l.label}</span>`
      : `<a href="${relative(lang, l)}" hreflang="${l.code}" lang="${l.code}">${l.label}</a>`,
  ).join('')
  return {
    url: SITE + lang.dir,
    base: '../'.repeat(lang.dir.split('/').filter(Boolean).length),
    hreflang,
    langItems: items,
  }
}

function render(lang) {
  const context = { ...strings[lang.code], page: pageContext(lang) }
  const used = new Set()
  const html = template.replace(/\{\{\s*([\w.]+)\s*\}\}/g, (_, path) => {
    const value = lookup(context, path)
    if (value === undefined || (value !== null && typeof value === 'object')) {
      throw new Error(`Khuôn dùng khoá «${path}» nhưng lang/${lang.code}.json không có`)
    }
    used.add(path)
    return String(value)
  })
  const unused = baseKeys.filter((k) => !used.has(k))
  if (unused.length) console.warn(`[${lang.code}] khoá có trong JSON nhưng khuôn không dùng: ${unused.join(', ')}`)
  return html
}

rmSync(OUT, { recursive: true, force: true })
cpSync('public', OUT, { recursive: true })
for (const lang of LANGS) {
  mkdirSync(`${OUT}/${lang.dir}`, { recursive: true })
  writeFileSync(`${OUT}/${lang.dir}index.html`, render(lang))
  console.log(`✓ ${OUT}/${lang.dir}index.html (${lang.code})`)
}
