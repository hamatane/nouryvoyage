// resources/js/Pages/Home.tsx
// import { Button } from '@/Components/ui/Button';
import { Head } from '@inertiajs/react';
// import { cn } from '@/lib/utils';
// import Blog from '../sections/Blog';
import Contact from '../sections/Contact';
import FAQ from '../sections/FAQ';
import Footer from '../sections/Footer';
import Gallery from '../sections/Gallery';
import Hero from '../sections/Hero';
import Navigation from '../sections/Navigation';
import Packages from '../sections/Packages';
import Testimonials from '../sections/Testimonials';
import WhyChooseUs from '../sections/WhyChooseUs';

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Head title="Nourya Voyage - Bienvenue" />
            <Navigation />
            <main>
                <Hero />
                <Packages />
                <WhyChooseUs />
                <Testimonials />
                <Gallery />
                {/* <Blog /> */}
                <FAQ />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}
