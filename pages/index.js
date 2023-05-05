import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/NavBar';
import Introduction from '../components/Introduction';
import BackgroundAnimation from '../components/BackgroundAnnimation';
import Aos from 'aos';
import { useEffect } from 'react';
import Projects from '../components/Projects';
import AboutMe from '../components/AboutMe';
import Footer from '../components/Footer';
import Skills from '../components/Skills';

export default function Home() {
  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // }, []);

  return (
    <div className=" px-3 px-md-0 ">
      <Head>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8886187882221586"
     crossorigin="anonymous"></script>
        <title>Rapheal Odejinmi</title>
      </Head>

      <BackgroundAnimation />

      <main className="anni">
        <Navigation />
        <Introduction />
        <AboutMe />
        <Skills />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
