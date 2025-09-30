import { Shield, Clock, Star } from "lucide-react";

export default function Benefits() {
  return (
    <div className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="sr-only">Преимущества наших услуг</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Безопасность и надежность</h3>
            <p className="text-gray-600 leading-relaxed">
              Профессиональные водители с многолетним опытом обеспечивают безопасность каждой поездки. Ваша безопасность
              - наш главный приоритет.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Clock className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Пунктуальность</h3>
            <p className="text-gray-600 leading-relaxed">
              Мы ценим ваше время и всегда приезжаем точно в назначенное время. Никаких задержек - только надежность и
              точность.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Star className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Комфорт и качество</h3>
            <p className="text-gray-600 leading-relaxed">
              Современный автопарк с кондиционером и всеми удобствами. Путешествуйте с комфортом и стилем.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
