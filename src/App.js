import React from "react";

export default function PKRideLandingUrdu() {
  return (
    <div className="bg-white text-gray-900 font-sans leading-relaxed">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-500 text-white py-16 px-4 text-center animate-fadeIn">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">PK Ride</h1>
        <p className="text-lg sm:text-xl">سفر کا نیا انداز – آسان، محفوظ اور سستا</p>
        <p className="mt-4 text-base max-w-3xl mx-auto">
          💡 <strong>PK Ride ملاکنڈ ڈویژن کی پہلی آن لائن ٹیکسی سروس</strong> ہے۔
        </p>
        <a
          href="https://drive.google.com/uc?export=download&id=1k3ubaONxUAsl6pLT8di_M0UEJbq4iPD9"
          className="mt-6 inline-block px-6 py-3 bg-white text-green-700 font-semibold rounded-full hover:bg-green-100 transition-all duration-300 transform hover:scale-105 shadow"
        >
          📥 اینڈرائیڈ ایپ ڈاؤن لوڈ کریں
        </a>
      </section>

      {/* Bike Section */}
      <section className="bg-yellow-100 py-16 px-4 text-right animate-fadeIn">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            📍 اب اپنے شہر میں پہلی بار آن لائن بائیک رائیڈ!
          </h2>
          <p className="mb-6 text-base sm:text-lg">
            🚴 <strong>PK Ride</strong> اب بائیک کے ذریعے تیز، سستی اور آسان سفری سہولت لایا ہے۔
          </p>
          <ul className="space-y-4 text-base font-medium">
            <li>🔥 انتہائی کم کرایہ</li>
            <li>⏱️ تیز رسائی</li>
            <li>📱 آسان ایپ</li>
            <li>🧍‍♂️ ویریفائیڈ رائیڈرز</li>
            <li>🛡️ محفوظ سفر</li>
          </ul>
        </div>
      </section>

      {/* Rider Delivery Section */}
      <section className="bg-orange-100 py-16 px-4 text-right animate-fadeIn">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-orange-700 mb-6 border-r-8 border-orange-500 pr-4">
            🚚 PK Rider – ہر چیز آپ کی دہلیز پر
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="hover:scale-105 bg-white p-4 rounded shadow">🧺 گروسری، سبزیاں، پھل</div>
            <div className="hover:scale-105 bg-white p-4 rounded shadow">🛢️ گیس، پانی اور سامان</div>
            <div className="hover:scale-105 bg-white p-4 rounded shadow">💊 ادویات و ایمرجنسی</div>
            <div className="hover:scale-105 bg-white p-4 rounded shadow">👕 کپڑے، فیشن آئٹمز</div>
            <div className="hover:scale-105 bg-white p-4 rounded shadow">📦 کورئیر سروس</div>
            <div className="hover:scale-105 bg-white p-4 rounded shadow">🏨 ہوٹل و بزنس آرڈرز</div>
          </div>
          <div className="bg-white border-r-4 border-orange-500 rounded-xl p-6 shadow mb-6">
            <h3 className="text-xl font-semibold text-orange-800 mb-3">🍔 کھانے کی سہولت:</h3>
            <ul className="space-y-2">
              <li>🍢 کباب، تکہ، چکن رول</li>
              <li>🐟 فریش فِش، لوکل ڈشز</li>
              <li>🍕 برگر، پیزا، فاسٹ فوڈ</li>
              <li>🍛 دیسی و گھریلو کھانے</li>
            </ul>
          </div>
          <a
            href="#"
            className="inline-block px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition transform hover:scale-105"
          >
            📲 ابھی آرڈر کریں
          </a>
        </div>
      </section>

      {/* Background Promo */}
      <section
        className="relative py-24 px-4 bg-cover bg-center bg-no-repeat text-white text-center animate-fadeIn"
        style={{ backgroundImage: "url('/images/pkride-middle.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">PK Ride – پاکستان کی اسمارٹ رائیڈ ایپ</h2>
          <p className="mb-6">سفر کریں آسانی، تیزی اور اعتماد سے!</p>
          <a
            href="https://drive.google.com/uc?export=download&id=1k3ubaONxUAsl6pLT8di_M0UEJbq4iPD9"
            className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-full text-white font-semibold transition-all hover:scale-105"
          >
            🚗 ایپ ابھی ڈاؤن لوڈ کریں
          </a>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-16 px-4 bg-green-100 text-center animate-fadeIn">
        <h2 className="text-2xl font-bold mb-8">ایپ کے اسکرین شاٹس</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="bg-white border rounded-lg h-64 flex items-center justify-center shadow hover:scale-105 transition-all"
            >
              اسکرین شاٹ {n}
            </div>
          ))}
        </div>
      </section>

      {/* Download Section */}
      <section
        className="relative py-20 bg-center bg-no-repeat bg-cover text-white text-center animate-fadeIn"
        style={{ backgroundImage: "url('/images/pkride-cover.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 px-4">
          <h2 className="text-xl font-bold mb-4">ڈاؤن لوڈ کریں</h2>
          <p className="mb-6">ابھی PK Ride ایپ انسٹال کریں اور آسانی سے سفر کریں۔</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://drive.google.com/uc?export=download&id=1k3ubaONxUAsl6pLT8di_M0UEJbq4iPD9" className="bg-black px-4 py-2 rounded-lg hover:scale-105 transition">
              📲 Android APK
            </a>
            <a href="#" className="bg-black px-4 py-2 rounded-lg opacity-70 cursor-not-allowed">
              🍏 App Store (جلد آ رہا ہے)
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-green-700 text-white py-10 px-4 text-center animate-fadeIn">
        <h3 className="text-lg font-semibold mb-4">ہم سے رابطہ کریں</h3>
        <p>📞 0300-2044913 | 0313-8186414</p>
        <p>Email: pkride1122@gmail.com</p>
        <a
          href="https://www.facebook.com/people/PK-Ride/100071607826976/"
          className="underline hover:text-gray-200 block mt-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          📘 Visit our Facebook page
        </a>
      </section>
    </div>
  );
}
