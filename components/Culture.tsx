import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import culture1 from '../assets/images/culture/culture-1.png';
import culture2 from '../assets/images/culture/culture-2.jpg';
import culture3 from '../assets/images/culture/culture-3.jpg';
import culture4 from '../assets/images/culture/culture-4.jpg';
import culture5 from '../assets/images/culture/culture-5.jpg';
import culture6 from '../assets/images/culture/culture-6.jpg';

const cultureImages = [
  culture1,
  culture2,
  culture3,
  culture4,
  culture5,
  culture6,
];

function ImageDescription({ text }: { text: string }) {
  return (
    <div className="mx-auto flex h-[100px] w-[calc(100%-20px)] items-center justify-center rounded-[40px] bg-culture-image-desc backdrop-blur-xl">
      <p className="text-2xl font-bold text-white">{text}</p>
    </div>
  );
}

function Culture() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex(prevIndex => (prevIndex + 1) % cultureImages.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <article
      id="culture"
      className="my-[12.5rem] flex items-start justify-between"
    >
      <div>
        <h2 className="text-8xl font-bold text-bico-gray-400 dark:text-white">
          Culture
        </h2>
        <p className="text-sm font-bold text-bico-gray-400 dark:text-white">
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
        key={imageIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative h-[870px] w-[870px] overflow-hidden rounded-[3.125rem] bg-black"
      >
        <Image
          src={cultureImages[imageIndex]}
          alt="Culture"
          layout="fill"
          objectFit="contain"
          placeholder="blur"
        />
        <div className="absolute bottom-[10px] w-full">
          <ImageDescription text="Yash & Aditya visiting the Himalayas, IN." />
        </div>
      </motion.div>
    </article>
  );
}

export default Culture;
