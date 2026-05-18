export const articles = [
  {
    id: 1,
    title: "Mengenal React 19: Fitur Terbaru yang Wajib Kamu Tahu",
    category: "Technology",
    author: "Budi Santoso",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=budi",
    date: "12 Mei 2026",
    readTime: "5 menit",
    cover: "https://picsum.photos/seed/react19/800/450",
    excerpt:
      "React 19 hadir dengan sejumlah pembaruan besar. Mulai dari Actions, Server Components yang makin matang, hingga hook baru yang menyederhanakan pengelolaan state async.",
    content: `React 19 adalah rilis besar yang membawa berbagai perubahan fundamental pada cara kita membangun aplikasi web modern. Setelah bertahun-tahun iterasi, tim React akhirnya menghadirkan fitur-fitur yang selama ini ditunggu-tunggu oleh komunitas developer.

**Actions — Pengelolaan Async Jadi Lebih Mudah**

Salah satu fitur paling menonjol adalah Actions. Dengan Actions, kamu tidak lagi perlu mengelola state \`loading\`, \`error\`, dan \`success\` secara manual untuk setiap operasi async. React kini menangani semua itu secara otomatis.

\`\`\`jsx
function UpdateName() {
  const [error, submitAction, isPending] = useActionState(
    async (prevState, formData) => {
      const error = await updateName(formData.get("name"));
      if (error) return error;
      redirect("/profile");
      return null;
    },
    null
  );
  return (
    <form action={submitAction}>
      <input type="text" name="name" />
      <button type="submit" disabled={isPending}>Update</button>
      {error && <p>{error}</p>}
    </form>
  );
}
\`\`\`

**useOptimistic Hook**

Hook baru \`useOptimistic\` memungkinkan kamu menampilkan perubahan UI secara optimistis sebelum operasi async selesai. Ini membuat aplikasi terasa jauh lebih responsif.

**use() API**

API baru \`use()\` memungkinkan pembacaan resource seperti Promise dan Context langsung di dalam render, termasuk di dalam conditional statement — sesuatu yang sebelumnya tidak mungkin dengan hooks biasa.

**Peningkatan Server Components**

Server Components kini makin stabil dan dapat digunakan di berbagai framework, tidak hanya Next.js. Ini membuka peluang lebih luas untuk rendering di sisi server dengan manfaat performa yang signifikan.

Secara keseluruhan, React 19 adalah lompatan besar ke depan. Jika kamu belum mencobanya, sekarang adalah waktu yang tepat untuk mulai bereksperimen!`,
    likes: 128,
    tags: ["React", "JavaScript", "Frontend"],
    comments: [
      {
        id: 1,
        userId: 2,
        author: "Sari Dewi",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sari",
        text: "Artikel yang sangat informatif! Saya sudah coba Actions dan memang jauh lebih simpel.",
        date: "13 Mei 2026",
      },
      {
        id: 2,
        userId: 3,
        author: "Andi Pratama",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=andi",
        text: "useOptimistic itu game changer banget buat UX. Wajib dicoba!",
        date: "14 Mei 2026",
      },
    ],
  },
  {
    id: 2,
    title:
      "Tips Produktivitas untuk Developer: Kerja Lebih Cerdas, Bukan Lebih Keras",
    category: "Productivity",
    author: "Sari Dewi",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sari",
    date: "9 Mei 2026",
    readTime: "7 menit",
    cover: "https://picsum.photos/seed/productivity/800/450",
    excerpt:
      "Menjadi developer yang produktif bukan soal lembur tiap malam. Ada strategi dan tools yang bisa membuat kamu menyelesaikan lebih banyak hal dalam waktu lebih singkat.",
    content: `Produktivitas bukan tentang bekerja lebih lama, melainkan tentang bekerja lebih cerdas. Sebagai seorang developer, ada banyak cara untuk memaksimalkan output tanpa mengorbankan kesehatan dan keseimbangan hidup.

**1. Gunakan Teknik Pomodoro**

Teknik Pomodoro adalah metode manajemen waktu yang membagi pekerjaan menjadi interval 25 menit (disebut "pomodoro") dengan jeda 5 menit di antaranya. Setelah 4 pomodoro, ambil jeda panjang 15-30 menit.

Teknik ini sangat efektif untuk programmer karena:
- Mencegah burnout
- Membantu fokus dalam sesi pendek
- Memberikan rasa pencapaian yang lebih sering

**2. Kuasai Keyboard Shortcut VS Code**

Kehilangan waktu berpindah antara keyboard dan mouse adalah pemborosan yang sering tidak disadari. Beberapa shortcut wajib:

- \`Cmd+P\` / \`Ctrl+P\`: Quick open file
- \`Cmd+Shift+P\`: Command palette
- \`Alt+Up/Down\`: Pindahkan baris
- \`Cmd+D\`: Select next occurrence
- \`Ctrl+\`\`: Toggle terminal

**3. Otomasi dengan Script**

Buat script untuk tugas yang sering diulang. Misalnya, script untuk setup proyek baru, deploy ke server, atau generate boilerplate code. Waktu awal untuk membuat script akan terbayar berlipat ganda.

**4. Gunakan Git Alias**

Konfigurasi alias Git untuk mempercepat workflow:

\`\`\`bash
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.lg "log --oneline --graph --decorate"
\`\`\`

**5. Investasikan Waktu untuk Belajar Tool**

Luangkan setidaknya 30 menit per hari untuk mempelajari tool yang kamu gunakan lebih dalam. Seiring waktu, keahlian ini akan menghemat berjam-jam waktu kerja.

Ingat, konsistensi lebih penting dari intensitas. Terapkan tips ini satu per satu, dan rasakan perbedaannya!`,
    likes: 95,
    tags: ["Productivity", "Tips", "Developer Life"],
    comments: [
      {
        id: 1,
        userId: 1,
        author: "Budi Santoso",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=budi",
        text: "Teknik Pomodoro memang ampuh banget! Sudah pakai sejak setahun lalu dan kerja lebih fokus.",
        date: "10 Mei 2026",
      },
    ],
  },
  {
    id: 3,
    title: "Panduan Lengkap CSS Grid untuk Pemula",
    category: "Tutorial",
    author: "Andi Pratama",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=andi",
    date: "6 Mei 2026",
    readTime: "10 menit",
    cover: "https://picsum.photos/seed/cssgrid/800/450",
    excerpt:
      "CSS Grid adalah salah satu fitur layout paling powerful di CSS modern. Dengan Grid, kamu bisa membuat layout kompleks dengan kode yang jauh lebih sedikit dan lebih mudah dipahami.",
    content: `CSS Grid telah merevolusi cara kita membuat layout di web. Sebelum Grid, kita bergantung pada float, flexbox, atau bahkan tabel untuk membuat layout dua dimensi. Kini, Grid memberikan kontrol penuh atas baris dan kolom secara bersamaan.

**Konsep Dasar Grid**

Grid Container adalah elemen yang memiliki \`display: grid\`. Grid Items adalah elemen anak langsung dari Grid Container.

\`\`\`css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto;
  gap: 20px;
}
\`\`\`

**Grid Lines & Areas**

Setiap grid memiliki baris dan kolom yang dibatasi oleh grid lines. Kamu bisa menempatkan item berdasarkan nomor line atau nama area.

\`\`\`css
.header {
  grid-column: 1 / -1; /* Span seluruh kolom */
}

.sidebar {
  grid-column: 1 / 2;
  grid-row: 2 / 4;
}
\`\`\`

**Template Areas — Layout Intuitif**

Fitur paling keren dari Grid adalah template areas, yang memungkinkan kamu mendefinisikan layout secara visual:

\`\`\`css
.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 200px 1fr 1fr;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
\`\`\`

**Repeat & Minmax**

Untuk grid yang responsif, gunakan \`repeat()\` dan \`minmax()\`:

\`\`\`css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}
\`\`\`

Ini akan secara otomatis menyesuaikan jumlah kolom berdasarkan lebar container — tanpa media query!

Dengan memahami konsep dasar ini, kamu sudah bisa membuat hampir semua jenis layout yang ada di web modern. Selamat mencoba!`,
    likes: 210,
    tags: ["CSS", "Tutorial", "Frontend", "Web Design"],
    comments: [
      {
        id: 1,
        userId: 1,
        author: "Budi Santoso",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=budi",
        text: "Template areas itu seru banget, kayak gambar layout langsung di CSS 😄",
        date: "7 Mei 2026",
      },
      {
        id: 2,
        userId: 2,
        author: "Sari Dewi",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sari",
        text: "Penjelasannya jelas banget! Bookmark dulu ah buat referensi.",
        date: "8 Mei 2026",
      },
    ],
  },
  {
    id: 4,
    title: "Memahami TypeScript: Dari JavaScript ke Type Safety",
    category: "Technology",
    author: "Budi Santoso",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=budi",
    date: "2 Mei 2026",
    readTime: "8 menit",
    cover: "https://picsum.photos/seed/typescript/800/450",
    excerpt:
      "TypeScript bukan hanya JavaScript dengan tipe data. Ini adalah cara berpikir yang berbeda dalam membangun aplikasi — lebih aman, lebih mudah di-maintain, dan lebih menyenangkan.",
    content: `Banyak developer yang pertama kali berkenalan dengan TypeScript merasa frustrasi dengan error yang bermunculan di mana-mana. Tapi setelah melewati fase awal itu, hampir semua orang tidak mau kembali ke JavaScript biasa.

**Mengapa TypeScript?**

TypeScript menambahkan static typing ke JavaScript, artinya banyak bug yang biasanya baru ketahuan saat runtime bisa tertangkap saat development. Ini sangat menghemat waktu debugging, terutama di proyek besar.

**Type Dasar**

\`\`\`typescript
let name: string = "Budi";
let age: number = 25;
let isActive: boolean = true;
let hobbies: string[] = ["coding", "gaming"];
\`\`\`

**Interface vs Type**

Keduanya digunakan untuk mendefinisikan struktur objek, dengan beberapa perbedaan:

\`\`\`typescript
// Interface — bisa di-extend dan di-implement
interface User {
  id: number;
  name: string;
  email: string;
}

// Type — lebih fleksibel, bisa untuk union types
type Status = "active" | "inactive" | "pending";
type ApiResponse<T> = {
  data: T;
  status: number;
  message: string;
};
\`\`\`

**Generics — TypeScript yang Powerful**

Generics memungkinkan kamu membuat fungsi dan komponen yang bekerja dengan berbagai tipe:

\`\`\`typescript
function getFirstItem<T>(array: T[]): T | undefined {
  return array[0];
}

const firstNumber = getFirstItem([1, 2, 3]); // number
const firstString = getFirstItem(["a", "b"]); // string
\`\`\`

**Utility Types**

TypeScript hadir dengan utility types bawaan yang sangat berguna:

- \`Partial<T>\`: Semua properti menjadi opsional
- \`Required<T>\`: Semua properti menjadi wajib
- \`Pick<T, K>\`: Ambil subset properti
- \`Omit<T, K>\`: Hapus subset properti

Mulai dengan TypeScript memang butuh waktu adaptasi, tapi investasinya sangat sepadan untuk proyek jangka panjang.`,
    likes: 176,
    tags: ["TypeScript", "JavaScript", "Programming"],
    comments: [
      {
        id: 1,
        userId: 3,
        author: "Andi Pratama",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=andi",
        text: "Generics itu yang paling susah dipahami di awal, tapi setelah ngerti langsung sering dipake.",
        date: "3 Mei 2026",
      },
    ],
  },
  {
    id: 5,
    title: "Desain UI yang Baik: Prinsip yang Perlu Setiap Developer Tahu",
    category: "Design",
    author: "Sari Dewi",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sari",
    date: "28 Apr 2026",
    readTime: "6 menit",
    cover: "https://picsum.photos/seed/uidesign/800/450",
    excerpt:
      "Tidak semua developer punya background desain, tapi semua developer bisa belajar prinsip dasar UI yang membuat aplikasi mereka terlihat profesional dan nyaman digunakan.",
    content: `Sebagai developer, kamu mungkin berpikir bahwa urusan desain adalah tanggung jawab designer. Tapi kenyataannya, memahami prinsip desain dasar akan membuat kamu menjadi developer yang jauh lebih baik dan berharga di tim.

**1. Whitespace adalah Temanmu**

Salah satu kesalahan paling umum adalah mengisi setiap sudut dengan konten. Whitespace (atau negative space) memberikan napas pada desain dan membuat konten lebih mudah dibaca dan dipahami.

Jangan takut untuk memberikan padding yang cukup dan margin antar elemen. Desain yang "bernapas" terasa lebih premium dan profesional.

**2. Hierarchy Visual**

Pengguna menelusuri halaman, bukan membacanya kata per kata. Hierarchy visual memandu mata pengguna ke informasi yang paling penting terlebih dahulu.

Gunakan:
- **Ukuran**: Elemen yang lebih besar = lebih penting
- **Warna**: Kontras tinggi menarik perhatian
- **Berat font**: Bold untuk heading, regular untuk body text
- **Posisi**: Atas dan kiri biasanya terbaca pertama

**3. Konsistensi di Atas Segalanya**

Gunakan sistem desain yang konsisten: spacing scale, color palette, dan typography yang seragam di seluruh aplikasi. Ini membuat UI terasa cohesive dan profesional.

\`\`\`css
:root {
  /* Spacing scale */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 16px;
  --space-4: 24px;
  --space-5: 32px;

  /* Colors */
  --color-primary: #6366f1;
  --color-text: #1e293b;
  --color-muted: #64748b;
}
\`\`\`

**4. Feedback yang Jelas**

Setiap interaksi harus memberikan feedback yang jelas. Button harus berubah saat di-hover. Form harus menampilkan error yang informatif. Loading state harus terlihat jelas.

**5. Mobile First**

Lebih dari 60% traffic web kini berasal dari mobile. Selalu mulai desain dari tampilan mobile, lalu perluas ke desktop — bukan sebaliknya.

Dengan menerapkan prinsip-prinsip ini, kamu akan melihat perbedaan besar dalam kualitas UI yang kamu buat.`,
    likes: 143,
    tags: ["UI", "Design", "UX", "Frontend"],
    comments: [
      {
        id: 1,
        userId: 1,
        author: "Budi Santoso",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=budi",
        text: "Whitespace memang sering diabaikan. Artikel yang sangat berguna!",
        date: "29 Apr 2026",
      },
      {
        id: 2,
        userId: 3,
        author: "Andi Pratama",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=andi",
        text: "Mobile first itu penting banget, sering kebalik urutannya 😅",
        date: "30 Apr 2026",
      },
    ],
  },
  {
    id: 6,
    title: "Belajar Node.js dari Nol: Membangun REST API Pertamamu",
    category: "Tutorial",
    author: "Andi Pratama",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=andi",
    date: "24 Apr 2026",
    readTime: "12 menit",
    cover: "https://picsum.photos/seed/nodejs/800/450",
    excerpt:
      "Node.js memungkinkan kamu menjalankan JavaScript di server. Dengan Express.js, membangun REST API menjadi sangat mudah dan cepat — bahkan untuk pemula sekalipun.",
    content: `Node.js membuka dunia baru bagi developer JavaScript: kemampuan untuk membangun server-side application dengan bahasa yang sama. Mari kita bangun REST API sederhana dari nol.

**Setup Project**

\`\`\`bash
mkdir my-api && cd my-api
npm init -y
npm install express
\`\`\`

**Server Dasar**

\`\`\`javascript
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API berjalan dengan baik!' });
});

app.listen(PORT, () => {
  console.log(\`Server berjalan di http://localhost:\${PORT}\`);
});
\`\`\`

**CRUD Endpoints**

Berikut contoh CRUD sederhana untuk resource "articles":

\`\`\`javascript
let articles = [
  { id: 1, title: 'Artikel Pertama', content: '...' }
];

// GET semua artikel
app.get('/articles', (req, res) => {
  res.json(articles);
});

// GET artikel by ID
app.get('/articles/:id', (req, res) => {
  const article = articles.find(a => a.id === parseInt(req.params.id));
  if (!article) return res.status(404).json({ message: 'Not found' });
  res.json(article);
});

// POST artikel baru
app.post('/articles', (req, res) => {
  const newArticle = { id: articles.length + 1, ...req.body };
  articles.push(newArticle);
  res.status(201).json(newArticle);
});

// PUT update artikel
app.put('/articles/:id', (req, res) => {
  const index = articles.findIndex(a => a.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Not found' });
  articles[index] = { ...articles[index], ...req.body };
  res.json(articles[index]);
});

// DELETE artikel
app.delete('/articles/:id', (req, res) => {
  articles = articles.filter(a => a.id !== parseInt(req.params.id));
  res.status(204).send();
});
\`\`\`

**Middleware untuk Error Handling**

\`\`\`javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Terjadi kesalahan server' });
});
\`\`\`

Dengan ini, kamu sudah punya REST API yang fungsional. Langkah selanjutnya adalah menambahkan database dan autentikasi!`,
    likes: 189,
    tags: ["Node.js", "Backend", "API", "JavaScript"],
    comments: [
      {
        id: 1,
        userId: 2,
        author: "Sari Dewi",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sari",
        text: "Tutorial yang sangat clear! Cocok buat yang mau belajar backend dari nol.",
        date: "25 Apr 2026",
      },
    ],
  },
];
