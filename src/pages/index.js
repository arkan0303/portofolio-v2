import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TechMarquee from '../components/TechMarquee';
import Stats from '../components/Stats';
import About from '../components/About';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Faq from '../components/Faq';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { profile } from '../data/portfolio';

export default function Home() {
  const title = `${profile.name} — ${profile.role}`;
  const desc = 'Fullstack developer dan freelancer web. Membangun sistem informasi, website, dan aplikasi dengan React, Next.js, Golang, dan Laravel.';
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <Stats />
        <About />
        <Projects />
        <Services />
        <Skills />
        <Experience />
        <Process />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
