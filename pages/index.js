import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/NavBar';
import Introduction from '../components/Introduction';
import BackgroundAnimation from '../components/BackgroundAnnimation';
import Aos from 'aos';
import { useEffect } from 'react';
import Projects from '../components/Projects';
import AboutMe from '../components/AboutMe';

export default function Home() {
  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // }, []);

  return (
    <div className=" px-3 px-md-0 ">
      <Head>
        <title>Rapheal Odejinmi</title>
      </Head>

      <BackgroundAnimation />

      <main className="anni pb-5">
        <Navigation />
        <Introduction />
        <AboutMe />
        <Projects />
      </main>
    </div>
  );
}
