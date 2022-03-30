import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import divyaAvatar from '../assets/images/biconauts/divya.svg';
import lovejeetAvatar from '../assets/images/biconauts/lovejeet.svg';
import adityaAvatar from '../assets/images/biconauts/aditya.svg';

const testimonials = [
  {
    description:
      'Have been in Biconomy for almost 3 years, what I love is being challenged & motivated to always innovate. The work here is never boring, lot of opportunities to explore new technology, experiment & learn. Over these years, got the opportunity to work in almost all the domains which helped me to push my limits. Along with the work culture, team dynamics also make us feel at home. Love the donut calls, gaming nights, surprise gifts 🙂',
    avatar: divyaAvatar,
    name: 'Divya Nailwal',
    designation: 'Blockchain Developer',
  },
  {
    description:
      'After spending almost 3 years building products in the web2.0 space, I finally took the plunge and joined Biconomy 6 months ago. And boy oh boy, what a ride!',
    avatar: lovejeetAvatar,
    name: 'Lovejeet Singh',
    designation: 'Product Manager',
  },
  {
    description:
      "Working at Biconomy is fast paced, exhilarating & absolutely non-stop. We are building at the cutting edge of web3. Thus, everyone is solving exciting problems never tackled before. There's no playbook. We navigate in uncharted territories!",
    avatar: adityaAvatar,
    name: 'Aditya Khanduri',
    designation: 'Head of Marketing & Community',
  },
];

function Testimonial({
  testimonial,
}: {
  testimonial: {
    description: string;
    avatar: any;
    name: string;
    designation: string;
  };
}) {
  return (
    <div className="flex flex-col">
      <p className="mb-8 text-2xl leading-normal text-bico-gray-400 dark:text-white lg:text-[2.75rem]">
        {testimonial.description}
      </p>
      <div className="mb-6 h-[100px] w-[100px]">
        <Image src={testimonial.avatar} alt={testimonial.name} />
      </div>
      <span className="text-3xl font-bold leading-normal text-bico-gray-400 dark:text-white lg:text-[2.75rem]">
        {testimonial.name}
      </span>
      <span className="text-base font-bold leading-normal text-bico-gray-400 dark:text-white lg:text-2xl">
        {testimonial.designation}
      </span>
    </div>
  );
}

function WhatItsLike() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <article className="container mx-auto mb-20 flex flex-col justify-center px-8 lg:mb-40 lg:flex-row lg:items-start lg:justify-between">
      <div className="mb-12 lg:mb-0">
        <h2 className="text-4xl font-bold text-bico-gray-400 dark:text-white lg:text-8xl">
          What <br className="hidden lg:block" />
          It&apos;s <br className="hidden lg:block" />
          Like
        </h2>
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-[870px]">
        <motion.div
          key={testimonialIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Testimonial testimonial={testimonials[testimonialIndex]} />
        </motion.div>
      </div>
    </article>
  );
}

export default WhatItsLike;
