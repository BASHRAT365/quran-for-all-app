export interface Ayah {
  number: number;
  arabic: string;
  urdu: string;
  english: string;
}

export interface SurahDetail {
  number: number;
  name: string;
  englishName: string;
  englishMeaning: string;
  totalAyahs: number;
  revelationType: "Meccan" | "Medinan";
  revelationPlace: string;
  introduction: string;
  ayahs: Ayah[];
}

export const surah1: SurahDetail = {
  number: 1,
  name: "الفاتحہ",
  englishName: "Al-Fatihah",
  englishMeaning: "The Opener",
  totalAyahs: 7,
  revelationType: "Meccan",
  revelationPlace: "مکہ مکرمہ",
  introduction: "یہ قرآن مجید کی پہلی سورت ہے۔ اسے 'ام القرآن' (قرآن کی ماں) اور 'فاتحۃ الکتاب' بھی کہا جاتا ہے۔ یہ سورت ہر نماز میں پڑھی جاتی ہے۔ اس میں اللہ کی حمد و ثنا، اس کی رحمت، اور ہدایت کی دعا ہے۔",
  ayahs: [
    {
      number: 1,
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      urdu: "اللہ کے نام سے جو بے حد رحم والا، نہایت مہربان ہے۔",
      english: "In the name of Allah, the Most Gracious, the Most Merciful."
    },
    {
      number: 2,
      arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
      urdu: "سب تعریف اللہ کے لیے ہے جو سارے جہانوں کا پالنے والا ہے۔",
      english: "All praise is due to Allah, Lord of the worlds."
    },
    {
      number: 3,
      arabic: "الرَّحْمَٰنِ الرَّحِيمِ",
      urdu: "بے حد رحم والا، نہایت مہربان ہے۔",
      english: "The Most Gracious, the Most Merciful."
    },
    {
      number: 4,
      arabic: "مَالِكِ يَوْمِ الدِّينِ",
      urdu: "بدلے کے دن کا مالک ہے۔",
      english: "Master of the Day of Judgment."
    },
    {
      number: 5,
      arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
      urdu: "ہم صرف تیری عبادت کرتے ہیں اور صرف تجھ سے مدد مانگتے ہیں۔",
      english: "You alone we worship, and You alone we ask for help."
    },
    {
      number: 6,
      arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
      urdu: "ہمیں سیدھے راستے پر چلا۔",
      english: "Guide us to the straight path."
    },
    {
      number: 7,
      arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
      urdu: "ان لوگوں کے راستے پر جن پر تو نے انعام کیا، جن پر نہ غصہ کیا گیا اور نہ وہ گمراہ ہیں۔",
      english: "The path of those upon whom You have bestowed favor, not of those who have earned Your anger, nor of those who went astray."
    }
  ]
};