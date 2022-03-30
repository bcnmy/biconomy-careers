import { useState } from 'react';

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
    <article className="container relative mx-auto mt-8 mb-16 h-[18rem] justify-center lg:mt-24 lg:mb-20 lg:h-[62.25rem]">
      <div className="flex flex-col items-center">
        <h2 className="text-center text-4xl font-bold text-bico-gray-400 dark:text-white lg:text-8xl">
          Join The <br />
          Biconauts
        </h2>
      </div>

      <div
        className="absolute top-0 h-full w-full bg-hero-image bg-contain bg-[center_top_2.5rem] bg-no-repeat"
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
