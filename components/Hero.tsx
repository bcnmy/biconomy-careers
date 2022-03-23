import Image from 'next/image';

import yashImage from '../assets/images/biconauts/yash.svg';
import arshitaImage from '../assets/images/biconauts/arshita.svg';
import aaronImage from '../assets/images/biconauts/aaron.svg';
import trevorImage from '../assets/images/biconauts/trevor.svg';
import asheerImage from '../assets/images/biconauts/asheer.svg';
import rhicImage from '../assets/images/biconauts/rhic.svg';
import miguelImage from '../assets/images/biconauts/miguel.svg';
import chiragImage from '../assets/images/biconauts/chirag.svg';

function Hero() {
  return (
    <article className="relative mt-24 justify-center">
      <div className="flex flex-col items-center">
        <h2 className="text-8xl font-bold text-bico-gray-400">Join The</h2>
        <h2 className="text-8xl font-bold text-bico-gray-400">Biconauts</h2>
      </div>
    </article>
  );
}

export default Hero;
