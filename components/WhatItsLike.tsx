import Image from 'next/image';
import lovejeetAvatar from '../assets/images/biconauts/lovejeet.svg';

const experiences = [
  {
    description:
      'After spending almost 3 years building products in the web2.0 space, I finally took the plunge and joined Biconomy 6 months ago. And boy oh boy, what a ride!',
    avatar: lovejeetAvatar,
    name: 'Lovejeet Singh',
    designation: 'Product Manager',
  },
  // Add for others.
];

function Experience({
  experience,
}: {
  experience: {
    description: string;
    avatar: any;
    name: string;
    designation: string;
  };
}) {
  return (
    <>
      <p className="mb-10 text-[2.75rem] text-bico-gray-400 dark:text-white">
        {experience.description}
      </p>
      <div className="mb-6 h-[100px] w-[100px]">
        <Image src={experience.avatar} alt={experience.name} />
      </div>
      <span className="mb-2 text-[2.75rem] font-bold text-bico-gray-400 dark:text-white">
        {experience.name}
      </span>
      <span className="text-2xl font-bold text-bico-gray-400 dark:text-white">
        {experience.designation}
      </span>
    </>
  );
}

function WhatItsLike() {
  return (
    <article className="my-[12.5rem] flex items-start justify-between">
      <div>
        <h2 className="text-8xl font-bold text-bico-gray-400 dark:text-white">
          What
        </h2>
        <h2 className="text-8xl font-bold text-bico-gray-400 dark:text-white">
          It&apos;s
        </h2>
        <h2 className="text-8xl font-bold text-bico-gray-400 dark:text-white">
          Like
        </h2>
      </div>

      <div className="grid grid-cols-[870px]">
        {experiences.map((experience, index) => (
          <Experience key={index} experience={experience} />
        ))}
      </div>
    </article>
  );
}

export default WhatItsLike;
