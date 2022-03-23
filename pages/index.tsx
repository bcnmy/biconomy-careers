import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Culture from '../components/Culture';

import Header from '../components/Header';
import Hero from '../components/Hero';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Biconomy - Careers</title>
        <meta name="description" content="Careers at Biconomy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto">
        {/* <Hero /> */}
        <Culture />
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
