import Link from "next/link";
import { surahs } from "@/data/surahs";

export default function QuranPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* ہیڈر */}
      <header className="bg-emerald-700 text-white py-4 px-6 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            قرآن ہر زبان میں
          </Link>
          <nav className="flex gap-6">
            <Link href="/" className="hover:text-emerald-200">
              ہوم
            </Link>
            <Link href="/quran" className="text-emerald-200 font-bold">
              قرآن
            </Link>
            <Link href="#" className="hover:text-emerald-200">
              نماز ٹائم
            </Link>
            <Link href="#" className="hover:text-emerald-200">
              کیلنڈر
            </Link>
          </nav>
        </div>
      </header>

      {/* عنوان */}
      <section className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          قرآن مجید
        </h1>
        <p className="text-xl text-gray-600 mb-2">
          114 سورتیں — دنیا کی 100 زبانوں میں
        </p>
        <p className="text-gray-500">
          کل آیات: 6236 | مکمل: 1 | جاری: 1
        </p>
      </section>

      {/* تلاش کا خانہ */}
      <section className="container mx-auto px-6 mb-8">
        <div className="max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="🔍 سورت کا نام یا نمبر تلاش کریں..."
            className="w-full px-6 py-3 rounded-lg border-2 border-emerald-200 focus:border-emerald-500 focus:outline-none text-lg"
          />
        </div>
      </section>

      {/* سورتوں کی لسٹ */}
      <section className="container mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {surahs.map((surah) => {
            const progress = surah.completedAyahs
              ? Math.round((surah.completedAyahs / surah.totalAyahs) * 100)
              : 0;

            return (
              <Link
                key={surah.number}
                href={`/quran/${surah.number}`}
                className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl hover:scale-[1.02] transition-all duration-200 border border-gray-100"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="flex-shrink-0 w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold">
                        {surah.number}
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {surah.name}
                        </h3>
                        <p className="text-xs text-gray-500">
                          {surah.englishName}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-3">
                  {surah.englishMeaning}
                </p>

                <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
                  <span>{surah.totalAyahs} آیات</span>
                  <span>
                    {surah.revelationType === "Meccan" ? "🕋 مکی" : "🕌 مدنی"}
                  </span>
                </div>

                {surah.status === "complete" && (
                  <span className="inline-block bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full font-medium">
                    ✅ مکمل
                  </span>
                )}

                {surah.status === "in-progress" && (
                  <div>
                    <div className="bg-gray-200 rounded-full h-2 mb-1">
                      <div
                        className="bg-orange-500 h-2 rounded-full transition-all"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-orange-600 font-medium">
                      🔄 جاری ہے — {progress}%
                    </span>
                  </div>
                )}

                {surah.status === "coming-soon" && (
                  <span className="text-xs text-gray-400">
                    ⏳ جلد شروع
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </section>

      {/* فوٹر */}
      <footer className="bg-gray-800 text-white py-8">
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