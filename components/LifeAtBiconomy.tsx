import Image from 'next/image';

const perks = [
  {
    title: ['Remote-native', 'Team'],
    description:
      'Scattered all over the world, our workforce is truly diverse and international.',
    emoji: '🗺',
  },
  {
    title: ['Healthy', 'Work-life'],
    description: 'Choose your working hours, schedules and preferences.',
    emoji: '🛌',
  },
  {
    title: ['Open', 'Vacation Policy'],
    description:
      'We encourage stepping away from the computer to plan your work around your life.',
    emoji: '🏖',
  },
  {
    title: ['Personal', 'Development'],
    description:
      "Find the opportunity to map out how you would like to grow and we'll help you. Fund you too!",
    emoji: '😌',
  },
  {
    title: ['Become', 'Pioneers'],
    description:
      'The whole space is so nascent that there are no playbooks. Venture into uncharted territory & create benchmarks for the whole industry!',
    emoji: '🤑',
  },
  {
    title: ['Team', 'Bonding'],
    description:
      "Catch-ups, gaming nights and an offsite (when and if we're allowed to travel).",
    emoji: '🎉',
  },
];

function Perk({
  perk,
}: {
  perk: {
    title: string[];
    description: string;
    emoji: string;
  };
}) {
  return (
    <div className="mb-12 w-full lg:mb-28">
      <p className="mb-6 text-7xl">{perk.emoji}</p>
      {perk.title.map((word, index) => (
        <p
          key={index}
          className="break-words text-3xl font-bold leading-none text-bico-gray-400 dark:text-white lg:text-[2.75rem]"
        >
          {word}
        </p>
      ))}
      <p className="mt-4 text-sm font-bold text-bico-gray-400 dark:text-white lg:pr-24">
        {perk.description}
      </p>
    </div>
  );
}

function LifeAtBiconomy() {
  return (
    <article className="container mx-auto mb-12 flex flex-col justify-center px-8 lg:flex-row lg:items-start lg:justify-between">
      <h2 className="mb-12 text-4xl font-bold text-bico-gray-400 dark:text-white lg:text-8xl">
        Life <br className="hidden lg:block" />
        at <br className="hidden lg:block" />
        Biconomy
      </h2>

      <div className="grid grid-cols-1 gap-2.5 lg:grid-cols-[430px_430px]">
        {perks.map((perk, index) => (
          <Perk key={index} perk={perk} />
        ))}
      </div>
    </article>
  );
}

export default LifeAtBiconomy;
