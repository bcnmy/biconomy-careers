import { useState } from 'react';
import Image from 'next/image';

import hero from '../assets/images/hero.png';

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
    <article className="container relative mx-auto mt-24 h-[62.25rem] justify-center px-2">
      <div className="flex flex-col items-center">
        <h2 className="text-8xl font-bold text-bico-gray-400 dark:text-white">
          Join The
        </h2>
        <h2 className="text-8xl font-bold text-bico-gray-400 dark:text-white">
          Biconauts
        </h2>
      </div>

      <div
        className="absolute top-0 h-full w-full bg-hero-image bg-contain bg-[center_top_1rem] bg-no-repeat"
        style={{
          backgroundPosition:
            position.pageX && position.pageX > 0
              ? `left -${position.pageX * 0.05}px top 1rem`
              : position.pageX && position.pageX < 0
              ? `right ${position.pageX * 0.05}px top 1rem`
              : '',
        }}
        onMouseMove={handleMouseMove}
      ></div>
    </article>
  );
}

export default Hero;
