import { ChevronDown, HelpCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const faqItems = [
  {
    id: 1,
    question: 'Quels documents faut-il préparer ?',
    answer: 'Pour votre pèlerinage, vous devrez préparer : un passeport valide de plus de 6 mois, un certificat médical attestant de votre aptitude physique à effectuer le Hajj ou l\'Omra, deux photos d\'identité récentes au format passeport, et une preuve de vaccination obligatoire (méningite, COVID-19). Nous vous assistons dans toutes les démarches de visa.',
  },
  {
    id: 2,
    question: 'Quelle est la politique d\'annulation ?',
    answer: 'Notre politique d\'annulation est flexible : remboursement complet jusqu\'à 60 jours avant le départ, remboursement moins 30% de frais entre 60 et 30 jours avant le départ, et non-remboursable à moins de 30 jours. Nous proposons également une assurance annulation optionnelle pour une protection maximale.',
  },
  {
    id: 3,
    question: 'Les forfaits comprennent-ils les repas ?',
    answer: 'Oui, tous nos forfaits incluent la pension complète ou demi-pension selon l\'option choisie. Pendant le Ramadan, nous organisons des Iftars collectifs pour favoriser la fraternité. Les repas sont préparés selon les normes halal et tiennent compte des restrictions alimentaires sur demande.',
  },
  {
    id: 4,
    question: 'Puis-je effectuer le Hajj sans accompagnateur ?',
    answer: 'Non, le Hajj nécessite obligatoirement un guide agréé par les autorités saoudiennes. Notre équipe de guides expérimentés et certifiés vous accompagne tout au long de votre pèlerinage, vous guidant dans les rituels et vous assistant dans toutes les étapes du Hajj.',
  },
  {
    id: 5,
    question: 'Quel est l\'âge minimum pour effectuer le Hajj ?',
    answer: 'L\'âge minimum pour effectuer le Hajj est de 12 ans accompagné d\'un adulte responsable. Pour les mineurs, nous proposons des forfaits familiaux spéciaux avec accompagnement adapté. Les personnes âgées sont les bienvenues avec une assistance renforcée.',
  },
  {
    id: 6,
    question: 'Proposez-vous des facilités de paiement ?',
    answer: 'Oui, nous proposons des facilités de paiement jusqu\'à 10 fois sans frais. Un acompte de 30% est demandé à la réservation, le solde pouvant être réglé en plusieurs versements jusqu\'à 30 jours avant le départ. Nous acceptons les chèques, virements et cartes bancaires.',
  },
];

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openItem, setOpenItem] = useState<number | null>(1);
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

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center justify-center w-16 h-16 bg-emerald/10 rounded-full mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
          >
            <HelpCircle className="w-8 h-8 text-emerald" />
          </div>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-emerald mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            Questions fréquentes
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            Trouvez les réponses aux questions les plus courantes sur nos forfaits Hajj et Omra
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-500 ${
                openItem === item.id ? 'shadow-md ring-1 ring-emerald/20' : ''
              } ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              style={{ transitionDelay: `${0.3 + index * 0.08}s` }}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-emerald/5 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-8">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-emerald flex-shrink-0 transition-transform duration-300 ${
                    openItem === item.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openItem === item.id ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-l-4 border-gold ml-6">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div
          className={`mt-12 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '0.8s' }}
        >
          <p className="text-gray-600 mb-4">Vous ne trouvez pas la réponse à votre question ?</p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center text-emerald font-semibold hover:underline"
          >
            <span>Contactez-nous</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
