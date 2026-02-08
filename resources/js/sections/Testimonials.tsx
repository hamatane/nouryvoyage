import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const testimonials = [
    {
        id: 1,
        name: 'Mohammed S.',
        location: 'Paris, France',
        avatar: 'images/avatar-1.jpg',
        rating: 5,
        text: 'Un voyage extraordinaire grâce à une organisation sans faille. Les guides étaient très attentifs et les hôtels exceptionnels. Mon Hajj a été une expérience spirituelle inoubliable.',
    },
    {
        id: 2,
        name: 'Fatima Z.',
        location: 'Bruxelles, Belgique',
        avatar: 'images/avatar-2.jpg',
        rating: 5,
        text: "Mon premier Hajj et quel souvenir ! Tout était parfaitement organisé, je me suis concentrée uniquement sur la spiritualité. L'accompagnement religieux était d'une grande aide.",
    },
    {
        id: 3,
        name: 'Ahmed K.',
        location: 'Lyon, France',
        avatar: 'images/avatar-3.jpg',
        rating: 5,
        text: "L'accompagnement spirituel nous a vraiment aidés à vivre cette expérience en profondeur. Les conférences étaient enrichissantes et les guides très compétents.",
    },
];

const Testimonials = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
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

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const goToPrev = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToNext = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    return (
        <section id="testimonials" ref={sectionRef} className="section-padding overflow-hidden bg-white">
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2
                        className={`mb-4 text-3xl font-bold text-emerald transition-all duration-700 md:text-4xl lg:text-5xl ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                    >
                        Ce que disent nos pèlerins
                    </h2>
                    <p
                        className={`mx-auto max-w-2xl text-lg text-gray-600 transition-all duration-700 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                        style={{ transitionDelay: '0.2s' }}
                    >
                        Découvrez les témoignages authentiques de nos pèlerins satisfaits
                    </p>
                </div>

                {/* Testimonials Carousel */}
                <div className="relative mx-auto max-w-4xl">
                    {/* Main Card */}
                    <div
                        className={`relative transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                        style={{ transitionDelay: '0.3s' }}
                    >
                        {/* Quote Icon */}
                        <div className="absolute -top-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-gold shadow-gold">
                            <Quote className="h-6 w-6 text-white" />
                        </div>

                        {/* Card */}
                        <div className="rounded-2xl bg-gradient-to-br from-emerald/5 to-gold/5 p-8 text-center md:p-12">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={testimonial.id}
                                    className={`transition-all duration-500 ${
                                        index === activeIndex ? 'scale-100 opacity-100' : 'pointer-events-none absolute inset-0 scale-95 opacity-0'
                                    }`}
                                >
                                    {/* Stars */}
                                    <div className="mb-6 flex justify-center space-x-1">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 fill-gold text-gold" style={{ animationDelay: `${i * 0.1}s` }} />
                                        ))}
                                    </div>

                                    {/* Text */}
                                    <p className="mb-8 text-lg leading-relaxed text-gray-700 italic md:text-xl">"{testimonial.text}"</p>

                                    {/* Author */}
                                    <div className="flex items-center justify-center space-x-4">
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            className="h-16 w-16 rounded-full border-2 border-gold object-cover"
                                        />
                                        <div className="text-left">
                                            <div className="font-semibold text-emerald">{testimonial.name}</div>
                                            <div className="text-sm text-gray-500">{testimonial.location}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="mt-8 flex items-center justify-center space-x-4">
                        <button
                            onClick={goToPrev}
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-emerald shadow-md transition-all duration-300 hover:bg-emerald hover:text-white hover:shadow-lg"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>

                        {/* Dots */}
                        <div className="flex space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`h-3 w-3 rounded-full transition-all duration-300 ${
                                        index === activeIndex ? 'w-8 bg-emerald' : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={goToNext}
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-emerald shadow-md transition-all duration-300 hover:bg-emerald hover:text-white hover:shadow-lg"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                {/* Trust Badges */}
                <div
                    className={`mt-16 flex flex-wrap items-center justify-center gap-8 transition-all duration-700 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: '0.5s' }}
                >
                    {[
                        { label: 'Avis vérifiés', value: '4.9/5' },
                        { label: 'Clients satisfaits', value: '+5000' },
                        { label: 'Taux de recommandation', value: '98%' },
                    ].map((badge, index) => (
                        <div key={index} className="rounded-xl bg-white px-6 py-4 text-center shadow-sm">
                            <div className="text-2xl font-bold text-emerald">{badge.value}</div>
                            <div className="text-sm text-gray-500">{badge.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
