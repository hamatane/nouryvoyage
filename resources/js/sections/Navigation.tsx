import { Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Accueil', href: '#hero' },
        { name: 'Nos Offres', href: '#packages' },
        { name: 'Pourquoi Nous', href: '#why-us' },
        { name: 'Témoignages', href: '#testimonials' },
        { name: 'Galerie', href: '#gallery' },
        // { name: 'Blog', href: '#blog'},
        { name: 'FAQ', href: '#faq' },
        { name: 'Contact', href: '#contact' },
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
                isScrolled ? 'bg-white/95 shadow-md backdrop-blur-md' : 'bg-transparent'
            }`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="relative">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald">
                                <span className="text-xl font-bold text-white">NV</span>
                            </div>
                            <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-gold" />
                        </div>
                        <div className="flex flex-col">
                            <span className={`text-lg font-bold ${isScrolled ? 'text-emerald' : 'text-white'}`}>Nourya Voyage</span>
                            <span className={`text-xs ${isScrolled ? 'text-gold' : 'text-white/80'}`}>Hajj et Omra</span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center space-x-8 lg:flex">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.href)}
                                className={`gold-border-animate text-sm font-medium transition-colors ${
                                    isScrolled ? 'text-gray-700 hover:text-emerald' : 'text-white hover:text-gold'
                                }`}
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden items-center space-x-4 lg:flex">
                        <a
                            href="tel:+33123456789"
                            className="flex items-center space-x-2 text-sm font-medium text-gold transition-colors hover:text-gold-light"
                        >
                            <Phone className="h-4 w-4" />
                            <span>05 06 02 73 84</span>
                        </a>
                        <button
                            onClick={() => scrollToSection('#contact')}
                            className="rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-dark hover:shadow-gold"
                        >
                            Demander un devis
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`p-2 lg:hidden ${isScrolled ? 'text-gray-700' : 'text-white'}`}
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`absolute top-full right-0 left-0 bg-white shadow-lg transition-all duration-300 lg:hidden ${
                    isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
                }`}
            >
                <div className="space-y-4 px-4 py-6">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.href)}
                            className="block w-full border-b border-gray-100 py-2 text-left font-medium text-gray-700 hover:text-emerald"
                        >
                            {link.name}
                        </button>
                    ))}
                    <button onClick={() => scrollToSection('#contact')} className="mt-4 w-full rounded-lg bg-emerald py-3 font-semibold text-white">
                        Demander un devis
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
