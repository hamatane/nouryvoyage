import { Calendar, ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'Les 10 conseils pour bien préparer son Hajj',
    excerpt: 'S\'organiser, se préparer mentalement et physiquement, connaître les rituels... Découvrez nos recommandations essentielles pour un pèlerinage réussi.',
    image: 'images/blog-hajj-tips.jpg',
    date: '15 juin 2024',
    featured: true,
  },
  {
    id: 2,
    title: 'Ramadan 2024 : Les meilleures pratiques',
    excerpt: 'Le Ramadan est un mois béni pour les musulmans. Découvrez comment maximiser vos actes de culte.',
    image: 'images/blog-ramadan.jpg',
    date: '10 juin 2024',
  },
  {
    id: 3,
    title: 'Omra en famille : Notre guide complet',
    excerpt: 'Partir en Omra avec toute la famille peut sembler complexe. Voici nos conseils pour une expérience réussie.',
    image: 'images/blog-family.jpg',
    date: '5 juin 2024',
  },
];

const Blog = () => {
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
      id="blog"
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
            Actualités & Conseils
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            Restez informé avec nos derniers articles et conseils pour votre pèlerinage
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Post */}
          <div
            className={`group lg:row-span-2 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            <article className="h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center text-white/80 text-sm mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl lg:text-2xl font-bold text-emerald mb-3 group-hover:text-emerald-light transition-colors">
                  {blogPosts[0].title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {blogPosts[0].excerpt}
                </p>
                <button className="inline-flex items-center text-gold font-semibold group-hover:underline">
                  <span>Lire plus</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          </div>

          {/* Secondary Posts */}
          {blogPosts.slice(1).map((post, index) => (
            <div
              key={post.id}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
            >
              <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col justify-center">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-emerald mb-2 group-hover:text-emerald-light transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <button className="inline-flex items-center text-gold text-sm font-semibold group-hover:underline">
                    <span>Lire plus</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '0.6s' }}
        >
          <button className="inline-flex items-center space-x-2 border-2 border-emerald text-emerald hover:bg-emerald hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
            <span>Voir tous les articles</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
