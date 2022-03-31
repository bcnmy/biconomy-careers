import useSWR from 'swr';
import { Key, useState } from 'react';

const fetcher = (url: string) => fetch(url).then(res => res.json());

function Department({
  name,
  selectedDepartment,
  handleDepartmentClick,
}: {
  name: string;
  selectedDepartment: string;
  handleDepartmentClick: (name: string) => void;
}) {
  return (
    <button
      className={`flex h-[2.125rem] items-center rounded-full ${
        name === selectedDepartment
          ? 'border-2 border-bico-orange bg-white dark:bg-transparent'
          : 'bg-[#D8511126] dark:bg-[#ffffff26]'
      }  px-6 text-lg font-bold text-bico-gray-400 dark:text-white`}
      onClick={() => handleDepartmentClick(name)}
    >
      {name}
    </button>
  );
}

function Job({
  city,
  shortlink,
  telecommuting,
  title,
}: {
  city: string;
  shortlink: string;
  telecommuting: boolean;
  title: string;
}) {
  const location = city
    ? city && telecommuting
      ? `${city}, Remote`
      : city
    : 'Remote';

  return (
    <a
      href={shortlink}
      target="_blank"
      rel="noopener noreferrer"
      className="group mb-14 cursor-pointer"
    >
      <div className="mb-2 flex items-center justify-between">
        <p className="text-2xl text-bico-gray-400 group-hover:text-bico-orange dark:text-white lg:text-[2.75rem]">
          {title}
        </p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-bico-gray-400 group-hover:text-bico-orange dark:text-white lg:h-10 lg:w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
      <div className="mb-6 h-px w-full bg-bico-gray-400 dark:bg-white"></div>
      <p className="flex items-center text-sm font-bold text-bico-gray-400 dark:text-white lg:text-2xl">
        {location}
        {telecommuting ? (
          <span className="ml-6 text-[10px] lg:text-[18px]">🌎</span>
        ) : null}
      </p>
    </a>
  );
}

function OpenRoles() {
  const { data: departmentsData, error: departmentsError } = useSWR(
    'https://apply.workable.com/api/v1/widget/accounts/biconomy-labs-pte-ltd/departments',
    fetcher,
  );
  const { data: jobsData, error: jobsError } = useSWR(
    'https://apply.workable.com/api/v1/widget/accounts/biconomy-labs-pte-ltd',
    fetcher,
  );
  const { jobs } = jobsData || {};
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  function handleDepartmentClick(name: string) {
    setSelectedDepartment(name);
  }

  return (
    <article
      id="open-roles"
      className="container mx-auto mb-20 flex flex-col justify-center px-8 lg:mb-40 lg:flex-row lg:items-start lg:justify-between lg:px-0"
    >
      <div>
        <h2 className="mb-6 text-4xl font-bold text-bico-gray-400 dark:text-white lg:text-8xl">
          Open <br className="hidden lg:block" />
          Roles
        </h2>
        <p className="mb-6 text-sm font-bold text-bico-gray-400 dark:text-white">
          We are always looking forward to make new
          <br /> frens in building the future of web3.
        </p>
        <div className="mb-12 flex w-full flex-wrap gap-2.5 lg:w-[360px]">
          {departmentsError ? (
            <span className="text-lg font-bold text-bico-gray-400 dark:text-white">
              Oops! something went wrong while getting the list of departments.
              Please try again later 🙁
            </span>
          ) : null}

          {!departmentsData ? (
            <span className="text-lg font-bold text-bico-gray-400 dark:text-white">
              Getting all available departments!
            </span>
          ) : null}

          {departmentsData && departmentsData.length > 0 ? (
            <>
              <Department
                name="All"
                selectedDepartment={selectedDepartment}
                handleDepartmentClick={handleDepartmentClick}
              />
              {departmentsData.map(
                (department: any, index: Key | null | undefined) => {
                  const { name } = department;

                  return (
                    <Department
                      key={index}
                      name={name}
                      selectedDepartment={selectedDepartment}
                      handleDepartmentClick={handleDepartmentClick}
                    />
                  );
                },
              )}
            </>
          ) : null}
        </div>
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-[870px]">
        {jobsError ? (
          <span className="text-2xl leading-normal text-bico-gray-400 dark:text-white lg:text-[2.75rem]">
            Oops! something went wrong while getting the list of roles. Please
            try later 🙁
          </span>
        ) : null}

        {!jobsData ? (
          <span className="text-2xl leading-normal text-bico-gray-400 dark:text-white lg:text-[2.75rem]">
            Getting all those awesome roles at Biconomy!
          </span>
        ) : null}

        {jobs && jobs.length === 0 ? (
          <span className="text-2xl leading-normal text-bico-gray-400 dark:text-white lg:text-[2.75rem]">
            There are no positions to apply for at the moment. Please try later.
            🙁
          </span>
        ) : null}

        {jobs
          ? jobs
              .filter((job: any) => {
                const { department } = job;

                return selectedDepartment === 'All'
                  ? true
                  : department === selectedDepartment;
              })
              .map((job: any, index: Key | null | undefined) => {
                const { city, shortlink, telecommuting, title } = job;

                return (
                  <Job
                    key={index}
                    city={city}
                    shortlink={shortlink}
                    telecommuting={telecommuting}
                    title={title}
                  />
                );
              })
          : null}
      </div>
    </article>
  );
}

export default OpenRoles;
