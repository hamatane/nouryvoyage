import { Users, MapPin, Heart, Plane, Shield, Clock, Award, Globe } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const benefits = [
    {
        icon: Users,
        title: 'Guides expérimentés',
        description:
            "Nos guides certifiés vous accompagnent à chaque étape de votre pèlerinage, avec une parfaite maîtrise du français et de l'arabe.",
    },
    {
        icon: MapPin,
        title: 'Hôtels proches des Haram',
        description: 'Des hébergements sélectionnés pour leur proximité avec les lieux saints et leur confort optimal.',
    },
    {
        icon: Heart,
        title: 'Accompagnement spirituel',
        description: 'Des conférenciers religieux agréés pour enrichir votre expérience spirituelle et répondre à vos questions.',
    },
    {
        icon: Plane,
        title: 'Vols directs',
        description: 'Des vols directs depuis Paris et plusieurs villes de province avec les meilleures compagnies aériennes.',
    },
    {
        icon: Shield,
        title: 'Assurance complète',
        description: 'Une couverture assurance complète incluant santé, rapatriement et annulation pour votre tranquillité.',
    },
    {
        icon: Clock,
        title: 'Assistance 24h/24',
        description: 'Notre équipe reste disponible à tout moment pour répondre à vos besoins pendant votre séjour.',
    },
    {
        icon: Award,
        title: 'Certification officielle',
        description: "Agréé par les autorités saoudiennes et françaisées pour l'organisation du Hajj et de l'Omra.",
    },
    {
        icon: Globe,
        title: 'Groupe international',
        description: "Rejoignez une communauté de pèlerins francophones venant de toute l'Europe.",
    },
];

const WhyChooseUs = () => {
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
            { threshold: 0.1 },
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="why-us" ref={sectionRef} className="section-padding bg-gradient-to-br from-emerald/5 to-gold/5">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Image */}
                    <div className={`relative transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                            <img src="images/mosque-golden.jpg" alt="Grande Mosquée" className="h-[500px] w-full object-cover lg:h-[600px]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald/30 to-transparent" />
                        </div>

                        {/* Floating Stats Card */}
                        <div className="absolute -right-6 -bottom-6 animate-float rounded-xl bg-white p-6 shadow-xl">
                            <div className="flex items-center space-x-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald/10">
                                    <Award className="h-6 w-6 text-emerald" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-emerald">10+</div>
                                    <div className="text-sm text-gray-500">Années d'expérience</div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -top-4 -left-4 -z-10 h-24 w-24 rounded-xl border-2 border-gold/30" />
                    </div>

                    {/* Content */}
                    <div>
                        <h2
                            className={`mb-6 text-3xl font-bold text-emerald transition-all duration-700 md:text-4xl lg:text-5xl ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}
                        >
                            Pourquoi nous choisir ?
                        </h2>

                        <p
                            className={`mb-10 text-lg text-gray-600 transition-all duration-700 ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}
                            style={{ transitionDelay: '0.2s' }}
                        >
                            Depuis plus de 10 ans, nous nous engageons à offrir une expérience de pèlerinage exceptionnelle, allant confort spirituel
                            et logistique professionnelle.
                        </p>

                        {/* Benefits Grid */}
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className={`group rounded-xl bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                    }`}
                                    style={{ transitionDelay: `${0.3 + index * 0.08}s` }}
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-emerald/10 transition-colors group-hover:bg-emerald/20">
                                            <benefit.icon className="h-6 w-6 text-emerald" />
                                        </div>
                                        <div>
                                            <h3 className="mb-1 font-semibold text-gray-900 transition-colors group-hover:text-emerald">
                                                {benefit.title}
                                            </h3>
                                            <p className="text-sm leading-relaxed text-gray-600">{benefit.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
