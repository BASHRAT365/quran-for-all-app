"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

export default function SurahPage() {
  const params = useParams();
  const surahNumber = parseInt(params.number as string);

  if (surahNumber !== 1) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
        <header className="bg-emerald-700 text-white py-4 px-6 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">قرآن ہر زبان میں</Link>
            <nav className="flex gap-6">
              <Link href="/" className="hover:text-emerald-200">ہوم</Link>
              <Link href="/quran" className="hover:text-emerald-200">قرآن</Link>
            </nav>
          </div>
        </header>
        <section className="container mx-auto px-6 py-20 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-12 max-w-2xl mx-auto">
            <div className="text-6xl mb-6">⏳</div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">سورت نمبر {surahNumber}</h1>
            <p className="text-xl text-gray-600 mb-8">یہ سورت ابھی زیرِ کام ہے</p>
            <Link href="/quran" className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition">
              ← واپس سورتوں کی لسٹ
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const ayahs = [
    { number: 1, arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", urdu: "اللہ کے نام سے جو بے حد رحم والا، نہایت مہربان ہے۔", english: "In the name of Allah, the Most Gracious, the Most Merciful." },
    { number: 2, arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", urdu: "سب تعریف اللہ کے لیے ہے جو سارے جہانوں کا پالنے والا ہے۔", english: "All praise is due to Allah, Lord of the worlds." },
    { number: 3, arabic: "الرَّحْمَٰنِ الرَّحِيمِ", urdu: "بے حد رحم والا، نہایت مہربان ہے۔", english: "The Most Gracious, the Most Merciful." },
    { number: 4, arabic: "مَالِكِ يَوْمِ الدِّينِ", urdu: "بدلے کے دن کا مالک ہے۔", english: "Master of the Day of Judgment." },
    { number: 5, arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", urdu: "ہم صرف تیری عبادت کرتے ہیں اور صرف تجھ سے مدد مانگتے ہیں۔", english: "You alone we worship, and You alone we ask for help." },
    { number: 6, arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ", urdu: "ہمیں سیدھے راستے پر چلا۔", english: "Guide us to the straight path." },
    { number: 7, arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ", urdu: "ان لوگوں کے راستے پر جن پر تو نے انعام کیا، جن پر نہ غصہ کیا گیا اور نہ وہ گمراہ ہیں۔", english: "The path of those upon whom You have bestowed favor, not of those who have earned Your anger, nor of those who went astray." },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <header className="bg-emerald-700 text-white py-4 px-6 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">قرآن ہر زبان میں</Link>
          <nav className="flex gap-6">
            <Link href="/" className="hover:text-emerald-200">ہوم</Link>
            <Link href="/quran" className="hover:text-emerald-200">قرآن</Link>
          </nav>
        </div>
      </header>

      <section className="container mx-auto px-6 py-12 text-center">
        <Link href="/quran" className="text-emerald-600 hover:underline mb-4 inline-block">← واپس سورتوں کی لسٹ</Link>
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
          <div className="text-5xl font-arabic text-emerald-700 mb-4">سُورَةُ الْفَاتِحَة</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">الفاتحہ</h1>
          <p className="text-lg text-gray-600 mb-1">Al-Fatihah — The Opener</p>
          <div className="flex justify-center gap-6 text-sm text-gray-500 mt-4">
            <span>📍 مکہ مکرمہ</span>
            <span>📖 7 آیات</span>
            <span>🕋 مکی</span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 mb-8">
        <div className="bg-emerald-50 border-r-4 border-emerald-500 rounded-lg p-6 max-w-3xl mx-auto">
          <h3 className="font-bold text-emerald-800 mb-2">📝 تعارف</h3>
          <p className="text-gray-700 leading-relaxed">یہ قرآن مجید کی پہلی سورت ہے۔ اسے &quot;ام القرآن&quot; (قرآن کی ماں) بھی کہا جاتا ہے۔ یہ سورت ہر نماز میں پڑھی جاتی ہے۔</p>
        </div>
      </section>

      <section className="container mx-auto px-6 mb-8">
        <div className="bg-emerald-700 text-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto text-center">
          <p className="text-3xl font-arabic leading-loose">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-12">
        <div className="max-w-3xl mx-auto space-y-6">
          {ayahs.map((ayah) => (
            <div key={ayah.number} className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <span className="flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full font-bold text-lg">{ayah.number}</span>
                <span className="text-sm text-gray-400">آیت {ayah.number}</span>
              </div>
              <p className="text-3xl font-arabic text-right text-gray-900 leading-loose mb-6">{ayah.arabic}</p>
              <div className="mb-4">
                <p className="text-sm text-emerald-600 font-bold mb-1">اردو:</p>
                <p className="text-lg text-gray-700 leading-relaxed">{ayah.urdu}</p>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500 font-bold mb-1">English:</p>
                <p className="text-gray-600 italic leading-relaxed">{ayah.english}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 pb-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-emerald-100 border-2 border-emerald-300 rounded-lg p-6">
            <p className="text-emerald-800 font-bold text-lg">✅ یہ سورت مکمل ہے</p>
            <p className="text-emerald-600 text-sm mt-2">الحمد للہ — مکمل ترجمہ دستیاب ہے</p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-2">© 2026 قرآن ہر زبان میں — مکمل مفت</p>
          <p className="text-sm text-gray-400">یہ ایک غیر تجارتی منصوبہ ہے — صرف اللہ کی رضا کے لیے</p>
        </div>
      </footer>
    </main>
  );
}