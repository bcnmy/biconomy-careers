import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import lovejeetAvatar from '../assets/images/biconauts/lovejeet.svg';

const testimonials = [
  {
    description:
      'Have been in Biconomy for almost 3 years, what I love is being challenged & motivated to always innovate. The work here is never boring, lot of opportunities to explore new technology, experiment & learn. Over these years, got the opportunity to work in almost all the domains which helped me to push my limits. Along with the work culture, team dynamics also make us feel at home. Love the donut calls, gaming nights, surprise gifts 🙂',
    avatar: lovejeetAvatar,
    name: 'Divya Nailwal',
    designation: 'Software Engineer',
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
    avatar: lovejeetAvatar,
    name: 'Aditya Khanduri',
    designation: 'Product Manager',
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
      <p className="mb-10 text-[2.75rem] text-bico-gray-400 dark:text-white">
        {testimonial.description}
      </p>
      <div className="mb-6 h-[100px] w-[100px]">
        <Image src={testimonial.avatar} alt={testimonial.name} />
      </div>
      <span className="mb-2 text-[2.75rem] font-bold text-bico-gray-400 dark:text-white">
        {testimonial.name}
      </span>
      <span className="text-2xl font-bold text-bico-gray-400 dark:text-white">
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

      <div className="relative grid grid-cols-[870px]">
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
