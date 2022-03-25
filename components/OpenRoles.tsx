import Image from 'next/image';
import rightArrowLight from '../assets/images/right-arrow-light.svg';
import rightArrowDark from '../assets/images/right-arrow-dark.svg';
import useSWR from 'swr';

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

const fetcher = (url: string) => fetch(url).then(res => res.json());

function RoleCategory({ roleCategory }: { roleCategory: string }) {
  return (
    <button className="flex h-[2.125rem] items-center rounded-full bg-[#D8511126] px-6 text-lg font-bold text-bico-gray-400 dark:bg-[#ffffff26] dark:text-white">
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
      <div className="mb-2 flex items-center justify-between">
        <p className="text-[2.75rem] text-bico-gray-400 dark:text-white">
          {role.title}
        </p>
        <div className="block dark:hidden">
          <Image src={rightArrowLight} alt="See description" />
        </div>
        <div className="hidden dark:block">
          <Image src={rightArrowDark} alt="See description" />
        </div>
      </div>
      <div className="mb-6 h-px w-full bg-bico-gray-400 dark:bg-white"></div>
      <p className="flex items-center text-2xl font-bold text-bico-gray-400 dark:text-white">
        {role.location}
        <span className="ml-6 text-[18px]">🌎</span>
      </p>
    </div>
  );
}

function OpenRoles() {
  const { data, error } = useSWR(
    'https://www.workable.com/api/accounts/biconomy-labs-pte-ltd?details=true',
    fetcher,
  );

  console.log(data);

  return (
    <article
      id="open-roles"
      className="my-[12.5rem] flex items-start justify-between"
    >
      <div>
        <h2 className="text-8xl font-bold text-bico-gray-400 dark:text-white">
          Open
        </h2>
        <h2 className="text-8xl font-bold text-bico-gray-400 dark:text-white">
          Roles
        </h2>
        <p className="mb-8 text-sm font-bold text-bico-gray-400 dark:text-white">
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
