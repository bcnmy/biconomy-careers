import Image from 'next/image';

import culture1 from '../assets/images/culture/culture-1.jpg';

function ImageDescription({ text }: { text: string }) {
  return (
    <div className="mx-auto flex h-[100px] w-[calc(100%-20px)] items-center justify-center rounded-[40px] bg-culture-image-desc backdrop-blur-xl">
      <p className="text-2xl font-bold text-white">{text}</p>
    </div>
  );
}

function Culture() {
  return (
    <article className="my-[12.5rem] flex items-start justify-between">
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
      <div className="relative">
        <Image src={culture1} alt="Culture" />
        <div className="absolute bottom-[17px] w-full">
          <ImageDescription text="Yash & Aditya visiting the Himalayas, IN." />
        </div>
      </div>
    </article>
  );
}

export default Culture;
