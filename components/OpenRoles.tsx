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
        <p className="text-[2.75rem] text-bico-gray-400 group-hover:text-bico-orange dark:text-white">
          {title}
        </p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-bico-gray-400 group-hover:text-bico-orange dark:text-white"
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
      <p className="flex items-center text-2xl font-bold text-bico-gray-400 dark:text-white">
        {location}
        {telecommuting ? <span className="ml-6 text-[18px]">🌎</span> : null}
      </p>
    </a>
  );
}

function OpenRoles() {
  const { data: departmentsData, error: departmentsError } = useSWR(
    'https://www.workable.com/api/accounts/biconomy-labs-pte-ltd/departments',
    fetcher,
  );
  const { data: jobsData, error: jobsError } = useSWR(
    'https://www.workable.com/api/accounts/biconomy-labs-pte-ltd',
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
          {!departmentsData ? (
            <span className="text-hyphen-gray-400 text-lg font-bold dark:text-white">
              Getting all available departments!
            </span>
          ) : null}

          {departmentsError ? (
            <span className="text-hyphen-gray-400 text-lg font-bold dark:text-white">
              Oops! something went wrong while getting the list of departments.
              Please try again later 🙁
            </span>
          ) : null}

          {departmentsData && departmentsData.length === 0 ? (
            <span className="text-hyphen-gray-400 text-lg font-bold dark:text-white">
              No departments found. Please try again later. 🙁
            </span>
          ) : null}

          {departmentsData ? (
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

      <div className="grid grid-cols-[870px]">
        {!jobsData ? (
          <span className="text-hyphen-gray-400 text-[2.75rem] dark:text-white">
            Getting all those awesome roles at Biconomy!
          </span>
        ) : null}

        {jobsError ? (
          <span className="text-hyphen-gray-400 text-[2.75rem] dark:text-white">
            Oops! something went wrong while getting the list of roles. Please
            try again later 🙁
          </span>
        ) : null}

        {jobs && jobs.length === 0 ? (
          <span className="text-hyphen-gray-400 text-[2.75rem] dark:text-white">
            There are no positions to apply for at the moment. Please try again
            later. 🙁
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
