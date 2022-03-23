import Image from 'next/image';
import arrowRight from '../assets/images/arrow-right.svg';

// Get from API.
const roleCategories = [
  'All',
  'Product',
  'Engineering',
  'Protocol',
  'Operations',
  'Design',
  'Marketing',
  'Finance',
];

// Get from API.
const roles = [
  {
    title: 'Protocol Architect',
    location: 'Remote',
  },
  {
    title: 'Protocol Architect',
    location: 'Remote',
  },
  {
    title: 'Protocol Architect',
    location: 'Remote',
  },
  {
    title: 'Protocol Architect',
    location: 'Remote',
  },
  {
    title: 'Protocol Architect',
    location: 'Remote',
  },
  {
    title: 'Protocol Architect',
    location: 'Remote',
  },
  // Add for others.
];

function RoleCategory({ roleCategory }: { roleCategory: string }) {
  return (
    <button className="flex h-[2.125rem] items-center rounded-full bg-[#D8511126] px-6 text-lg font-bold text-bico-gray-400">
      {roleCategory}
    </button>
  );
}

function Role({
  role,
}: {
  role: {
    title: string;
    location: string;
  };
}) {
  return (
    <div className="mb-14 cursor-pointer">
      <p className="mb-2 flex items-center justify-between text-[2.75rem] text-bico-gray-400">
        {role.title}
        <Image src={arrowRight} alt="See description" />
      </p>
      <div className="mb-6 h-px w-full bg-bico-gray-400"></div>
      <p className="flex items-center text-2xl font-bold text-bico-gray-400">
        {role.location}
        <span className="ml-6 text-[18px]">🌎</span>
      </p>
    </div>
  );
}

function OpenRoles() {
  return (
    <article className="my-[12.5rem] flex items-start justify-between">
      <div>
        <h2 className="text-8xl font-bold text-bico-gray-400">Open</h2>
        <h2 className="text-8xl font-bold text-bico-gray-400">Roles</h2>
        <p className="mb-8 text-sm font-bold text-bico-gray-400">
          We are always looking forward to make new
          <br /> frens in building the future of web3.
        </p>
        <div className="flex w-[430px] flex-wrap gap-2.5">
          {roleCategories.map((roleCategory, index) => (
            <RoleCategory key={index} roleCategory={roleCategory} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[870px]">
        {roles.map((role, index) => (
          <Role key={index} role={role} />
        ))}
      </div>
    </article>
  );
}

export default OpenRoles;
