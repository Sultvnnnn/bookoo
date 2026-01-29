# 📚 BOOKOO - Next-Gen Library App

> **UAS Front-End Development**
> Aplikasi manajemen katalog buku modern dengan gaya desain **Neobrutalism**, dibangun menggunakan ekosistem teknologi JavaScript terbaru (2025 Ready).

![License](https://img.shields.io/badge/License-MIT-black?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.0-purple?style=for-the-badge&logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)

## Tentang Project

**Bookoo** adalah aplikasi web _Single Page Application_ (SPA) yang dirancang untuk mendemonstrasikan implementasi **CRUD** (Create, Read, Update, Delete) yang mulus dengan antarmuka pengguna (UI) yang unik dan berkarakter.

Project ini tidak hanya berfokus pada fungsionalitas, tetapi juga pada **User Experience (UX)** dan **Performance** dengan memanfaatkan fitur _concurrency_ dari React 19 dan engine build super cepat Vite 7.

### Fitur Unggulan:

1. **🎨 Dynamic Neobrutalism Skin**
   - Sistem tema _real-time_ yang mengubah palet warna seluruh aplikasi.
   - Mencakup perubahan warna Navbar, Tombol, hingga _Custom Scrollbar_ dan _Text Selection_.
2. **📱 Adaptive Morphing Navbar**
   - **Desktop:** Navigasi berubah dari Link menjadi Search Bar saat di-scroll.
   - **Mobile:** Search bar muncul menggantung (_floating drawer_) di bawah header untuk menghemat ruang layar.
   - **Smart UX:** Input tidak _auto-focus_ untuk mencegah keyboard virtual menutupi layar HP secara tiba-tiba.
3. **⚡ Zero-Latency Interaction**
   - Pencarian buku instan di sisi klien (_client-side filtering_).
   - Skeleton Loading animation saat pengambilan data API.
4. **🛠️ Full CRUD Integration**
   - Terhubung dengan **MockAPI** untuk simulasi database backend yang persisten.
   - Validasi form dan konfirmasi hapus data menggunakan _Custom Alert Dialog_.

## 🛠️ Tech Stack (Bleeding Edge)

Aplikasi ini dibangun di atas fondasi teknologi web modern versi terbaru:

| Teknologi        | Versi    | Kegunaan                                                      |
| :--------------- | :------- | :------------------------------------------------------------ |
| **React**        | 19.2.0   | Library UI utama (memanfaatkan fitur concurrent terbaru).     |
| **Vite**         | 7.2.4    | Build tool & Dev Server generasi terbaru untuk HMR instan.    |
| **Tailwind CSS** | 4.1.18   | Framework CSS utility-first dengan engine Rust baru (Oxfide). |
| **Shadcn/UI**    | _Latest_ | Komponen UI yang dapat dikustomisasi (Neobrutalism preset).   |
| **Lucide React** | _Latest_ | Ikon vektor ringan dan konsisten.                             |
| **Bun**          | 1.3.8    | JavaScript Runtime & Package Manager all-in-one.              |

## 🚀 Cara Menjalankan Project

Ikuti langkah-langkah berikut untuk menjalankan aplikasi di lokal komputer Anda:

### 1. Clone Repository

```bash
git clone https://github.com/Sultvnnnn/bookoo.git
cd bookoo-app
```

### 2. Install Dependencies

Pastikan Node.js sudah terinstall.

```bash
bun install

# Atau jika menggunakan NPM:
npm install
```

### 3. Konfigurasi API (Opsional)

Buka file `src/context/BookContext.jsx` dan pastikan `API_URL` mengarah ke endpoint MockAPI yang valid:

```javascript
// Ganti dengan URL MockAPI milik Anda
const API_URL = "https://YOUR_MOCKAPI_ID.mockapi.io/api/v1/books";const
```

### 4. Jalankan Server Development

```bash
bun dev

# Atau
npm run dev
```

Buka browser dan akses `http://localhost:5173`.

## 📂 Struktur Folder

```text
src/
├── components/
│   ├── ui/           		# Komponen Reusable (Button, Input, Skeleton, dll - Shadcn)
│   ├── BookCard.jsx  		# Kartu tampilan buku dengan Drawer detail
│   ├── BookForm.jsx  		# Form Modal untuk Tambah & Edit buku
│   ├── Footer.jsx    		# Footer responsif dengan Tech Stack badge
│   └── Navbar.jsx    		# Navigasi responsif dengan logika scroll & tema
├── context/
│   └── BookContext.jsx 	# Global State Management (Context API + Fetch Logic)
├── data/
│   └── InitialBooks.js 	# Data Fallback / Schema Reference
├── App.jsx           		# Main Layout & Routing Logic
└── index.css         		# Tailwind v4 Config & Custom Scrollbar Styles
```

## 📝 Catatan Pengembang

- **Logic API:** Aplikasi ini menggunakan `fetch` dengan `async/await` untuk simulasi transaksi data yang asinkron.
- **Custom Scrollbar:** CSS Scrollbar dimodifikasi di `index.css` agar mendukung pewarnaan dinamis via CSS Variables (`var(--main)`).
- **Security:** Konfigurasi `vite.config.js` telah disesuaikan agar mendukung tunneling (ngrok) untuk pengujian mobile.

---

**Dibuat oleh Sultan Abdul Fatah - NIM 1003240033**
