import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import culture1 from '../assets/images/culture/culture-1.png';
import culture2 from '../assets/images/culture/culture-2.png';
import culture3 from '../assets/images/culture/culture-3.png';
import culture4 from '../assets/images/culture/culture-4.png';
import culture5 from '../assets/images/culture/culture-5.png';

const moments = [
  {
    img: culture1,
    description: 'Yash & Aditya visiting the Himalayas, IN',
  },
  {
    img: culture2,
    description: 'Preparing for the BICO token launch in Mussoorie, IN',
  },
  {
    img: culture3,
    description: 'Trevor getting ready to ski in Skopje, North Macedonia',
  },
  {
    img: culture4,
    description: 'Biconauts w̶o̶r̶k̶i̶n̶g̶ vacationing in Dubai',
  },
  {
    img: culture5,
    description: 'Team India chilling in Delhi, IN',
  },
];

function ImageDescription({ text }: { text: string }) {
  return (
    <div className="mx-auto flex h-[68px] w-[calc(100%-20px)] items-center justify-center rounded-[12px] bg-culture-image-desc backdrop-blur-xl md:rounded-[40px] lg:h-[100px]">
      <p className="text-center text-sm font-bold text-white lg:text-base">
        {text}
      </p>
    </div>
  );
}

function Culture() {
  const [momentIndex, setMomentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMomentIndex(prevIndex => (prevIndex + 1) % moments.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <article
      id="culture"
      className="container mx-auto mb-24 grid grid-cols-1 justify-center gap-2.5 px-8 lg:mb-40 lg:px-0 xl:grid-cols-3"
    >
      <div>
        <h2 className="mb-6 text-4xl font-bold text-bico-gray-400 dark:text-white lg:text-8xl">
          Culture
        </h2>
        <p className="mb-12 text-sm font-bold text-bico-gray-400 dark:text-white">
          Biconomy is a team of web3 enthusiasts building the infrastructure for
          the future of the decentralised internet. We are all relentlessly
          driven by our shared vision of making web3 mainstream. We&pos;ve built
          a rock-solid culture at Biconomy by valuing all sorts of things! But
          we particularly take pride in treating people right, spreading joy,
          taking responsibility, being transparent and moving fast. As an agile
          organization tackling audaciously ambitious goals, every team member
          has to take initiative & own critical functions. That means you have
          an amazing opportunity to play a significant role in bringing
          decentralise tech to the masses.
        </p>
      </div>

      <motion.div
        key={momentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative xl:col-span-2"
      >
        <Image
          src={moments[momentIndex].img}
          alt="Culture"
          layout="responsive"
          objectFit="cover"
          placeholder="blur"
        />
        <div className="absolute bottom-[10px] w-full">
          <ImageDescription text={moments[momentIndex].description} />
        </div>
      </motion.div>
    </article>
  );
}

export default Culture;
