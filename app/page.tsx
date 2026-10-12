export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* ہیڈر */}
      <header className="bg-emerald-700 text-white py-4 px-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">قرآن ہر زبان میں</h1>
          <nav className="flex gap-6">
            <a href="#" className="hover:text-emerald-200">قرآن</a>
            <a href="#" className="hover:text-emerald-200">نماز ٹائم</a>
            <a href="#" className="hover:text-emerald-200">کیلنڈر</a>
            <a href="#" className="hover:text-emerald-200">بلاگ</a>
          </nav>
        </div>
      </header>

      {/* ہیرو */}
      <section className="container mx-auto px-6 py-16 text-center">
        <p className="text-3xl text-emerald-800 mb-6">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          دنیا کی 100 زبانوں میں قرآن
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          مکمل مفت — ہر مسلمان کے لیے
        </p>
        <a
          href="#"
          className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-emerald-700 transition"
        >
          قرآن پڑھنا شروع کریں
        </a>
      </section>

      {/* آج کی آیت */}
      <section className="container mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-emerald-700 mb-4 text-center">
            آج کی آیت
          </h3>
          <p className="text-2xl text-center text-gray-800 mb-4 leading-loose">
            ذٰلِکَ الۡکِتٰبُ لَا رَیۡبَ فِیۡہِ ہُدًی لِّلۡمُتَّقِیۡنَ
          </p>
          <p className="text-center text-gray-600 text-lg">
            یہ وہ کتاب ہے جس میں کوئی شک نہیں، ہدایت ہے متقیوں کے لیے۔
          </p>
          <p className="text-center text-sm text-gray-400 mt-4">
            سورۃ البقرہ — آیت 2
          </p>
        </div>
      </section>

      {/* قرآن کارڈز */}
      <section className="container mx-auto px-6 py-12">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
          قرآن مجید
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* الفاتحہ */}
          <a href="#" className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="text-xl font-bold text-gray-800">الفاتحہ</h4>
                <p className="text-sm text-gray-500">Al-Fatihah</p>
              </div>
              <span className="text-2xl font-bold text-emerald-200">1</span>
            </div>
            <p className="text-sm text-gray-500 mb-3">7 آیات</p>
            <span className="inline-block bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full">
              ✅ مکمل
            </span>
          </a>

          {/* البقرہ */}
          <a href="#" className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="text-xl font-bold text-gray-800">البقرہ</h4>
                <p className="text-sm text-gray-500">Al-Baqarah</p>
              </div>
              <span className="text-2xl font-bold text-emerald-200">2</span>
            </div>
            <p className="text-sm text-gray-500 mb-3">286 آیات</p>
            <div className="bg-gray-200 rounded-full h-2 mb-2">
              <div className="bg-emerald-500 h-2 rounded-full w-[16%]"></div>
            </div>
            <span className="text-xs text-orange-600">🔄 جاری ہے — 16%</span>
          </a>

          {/* آل عمران */}
          <div className="bg-white rounded-xl shadow-md p-6 opacity-60">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="text-xl font-bold text-gray-800">آل عمران</h4>
                <p className="text-sm text-gray-500">Aal-Imran</p>
              </div>
              <span className="text-2xl font-bold text-emerald-200">3</span>
            </div>
            <p className="text-sm text-gray-500 mb-3">200 آیات</p>
            <span className="text-xs text-gray-400">⏳ جلد شروع</span>
          </div>

        </div>
      </section>

      {/* نماز ٹائم */}
      <section className="container mx-auto px-6 py-12">
        <div className="bg-emerald-700 text-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">
            🕌 آج کا نماز ٹائم
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            <div>
              <p className="text-sm text-emerald-200">فجر</p>
              <p className="text-xl font-bold">05:12</p>
            </div>
            <div>
              <p className="text-sm text-emerald-200">ظہر</p>
              <p className="text-xl font-bold">12:30</p>
            </div>
            <div>
              <p className="text-sm text-emerald-200">عصر</p>
              <p className="text-xl font-bold">15:45</p>
            </div>
            <div>
              <p className="text-sm text-emerald-200">مغرب</p>
              <p className="text-xl font-bold">18:20</p>
            </div>
            <div>
              <p className="text-sm text-emerald-200">عشاء</p>
              <p className="text-xl font-bold">19:45</p>
            </div>
          </div>
        </div>
      </section>

      {/* فوٹر */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-2">© 2026 قرآن ہر زبان میں — مکمل مفت</p>
          <p className="text-sm text-gray-400">
            یہ ایک غیر تجارتی منصوبہ ہے — صرف اللہ کی رضا کے لیے
          </p>
        </div>
      </footer>
    </main>
  );
}