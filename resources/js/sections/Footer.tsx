import { Send, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
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

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            setEmail('');
            setTimeout(() => setIsSubscribed(false), 3000);
        }
    };

    const quickLinks = [
        { name: 'Accueil', href: '#hero' },
        { name: 'Nos Offres', href: '#packages' },
        { name: 'Témoignages', href: '#testimonials' },
        { name: 'Galerie', href: '#gallery' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Contact', href: '#contact' },
    ];

    const services = [
        { name: 'Hajj 2026', href: '#packages' },
        { name: 'Omra Ramadan', href: '#packages' },
        { name: 'Omra Standard', href: '#packages' },
        { name: 'Forfaits Famille', href: '#packages' },
        { name: 'Groupes', href: '#packages' },
    ];

    const socialLinks = [
        { name: 'Facebook', Icon: Facebook, href: '#' },
        { name: 'Instagram', Icon: Instagram, href: '#' },
        { name: 'YouTube', Icon: Youtube, href: '#' },
        { name: 'WhatsApp', Icon: Phone, href: 'https://wa.me/33612345678' },
    ];

    return (
        <footer ref={sectionRef} className="bg-emerald text-white">
            {/* Gold Separator */}
            <div className="h-1 animate-shimmer bg-gradient-to-r from-transparent via-gold to-transparent" />

            {/* Main Footer */}
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand Column */}
                    <div
                        className={`transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                        style={{ transitionDelay: '0.1s' }}
                    >
                        <div className="mb-6 flex items-center space-x-2">
                            <div className="relative">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                                    <span className="text-xl font-bold text-emerald">H</span>
                                </div>
                                <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-gold" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bold">Hajj & Omra</span>
                                <span className="text-xs text-white/70">Travel Agency</span>
                            </div>
                        </div>
                        <p className="mb-6 text-sm leading-relaxed text-white/80">
                            Votre agence spécialisée dans l'organisation de pèlerinages Hajj et Omra depuis plus de 10 ans. L'excellence au service de
                            votre spiritualité.
                        </p>
                        <div className="flex space-x-3">
                            {socialLinks.map((social, index) => {
                                const IconComponent = social.Icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target={social.href.startsWith('http') ? '_blank' : undefined}
                                        rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-all duration-300 hover:scale-110 hover:bg-gold"
                                        title={social.name}
                                    >
                                        <IconComponent className="h-5 w-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div
                        className={`transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                        style={{ transitionDelay: '0.2s' }}
                    >
                        <h3 className="mb-6 text-lg font-bold">Liens rapides</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="group flex items-center text-sm text-white/80 transition-colors hover:text-gold"
                                    >
                                        <span className="mr-3 h-1.5 w-1.5 rounded-full bg-gold opacity-0 transition-opacity group-hover:opacity-100" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div
                        className={`transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                        style={{ transitionDelay: '0.3s' }}
                    >
                        <h3 className="mb-6 text-lg font-bold">Nos Services</h3>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <a
                                        href={service.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.querySelector(service.href)?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="group flex items-center text-sm text-white/80 transition-colors hover:text-gold"
                                    >
                                        <span className="mr-3 h-1.5 w-1.5 rounded-full bg-gold opacity-0 transition-opacity group-hover:opacity-100" />
                                        {service.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div
                        className={`transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                        style={{ transitionDelay: '0.4s' }}
                    >
                        <h3 className="mb-6 text-lg font-bold">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                                <a href="tel:+33123456789" className="text-sm text-white/80 transition-colors hover:text-gold">
                                    +225 05 06 02 73 84
                                </a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                                <a href="mailto:contact@hajj-omra.fr" className="text-sm text-white/80 transition-colors hover:text-gold">
                                    contact@nouryavoyage.com
                                </a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                                <span className="text-sm text-white/80">
                                    123 Rue de la Paix
                                    <br />
                                    75000 Abidjan, Cote d'Ivoire
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter */}
                <div
                    className={`mt-16 border-t border-white/20 pt-12 transition-all duration-700 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: '0.5s' }}
                >
                    <div className="mx-auto max-w-2xl text-center">
                        <h3 className="mb-4 text-xl font-bold">Abonnez-vous à notre newsletter</h3>
                        <p className="mb-6 text-sm text-white/80">Recevez nos offres exclusives et conseils pour votre pèlerinage</p>
                        <form onSubmit={handleSubscribe} className="flex flex-col gap-3 sm:flex-row">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Votre email"
                                className="flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 transition-colors focus:border-gold focus:outline-none"
                                required
                            />
                            <button
                                type="submit"
                                className="flex items-center justify-center space-x-2 rounded-lg bg-gold px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-gold-dark"
                            >
                                {isSubscribed ? (
                                    <span>Abonné !</span>
                                ) : (
                                    <>
                                        <span>S'inscrire</span>
                                        <Send className="h-4 w-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/10">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <p className="text-center text-sm text-white/60 md:text-left">Nourya Voyage © 2026 . Tous droits réservés.</p>
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-white/60 transition-colors hover:text-white">
                                Mentions légales
                            </a>
                            <a href="#" className="text-white/60 transition-colors hover:text-white">
                                Politique de confidentialité
                            </a>
                            <a href="#" className="text-white/60 transition-colors hover:text-white">
                                CGV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
