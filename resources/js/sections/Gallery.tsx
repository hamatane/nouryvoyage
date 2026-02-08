import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const galleryItems = [
    {
        id: 1,
        type: 'image',
        src: 'images/gallery-prayer.jpg',
        title: 'Pèlerins en prière',
        size: 'large',
    },
    {
        id: 2,
        type: 'image',
        src: 'images/gallery-aerial.jpg',
        title: 'Vue aérienne de la Mecque',
        size: 'medium',
    },
    {
        id: 3,
        type: 'image',
        src: 'images/gallery-group.jpg',
        title: 'Groupe de pèlerins',
        size: 'medium',
    },
    {
        id: 4,
        type: 'image',
        src: 'images/gallery-kaaba-sunset.jpg',
        title: 'La Kaaba au coucher du soleil',
        size: 'medium',
    },
    {
        id: 5,
        type: 'video',
        src: 'https://www.youtube.com/embed/jk9zPzEjY6A',
        title: 'Témoignage de pèlerins',
        thumbnail: '/video-thumbnail.jpg',
        size: 'wide',
    },
    {
        id: 6,
        type: 'image',
        src: 'images/gallery-mosque-night.jpg',
        title: 'Mosquée illuminée',
        size: 'medium',
    },
];

const Gallery = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [activeItem, setActiveItem] = useState<number | null>(null);
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

    const openLightbox = (id: number) => {
        setActiveItem(id);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = 'auto';
    };

    const navigateLightbox = (direction: 'prev' | 'next') => {
        if (activeItem === null) return;
        const currentIndex = galleryItems.findIndex((item) => item.id === activeItem);
        let newIndex: number;
        if (direction === 'prev') {
            newIndex = currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1;
        } else {
            newIndex = currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1;
        }
        setActiveItem(galleryItems[newIndex].id);
    };

    return (
        <section id="gallery" ref={sectionRef} className="section-padding bg-gradient-to-br from-emerald/5 to-gold/5">
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2
                        className={`mb-4 text-3xl font-bold text-emerald transition-all duration-700 md:text-4xl lg:text-5xl ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                    >
                        Moments de foi et de fraternité
                    </h2>
                    <p
                        className={`mx-auto max-w-2xl text-lg text-gray-600 transition-all duration-700 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                        style={{ transitionDelay: '0.2s' }}
                    >
                        Découvrez les instants magiques de nos pèlerins lors de leurs voyages
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {galleryItems.map((item, index) => (
                        <div
                            key={item.id}
                            className={`group relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                                item.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''
                            } ${item.size === 'wide' ? 'md:col-span-2' : ''} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
                            onClick={() => openLightbox(item.id)}
                        >
                            {/* Image/Thumbnail */}
                            <div className={`${item.size === 'large' ? 'h-80 md:h-full' : 'h-64'} overflow-hidden`}>
                                <img
                                    src={item.type === 'video' ? item.thumbnail : item.src}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />

                            {/* Play Button for Video */}
                            {item.type === 'video' && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="flex h-16 w-16 animate-pulse-glow items-center justify-center rounded-full bg-gold transition-transform duration-300 group-hover:scale-110">
                                        <Play className="ml-1 h-6 w-6 text-white" fill="white" />
                                    </div>
                                </div>
                            )}

                            {/* Title */}
                            <div className="absolute right-0 bottom-0 left-0 p-6">
                                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                            </div>

                            {/* Hover Icon */}
                            <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                                <span className="text-sm font-bold text-white">+</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {lightboxOpen && activeItem !== null && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={closeLightbox}>
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                    >
                        <X className="h-6 w-6" />
                    </button>

                    {/* Navigation */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            navigateLightbox('prev');
                        }}
                        className="absolute top-1/2 left-4 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            navigateLightbox('next');
                        }}
                        className="absolute top-1/2 right-4 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>

                    {/* Content */}
                    <div className="max-h-[80vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
                        {(() => {
                            const item = galleryItems.find((i) => i.id === activeItem);
                            if (!item) return null;

                            return item.type === 'video' ? (
                                <div className="relative pt-[56.25%]">
                                    <iframe
                                        src={item.src}
                                        title={item.title}
                                        className="absolute inset-0 h-full w-full rounded-lg"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            ) : (
                                <div>
                                    <img src={item.src} alt={item.title} className="max-h-[80vh] max-w-full rounded-lg object-contain" />
                                    <div className="mt-4 text-center">
                                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                    </div>
                                </div>
                            );
                        })()}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
