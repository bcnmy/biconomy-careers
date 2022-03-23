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
    title: ['Great', 'Salary'],
    description:
      "Compensation in line with the web3 standards. And rewards? So good, you wouldn't believe.",
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
    <div className="mb-28 w-full">
      <p className="mb-6 text-7xl">{perk.emoji}</p>
      {perk.title.map((word, index) => (
        <p
          key={index}
          className="break-words text-[2.75rem] font-bold leading-none text-bico-gray-400"
        >
          {word}
        </p>
      ))}
      <p className="mt-6 pr-24 text-sm font-bold text-bico-gray-400">
        {perk.description}
      </p>
    </div>
  );
}

function TheBicoLife() {
  return (
    <article className="my-[12.5rem] flex items-start justify-between">
      <div>
        <h2 className="text-8xl font-bold text-bico-gray-400">The</h2>
        <h2 className="text-8xl font-bold text-bico-gray-400">Bico</h2>
        <h2 className="text-8xl font-bold text-bico-gray-400">Life</h2>
      </div>

      <div className="grid grid-cols-[430px_430px] gap-2.5">
        {perks.map((perk, index) => (
          <Perk key={index} perk={perk} />
        ))}
      </div>
    </article>
  );
}

export default TheBicoLife;
