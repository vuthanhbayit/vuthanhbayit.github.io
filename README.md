# Vũ Thanh Bảy — Senior Frontend Engineer

Trang cá nhân: https://vuthanhbayit.github.io/ · English: https://vuthanhbayit.github.io/en/

Gần 8 năm làm giao diện web với Vue / Nuxt. Từ 2026 dẫn dắt xây nền tảng bán lẻ đa site cùng AI.

## Cấu trúc

- `src/index.html` — khuôn của trang (HTML, CSS, JavaScript thuần, một tấm canvas vẽ băng giấy). Chỗ nào có chữ thì để `{{khoá}}`.
- `lang/vi.json`, `lang/en.json` — toàn bộ câu chữ, mỗi ngôn ngữ một file, cùng một bộ khoá.
- `public/` — file đi kèm, chép nguyên sang trang: CV tiếng Việt, CV tiếng Anh, `robots.txt`.
- `build.mjs` — ghép khuôn với từng file ngôn ngữ, ra `dist/index.html` (tiếng Việt) và `dist/en/index.html` (tiếng Anh). Node thuần, không cần cài gói nào.
- `.github/workflows/deploy.yml` — đẩy lên nhánh `main` là GitHub tự dựng rồi đưa `dist/` lên GitHub Pages.

## Sửa chữ, thêm ngôn ngữ

- Sửa một câu: sửa trong `lang/<mã>.json`, không đụng tới khuôn.
- Thêm câu mới: thêm khoá vào **mọi** file ngôn ngữ rồi đặt `{{khoá}}` vào khuôn. Thiếu ở một ngôn ngữ là lệnh dựng dừng và báo tên khoá.
- Thêm ngôn ngữ: thêm `lang/<mã>.json` và một dòng trong `LANGS` ở đầu `build.mjs`.

## Xem ở máy

```bash
node build.mjs
```

```bash
python3 -m http.server 4322 --directory dist
```

Rồi mở http://localhost:4322/ và http://localhost:4322/en/

## Bản cũ

Portfolio kiểu VS Code (Nuxt 3, 01/2026) nằm ở nhánh [`portfolio-vscode-2026-01`](https://github.com/vuthanhbayit/vuthanhbayit.github.io/tree/portfolio-vscode-2026-01).

## Liên hệ

- Email: vuthanhbayit@gmail.com
- GitHub: https://github.com/vuthanhbayit
