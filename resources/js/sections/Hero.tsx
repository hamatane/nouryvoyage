import { ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" ref={heroRef} className="relative flex min-h-screen items-center overflow-hidden">
            {/* Background Image with Ken Burns Effect */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                <img src="images/hero-kaaba.jpg" alt="Kaaba" className="animate-kenburns h-full w-full object-cover" />
            </div>

            {/* Floating Particles */}
            <div className="particles z-10">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 15}s`,
                            animationDuration: `${15 + Math.random() * 10}s`,
                            opacity: 0.1 + Math.random() * 0.3,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-20 mx-auto w-full max-w-7xl px-4 pt-20 sm:px-6 lg:px-8 xl:px-12">
                <div className="max-w-2xl">
                    {/* Badge */}
                    <div
                        className={`mb-6 inline-flex items-center rounded-full bg-gold/90 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all duration-700 ${
                            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
                        }`}
                        style={{ transitionDelay: '0.3s' }}
                    >
                        <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-white" />
                        Réservez tôt et économisez jusqu'à 20%
                    </div>

                    {/* Headline */}
                    <h1 className="mb-6 text-4xl leading-tight font-bold text-white md:text-5xl lg:text-6xl">
                        {['Votre', 'pèlerinage,', 'notre', 'engagement'].map((word, index) => (
                            <span
                                key={index}
                                className={`mr-3 inline-block transition-all duration-700 ${
                                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                                style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
                            >
                                {word}
                            </span>
                        ))}
                    </h1>

                    {/* Description */}
                    <p
                        className={`mb-8 max-w-xl text-lg leading-relaxed text-white/90 transition-all duration-700 md:text-xl ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                        style={{ transitionDelay: '0.9s' }}
                    >
                        Des forfaits Hajj et Omra complets, accompagnés par des guides expérimentés pour une expérience spirituelle inoubliable.
                    </p>

                    {/* CTA Buttons */}
                    <div
                        className={`flex flex-col gap-4 transition-all duration-700 sm:flex-row ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                        style={{ transitionDelay: '1.1s' }}
                    >
                        <button
                            onClick={() => scrollToSection('#packages')}
                            className="group flex items-center justify-center space-x-2 rounded-lg bg-emerald px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-dark hover:shadow-emerald"
                        >
                            <span>Réserver maintenant</span>
                            <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </button>
                        <button
                            onClick={() => scrollToSection('#contact')}
                            className="btn-outline rounded-lg border-2 border-white/80 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-emerald"
                        >
                            Demander un devis
                        </button>
                    </div>

                    {/* Stats */}
                    <div
                        className={`mt-12 grid grid-cols-3 gap-6 transition-all duration-700 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                        style={{ transitionDelay: '1.3s' }}
                    >
                        {[
                            { value: '10+', label: "Années d'expérience" },
                            { value: '5000+', label: 'Pèlerins accompagnés' },
                            { value: '99%', label: 'Satisfaction client' },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-2xl font-bold text-gold md:text-3xl">{stat.value}</div>
                                <div className="text-sm text-white/70">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative Gold Line */}
            <div className="absolute right-0 bottom-0 left-0 z-30 h-1 animate-shimmer bg-gradient-to-r from-transparent via-gold to-transparent" />
        </section>
    );
};

export default Hero;
