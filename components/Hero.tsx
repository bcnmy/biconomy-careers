import Image from 'next/image';
import { useState } from 'react';

import heroImage from '../public/hero.png';

function Hero() {
  const [position, setPosition] = useState<{
    pageX: number | undefined;
    pageY: number | undefined;
  }>({
    pageX: undefined,
    pageY: undefined,
  });

  function handleMouseMove(e: any) {
    const pageX = e.clientX - window.innerWidth / 2;
    const pageY = e.clientY - window.innerHeight / 2;

    setPosition({ pageX, pageY });
  }

  return (
    <article
      className="container relative mx-auto mt-8 mb-16 h-60 justify-center md:h-[32rem] lg:mt-24 lg:mb-20 lg:h-[62rem]"
      onMouseMove={handleMouseMove}
    >
      <h2 className="text-center text-4xl font-bold text-bico-gray-400 dark:text-white lg:text-8xl">
        Join The <br />
        Biconauts
      </h2>

      <div
        className="absolute top-8"
        style={{
          transform:
            position.pageX && position.pageX > 0
              ? `translateX(-${position.pageX * 0.05}px)`
              : position.pageX && position.pageX < 0
              ? `translateX(${-position.pageX * 0.05}px)`
              : '',
        }}
      >
        <Image src={heroImage} alt="Join the Biconauts" />
      </div>
    </article>
  );
}

export default Hero;
