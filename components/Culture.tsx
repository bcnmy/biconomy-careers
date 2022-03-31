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
    <div className="mx-auto flex h-[68px] w-[calc(100%-20px)] items-center justify-center rounded-[12px] bg-culture-image-desc backdrop-blur-xl lg:h-[100px] lg:rounded-[40px]">
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
      className="container mx-auto mb-24 flex flex-col justify-center px-8 lg:mb-40 lg:flex-row lg:items-start lg:justify-between lg:px-0"
    >
      <div>
        <h2 className="mb-6 text-4xl font-bold text-bico-gray-400 dark:text-white lg:text-8xl">
          Culture
        </h2>
        <p className="mb-12 text-sm font-bold text-bico-gray-400 dark:text-white">
          We&apos;ve built a rock-solid cuture at Biconomy
          <br />
          by valuing all sorts of things! But we particularly
          <br />
          take pride in treating people right, spreading
          <br />
          joy, taking responsibility, being transparent
          <br />
          and moving fast.
        </p>
      </div>

      <motion.div
        key={momentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative h-[240px] w-full overflow-hidden rounded-[30px] lg:h-[650px] lg:w-[870px] lg:rounded-[50px]"
      >
        <Image
          src={moments[momentIndex].img}
          alt="Culture"
          layout="fill"
          objectFit="contain"
          placeholder="blur"
        />
        <div className="absolute bottom-[8px] w-full lg:bottom-[10px]">
          <ImageDescription text={moments[momentIndex].description} />
        </div>
      </motion.div>
    </article>
  );
}

export default Culture;
