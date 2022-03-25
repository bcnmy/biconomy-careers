import type { NextPage } from 'next';
import Head from 'next/head';
import Culture from '../components/Culture';
import Footer from '../components/Footer';

import Header from '../components/Header';
import Hero from '../components/Hero';
import OpenRoles from '../components/OpenRoles';
import TheBicoLife from '../components/TheBicoLife';
import WhatItsLike from '../components/WhatItsLike';

const Home: NextPage = () => {
  return (
    <div className="bg-white dark:bg-[#212325]">
      <Head>
        <title>Careers - Biconomy</title>
        <meta name="description" content="Careers at Biconomy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto px-2">
        {/* <Hero /> */}
        <Culture />
        <TheBicoLife />
        <WhatItsLike />
        <OpenRoles />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
