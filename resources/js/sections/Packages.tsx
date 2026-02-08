import { Check, Clock, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Package {
  id: number;
  title: string;
  duration: string;
  price: string;
  image: string;
  features: string[];
  featured?: boolean;
  badge?: string;
}

const packages: Package[] = [
  {
    id: 1,
    title: 'Hajj Intense',
    duration: '30 jours',
    price: 'À partir de 3 000 000 CFA',
    image: 'images/hotel-modern.jpg',
    features: [
      'Vols directs aller-retour',
      'Hôtel 5* proche du Haram',
      'Guide francophone diplômé',
      'Pension complète',
      'Accompagnement spirituel',
      'Transport local inclus',
    ],
    featured: true,
    badge: 'Le plus populaire',
  },
  {
    id: 2,
    title: 'Hajj Intense Express',
    duration: '20 jours',
    price: 'À partir de 2 500 000 CFA',
    image: 'images/hotel-city.jpg',
    features: [
      'Vols directs aller-retour',
      'Hôtel 4* confortable',
      'Guide francophone',
      'Demi-pension',
      'Assistance 24h/24',
      'Transferts aéroport',
    ],
  },
  {
    id: 3,
    title: 'Omra Ramadan',
    duration: '15 jours',
    price: 'À partir de 2 000 000 CFA',
    image: 'images/hotel-evening.jpg',
    features: [
      'Vols directs',
      'Hôtel 5* avec vue',
      'Guide francophone',
      'Iftar inclus',
      'Soirées spirituelles',
      'Excursions organisées',
    ],
  },
  {
    id: 4,
    title: 'Omra Standard',
    duration: '10 jours',
    price: 'À partir de 1 500 000 CFA',
    image: 'images/city-skyline.jpg',
    features: [
      'Vols directs',
      'Hôtel 4* bien situé',
      'Guide francophone',
      'Petit déjeuner inclus',
      'Support téléphonique',
      'Documentation complète',
    ],
  },
];

const Packages = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="packages"
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-emerald mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Nos offres Hajj & Omra
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            Des forfaits pensés pour votre confort et sérénité, du budget au luxe
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                pkg.featured ? 'ring-2 ring-gold lg:scale-105' : ''
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute top-4 left-4 z-10 bg-gold text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {pkg.badge}
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{pkg.title}</h3>
                  <div className="flex items-center text-white/90 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Price */}
                <div className="mb-4">
                  <span className="text-2xl font-bold text-emerald">{pkg.price}</span>
                  <span className="text-gray-500 text-sm"> /personne</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <Check className="w-4 h-4 text-emerald mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="w-full bg-emerald hover:bg-emerald-dark text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group/btn">
                  <span>En savoir plus</span>
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '0.8s' }}
        >
          <button className="inline-flex items-center space-x-2 bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-gold hover:-translate-y-1">
            <span>Voir tous les forfaits</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Packages;
